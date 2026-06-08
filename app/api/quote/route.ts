import { NextResponse } from "next/server"
import { getSql } from "@/lib/db"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, business, phone, email, service, message } = body

    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: "Name, phone, and service are required" },
        { status: 400 }
      )
    }

    const sql = getSql()
    await sql`
      INSERT INTO quote_requests (name, business, phone, email, service, message)
      VALUES (${name}, ${business || null}, ${phone}, ${email || null}, ${service}, ${message || null})
    `

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error saving quote request:", error)
    return NextResponse.json(
      { error: "Failed to save request" },
      { status: 500 }
    )
  }
}
