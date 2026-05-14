import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const users = await prisma.user.findMany()

    return NextResponse.json({ users })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error interno' },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const user = await prisma.user.create({
      data: body
    })

    return NextResponse.json({ user })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error interno' },
      { status: 500 }
    )
  }
}