"use client"

import { useAuth } from '@/contexts/auth-context'
import RoleSelection from '@/components/role-selection'
import LoginForm from '@/components/login-form'
import StudentMockups from '@/components/mockups/student-mockups'
import AdminMockups from '@/components/mockups/admin-mockups'
import TutorMockups from '@/components/mockups/tutor-mockups'
import { Button } from '@/components/ui/button'

export default function Home() {
  const { user, login, logout, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white text-xl">Cargando...</div>
      </div>
    )
  }

  if (!user) {
    return <RoleSelection />
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header con información de usuario */}
      <header className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-white">
              Sistema Académico - {user.role === 'student' ? 'Estudiante' : user.role === 'tutor' ? 'Tutor' : 'Administrador'}
            </h1>
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
              {user.name}
            </span>
          </div>
          <Button 
            onClick={logout}
            variant="outline"
            className="text-white border-gray-600 hover:bg-gray-700"
          >
            Cerrar Sesión
          </Button>
        </div>
      </header>

      {/* Contenido según el rol */}
      <main className="p-4">
        {user.role === 'student' && <StudentMockups />}
        {user.role === 'tutor' && <TutorMockups />}
        {user.role === 'admin' && <AdminMockups />}
      </main>
    </div>
  )
}