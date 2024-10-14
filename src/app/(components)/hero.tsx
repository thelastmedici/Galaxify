import React from 'react'
import { josefin, yeseva } from '../font'
import InputBox from './input'

const Hero = () => {
  return (
    <section className="w-full max-w-3xl mx-auto">
      <div className=''>
        <h1 
        className={`${yeseva.className} text-center text-[144px] tracking-wider !text-darkViolet leading-tight`}>
          Galaxi
          <span 
          className='uppercase'>
            FY
          </span>
        </h1>
        <p 
        className={`text-center text-4xl mt-4 ${josefin.className}`}
        >
          Your one in all app
        </p>
        <h1 className={`${yeseva.className} text-center text-3xl tracking-wider mt-4 !text-darkViolet will-change-auto`}>
          Join the Waitlist
        </h1>
      </div>
      <InputBox 
      className='max-w-lg mx-auto mt-10'
      />
    </section>
  )
}

export default Hero
