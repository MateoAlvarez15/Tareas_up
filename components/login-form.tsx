"use client"

import { SetStateAction, useState } from "react"
import { useAuth } from '@/contexts/auth-context'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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

interface LoginFormProps {
  selectedRole: 'student' | 'tutor' | 'admin'
  onBack: () => void
}

export default function LoginForm({ selectedRole, onBack }: LoginFormProps) {
  // Ahora usamos login y register del context (que llaman a la API real)
  const { login, register } = useAuth()
  const [isRegister, setIsRegister] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [fullName, setFullName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [showRecovery, setShowRecovery] = useState(false)
  const [recoveryEmail, setRecoveryEmail] = useState("")

  // Validación de email por rol — igual que antes, sin cambios
  const validateEmailForRole = (email: string): boolean => {
    const emailLower = email.toLowerCase()
    switch (selectedRole) {
      case 'student':
        return emailLower.includes('@estudiante.') ||
               emailLower.includes('@alumno.') ||
               emailLower.includes('.edu') ||
               emailLower.includes('student')
      case 'tutor':
        return emailLower.includes('tutor') ||
               emailLower.includes('profesor') ||
               emailLower.includes('docente') ||
               emailLower.includes('teacher')
      case 'admin':
        return emailLower.includes('admin') ||
               emailLower.includes('administrador') ||
               emailLower.includes('administrator')
      default:
        return false
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    setIsLoading(true)

    if (!email.includes('@')) {
      setError("Por favor ingresa un email válido")
      setIsLoading(false)
      return
    }

    if (!validateEmailForRole(email)) {
      setError(`El email no es válido para el rol de ${getRoleName()}.`)
      setIsLoading(false)
      return
    }

    if (isRegister) {
      // REGISTRO — llama a la API real
      if (password !== confirmPassword) {
        setError("Las contraseñas no coinciden")
        setIsLoading(false)
        return
      }
      if (password.length < 6) {
        setError("La contraseña debe tener al menos 6 caracteres")
        setIsLoading(false)
        return
      }

      const result = await register(fullName || getRoleName() + " Demo", email, password, selectedRole)
      if (result.error) {
        setError(result.error)
        setIsLoading(false)
        return
      }
      setSuccess("¡Registro exitoso! Redirigiendo...")
      // El context ya llama a setUser, la app redirige sola
    } else {
      // LOGIN — llama a la API real
      const result = await login(email, password)
      if (result.error) {
        setError(result.error)
        setIsLoading(false)
        return
      }
      // El context ya llama a setUser, la app redirige sola
    }

    setIsLoading(false)
  }

  // Recuperación de contraseña — igual que antes (simulada)
  const handlePasswordRecovery = (e: React.FormEvent) => {
    e.preventDefault()
    if (!recoveryEmail) {
      setError("Por favor ingresa tu email para recuperar la contraseña")
      return
    }
    if (!validateEmailForRole(recoveryEmail)) {
      setError(`El email no es válido para el rol de ${getRoleName()}.`)
      return
    }
    setSuccess(`Se ha enviado un enlace de recuperación a: ${recoveryEmail}`)
    setTimeout(() => {
      setShowRecovery(false)
      setRecoveryEmail("")
      setSuccess("")
    }, 3000)
  }

  const getRoleColor = () => {
    switch (selectedRole) {
      case 'student': return 'bg-blue-600'
      case 'tutor': return 'bg-amber-600'
      case 'admin': return 'bg-red-600'
      default: return 'bg-blue-600'
    }
  }

  const getRoleName = () => {
    switch (selectedRole) {
      case 'student': return 'Estudiante'
      case 'tutor': return 'Tutor/Profesor'
      case 'admin': return 'Administrador'
      default: return ''
    }
  }

  const resetForm = () => {
    setEmail("")
    setPassword("")
    setConfirmPassword("")
    setFullName("")
    setError("")
    setSuccess("")
  }

  const toggleMode = () => {
    setIsRegister(!isRegister)
    resetForm()
  }

  // ── Pantalla de recuperación (igual que antes) ──────────────────────────────
  if (showRecovery) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900 p-4">
        <Card className="w-full max-w-md p-8 bg-white/90 backdrop-blur-sm">
          <div className="text-center mb-8">
            <button onClick={() => setShowRecovery(false)} className="text-blue-600 hover:underline mb-4">
              ← Volver al {isRegister ? 'registro' : 'login'}
            </button>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Recuperar Contraseña</h1>
            <p className="text-gray-600">Ingresa tu email para recibir instrucciones</p>
          </div>

          <form onSubmit={handlePasswordRecovery} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="recovery-email">Email</Label>
              <Input
                id="recovery-email"
                type="email"
                placeholder={`ejemplo@${selectedRole}.com`}
                value={recoveryEmail}
                onChange={(e: { target: { value: SetStateAction<string> } }) => setRecoveryEmail(e.target.value)}
                required
              />
              <p className="text-gray-500 text-xs">
                Debe ser un email válido para {getRoleName()}
              </p>
            </div>

            {error && (
              <div className="text-red-600 text-sm text-center p-3 bg-red-50 rounded-lg">{error}</div>
            )}
            {success && (
              <div className="text-green-600 text-sm text-center p-3 bg-green-50 rounded-lg">{success}</div>
            )}

            <Button type="submit" className={`w-full ${getRoleColor()} hover:opacity-90 text-white`}>
              Enviar Enlace de Recuperación
            </Button>
          </form>
        </Card>
      </div>
    )
  }

  // ── Pantalla principal de login/registro (diseño idéntico al original) ──────
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900 p-4">
      <Card className="w-full max-w-md p-8 bg-white/90 backdrop-blur-sm">
        <div className="text-center mb-8">
          <button onClick={onBack} className="text-blue-600 hover:underline mb-4">
            ← Cambiar rol
          </button>
          <div className={`inline-block px-4 py-1 rounded-full text-white text-sm mb-4 ${getRoleColor()}`}>
            {getRoleName()}
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {isRegister ? 'Crear Cuenta' : 'Iniciar Sesión'}
          </h1>
          <p className="text-gray-600">
            {isRegister ? 'Regístrate como ' + getRoleName() : 'Ingresa tus credenciales'}
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {isRegister && (
            <div className="space-y-2">
              <Label htmlFor="fullName">Nombre Completo</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Tu nombre completo"
                value={fullName}
                onChange={(e: { target: { value: SetStateAction<string> } }) => setFullName(e.target.value)}
                required
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder={`ejemplo@${selectedRole}.com`}
              value={email}
              onChange={(e: { target: { value: SetStateAction<string> } }) => setEmail(e.target.value)}
              required
            />
            <p className="text-gray-500 text-xs">
              {selectedRole === 'student' && "Ej: estudiante@universidad.edu, student@test.com"}
              {selectedRole === 'tutor' && "Ej: tutor@institucion.com, teacher@test.com"}
              {selectedRole === 'admin' && "Ej: admin@sistema.com, administrator@test.com"}
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e: { target: { value: SetStateAction<string> } }) => setPassword(e.target.value)}
              required
            />
          </div>

          {isRegister && (
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e: { target: { value: SetStateAction<string> } }) => setConfirmPassword(e.target.value)}
                required
              />
              {password && confirmPassword && password !== confirmPassword && (
                <p className="text-red-600 text-xs">Las contraseñas no coinciden</p>
              )}
            </div>
          )}

          {error && (
            <div className="text-red-600 text-sm text-center p-3 bg-red-50 rounded-lg">{error}</div>
          )}
          {success && (
            <div className="text-green-600 text-sm text-center p-3 bg-green-50 rounded-lg">{success}</div>
          )}

          <Button
            type="submit"
            className={`w-full ${getRoleColor()} hover:opacity-90 text-white`}
            disabled={isLoading || (isRegister && password !== confirmPassword)}
          >
            {isLoading
              ? (isRegister ? "Creando cuenta..." : "Iniciando sesión...")
              : (isRegister ? "Crear Cuenta" : "Iniciar Sesión")
            }
          </Button>
        </form>

        <div className="mt-6 text-center space-y-4">
          <div>
            <button onClick={toggleMode} className="text-blue-600 hover:underline text-sm">
              {isRegister
                ? "¿Ya tienes cuenta? Inicia sesión aquí"
                : "¿No tienes cuenta? Regístrate aquí"
              }
            </button>
          </div>
          {!isRegister && (
            <div>
              <button onClick={() => setShowRecovery(true)} className="text-blue-600 hover:underline text-sm">
                ¿Olvidaste tu contraseña?
              </button>
            </div>
          )}
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">Información Importante:</h3>
          <div className="text-sm text-blue-700 space-y-1">
            <p><strong>Registro válido para:</strong> {getRoleName()}</p>
            <p><strong>Email debe contener:</strong>
              {selectedRole === 'student' && " 'student', '@estudiante.' o '.edu'"}
              {selectedRole === 'tutor' && " 'tutor', 'teacher' o 'profesor'"}
              {selectedRole === 'admin' && " 'admin' o 'administrator'"}
            </p>
            <p><strong>Contraseña:</strong> Mínimo 6 caracteres</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
