import React from 'react'
import { dmsans, sofia } from '../font'
import InputBox from './input'

const PaymentSection = () => {
  return (
    <section className='px-4 w-full !text-white'>
      <div className='max-w-6xl mx-auto bg-darkViolet flex flex-col md:flex-row justify-between items-center mt-20 gap-16 md:gap-10 rounded-xl mb-10 overflow-hidden '>
        <div className='flex flex-col gap-6 py-4 px-6'>
          <h1 className={`${sofia.className} text-4xl !text-white font-bold`}>
            Supercharge your payments
          </h1>
          <p className={`${dmsans.className} text-base !text-white`}>
            Start your journey with GalaxyFi as we save the digital space with Financial freedom
          </p>
          <InputBox
          arrow={false}
          key={2}
          className='w-full md:max-w-md !justify-left'
          />
        </div>
        <img
        src={'/images/phoneinhand.svg'} 
        alt="transaction"
        className='w-[350px] h-[350px] min-[991px]:w-[500px] min-[991px]:h-[500px] object-cover object-center'
        // quality={100}
        />  
      </div>
    </section>
  )
}

export default PaymentSection
