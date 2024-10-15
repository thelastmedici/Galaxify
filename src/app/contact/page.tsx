import React from 'react'
import { josefin, yeseva } from '../font'

const page = () => {
  return (
    <div className="w-full min-h-screen">
      <section className="w-full h-[40vh] bg-[url('/images/noise.png')] border mt-[60.08px] rounded-b-3xl flex flex-col items-center justify-center">
        <h1 className={`${ yeseva.className} !text-[70px]`}>
          Contact us
        </h1>
        <p className={`${ josefin.className } text-lg`}>
          We can&apos;t wait to connect with you
        </p>
      </section>

      <section className='p-10 max-w-5xl mx-auto mt-10'>
        <div className=''>
          <h1 className={`${ yeseva.className} !text-5xl`}>
            Connect with us
          </h1>
        </div>

        <div className='w-full grid grid-cols-2'>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
        </div>
      </section>
    </div>
  )
}

export default page
