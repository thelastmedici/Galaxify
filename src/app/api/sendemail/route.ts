import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req:NextRequest) {
  try {
    const { recipientEmail} = await req.json();
    console.log(recipientEmail)
    // Create a transporter with your SMTP settings
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Example using Gmail,
      host : "smtp.gmail.com",
      port : 587,
      // secure : true,
      auth: {
        user: process.env.EMAIL_USER as string, // Your email
        pass: process.env.EMAIL_PASS as string, // Your email password
      },
    });

    // Send the email
    try {
      const { accepted, envelope,response,pending,messageId,rejected } = await transporter.sendMail({
        from: process.env.EMAIL_USER, // Sender's address
        to: recipientEmail, // Receiver's address
        subject: "Thanks for subscribing", // Subject line
        text: "More awaits nigga", // Plain text body
      });
      console.log(accepted, envelope,response,pending,messageId,rejected) 
    } catch(error) {
      console.log(error)
    }


    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
  }
}
