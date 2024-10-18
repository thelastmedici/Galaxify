import Image from 'next/image'
import React from 'react'
import { dmsans, sofia } from '@/app/font'

const ImgGrid = () => {
  return (
    <section className={`grid grid-cols-2 md:grid-cols-3 mb-10 gap-6 w-full max-w-6xl mx-auto ${ dmsans.className} px-3 h-fit`}>
      <div className='h-full rounded-lg md:grid grid-row-4 gap-6 hidden'>
        <div className='row-span-3 rounded-lg overflow-hidden'>
          <Image
          src="/images/picture.jpg"
          alt="reliable"
          className='w-full h-full object-cover object-center'
          width={200}
          height={700}
          quality={"100"}
          priority={false}
          />
        </div>
        <div className='rounded-lg h-[200px] overflow-hidden'>
          <img
          src="/images/extra.jpg"
          alt="reliable"
          className='object-cover w-full h-full object-[20%]'
          width={100}
          height={100}
          // quality={"100"}
          // priority={false}
          />
        </div>
      </div>
      <div className='h-fit sm:h-full rounded-lg col-span-2 grid grid-rows-2 gap-6'>
        <div className='rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-6'>
          <div className='rounded-lg overflow-hidden relative'>
            <div className='absolute top-0 left-0 w-full py-4 px-3 max-w-[270px] text-lavender flex flex-col gap-2'>
              <h1 className={`text-lavender font-bold text-xl ${ sofia.className }`}>
                  Swift and Secure Payment
              </h1>
              <p className='text-base !text-white'>Your transactions are protected and safe with GalaxyFi</p>
            </div>
            <img 
            src="/images/securedpayment.jpg" 
            className='object-cover object-center w-full h-[300px] sm:h-full'
            alt="" />
          </div>
          <div className='rounded-lg overflow-hidden relative'>
            {/* <div className='absolute top-0 left-0 w-full py-4 px-3 max-w-[250px] text-lavender flex flex-col gap-2 text-lavender z-[100]'>
              <h1 className={`text-lavender font-bold text-xl ${ sofia.className }`}> 
                Borderless Transactions
              </h1>
              <p className='text-base !text-white'>Experience the freedom of payments across the Globe</p>
            </div> */}
            <img src="/images/transaction.jpg" alt="" className='object-cover object-center scale-105 w-full h-[300px] sm:h-full'/>
          </div>
        </div>
        <div className='rounded-lg overflow-hidden relative h-fit sm:h-full'>
          <div className='absolute bottom-0 left-0 w-full py-4 px-3 max-w-[300px] flex flex-col gap-2 !text-customBlack'>
            <h1 className={`!text-lavender font-bold text-xl ${ sofia.className }`}>
              Redefining Finance
            </h1>
            <p className='!text-lavender  text-base'>
              Enjoy simplified access, enhanced control, and streamline your financial journey for a more empowered future
            </p>
          </div>
          <img
            src="/images/ecommerce.jpg"
            alt="reliable"
            className='w-full h-[300px] sm:h-full object-cover object-left'
            // width={200}
            // height={200}
            // quality={100}
            // priority={false}
            />
        </div>
      </div>
    </section>
  )
}

export default ImgGrid
