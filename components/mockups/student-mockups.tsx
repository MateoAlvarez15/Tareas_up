"use client"
import { useState } from "react"
import type React from "react"
import { useTasks } from "@/contexts/tasks-context"
import { useAuth } from "@/contexts/auth-context"
import TaskModal from "@/components/task-modal"

type ScreenType = "dashboard" | "tasks" | "calendar" | "academic"

interface StudentMockupsProps {
  onBack?: () => void
}

export default function StudentMockups({ onBack }: StudentMockupsProps) {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>("dashboard")

  const screens: Record<ScreenType, React.ReactNode> = {
    dashboard: <DashboardScreen />,
    tasks: <TasksScreen />,
    calendar: <CalendarScreen />,
    academic: <AcademicScreen />,
  }

  return (
    <div className="space-y-6">
      {/* Screen Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { id: "dashboard" as ScreenType, label: "Dashboard", icon: "📊" },
          { id: "tasks" as ScreenType, label: "Mis Tareas", icon: "✓" },
          { id: "calendar" as ScreenType, label: "Calendario", icon: "📅" },
          { id: "academic" as ScreenType, label: "Académico", icon: "🎓" },
        ].map((screen) => (
          <button
            key={screen.id}
            onClick={() => setCurrentScreen(screen.id)}
            className={`p-4 rounded-lg font-semibold transition-all text-center ${
              currentScreen === screen.id
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            <div className="text-2xl mb-2">{screen.icon}</div>
            {screen.label}
          </button>
        ))}
      </div>

      {/* Screen Content */}
      <div className="mt-8">{screens[currentScreen]}</div>
    </div>
  )
}

function DashboardScreen() {
  const { user } = useAuth()
  const { tasks, toggleTaskCompletion, getUpcomingTasks, getStudentTasks, markTaskAsSubmitted } = useTasks()
  
  const pendingTasks = tasks.filter(task => !task.completed && !task.isGroupTask)
  const upcomingTasks = getUpcomingTasks(3)
  const groupTasks = getStudentTasks(user?.email || '')
  const completedThisWeek = tasks.filter(task => {
    if (!task.completed) return false
    const completedDate = new Date(task.updatedAt)
    const weekAgo = new Date()
    weekAgo.setDate(weekAgo.getDate() - 7)
    return completedDate >= weekAgo
  })

  const markAsSubmitted = (taskId: string) => {
    if (user?.email) {
      markTaskAsSubmitted(taskId, user.email)
      alert('¡Tarea marcada como entregada!')
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Dashboard - Estudiante</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Stats Cards */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-lg text-white">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-blue-200">Tareas Personales</p>
              <p className="text-4xl font-bold mt-2">{pendingTasks.length}</p>
            </div>
            <div className="text-4xl">✓</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-600 to-cyan-800 p-6 rounded-lg text-white">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-cyan-200">Próximas 72 horas</p>
              <p className="text-4xl font-bold mt-2">{upcomingTasks.length}</p>
            </div>
            <div className="text-4xl">⏰</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-lg text-white">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-purple-200">Completadas esta semana</p>
              <p className="text-4xl font-bold mt-2">{completedThisWeek.length}</p>
            </div>
            <div className="text-4xl">📅</div>
          </div>
        </div>
      </div>

      {/* Tareas del Profesor */}
      <div className="bg-slate-800 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">Tareas del Profesor</h3>
          <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm">
            {groupTasks.length} asignadas
          </span>
        </div>
        <div className="space-y-3">
          {groupTasks.slice(0, 5).map((task) => (
            <div key={task.id} className="flex items-center gap-3 p-4 bg-slate-700 rounded-lg border-l-4 border-amber-500">
              <div className="text-amber-500 text-xl flex-shrink-0">📚</div>
              <div className="flex-1">
                <p className="text-white font-medium">{task.title}</p>
                <p className="text-slate-400 text-sm mb-1">{task.description}</p>
                <div className="flex items-center gap-4 text-xs text-slate-300">
                  <span>Del profesor: {task.createdBy}</span>
                  <span>•</span>
                  <span>Vence: {new Date(task.dueDate).toLocaleDateString()} a las {task.dueTime}</span>
                  <span className={`px-2 py-1 rounded ${
                    task.priority === 'high' ? 'bg-red-500' : 
                    task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                  }`}>
                    {task.priority === 'high' ? 'Alta' : task.priority === 'medium' ? 'Media' : 'Baja'}
                  </span>
                </div>
              </div>
              <button 
                onClick={() => markAsSubmitted(task.id)}
                className={`px-4 py-2 rounded text-sm font-semibold transition-all ${
                  task.submissions?.[user?.email || ''] 
                    ? 'bg-green-600 text-white cursor-default' 
                    : 'bg-amber-600 text-white hover:bg-amber-700'
                }`}
                disabled={task.submissions?.[user?.email || '']}
              >
                {task.submissions?.[user?.email || ''] ? '✅ Entregado' : '📤 Entregar'}
              </button>
            </div>
          ))}
          {groupTasks.length === 0 && (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">📚</div>
              <p className="text-slate-400 text-lg">No hay tareas del profesor</p>
              <p className="text-slate-500 text-sm mt-2">Las tareas que asignen tus profesores aparecerán aquí</p>
            </div>
          )}
        </div>
      </div>

      {/* Tareas Próximas Personales */}
      <div className="bg-slate-800 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4">Mis Tareas Próximas</h3>
        <div className="space-y-3">
          {upcomingTasks.slice(0, 5).map((task) => (
            <div key={task.id} className="flex items-center gap-3 p-3 bg-slate-700 rounded-lg">
              <div className={`w-3 h-3 rounded-full ${
                task.priority === 'high' ? 'bg-red-500' : 
                task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
              }`} />
              <div className="flex-1">
                <p className="text-white font-medium">{task.title}</p>
                <p className="text-slate-400 text-sm">
                  {new Date(task.dueDate).toLocaleDateString()} a las {task.dueTime}
                </p>
              </div>
              <button 
                onClick={() => toggleTaskCompletion(task.id)}
                className="text-xl cursor-pointer hover:scale-110 transition-transform bg-blue-600 hover:bg-blue-700 w-8 h-8 rounded-full flex items-center justify-center"
              >
                ✓
              </button>
            </div>
          ))}
          {upcomingTasks.length === 0 && (
            <p className="text-slate-400 text-center py-4">No hay tareas próximas</p>
          )}
        </div>
      </div>
    </div>
  )
}

function TasksScreen() {
  const { tasks, deleteTask, toggleTaskCompletion, getStudentTasks, markTaskAsSubmitted } = useTasks()
  const { user } = useAuth()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingTask, setEditingTask] = useState<any>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState<'personal' | 'profesor'>('personal')

  const personalTasks = tasks.filter(task => !task.isGroupTask)
  const groupTasks = getStudentTasks(user?.email || '')

  const filteredPersonalTasks = personalTasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredGroupTasks = groupTasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleEdit = (task: any) => {
    setEditingTask(task)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditingTask(null)
  }

  const markAsSubmitted = (taskId: string) => {
    if (user?.email) {
      markTaskAsSubmitted(taskId, user.email)
      alert('¡Tarea marcada como entregada!')
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Mis Tareas</h2>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          ➕ Nueva Tarea Personal
        </button>
      </div>

      <TaskModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        editingTask={editingTask}
      />

      {/* Pestañas */}
      <div className="flex border-b border-slate-700">
        <button
          onClick={() => setActiveTab('personal')}
          className={`px-4 py-2 font-semibold border-b-2 transition-all ${
            activeTab === 'personal'
              ? 'border-blue-500 text-blue-400'
              : 'border-transparent text-slate-400 hover:text-slate-300'
          }`}
        >
          Tareas Personales ({personalTasks.length})
        </button>
        <button
          onClick={() => setActiveTab('profesor')}
          className={`px-4 py-2 font-semibold border-b-2 transition-all ${
            activeTab === 'profesor'
              ? 'border-amber-500 text-amber-400'
              : 'border-transparent text-slate-400 hover:text-slate-300'
          }`}
        >
          Tareas del Profesor ({groupTasks.length})
        </button>
      </div>

      {/* Buscador */}
      <div className="bg-slate-800 rounded-lg p-6">
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder={`Buscar tareas ${activeTab === 'personal' ? 'personales' : 'del profesor'}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-slate-700 text-white px-4 py-2 rounded-lg placeholder-slate-400 border border-slate-600 focus:border-blue-500 outline-none"
          />
          <button className="bg-slate-700 text-white p-2 rounded-lg hover:bg-slate-600">🔍</button>
        </div>

        {/* Lista de Tareas */}
        <div className="space-y-3">
          {activeTab === 'personal' ? (
            <>
              {filteredPersonalTasks.map((task) => (
                <div
                  key={task.id}
                  className={`p-4 rounded-lg border ${
                    task.completed ? "bg-slate-700 border-slate-600 opacity-60" : "bg-slate-700 border-slate-600"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      checked={task.completed} 
                      onChange={() => toggleTaskCompletion(task.id)}
                      className="mt-1 w-5 h-5 cursor-pointer" 
                    />
                    <div className="flex-1">
                      <p className={`font-semibold ${task.completed ? "line-through text-slate-400" : "text-white"}`}>
                        {task.title}
                      </p>
                      <p className="text-slate-400 text-sm">{task.description}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-slate-400 text-sm">
                          {new Date(task.dueDate).toLocaleDateString()} a las {task.dueTime}
                        </span>
                        <span
                          className={`text-sm font-medium ${
                            task.priority === "high"
                              ? "text-red-400"
                              : task.priority === "medium"
                              ? "text-yellow-400"
                              : "text-green-400"
                          }`}
                        >
                          {task.priority === "high" ? "Alta" : task.priority === "medium" ? "Media" : "Baja"}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEdit(task)}
                        className="text-blue-400 hover:text-blue-300 text-sm font-semibold"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => {
                          if (confirm("¿Estás seguro de que quieres eliminar esta tarea?")) {
                            deleteTask(task.id)
                          }
                        }}
                        className="text-red-400 hover:text-red-300 text-sm font-semibold"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {filteredPersonalTasks.length === 0 && (
                <p className="text-slate-400 text-center py-4">
                  {searchTerm ? "No se encontraron tareas personales" : "No hay tareas personales registradas"}
                </p>
              )}
            </>
          ) : (
            <>
              {filteredGroupTasks.map((task) => (
                <div
                  key={task.id}
                  className="p-4 rounded-lg border border-slate-600 bg-slate-700"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-amber-500 text-xl mt-1">📚</div>
                    <div className="flex-1">
                      <p className="font-semibold text-white">
                        {task.title}
                      </p>
                      <p className="text-slate-400 text-sm">{task.description}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-slate-400 text-sm">
                          Del profesor: {task.createdBy}
                        </span>
                        <span className="text-slate-400 text-sm">
                          • Vence: {new Date(task.dueDate).toLocaleDateString()} a las {task.dueTime}
                        </span>
                        <span
                          className={`text-sm font-medium ${
                            task.priority === "high"
                              ? "text-red-400"
                              : task.priority === "medium"
                              ? "text-yellow-400"
                              : "text-green-400"
                          }`}
                        >
                          {task.priority === "high" ? "Alta" : task.priority === "medium" ? "Media" : "Baja"}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => markAsSubmitted(task.id)}
                      className={`px-4 py-2 rounded text-sm font-semibold ${
                        task.submissions?.[user?.email || ''] 
                          ? 'bg-green-600 text-white cursor-default' 
                          : 'bg-amber-600 text-white hover:bg-amber-700'
                      }`}
                      disabled={task.submissions?.[user?.email || '']}
                    >
                      {task.subscriptions?.[user?.email || ''] ? '✅ Entregado' : '📤 Entregar'}
                    </button>
                  </div>
                </div>
              ))}
              {filteredGroupTasks.length === 0 && (
                <p className="text-slate-400 text-center py-4">
                  {searchTerm ? "No se encontraron tareas del profesor" : "No hay tareas del profesor asignadas"}
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

function CalendarScreen() {
  const { getTasksByDate, getStudentTasks } = useTasks()
  const { user } = useAuth()
  const [currentWeek, setCurrentWeek] = useState(new Date())

  const getWeekDays = () => {
    const startOfWeek = new Date(currentWeek)
    startOfWeek.setDate(currentWeek.getDate() - currentWeek.getDay() + 1) // Lunes como primer día
    return Array.from({ length: 7 }).map((_, i) => {
      const date = new Date(startOfWeek)
      date.setDate(startOfWeek.getDate() + i)
      return date
    })
  }

  const weekDays = getWeekDays()
  const groupTasks = getStudentTasks(user?.email || '')

  const formatDateKey = (date: Date) => {
    return date.toISOString().split('T')[0]
  }

  const navigateWeek = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentWeek)
    newDate.setDate(currentWeek.getDate() + (direction === 'next' ? 7 : -7))
    setCurrentWeek(newDate)
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500/30 text-red-300'
      case 'medium': return 'bg-yellow-500/30 text-yellow-300'
      case 'low': return 'bg-green-500/30 text-green-300'
      default: return 'bg-blue-500/30 text-blue-300'
    }
  }

  const getTaskTypeColor = (isGroupTask: boolean) => {
    return isGroupTask ? 'bg-amber-500/30 text-amber-300 border-amber-500' : 'bg-blue-500/30 text-blue-300 border-blue-500'
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Calendario - Vista Semanal</h2>

      <div className="bg-slate-800 rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-white">
            Semana del {weekDays[0].toLocaleDateString()} al {weekDays[6].toLocaleDateString()}
          </h3>
          <div className="flex gap-2">
            <button 
              onClick={() => navigateWeek('prev')}
              className="bg-slate-700 text-white px-3 py-1 rounded hover:bg-slate-600"
            >
              ←
            </button>
            <button 
              onClick={() => navigateWeek('next')}
              className="bg-slate-700 text-white px-3 py-1 rounded hover:bg-slate-600"
            >
              →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {weekDays.map((day, i) => {
            const dayTasks = getTasksByDate(formatDateKey(day))
            const dayGroupTasks = groupTasks.filter(task => task.dueDate === formatDateKey(day))
            const isToday = formatDateKey(day) === new Date().toISOString().split('T')[0]
            
            return (
              <div key={i} className="text-center">
                <p className="text-slate-400 text-sm font-semibold mb-2">
                  {day.toLocaleDateString('es-ES', { weekday: 'short' })}
                </p>
                <p className={`text-sm mb-2 ${isToday ? 'bg-blue-600 text-white rounded-full w-6 h-6 mx-auto' : 'text-slate-300'}`}>
                  {day.getDate()}
                </p>
                <div className="bg-slate-700 p-3 rounded-lg min-h-32 space-y-2">
                  {/* Tareas personales */}
                  {dayTasks.map(task => (
                    <div 
                      key={task.id} 
                      className={`text-xs p-1 rounded cursor-pointer hover:opacity-80 border-l-2 ${getPriorityColor(task.priority)}`}
                      title={`Personal: ${task.title} - ${task.dueTime}`}
                    >
                      <div className="font-medium truncate">📝 {task.title}</div>
                      <div className="text-xs opacity-80">{task.dueTime}</div>
                    </div>
                  ))}
                  
                  {/* Tareas del profesor */}
                  {dayGroupTasks.map(task => (
                    <div 
                      key={task.id} 
                      className={`text-xs p-1 rounded cursor-pointer hover:opacity-80 border-l-2 ${getTaskTypeColor(true)}`}
                      title={`Profesor: ${task.title} - ${task.dueTime}`}
                    >
                      <div className="font-medium truncate">📚 {task.title}</div>
                      <div className="text-xs opacity-80">{task.dueTime}</div>
                    </div>
                  ))}
                  
                  {dayTasks.length === 0 && dayGroupTasks.length === 0 && (
                    <p className="text-slate-500 text-xs">Sin tareas</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Leyenda */}
      <div className="bg-slate-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-white mb-3">Leyenda</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500/30 border-l-2 border-blue-500"></div>
            <span className="text-slate-300">Tareas personales</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-amber-500/30 border-l-2 border-amber-500"></div>
            <span className="text-slate-300">Tareas del profesor</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500/30"></div>
            <span className="text-slate-300">Prioridad alta</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-500/30"></div>
            <span className="text-slate-300">Prioridad media</span>
          </div>
        </div>
      </div>

      {/* Agenda Detallada */}
      <div className="bg-slate-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Agenda Detallada</h3>
        <div className="space-y-3">
          {weekDays.flatMap(day => {
            const dayTasks = getTasksByDate(formatDateKey(day))
            const dayGroupTasks = groupTasks.filter(task => task.dueDate === formatDateKey(day))
            
            return [
              ...dayTasks.map(task => ({
                ...task,
                date: day,
                dateString: day.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' }),
                type: 'personal' as const
              })),
              ...dayGroupTasks.map(task => ({
                ...task,
                date: day,
                dateString: day.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' }),
                type: 'group' as const
              }))
            ]
          })
          .sort((a, b) => a.dueTime.localeCompare(b.dueTime))
          .map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-3 bg-slate-700 rounded-lg">
              <div className="font-mono text-sm text-slate-400 w-12">{item.dueTime}</div>
              <div className={`w-1 h-8 rounded-full ${
                item.type === 'group' ? 'bg-amber-500' : getPriorityColor(item.priority).split(' ')[0]
              }`} />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-white font-medium">{item.title}</span>
                  {item.type === 'group' && (
                    <span className="bg-amber-500 text-white px-2 py-1 rounded text-xs">Profesor</span>
                  )}
                </div>
                <p className="text-slate-400 text-sm">{item.dateString}</p>
                {item.type === 'group' && (
                  <p className="text-slate-500 text-xs">Asignado por: {item.createdBy}</p>
                )}
              </div>
              <span className={`px-2 py-1 rounded text-xs font-semibold ${
                item.type === 'group' 
                  ? 'bg-amber-500/30 text-amber-300'
                  : getPriorityColor(item.priority)
              }`}>
                {item.type === 'group' ? 'Tarea Grupal' : 
                 item.priority === 'high' ? 'Alta' : 
                 item.priority === 'medium' ? 'Media' : 'Baja'}
              </span>
            </div>
          ))}
          {weekDays.flatMap(day => [
            ...getTasksByDate(formatDateKey(day)),
            ...groupTasks.filter(task => task.dueDate === formatDateKey(day))
          ]).length === 0 && (
            <p className="text-slate-400 text-center py-4">No hay tareas programadas para esta semana</p>
          )}
        </div>
      </div>
    </div>
  )
}

function AcademicScreen() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Información Académica</h2>

      {/* Profile Card */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-lg text-white">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center text-2xl">👤</div>
          <div>
            <h3 className="text-xl font-bold">Juan Pérez García</h3>
            <p className="text-blue-200">ID: 2024-001234</p>
            <p className="text-blue-200">Ingeniería de Sistemas - Semestre 5</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 text-sm">GPA Semestral</p>
          <p className="text-3xl font-bold text-white mt-2">3.85</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 text-sm">Créditos Completados</p>
          <p className="text-3xl font-bold text-white mt-2">95</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 text-sm">Cursos Activos</p>
          <p className="text-3xl font-bold text-white mt-2">6</p>
        </div>
      </div>

      {/* Current Courses */}
      <div className="bg-slate-800 rounded-lg p-6">
        <h3 className="text-lg font-bold text-white mb-4">Cursos Actuales</h3>
        <div className="space-y-3">
          {[
            { name: "Cálculo Integral", grade: "4.2", status: "En curso" },
            { name: "Física II", grade: "3.9", status: "En curso" },
            { name: "Programación Avanzada", grade: "4.5", status: "En curso" },
            { name: "Historia Contemporánea", grade: "3.8", status: "En curso" },
          ].map((course, i) => (
            <div key={i} className="flex justify-between items-center p-3 bg-slate-700 rounded-lg">
              <div>
                <p className="text-white font-semibold">{course.name}</p>
                <p className="text-slate-400 text-sm">{course.status}</p>
              </div>
              <div className="text-right">
                <p className="text-green-400 font-bold">{course.grade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Documents */}
      <div className="bg-slate-800 rounded-lg p-6">
        <h3 className="text-lg font-bold text-white mb-4">Documentos</h3>
        <div className="grid grid-cols-2 gap-3">
          {["Certificado Matrícula", "Histórico Académico", "Constancia de Notas", "Diploma (pendiente)"].map(
            (doc, i) => (
              <button key={i} className="p-3 bg-slate-700 rounded-lg hover:bg-slate-600 text-white text-left">
                <p className="font-semibold text-sm">{doc}</p>
                <p className="text-slate-400 text-xs mt-1">📄 Descargar</p>
              </button>
            ),
          )}
        </div>
      </div>
    </div>
  )
}