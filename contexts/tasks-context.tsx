"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

export interface Task {
  subscriptions: any
  id: string
  title: string
  description: string
  dueDate: string // YYYY-MM-DD
  dueTime: string // HH:MM
  priority: 'low' | 'medium' | 'high'
  completed: boolean
  createdAt: string
  updatedAt: string
  createdBy: string // Email del creador
  assignedTo: string[] // Emails de estudiantes asignados
  isGroupTask?: boolean
  submissions?: { [email: string]: boolean } // Estado de entregas por estudiante
}

interface TasksContextType {
  tasks: Task[]
  addTask: (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => void
  updateTask: (id: string, task: Partial<Task>) => void
  deleteTask: (id: string) => void
  toggleTaskCompletion: (id: string) => void
  getTasksByDate: (date: string) => Task[]
  getUpcomingTasks: (days?: number) => Task[]
  // Nuevas funciones para profesores
  addGroupTask: (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt' | 'completed' | 'submissions'>) => void
  getGroupTasks: (teacherEmail: string) => Task[]
  getStudentTasks: (studentEmail: string) => Task[]
  markTaskAsSubmitted: (taskId: string, studentEmail: string) => void
}

const TasksContext = createContext<TasksContextType | undefined>(undefined)

export function TasksProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    // Cargar tareas desde localStorage
    const savedTasks = localStorage.getItem('student_tasks')
    if (savedTasks) {
      try {
        setTasks(JSON.parse(savedTasks))
      } catch (error) {
        console.error('Error loading tasks:', error)
      }
    }
  }, [])

  useEffect(() => {
    // Guardar tareas en localStorage cuando cambien
    localStorage.setItem('student_tasks', JSON.stringify(tasks))
  }, [tasks])

  // Obtener usuarios registrados
  const getRegisteredUsers = () => {
    if (typeof window === 'undefined') return {}
    try {
      return JSON.parse(localStorage.getItem('registeredUsers') || '{}')
    } catch {
      return {}
    }
  }

  // Obtener estudiantes (usuarios con rol student)
  const getStudents = () => {
    const users = getRegisteredUsers()
    return Object.values(users).filter((user: any) => user.role === 'student')
  }

  const addTask = (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newTask: Task = {
      ...task,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    setTasks(prev => [...prev, newTask])
  }

  const updateTask = (id: string, task: Partial<Task>) => {
    setTasks(prev => prev.map(t => 
      t.id === id ? { ...t, ...task, updatedAt: new Date().toISOString() } : t
    ))
  }

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  const toggleTaskCompletion = (id: string) => {
    setTasks(prev => prev.map(t => 
      t.id === id ? { ...t, completed: !t.completed, updatedAt: new Date().toISOString() } : t
    ))
  }

  const getTasksByDate = (date: string) => {
    return tasks.filter(task => task.dueDate === date && !task.completed)
  }

  const getUpcomingTasks = (days: number = 7) => {
    const today = new Date().toISOString().split('T')[0]
    const futureDate = new Date()
    futureDate.setDate(futureDate.getDate() + days)
    const futureDateStr = futureDate.toISOString().split('T')[0]

    return tasks
      .filter(task => !task.completed && task.dueDate >= today && task.dueDate <= futureDateStr)
      .sort((a, b) => a.dueDate.localeCompare(b.dueDate) || a.dueTime.localeCompare(b.dueTime))
  }

  // NUEVAS FUNCIONES PARA PROFESORES

  const addGroupTask = (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt' | 'completed' | 'submissions'>) => {
    const newTask: Task = {
      ...task,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      completed: false,
      isGroupTask: true,
      submissions: task.assignedTo.reduce((acc, email) => {
        acc[email] = false
        return acc
      }, {} as { [email: string]: boolean })
    }
    setTasks(prev => [...prev, newTask])
  }

  const getGroupTasks = (teacherEmail: string) => {
    return tasks.filter(task => 
      task.createdBy === teacherEmail && task.isGroupTask
    ).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  }

  const getStudentTasks = (studentEmail: string) => {
    return tasks.filter(task => 
      task.isGroupTask && 
      task.assignedTo.includes(studentEmail) &&
      !task.completed
    ).sort((a, b) => a.dueDate.localeCompare(b.dueDate))
  }

  const markTaskAsSubmitted = (taskId: string, studentEmail: string) => {
    setTasks(prev => prev.map(task => {
      if (task.id === taskId && task.submissions) {
        return {
          ...task,
          submissions: {
            ...task.submissions,
            [studentEmail]: true
          },
          updatedAt: new Date().toISOString()
        }
      }
      return task
    }))
  }

  return (
    <TasksContext.Provider value={{
      tasks,
      addTask,
      updateTask,
      deleteTask,
      toggleTaskCompletion,
      getTasksByDate,
      getUpcomingTasks,
      addGroupTask,
      getGroupTasks,
      getStudentTasks,
      markTaskAsSubmitted
    }}>
      {children}
    </TasksContext.Provider>
  )
}

export function useTasks() {
  const context = useContext(TasksContext)
  if (context === undefined) {
    throw new Error('useTasks must be used within a TasksProvider')
  }
  return context
}