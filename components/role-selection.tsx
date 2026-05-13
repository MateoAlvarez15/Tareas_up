"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import LoginForm from "./login-form"

export default function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState<'student' | 'tutor' | 'admin' | null>(null)

  if (selectedRole) {
    return <LoginForm selectedRole={selectedRole} onBack={() => setSelectedRole(null)} />
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900 p-4">
      <div className="text-center max-w-4xl">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Sistema Académico</h1>
          <p className="text-xl text-blue-200">Selecciona tu rol para continuar</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tarjeta Estudiante */}
          <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all cursor-pointer">
            <div className="text-6xl mb-4">🎓</div>
            <h3 className="text-2xl font-bold text-white mb-4">Estudiante</h3>
            <p className="text-blue-200 mb-6">Accede a tus tareas, calendario y información académica</p>
            <Button 
              onClick={() => setSelectedRole('student')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Seleccionar
            </Button>
          </Card>

          {/* Tarjeta Tutor */}
          <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all cursor-pointer">
            <div className="text-6xl mb-4">👨‍🏫</div>
            <h3 className="text-2xl font-bold text-white mb-4">Tutor/Profesor</h3>
            <p className="text-blue-200 mb-6">Gestiona estudiantes, tareas grupales y reportes</p>
            <Button 
              onClick={() => setSelectedRole('tutor')}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white"
            >
              Seleccionar
            </Button>
          </Card>

          {/* Tarjeta Administrador */}
          <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all cursor-pointer">
            <div className="text-6xl mb-4">⚙️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Administrador</h3>
            <p className="text-blue-200 mb-6">Administra el sistema, usuarios y configuraciones</p>
            <Button 
              onClick={() => setSelectedRole('admin')}
              className="w-full bg-red-600 hover:bg-red-700 text-white"
            >
              Seleccionar
            </Button>
          </Card>
        </div>

        <div className="mt-12 text-blue-200">
          <p>Selecciona el rol correspondiente para acceder al sistema</p>
        </div>
      </div>
    </div>
  )
}