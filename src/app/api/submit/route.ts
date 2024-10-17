import { NextResponse, NextRequest } from 'next/server';
import { User } from '@/app/(models)/user';


export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log(body)
    const res = await User.create({
      email : "abimbolababajide6@gmail.com"
    })
    console.log(res.ok)
    return NextResponse.json({ message : "Registration Successful" }, { status : 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message : "Registration failed" }, { status : 500 })
  }
}