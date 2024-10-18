import React from 'react'
import { dmsans, sofia } from '../font'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail, MdWhatsapp } from "react-icons/md";
import Link from 'next/link';

const page = () => {
  return (
    <div className="w-full min-h-screen !text-lavender">
      <section className="w-full h-[40vh] bg-[url('/images/noise.png')] mt-[60.08px] rounded-b-3xl flex flex-col items-center justify-center">
        <h1 className={`${ dmsans.className} text-40 md:!text-[70px] font-bold text-darkViolet`}>
          Contact us
        </h1>
        <p className={`${ sofia.className } text-lg`}>
          We can&apos;t wait to connect with you
        </p>
      </section>

      <section className='p-10 max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-y-10'>
        <div className=''>
          <h1 className={`${ dmsans.className} !text-5xl font-bold`}>
            Connect with us
          </h1>
        </div>

        <div className='w-full grid grid-cols-2 gap-4'>
          <div className='flex flex-row gap-4'>
            <div className="py-2">
              <CiPhone size={24}/>
            </div>
            <div className='flex flex-col'>
              <h2 className={`${sofia.className} font-bold text-lg`}>Phone</h2>
              <Link className="text-xs" href="tel:02017003102">0201 700 3102</Link>
              {/* <Link className="text-xs" href="#">+234 999 999 999 </Link> */}
            </div>
          </div>
          <div className='flex flex-row gap-3'>
            <div className="py-2">
              <MdOutlineEmail size={24}/>
            </div>
            <div className='flex flex-col'>
              <h2 className={`${sofia.className} font-bold text-lg`}>Email</h2>
              <Link href="mailto:usegalaxyfi@gmail.com" className="text-sm">usegalaxyfi@gmail.com</Link>
            </div>
          </div>
          <div className='flex flex-row gap-3'>
            <div className="py-2">
              <FaInstagram size={24}/>
            </div>
            <div className='flex flex-col'>
              <h2 className={`${sofia.className} font-bold text-lg`}>Instagram</h2>
              <Link className="text-sm text-darkViolet font-semibold" href="https://www.instagram.com/usegalaxyfi" target='_blank'>
                @usegalaxyfi
              </Link>
            </div>
          </div>
          <div className='flex flex-row gap-3'>
            <div className="py-2">
              <FaXTwitter size={24}/>
            </div>
            <div className='flex flex-col'>
              <h2 className={`${sofia.className} font-bold text-lg`}>X</h2>
              <Link className="text-sm text-darkViolet font-semibold" href="https://x.com/useGalaxyFi" target='_blank'>
                @useGalaxyFi
              </Link>
            </div>
          </div>
          <div className='w-fit'>
            <div className='flex flex-col w-fit'>
              <Link href="#" className="px-4 py-2 rounded-3xl bg-[#069E06] text-base flex items-center space-x-2 font-semibold">
                <MdWhatsapp size={20}/>
                <span className="inline-flex whitespace-nowrap">
                  Chat with us
                </span>
              </Link>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default page
