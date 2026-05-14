import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      return NextResponse.json(
        { error: 'userId requerido' },
        { status: 400 }
      )
    }

    const tasks = await prisma.personalTask.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json({ tasks })
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

    const task = await prisma.personalTask.create({
      data: body
    })

    return NextResponse.json({ task })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error interno' },
      { status: 500 }
    )
  }
}