"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

interface User {
  role: 'student' | 'tutor' | 'admin'
  name: string
  email: string
  id: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<{ error?: string }>
  register: (name: string, email: string, password: string, role: User['role']) => Promise<{ error?: string }>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      try { setUser(JSON.parse(savedUser)) } catch { localStorage.removeItem('user') }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      const data = await res.json()
      if (!res.ok) return { error: data.error || 'Error al iniciar sesión' }
      setUser(data.user)
      localStorage.setItem('user', JSON.stringify(data.user))
      return {}
    } catch {
      return { error: 'Error de conexión' }
    }
  }

  const register = async (name: string, email: string, password: string, role: User['role']) => {
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, role })
      })
      const data = await res.json()
      if (!res.ok) return { error: data.error || 'Error al registrarse' }
      setUser(data.user)
      localStorage.setItem('user', JSON.stringify(data.user))
      return {}
    } catch {
      return { error: 'Error de conexión' }
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) throw new Error('useAuth must be used within an AuthProvider')
  return context
}