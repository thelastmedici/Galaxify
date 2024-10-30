"use client"
import React from 'react'
import { dmsans, sofia } from '../font'
import InputBox from '../(components)/input'

const Page = () => {
  return (
    <section className="w-full min-h-screen">
      <section className="w-full h-[40vh] bg-[url('/images/noise.png')] mt-[60.08px] rounded-b-3xl flex flex-col items-center justify-center text-center px-3">
        <h1 className={`${ dmsans.className} !text-[40px] md:!text-[70px] font-bold text-darkViolet`}>
          Join our Waitlist
        </h1>
        <p className={`${ sofia.className } text-lg text-center`}>
          Our Solution aims to implement an evolving hassle free system bridging the gap in your day to day payment processes.
        </p>
      </section>
      
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 justify-between items-center mt-20 gap-8 md:gap-10 rounded-xl mb-10 overflow-hidden px-3'>
        <div className="max-w-[350px] flex gap-3 items-center">
          <h1 className={`text-3xl md:text-5xl font-bold ${dmsans.className}`}>
            Be the first to know when we launch
          </h1>
        </div>  

        <div className='flex flex-col gap-6 md:px-6 md:justify-center md:items-center'>
          <InputBox
          arrow={false}
          key={2}
          className='w-full max-w-2xl flex-1 !justify-left'
          />
        </div>
      </div>
    </section>
  )
}

export default Page
