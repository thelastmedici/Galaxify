import { NextResponse, NextRequest } from 'next/server';
import { User } from '@/app/(models)/user';
import connectDB from '@/app/lib/mongodb';


export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    console.log(body)
    const res = await User.create({
      email : body.email,
    })
    console.log(res.email)
    return NextResponse.json({ message : "Registration Successful" }, { status : 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message : "Registration failed" }, { status : 500 })
  }
}