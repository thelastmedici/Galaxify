import React from 'react'
import { dmsans, sofia} from '../font'
import Link from 'next/link'
// import InputBox from './input'

const Hero = () => {
  return (
    <section className="w-full max-w-7xl mx-auto sm:px-3">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between space-x-6 space-y-6">
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
            {/* <h1 className={`${sofia.className} text-center text-3xl tracking-wider mt-4 !text-darkViolet will-change-auto`}>
              Join the Waitlist
            </h1> */}
            <div className="text-center w-full !mt-4">
              <Link 
              className="py-2 px-4 rounded-md bg-darkViolet text-lavender text-xl !w-full !mt-5"
              href="/waitlist">
                Join Waitlist
              </Link>
            </div>
          </div>
          {/* <InputBox 
          arrow={true}
          key={1}
          className='max-w-lg mx-auto mt-10'
          /> */}
        </div>

        <div className="flex justify-end items-center w-fit flex-1">
          <img src="/images/picture.svg" alt="picture"  className="w-[500] h-[500] object-cover object-top rounded-md"/>
        </div>
      </div>
    </section>
  )
}

export default Hero
