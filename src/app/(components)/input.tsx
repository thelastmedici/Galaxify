
"use client"
import React from 'react'
import Arrow from './ui/arrow'
import { useDispatch } from 'react-redux'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { confettiToggler } from '../store/uiSlice'

console.log(process.env.NEXT_PUBLIC_SENDER_ACCESS_TOKEN, "ACCESS TOKEN")

const InputBox = ({ className, arrow } : { className : string; arrow : boolean }) => {
  const [ loading, setLoading ]  = React.useState(false)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const timeline = React.useRef<gsap.core.Timeline | null>(null);
  const inputRef = React.useRef(null);
  const dispatch = useDispatch()
  const [ email, setEmail ] = React.useState("");

  
  const { contextSafe } = useGSAP(() => {
    timeline.current = gsap.timeline({
      paused : true
    }).to(".inputt", {
      duration: 0.1,
      x: -5,              // Move left by 5px
      yoyo: true,          // Reverse the animation
      repeat: 4,           // Repeat the wiggle 4 times
      ease: "power1.inOut", // Smooth in-out motion
      // repeat: -1
    })
  })
  

  const handleSubmit = contextSafe(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (email.trim() === "" || !emailRegex.test(email)) {
      timeline.current?.restart();
      return;
    }
  
    setLoading(true);
    try {
      // const { recipientEmail } = await req.json();
      // console.log(recipientEmail);
      const res = await fetch("https://api.sender.net/v2/subscribers", {
        method : "POST",
        headers : {
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SENDER_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body : JSON.stringify({
          email,
          groups : ["bqD8wD"]
        })
      })
      if (!res.ok) {
        throw new Error("An Error occured")
      }
      const response = await res.json()
      console.log(response)
        // Clear the email field and dispatch confetti if all succeeds
      setEmail("");
      dispatch(confettiToggler(true));
      // return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    }catch(error) {
      timeline.current?.restart();
      console.log(error)
      // return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
    } finally {
      setLoading(false)
    }

    // try {
    //   // First fetch: Register the email
    //   const res = await fetch("/api/submit", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email }),
    //   });
  
    //   // If registration fails, throw an error and stop further execution
    //   if (!res.ok) {
    //     throw new Error("Failed to register email");
    //   }
  
    //   // Only proceed with the second fetch if the first one succeeds
    //   const emailRes = await fetch("/api/sendemail", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ recipientEmail: email }),
    //   });
  
    //   if (!emailRes.ok) {
    //     throw new Error("Failed to send confirmation email");
    //   }
  
    //   const emailData = await emailRes.json();
    //   console.log(emailData);
  
    //   // Clear the email field and dispatch confetti if all succeeds
    //   setEmail("");
    //   dispatch(confettiToggler(true));
  
    // } catch (err) {
    //   console.error(err);
    //   timeline.current?.restart();
    // } finally {
    //   setLoading(false);
    // }

  });
  
  

  return (
    <form
    noValidate
    onSubmit={handleSubmit}
    className={`${className} w-full flex flex-col sm:flex-row items-center justify-center gap-3 relative inputt`} 
    ref={inputRef}>
      {
        arrow && (
          <div className='absolute -right-24 -top-6 transition-transform duration-200 rotate-[-25deg] hidden md:block'>
            <Arrow />
          </div>
        )
      }
      <input
      type='email'
      className="w-full py-3 px-4 focus:outline-none rounded-lg placeholder:text-opacity-10 text-lavender  bg-[#595959] bg-opacity-50 text-base font-medium focus:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.4),0px_0px_0px_1px_rgba(238,238,238,0.15)] flex-1"
      value={email}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
      placeholder='Your Email Address'
      />
      <button className={`${ arrow ? 'bg-darkViolet text-lavender' : 'bg-lavender text-customBlack' } py-3 px-4 whitespace-nowrap rounded-lg w-full sm:w-fit text-center flex items-center justify-center`}>
        {
          loading ?  <img src="/images/loading.svg" className='w-6 h-6' alt='loading'/> : "Join Waitlist!"
        } 
      </button>
    </form>
  )
}

export default InputBox
