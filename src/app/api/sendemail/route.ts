import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import path from "path"

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
        html: `
        <div>
        Thanks for joining the GalaxyFi waitlist! You’re officially on board to experience the future of finance, and we’re hyped to have you!
         <p>
            Why You’ll Love GalaxyFi:
         </p>
         <ul>
            <li>
              Crypto Wallets: Buy, sell, and store crypto easily.
            </li>
            <li>
              Naira Wallet: Seamless deposits and withdrawals in Naira.
            </li>
            <li>
              Sell Gift Cards: Turn unused gift cards into cash.
            </li>
            <li>
              Pay Bills & Airtime: Quick bill payments and airtime purchases.
            </li>
            <li>
              US Virtual Bank Account: Get paid in USD/EUR for freelance work.
            </li>
            <li>
              US Virtual Debit Card: Spend globally without the fees.
            </li>
            <li>
              Cross-Border Transfers: Easy transfers to Kenya, Ghana, and South Africa.
            </li>
          </ul>

          <p>
            What’s Next?
          </p
          <ul>
            <li>
              Early Access: You’ll be first in line to try out GalaxyFi.
            </li>
            <li>
              Rewards: Invite your friends and earn cool bonuses!
            </li>
          </ul>
          <p>
            Got any questions? Hit us up anytime. We can’t wait to have you on this journey!
          </p>
          <div>
            <p>
              Catch you soon,
            </p>
            <p>
              Jerry Nnamezie
            </p>
            <p>
              CEO, GalaxyFi 
            </p>
          </div>
          <div>
          <img src="cid:cartt@image" alt="img" width="400" height="400"/>
          `,
          attachments : [
            {
              filename : 'cart.jpg',
              path : path.join(process.cwd(), "./public/images/cart.jpg"),
              cid : "cartt@image"
            }
          ]
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
