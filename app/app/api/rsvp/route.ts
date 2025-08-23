
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

export const dynamic = 'force-dynamic'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const {
      guestName,
      email,
      phone,
      attendanceStatus,
      guestCount,
      mealPreference,
      dietaryRestrictions,
      message
    } = body

    // Validate required fields
    if (!guestName || !email || !attendanceStatus) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Save to database
    const rsvp = await prisma.rSVP.create({
      data: {
        guestName: guestName.trim(),
        email: email.trim(),
        phone: phone?.trim() || null,
        attendanceStatus,
        guestCount: guestCount || 1,
        mealPreference: mealPreference || null,
        dietaryRestrictions: dietaryRestrictions?.trim() || null,
        message: message?.trim() || null
      }
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'RSVP submitted successfully',
        rsvp: {
          id: rsvp.id,
          guestName: rsvp.guestName,
          attendanceStatus: rsvp.attendanceStatus
        }
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('RSVP submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit RSVP' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}
