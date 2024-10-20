import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { recipientEmail } = await req.json();
    console.log(recipientEmail);

    // Create a transporter with your SMTP settings
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Example using Gmail
      host: 'smtp.gmail.com',
      port: 587,
      auth: {
        user: process.env.EMAIL_USER as string, // Your email
        pass: process.env.EMAIL_PASS as string, // Your email password
      },
    });

    // Send the email
    try {
      const { accepted, envelope, response, pending, messageId, rejected } = await transporter.sendMail({
        from: process.env.EMAIL_USER, // Sender's address
        to: recipientEmail, // Receiver's address
        subject: "🚀Welcome to GalaxyFi - You're officially on board!🎉", // Subject line
        text: `Thanks for joining the GalaxyFi waitlist! You’re officially on board to experience the future of finance, and we’re hyped to have you!

                Why You’ll Love GalaxyFi:
                * Crypto Wallets: Buy, sell, and store crypto easily.
                * Naira Wallet: Seamless deposits and withdrawals in Naira.
                * Sell Gift Cards: Turn unused gift cards into cash.
                * Pay Bills & Airtime: Quick bill payments and airtime purchases.
                * US Virtual Bank Account: Get paid in USD/EUR for freelance work.
                * US Virtual Debit Card: Spend globally without the fees.
                * Cross-Border Transfers: Easy transfers to Kenya, Ghana, and South Africa.

                What’s Next?
                * Early Access: You’ll be first in line to try out GalaxyFi.
                * Rewards: Invite your friends and earn cool bonuses!

                Got any questions? Hit us up anytime.

                We can’t wait to have you on this journey!

                Catch you soon,
                Jerry Nnamezie
                CEO, GalaxyFi`,
      });
      
      console.log(accepted, envelope, response, pending, messageId, rejected);
    } catch (error) {
      console.log(error);
    }

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
  }
}
