import React from 'react'
import { dmsans, sofia} from '../font'
// import InputBox from './input'

const Hero = () => {
  return (
    <section className="w-full max-w-7xl mx-auto sm:px-3">
      <div className="flex items-center justify-between space-x-6">
        <div className="">
          <div className=''>
            <h1 
            className={`${ sofia.className } text-center min-[400px]:text-[80px] text-[60px] sm:text-[80px] md:text-[144px] tracking-wider leading-tight font-bold text-gradient`}>
              Galaxy
              <span 
              className='capitalize'>
                Fi
              </span>
            </h1>
            <p 
            className={`text-center text-4xl mt-4 ${dmsans.className}`}
            >
              Your all in one app
            </p>
            <h1 className={`${sofia.className} text-center text-3xl tracking-wider mt-4 !text-darkViolet will-change-auto`}>
              Join the Waitlist
            </h1>
          </div>
          {/* <InputBox 
          arrow={true}
          key={1}
          className='max-w-lg mx-auto mt-10'
          /> */}
        </div>

        <div className="flex justify-end items-center w-fit">
          <img src="/images/picture.svg" alt="picture"  className="w-[500] h-[500] object-cover object-top rounded-md"/>
        </div>
      </div>
    </section>
  )
}

export default Hero
