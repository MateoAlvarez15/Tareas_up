"use client"
import { useState } from "react"
import type React from "react"
import { useTasks } from "@/contexts/tasks-context"
import { useAuth } from "@/contexts/auth-context"
import GroupTaskModal from "@/components/group-task-modal"

type ScreenType = "dashboard" | "tasks" | "students" | "reports"

interface TutorMockupsProps {
  onBack?: () => void
}

export default function TutorMockups({ onBack }: TutorMockupsProps) {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>("dashboard")

  const screens: Record<ScreenType, React.ReactNode> = {
    dashboard: <DashboardScreen />,
    tasks: <TasksScreen />,
    students: <StudentsScreen />,
    reports: <ReportsScreen />,
  }

  return (
    <div className="space-y-6">
      {/* Screen Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { id: "dashboard" as ScreenType, label: "Dashboard", icon: "📊" },
          { id: "tasks" as ScreenType, label: "Tareas Grupales", icon: "📋" },
          { id: "students" as ScreenType, label: "Estudiantes", icon: "👥" },
          { id: "reports" as ScreenType, label: "Reportes", icon: "📈" },
        ].map((screen) => (
          <button
            key={screen.id}
            onClick={() => setCurrentScreen(screen.id)}
            className={`p-4 rounded-lg font-semibold transition-all text-center ${
              currentScreen === screen.id
                ? "bg-amber-600 text-white shadow-lg shadow-amber-500/50"
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
  const { getGroupTasks } = useTasks()
  
  const groupTasks = getGroupTasks(user?.email || '')
  const activeTasks = groupTasks.filter(task => !task.completed)
  const totalStudents = new Set(groupTasks.flatMap(task => task.assignedTo)).size

  // Calcular entregas pendientes
  const pendingSubmissions = groupTasks.reduce((total, task) => {
    if (!task.submissions) return total
    const submitted = Object.values(task.submissions).filter(Boolean).length
    const totalAssigned = task.assignedTo.length
    return total + (totalAssigned - submitted)
  }, 0)

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Dashboard - Tutor</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-amber-600 to-amber-800 p-6 rounded-lg text-white">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-amber-200">Tareas Activas</p>
              <p className="text-4xl font-bold mt-2">{activeTasks.length}</p>
            </div>
            <div className="text-4xl">📚</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-600 to-orange-800 p-6 rounded-lg text-white">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-orange-200">Estudiantes Activos</p>
              <p className="text-4xl font-bold mt-2">{totalStudents}</p>
            </div>
            <div className="text-4xl">👥</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-600 to-yellow-800 p-6 rounded-lg text-white">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-yellow-200">Entregas Pendientes</p>
              <p className="text-4xl font-bold mt-2">{pendingSubmissions}</p>
            </div>
            <div className="text-4xl">📤</div>
          </div>
        </div>
      </div>

      {/* Tareas Recientes */}
      <div className="bg-slate-800 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4">Tareas Recientes</h3>
        <div className="space-y-3">
          {groupTasks.slice(0, 5).map((task) => {
            const submitted = task.submissions ? Object.values(task.submissions).filter(Boolean).length : 0
            const total = task.assignedTo.length
            
            return (
              <div key={task.id} className="p-4 bg-slate-700 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-white font-semibold">{task.title}</h4>
                  <span className={`px-2 py-1 rounded text-xs ${
                    task.priority === 'high' ? 'bg-red-500' : 
                    task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                  }`}>
                    {task.priority === 'high' ? 'Alta' : task.priority === 'medium' ? 'Media' : 'Baja'}
                  </span>
                </div>
                <p className="text-slate-400 text-sm mb-2">{task.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-300">
                    Vence: {new Date(task.dueDate).toLocaleDateString()} a las {task.dueTime}
                  </span>
                  <span className="text-amber-400">
                    {submitted}/{total} entregados
                  </span>
                </div>
              </div>
            )
          })}
          {groupTasks.length === 0 && (
            <p className="text-slate-400 text-center py-4">No hay tareas grupales creadas</p>
          )}
        </div>
      </div>
    </div>
  )
}

function TasksScreen() {
  const { user } = useAuth()
  const { getGroupTasks, deleteTask } = useTasks()
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const groupTasks = getGroupTasks(user?.email || '')

  const getSubmissionStats = (task: any) => {
    if (!task.submissions) return { submitted: 0, total: task.assignedTo.length }
    const submitted = Object.values(task.submissions).filter(Boolean).length
    return { submitted, total: task.assignedTo.length }
  }

  const handleDeleteTask = (taskId: string) => {
    if (confirm("¿Estás seguro de que quieres eliminar esta tarea? Esto la eliminará para todos los estudiantes.")) {
      deleteTask(taskId)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Tareas Grupales</h2>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 flex items-center gap-2"
        >
          ➕ Nueva Tarea Grupal
        </button>
      </div>

      <GroupTaskModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        teacherEmail={user?.email || ''}
      />

      <div className="space-y-4">
        {groupTasks.map((task) => {
          const stats = getSubmissionStats(task)
          const progress = (stats.submitted / stats.total) * 100
          
          return (
            <div key={task.id} className="bg-slate-800 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">{task.title}</h3>
                  <p className="text-slate-400 mb-3">{task.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-slate-300">
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
                  onClick={() => handleDeleteTask(task.id)}
                  className="text-red-400 hover:text-red-300 text-sm font-semibold ml-4"
                >
                  Eliminar
                </button>
              </div>

              {/* Barra de progreso */}
              <div className="mb-2">
                <div className="flex justify-between text-sm text-slate-300 mb-1">
                  <span>Progreso de entregas</span>
                  <span>{stats.submitted}/{stats.total} estudiantes</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Lista de estudiantes */}
              <div className="mt-4">
                <h4 className="text-white font-semibold mb-2">Estudiantes asignados:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {task.assignedTo.map((email) => {
                    const isSubmitted = task.submissions?.[email] || false
                    return (
                      <div key={email} className="flex items-center justify-between p-2 bg-slate-700 rounded">
                        <span className="text-slate-300 text-sm">{email}</span>
                        <span className={`text-xs px-2 py-1 rounded ${
                          isSubmitted ? 'bg-green-500 text-white' : 'bg-slate-600 text-slate-300'
                        }`}>
                          {isSubmitted ? 'Entregado' : 'Pendiente'}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
        
        {groupTasks.length === 0 && (
          <div className="bg-slate-800 rounded-lg p-8 text-center">
            <p className="text-slate-400 text-lg mb-4">No hay tareas grupales creadas</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700"
            >
              Crear tu primera tarea grupal
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function StudentsScreen() {
  // Obtener estudiantes registrados
  const getStudents = () => {
    if (typeof window === 'undefined') return []
    try {
      const users = JSON.parse(localStorage.getItem('registeredUsers') || '{}')
      return Object.values(users).filter((user: any) => user.role === 'student')
    } catch {
      return []
    }
  }

  const students = getStudents()

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Mis Estudiantes</h2>

      <div className="bg-slate-800 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700 bg-slate-700">
                <th className="px-4 py-3 text-left text-slate-300 font-semibold">Estudiante</th>
                <th className="px-4 py-3 text-left text-slate-300 font-semibold">Email</th>
                <th className="px-4 py-3 text-center text-slate-300 font-semibold">ID</th>
                <th className="px-4 py-3 text-center text-slate-300 font-semibold">Estado</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student: any, i) => (
                <tr key={i} className="border-b border-slate-700 hover:bg-slate-700/50">
                  <td className="px-4 py-3 text-white font-semibold">{student.name}</td>
                  <td className="px-4 py-3 text-slate-400">{student.email}</td>
                  <td className="px-4 py-3 text-center text-slate-300">{student.id}</td>
                  <td className="px-4 py-3 text-center">
                    <span className="px-2 py-1 rounded text-xs font-semibold bg-green-500/20 text-green-300">
                      Activo
                    </span>
                  </td>
                </tr>
              ))}
              {students.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-4 py-8 text-center text-slate-400">
                    No hay estudiantes registrados
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function ReportsScreen() {
  const { user } = useAuth()
  const { getGroupTasks } = useTasks()
  
  const groupTasks = getGroupTasks(user?.email || '')
  
  // Calcular estadísticas
  const totalTasks = groupTasks.length
  const completedTasks = groupTasks.filter(task => task.completed).length
  const activeTasks = totalTasks - completedTasks
  
  const totalSubmissions = groupTasks.reduce((total, task) => {
    if (!task.submissions) return total
    return total + Object.values(task.submissions).filter(Boolean).length
  }, 0)
  
  const totalPossibleSubmissions = groupTasks.reduce((total, task) => {
    return total + task.assignedTo.length
  }, 0)
  
  const submissionRate = totalPossibleSubmissions > 0 
    ? Math.round((totalSubmissions / totalPossibleSubmissions) * 100) 
    : 0

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Reportes de Seguimiento</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-800 rounded-lg p-6">
          <h3 className="text-lg font-bold text-white mb-4">Estadísticas Generales</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-300">Tareas Totales</span>
                <span className="text-white font-semibold">{totalTasks}</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-300">Tareas Activas</span>
                <span className="text-white font-semibold">{activeTasks}</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-300">Tasa de Entrega</span>
                <span className="text-white font-semibold">{submissionRate}%</span>
              </div>
              <div className="w-full h-2 bg-slate-700 rounded-full">
                <div 
                  className="h-full bg-green-500 rounded-full" 
                  style={{ width: `${submissionRate}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 rounded-lg p-6">
          <h3 className="text-lg font-bold text-white mb-4">Resumen de Entregas</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Entregas realizadas</span>
              <span className="text-green-400 font-semibold">{totalSubmissions}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Entregas pendientes</span>
              <span className="text-amber-400 font-semibold">{totalPossibleSubmissions - totalSubmissions}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Total asignaciones</span>
              <span className="text-white font-semibold">{totalPossibleSubmissions}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}