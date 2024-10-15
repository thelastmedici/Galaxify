import React from 'react'
import { josefin, yeseva } from '../font'
import InputBox from './input'

const PaymentSection = () => {
  return (
    <section className='px-4 w-full !text-white'>
      <div className='max-w-6xl mx-auto bg-darkViolet flex flex-col md:flex-row justify-between items-center mt-20 gap-16 md:gap-10 rounded-xl mb-10 overflow-hidden '>
        <div className='flex flex-col gap-6 py-4 px-6'>
          <h1 className={`${yeseva.className} text-4xl !text-white`}>
            Supercharge your payments
          </h1>
          <p className={`${josefin.className} text-base !text-white`}>
            Start your journey with GalaxyFi as we save the digital space with Financial freedom
          </p>
          <InputBox
          arrow={false}
          key={2}
          className='w-full md:max-w-md !justify-left'
          />
        </div>
        <img
        src={'/images/phoneinhand.png'}
        alt="transaction"
        className='w-[500px] h-[500px] object-cover object-center'
        // quality={100}
        />  
      </div>
    </section>
  )
}

export default PaymentSection
