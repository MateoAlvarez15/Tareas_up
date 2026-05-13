"use client"

import { useState, useEffect, SetStateAction } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useTasks, Task } from "@/contexts/tasks-context"

interface TaskModalProps {
  isOpen: boolean
  onClose: () => void
  editingTask?: Task | null
}

// Componentes temporales con colores corregidos
const Input = ({ className, type, ...props }: any) => (
  <input
    type={type}
    className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 ${className}`}
    {...props}
  />
)

const Label = ({ className, ...props }: any) => (
  <label className={`text-sm font-medium text-gray-900 ${className}`} {...props} />
)

const Textarea = ({ className, ...props }: any) => (
  <textarea
    className={`flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 ${className}`}
    {...props}
  />
)

export default function TaskModal({ isOpen, onClose, editingTask }: TaskModalProps) {
  const { addTask, updateTask } = useTasks()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [dueTime, setDueTime] = useState("")
  const [priority, setPriority] = useState<Task['priority']>("medium")
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title)
      setDescription(editingTask.description)
      setDueDate(editingTask.dueDate)
      setDueTime(editingTask.dueTime)
      setPriority(editingTask.priority)
    } else {
      resetForm()
      const today = new Date().toISOString().split('T')[0]
      setDueDate(today)
      const nextHour = new Date()
      nextHour.setHours(nextHour.getHours() + 1, 0, 0, 0)
      setDueTime(nextHour.toTimeString().slice(0, 5))
    }
  }, [editingTask, isOpen])

  const resetForm = () => {
    setTitle("")
    setDescription("")
    setDueDate("")
    setDueTime("")
    setPriority("medium")
    setErrors({})
  }

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!title.trim()) {
      newErrors.title = "El título es obligatorio"
    } else if (title.length < 3) {
      newErrors.title = "El título debe tener al menos 3 caracteres"
    }

    if (!dueDate) {
      newErrors.dueDate = "La fecha es obligatoria"
    } else {
      const selectedDate = new Date(dueDate)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      
      if (selectedDate < today) {
        newErrors.dueDate = "La fecha no puede ser en el pasado"
      }
    }

    if (!dueTime) {
      newErrors.dueTime = "La hora es obligatoria"
    } else if (dueDate === new Date().toISOString().split('T')[0]) {
      const now = new Date()
      const selectedDateTime = new Date(`${dueDate}T${dueTime}`)
      if (selectedDateTime <= now) {
        newErrors.dueTime = "La hora debe ser futura para la fecha de hoy"
      }
    }

    if (!priority) {
      newErrors.priority = "La prioridad es obligatoria"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    const taskData = {
      title: title.trim(),
      description: description.trim(),
      dueDate,
      dueTime,
      priority,
      completed: false,
    }

    if (editingTask) {
      updateTask(editingTask.id, taskData)
    } else {
      addTask(taskData)
    }

    handleClose()
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  const getMinDate = () => {
    return new Date().toISOString().split('T')[0]
  }

  const getMinTime = () => {
    if (dueDate === new Date().toISOString().split('T')[0]) {
      const now = new Date()
      now.setMinutes(now.getMinutes() + 1)
      return now.toTimeString().slice(0, 5)
    }
    return "00:00"
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-gray-900">{editingTask ? "Editar Tarea" : "Nueva Tarea"}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Título */}
          <div>
            <Label htmlFor="title">Título *</Label>
            <Input
              id="title"
              value={title}
              onChange={(e: { target: { value: SetStateAction<string> } }) => setTitle(e.target.value)}
              placeholder="Ej: Proyecto de Matemáticas"
              className={errors.title ? "border-red-500" : ""}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>

          {/* Descripción */}
          <div>
            <Label htmlFor="description">Descripción</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e: { target: { value: SetStateAction<string> } }) => setDescription(e.target.value)}
              placeholder="Descripción detallada de la tarea..."
              rows={3}
            />
          </div>

          {/* Fecha y Hora */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="dueDate">Fecha Límite *</Label>
              <Input
                id="dueDate"
                type="date"
                value={dueDate}
                onChange={(e: { target: { value: SetStateAction<string> } }) => setDueDate(e.target.value)}
                min={getMinDate()}
                className={errors.dueDate ? "border-red-500" : ""}
              />
              {errors.dueDate && <p className="text-red-500 text-sm mt-1">{errors.dueDate}</p>}
            </div>

            <div>
              <Label htmlFor="dueTime">Hora Límite *</Label>
              <Input
                id="dueTime"
                type="time"
                value={dueTime}
                onChange={(e: { target: { value: SetStateAction<string> } }) => setDueTime(e.target.value)}
                min={getMinTime()}
                className={errors.dueTime ? "border-red-500" : ""}
              />
              {errors.dueTime && <p className="text-red-500 text-sm mt-1">{errors.dueTime}</p>}
            </div>
          </div>

          {/* Prioridad */}
          <div>
            <Label htmlFor="priority">Prioridad *</Label>
            <select
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value as Task['priority'])}
              className={`w-full p-2 border rounded-md text-gray-900 ${errors.priority ? "border-red-500" : "border-gray-300"}`}
            >
              <option value="low">Baja</option>
              <option value="medium">Media</option>
              <option value="high">Alta</option>
            </select>
            {errors.priority && <p className="text-red-500 text-sm mt-1">{errors.priority}</p>}
          </div>

          {/* Botones */}
          <div className="flex justify-end space-x-2 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={handleClose}
              className="border-gray-300 text-gray-700"
            >
              Cancelar
            </Button>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
              {editingTask ? "Guardar Cambios" : "Crear Tarea"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}