
"use client"
import React from 'react'
import { josefin } from '../font'
import Arrow from './ui/arrow'


const InputBox = ({ className } : { className : string }) => {
  const [ email, setEmail ] = React.useState("")
  return (
    <form 
    className={`${className} w-full flex items-center justify-center ${josefin.className} space-x-3 relative`}>
      <div className='absolute -right-24 -top-6 transition-transform duration-200 rotate-[-25deg]'>
        <Arrow />
      </div>
      <input
      type='email'
      className="w-full py-3 px-4 focus:outline-none rounded-lg placeholder:text-opacity-10 text-lavender  bg-[#595959] bg-opacity-50 text-base font-medium focus:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.4),0px_0px_0px_1px_rgba(238,238,238,0.15)] flex-1"
      value={email}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
      placeholder='Your Email Address'
      />
      <button className='bg-lavender text-customBlack py-3 px-4 whitespace-nowrap rounded-lg'>
        Join Waitlist!
      </button>
    </form>
  )
}

export default InputBox
