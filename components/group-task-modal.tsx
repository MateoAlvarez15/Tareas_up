"use client"

import { useState, useEffect, SetStateAction } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useTasks } from "@/contexts/tasks-context"

interface GroupTaskModalProps {
  isOpen: boolean
  onClose: () => void
  teacherEmail: string
}

// Componentes temporales
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

export default function GroupTaskModal({ isOpen, onClose, teacherEmail }: GroupTaskModalProps) {
  const { addGroupTask } = useTasks()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [dueTime, setDueTime] = useState("")
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>("medium")
  const [selectedStudents, setSelectedStudents] = useState<string[]>([])
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  
  // Obtener estudiantes registrados
  const [students, setStudents] = useState<any[]>([])

  useEffect(() => {
    // Cargar estudiantes al abrir el modal
    if (isOpen) {
      const users = JSON.parse(localStorage.getItem('registeredUsers') || '{}')
      const studentList = Object.values(users).filter((user: any) => user.role === 'student')
      setStudents(studentList as any[])
      
      // Establecer valores por defecto
      const today = new Date().toISOString().split('T')[0]
      setDueDate(today)
      const nextHour = new Date()
      nextHour.setHours(nextHour.getHours() + 1, 0, 0, 0)
      setDueTime(nextHour.toTimeString().slice(0, 5))
    } else {
      resetForm()
    }
  }, [isOpen])

  const resetForm = () => {
    setTitle("")
    setDescription("")
    setDueDate("")
    setDueTime("")
    setPriority("medium")
    setSelectedStudents([])
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
    }

    if (selectedStudents.length === 0) {
      newErrors.students = "Debes seleccionar al menos un estudiante"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleStudentToggle = (studentEmail: string) => {
    setSelectedStudents(prev => 
      prev.includes(studentEmail)
        ? prev.filter(email => email !== studentEmail)
        : [...prev, studentEmail]
    )
  }

  const handleSelectAll = () => {
    if (selectedStudents.length === students.length) {
      setSelectedStudents([])
    } else {
      setSelectedStudents(students.map(student => student.email))
    }
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
      createdBy: teacherEmail,
      assignedTo: selectedStudents,
    }

    addGroupTask(taskData)
    
    // Mostrar confirmación
    alert(`¡Tarea enviada a ${selectedStudents.length} estudiante(s)!`)
    
    handleClose()
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  const getMinDate = () => {
    return new Date().toISOString().split('T')[0]
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] bg-white max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-gray-900">Nueva Tarea Grupal</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Título */}
          <div>
            <Label htmlFor="title">Título de la Tarea *</Label>
            <Input
              id="title"
              value={title}
              onChange={(e: { target: { value: SetStateAction<string> } }) => setTitle(e.target.value)}
              placeholder="Ej: Proyecto Final de Matemáticas"
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
              placeholder="Instrucciones detalladas de la tarea..."
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
              onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
              className="w-full p-2 border border-gray-300 rounded-md text-gray-900"
            >
              <option value="low">Baja</option>
              <option value="medium">Media</option>
              <option value="high">Alta</option>
            </select>
          </div>

          {/* Selección de Estudiantes */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <Label>Estudiantes *</Label>
              <button
                type="button"
                onClick={handleSelectAll}
                className="text-sm text-blue-600 hover:underline"
              >
                {selectedStudents.length === students.length ? 'Deseleccionar todos' : 'Seleccionar todos'}
              </button>
            </div>
            
            <div className="border border-gray-300 rounded-md p-3 max-h-40 overflow-y-auto">
              {students.length === 0 ? (
                <p className="text-gray-500 text-sm">No hay estudiantes registrados</p>
              ) : (
                students.map((student) => (
                  <label key={student.email} className="flex items-center space-x-2 py-1">
                    <input
                      type="checkbox"
                      checked={selectedStudents.includes(student.email)}
                      onChange={() => handleStudentToggle(student.email)}
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm text-gray-900">
                      {student.name} - {student.email}
                    </span>
                  </label>
                ))
              )}
            </div>
            {errors.students && <p className="text-red-500 text-sm mt-1">{errors.students}</p>}
          </div>

          {/* Resumen */}
          {selectedStudents.length > 0 && (
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="text-sm text-blue-800">
                Esta tarea será enviada a <strong>{selectedStudents.length}</strong> estudiante(s)
              </p>
            </div>
          )}

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
            <Button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white">
              Enviar Tarea a Estudiantes
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}