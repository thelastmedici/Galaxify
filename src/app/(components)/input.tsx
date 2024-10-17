
"use client"
import React from 'react'
import { josefin } from '../font'
import Arrow from './ui/arrow'
import { useDispatch } from 'react-redux'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { confettiToggler } from '../store/uiSlice'

const InputBox = ({ className, arrow } : { className : string; arrow : boolean }) => {
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
    e.preventDefault()
    console.log(!email.includes("@"))
    if (email.trim() === "" || !email.includes("@")) {
      timeline.current?.restart();
      return
    }
    console.log(email);
    dispatch(confettiToggler(true))
    try {
      const res  = await fetch("/api/submit", {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          email : email
        })
      })
      console.log(res)
    } catch(err) {
      console.error(err, "ERROR")
    }
  })


  return (
    <form
    noValidate
    onSubmit={handleSubmit}
    className={`${className} w-full flex flex-col sm:flex-row items-center justify-center ${josefin.className} gap-3 relative inputt`} 
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
      <button className={`${ arrow ? 'bg-darkViolet text-lavender' : 'bg-lavender text-customBlack' } py-3 px-4 whitespace-nowrap rounded-lg w-full sm:w-fit`}>
        Join Waitlist!
      </button>
    </form>
  )
}

export default InputBox
