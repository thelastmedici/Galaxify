import { NextRequest, NextResponse} from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { recipientEmail } = await req.json();
    console.log(recipientEmail);
    const res = await fetch("https://api.sender.net/v2/subscribers", {
      method : "POST",
      headers : {
        "Authorization": `Bearer ${process.env.SENDER_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body : JSON.stringify({
        email : recipientEmail
      })
    })
    if (!res.ok) {
      throw new Error("An Error occured")
    }
    const response = await res.json()
    console.log(response)
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  }catch(error) {
    console.log(error)
    return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
  }
}