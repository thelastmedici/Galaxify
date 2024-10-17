import React from 'react'
import { josefin, yeseva } from '../font'
import InputBox from './input'

const Hero = () => {
  return (
    <section className="w-full max-w-3xl mx-auto px-3 sm:px-0">
      <div className=''>
        <h1 
        className={`${yeseva.className} text-center min-[400px]:text-[80px] text-[60px] sm:text-[100px] md:text-[144px] tracking-wider !text-darkViolet leading-tight`}>
          Galaxy
          <span 
          className='capitalize'>
            Fi
          </span>
        </h1>
        <p 
        className={`text-center text-4xl mt-4 ${josefin.className}`}
        >
          Your all in one app
        </p>
        <h1 className={`${yeseva.className} text-center text-3xl tracking-wider mt-4 !text-darkViolet will-change-auto`}>
          Join the Waitlist
        </h1>
      </div>
      <InputBox 
      arrow={true}
      key={1}
      className='max-w-lg mx-auto mt-10'
      />
    </section>
  )
}

export default Hero
