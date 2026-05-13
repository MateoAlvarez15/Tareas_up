"use client"
import { useState } from "react"
import type React from "react"

type ScreenType = "dashboard" | "users" | "analytics" | "system"

interface AdminMockupsProps {
  onBack?: () => void
}

export default function AdminMockups({ onBack }: AdminMockupsProps) {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>("dashboard")

  const screens: Record<ScreenType, React.ReactNode> = {
    dashboard: <DashboardScreen />,
    users: <UsersScreen />,
    analytics: <AnalyticsScreen />,
    system: <SystemScreen />,
  }

  return (
    <div className="space-y-6">
      {/* Screen Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { id: "dashboard" as ScreenType, label: "Dashboard", icon: "📊" },
          { id: "users" as ScreenType, label: "Usuarios", icon: "👥" },
          { id: "analytics" as ScreenType, label: "Analítica", icon: "📈" },
          { id: "system" as ScreenType, label: "Sistema", icon: "⚙️" },
        ].map((screen) => (
          <button
            key={screen.id}
            onClick={() => setCurrentScreen(screen.id)}
            className={`p-4 rounded-lg font-semibold transition-all text-center ${
              currentScreen === screen.id
                ? "bg-red-600 text-white shadow-lg shadow-red-500/50"
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
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Dashboard - Administrador</h2>

      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-red-600 to-red-800 p-6 rounded-lg text-white">
          <p className="text-red-200 text-sm">Total Usuarios</p>
          <p className="text-3xl font-bold mt-2">2,345</p>
        </div>
        <div className="bg-gradient-to-br from-pink-600 to-pink-800 p-6 rounded-lg text-white">
          <p className="text-pink-200 text-sm">Usuarios Activos Hoy</p>
          <p className="text-3xl font-bold mt-2">1,234</p>
        </div>
        <div className="bg-gradient-to-br from-rose-600 to-rose-800 p-6 rounded-lg text-white">
          <p className="text-rose-200 text-sm">Tareas Creadas</p>
          <p className="text-3xl font-bold mt-2">5,892</p>
        </div>
        <div className="bg-gradient-to-br from-orange-600 to-orange-800 p-6 rounded-lg text-white">
          <p className="text-orange-200 text-sm">Uptime Sistema</p>
          <p className="text-3xl font-bold mt-2">99.9%</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-800 rounded-lg p-6">
          <h3 className="text-lg font-bold text-white mb-4">Registros por Rol</h3>
          <div className="space-y-3">
            {[
              { role: "Estudiantes", count: 1800, percent: 77 },
              { role: "Tutores", count: 450, percent: 19 },
              { role: "Administradores", count: 95, percent: 4 },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300">{item.role}</span>
                  <span className="text-white font-semibold">
                    {item.count} ({item.percent}%)
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-700 rounded-full">
                  <div className="h-full bg-red-500 rounded-full" style={{ width: `${item.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-800 rounded-lg p-6">
          <h3 className="text-lg font-bold text-white mb-4">Estado del Sistema</h3>
          <div className="space-y-2">
            {[
              { service: "Base de Datos", status: "operativo" },
              { service: "Servidor Principal", status: "operativo" },
              { service: "API Gateway", status: "operativo" },
              { service: "Storage", status: "operativo" },
            ].map((service, i) => (
              <div key={i} className="flex items-center justify-between p-2 bg-slate-700 rounded">
                <span className="text-slate-300">{service.service}</span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-green-400 text-sm font-semibold">Operativo</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function UsersScreen() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Gestión de Usuarios</h2>
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">+ Crear Usuario</button>
      </div>

      <div className="bg-slate-800 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700 bg-slate-700">
                <th className="px-4 py-3 text-left text-slate-300 font-semibold">Usuario</th>
                <th className="px-4 py-3 text-left text-slate-300 font-semibold">Email</th>
                <th className="px-4 py-3 text-center text-slate-300 font-semibold">Rol</th>
                <th className="px-4 py-3 text-center text-slate-300 font-semibold">Estado</th>
                <th className="px-4 py-3 text-center text-slate-300 font-semibold">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Juan Pérez", email: "juan@example.com", role: "Estudiante", status: "activo" },
                { name: "María López", email: "maria@example.com", role: "Tutor", status: "activo" },
                { name: "Carlos Admin", email: "carlos@example.com", role: "Administrador", status: "activo" },
                { name: "Ana García", email: "ana@example.com", role: "Estudiante", status: "inactivo" },
                { name: "Pedro Ruiz", email: "pedro@example.com", role: "Tutor", status: "activo" },
              ].map((user, i) => (
                <tr key={i} className="border-b border-slate-700 hover:bg-slate-700/50">
                  <td className="px-4 py-3 text-white font-semibold">{user.name}</td>
                  <td className="px-4 py-3 text-slate-400">{user.email}</td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        user.role === "Administrador"
                          ? "bg-red-500/20 text-red-300"
                          : user.role === "Tutor"
                            ? "bg-amber-500/20 text-amber-300"
                            : "bg-blue-500/20 text-blue-300"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        user.status === "activo" ? "bg-green-500/20 text-green-300" : "bg-slate-600 text-slate-400"
                      }`}
                    >
                      {user.status === "activo" ? "Activo" : "Inactivo"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button className="text-red-400 hover:text-red-300 text-sm font-semibold">Editar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function AnalyticsScreen() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Reportes de Sistema</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-800 rounded-lg p-6">
          <h3 className="text-lg font-bold text-white mb-4">Actividad por Hora</h3>
          <div className="flex items-end justify-between h-32 gap-1">
            {[65, 45, 78, 56, 82, 70, 88, 95, 72, 65, 80, 75].map((height, i) => (
              <div
                key={i}
                className="flex-1 bg-red-500 rounded-t opacity-80 hover:opacity-100 transition-opacity"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <p className="text-slate-400 text-xs mt-2">Últimas 12 horas</p>
        </div>

        <div className="bg-slate-800 rounded-lg p-6">
          <h3 className="text-lg font-bold text-white mb-4">Efectividad del Sistema</h3>
          <div className="space-y-4">
            {[
              { metric: "Tareas Completadas", value: 87, total: 100 },
              { metric: "Entregas a Tiempo", value: 92, total: 100 },
              { metric: "Estudiantes Comprometidos", value: 78, total: 100 },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300">{item.metric}</span>
                  <span className="text-white font-semibold">{item.value}%</span>
                </div>
                <div className="w-full h-2 bg-slate-700 rounded-full">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-slate-800 rounded-lg p-6">
        <h3 className="text-lg font-bold text-white mb-4">Eventos Recientes del Sistema</h3>
        <div className="space-y-2">
          {[
            { event: "Backup automático completado", time: "Hace 30 min", type: "success" },
            { event: "50 nuevos usuarios registrados", time: "Hace 1 hora", type: "info" },
            { event: "Mantenimiento programado", time: "Hace 2 horas", type: "warning" },
            { event: "Sincronización de BD exitosa", time: "Hace 3 horas", type: "success" },
          ].map((log, i) => (
            <div key={i} className="flex items-start gap-3 p-2 bg-slate-700 rounded">
              <div
                className={`w-2 h-2 mt-1.5 rounded-full flex-shrink-0 ${
                  log.type === "success" ? "bg-green-500" : log.type === "warning" ? "bg-yellow-500" : "bg-blue-500"
                }`}
              />
              <div className="flex-1">
                <p className="text-slate-300 text-sm">{log.event}</p>
                <p className="text-slate-500 text-xs">{log.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SystemScreen() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Configuración del Sistema</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-800 rounded-lg p-6">
          <h3 className="text-lg font-bold text-white mb-4">Información del Sistema</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400">Versión</span>
              <span className="text-white font-semibold">2.1.0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Última actualización</span>
              <span className="text-white font-semibold">15 Nov 2024</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Base de Datos</span>
              <span className="text-white font-semibold">PostgreSQL 15</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Almacenamiento usado</span>
              <span className="text-white font-semibold">45.2 GB / 100 GB</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 rounded-lg p-6">
          <h3 className="text-lg font-bold text-white mb-4">Configuraciones de Seguridad</h3>
          <div className="space-y-3">
            {[
              { setting: "Autenticación 2FA", enabled: true },
              { setting: "Encriptación SSL", enabled: true },
              { setting: "Backup automático", enabled: true },
              { setting: "Rate limiting", enabled: true },
            ].map((config, i) => (
              <div key={i} className="flex items-center justify-between p-2 bg-slate-700 rounded">
                <span className="text-slate-300">{config.setting}</span>
                <div className={`w-3 h-3 rounded-full ${config.enabled ? "bg-green-500" : "bg-slate-500"}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-slate-800 rounded-lg p-6">
        <h3 className="text-lg font-bold text-white mb-4">Configuraciones Generales</h3>
        <div className="space-y-4">
          <div>
            <label className="text-slate-300 text-sm font-semibold">Nombre de la Institución</label>
            <input
              type="text"
              placeholder="Ingrese el nombre"
              className="w-full mt-1 bg-slate-700 text-white px-3 py-2 rounded border border-slate-600 focus:border-red-500 outline-none"
            />
          </div>
          <div>
            <label className="text-slate-300 text-sm font-semibold">Email de Contacto</label>
            <input
              type="email"
              placeholder="admin@example.com"
              className="w-full mt-1 bg-slate-700 text-white px-3 py-2 rounded border border-slate-600 focus:border-red-500 outline-none"
            />
          </div>
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 font-semibold">
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  )
}
