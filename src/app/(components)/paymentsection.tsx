import Image from 'next/image'
import React from 'react'
import { josefin, yeseva } from '../font'
import InputBox from './input'

const PaymentSection = () => {
  return (
    <section className='max-w-6xl mx-auto bg-darkViolet flex flex-col md:flex-row justify-between items-center mt-20 gap-16 md:gap-10 rounded-xl mb-10'>
      <div className='flex flex-col gap-6 py-4 px-6'>
        <h1 className={`${yeseva.className} text-4xl`}>
          Supercharge your payments
        </h1>
        <p className={`${josefin.className} text-base`}>
          Start your journey with Ewalletly as we save the digital space with Financial freedom
        </p>
        <InputBox
        className='w-full md:max-w-md !justify-left'
        />
      </div>
      <img
      src={'/images/phoneinhand.png'}
      alt="transaction"
      className='w-[500px] h-[500px] object-cover object-center'
      // quality={100}
      />
    </section>
  )
}

export default PaymentSection
