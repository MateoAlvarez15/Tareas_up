"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, User, BookOpen, Calendar, FileText, Lock } from "lucide-react"

interface UseCase {
  id: string
  title: string
  description: string
  action: string
  benefit: string
  icon: React.ReactNode
  step: number
  color: string
}

const useCases: UseCase[] = [
  {
    id: "uc-01",
    title: "Registrarse e iniciar sesión",
    description: "Acceso seguro al sistema con credenciales personales",
    action: "Registrarse e iniciar sesión",
    benefit: "Acceso seguro a información personal",
    icon: <Lock className="w-6 h-6" />,
    step: 1,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "uc-02",
    title: "Agregar tareas con fecha y hora límite",
    description: "Gestión de tareas pendientes con plazos",
    action: "Agregar tareas con fecha y hora límite",
    benefit: "Controlar tareas pendientes",
    icon: <FileText className="w-6 h-6" />,
    step: 2,
    color: "from-cyan-500 to-cyan-600",
  },
  {
    id: "uc-03",
    title: "Ver calendario semanal con actividades",
    description: "Visualización de horario y actividades planificadas",
    action: "Ver un calendario semanal con actividades",
    benefit: "Planificar tiempos de estudio",
    icon: <Calendar className="w-6 h-6" />,
    step: 3,
    color: "from-teal-500 to-teal-600",
  },
  {
    id: "uc-04",
    title: "Consultar información académica",
    description: "Acceso a calificaciones, horarios y datos personales",
    action: "Consultar información académica personalizada",
    benefit: "Visualizar datos académicos consolidados",
    icon: <BookOpen className="w-6 h-6" />,
    step: 4,
    color: "from-blue-400 to-blue-500",
  },
]

export default function UseCaseDiagramStudent() {
  const [selectedUseCase, setSelectedUseCase] = useState<string | null>("uc-01")
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <User className="w-6 h-6 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Diagrama de Casos de Uso</h1>
        </div>
        <p className="text-lg text-gray-600">
          Rol: <span className="font-semibold text-blue-600">Estudiante</span>
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Timeline/Flow */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {useCases.map((useCase, index) => (
              <div
                key={useCase.id}
                className="relative"
                onMouseEnter={() => setHoveredStep(useCase.step)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Connector Line */}
                {index < useCases.length - 1 && (
                  <div
                    className="absolute left-8 top-20 w-1 h-12 bg-gradient-to-b from-gray-300 to-gray-200 transition-all duration-300"
                    style={{
                      opacity: hoveredStep === useCase.step || hoveredStep === useCase.step + 1 ? 1 : 0.3,
                    }}
                  />
                )}

                {/* Step Card */}
                <button
                  onClick={() => setSelectedUseCase(useCase.id)}
                  className={`w-full text-left transition-all duration-300 transform ${
                    selectedUseCase === useCase.id ? "scale-105" : "hover:scale-102"
                  }`}
                >
                  <Card
                    className={`p-6 border-l-4 backdrop-blur-sm transition-all duration-300 ${
                      selectedUseCase === useCase.id
                        ? `border-l-blue-600 bg-white shadow-lg`
                        : "border-l-gray-200 bg-gray-50 hover:bg-white hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Step Number Circle */}
                      <div
                        className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-300 ${
                          selectedUseCase === useCase.id
                            ? `bg-gradient-to-br ${useCase.color} shadow-lg`
                            : "bg-gray-300"
                        }`}
                      >
                        {useCase.step}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{useCase.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{useCase.description}</p>

                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-gray-500 uppercase">Ver detalles</span>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Details Panel */}
        <div className="lg:col-span-1">
          {selectedUseCase && (
            <div className="sticky top-8">
              {useCases.find((uc) => uc.id === selectedUseCase) && (
                <Card className="bg-white shadow-xl border-0 overflow-hidden">
                  {/* Header with gradient */}
                  <div
                    className={`bg-gradient-to-r ${
                      useCases.find((uc) => uc.id === selectedUseCase)?.color
                    } p-6 text-white`}
                  >
                    <div className="mb-3">{useCases.find((uc) => uc.id === selectedUseCase)?.icon}</div>
                    <h2 className="text-xl font-bold">{useCases.find((uc) => uc.id === selectedUseCase)?.title}</h2>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-6">
                    {/* Step */}
                    <div>
                      <Badge className="bg-blue-100 text-blue-700 mb-2">
                        Paso {useCases.find((uc) => uc.id === selectedUseCase)?.step}
                      </Badge>
                    </div>

                    {/* Acción */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Acción</h3>
                      <p className="text-gray-900 font-medium">
                        {useCases.find((uc) => uc.id === selectedUseCase)?.action}
                      </p>
                    </div>

                    {/* Beneficio */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Beneficio</h3>
                      <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                        <p className="text-gray-900 font-medium">
                          {useCases.find((uc) => uc.id === selectedUseCase)?.benefit}
                        </p>
                      </div>
                    </div>

                    {/* Descripción */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Descripción</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {useCases.find((uc) => uc.id === selectedUseCase)?.description}
                      </p>
                    </div>
                  </div>
                </Card>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Footer Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Casos de Uso", value: useCases.length },
          { label: "Rol", value: "Estudiante" },
          { label: "Módulos", value: "4" },
          { label: "Estado", value: "Activo" },
        ].map((stat, index) => (
          <Card key={index} className="p-4 text-center bg-white border border-gray-200">
            <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
            <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
