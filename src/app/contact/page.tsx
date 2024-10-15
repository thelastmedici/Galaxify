import React from 'react'
import { josefin, yeseva } from '../font'
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail, MdWhatsapp } from "react-icons/md";
import Link from 'next/link';

const page = () => {
  return (
    <div className="w-full min-h-screen">
      <section className="w-full h-[40vh] bg-[url('/images/noise.png')] mt-[60.08px] rounded-b-3xl flex flex-col items-center justify-center">
        <h1 className={`${ yeseva.className} text-40 md:!text-[70px]`}>
          Contact us
        </h1>
        <p className={`${ josefin.className } text-lg`}>
          We can&apos;t wait to connect with you
        </p>
      </section>

      <section className='p-10 max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-y-10'>
        <div className=''>
          <h1 className={`${ yeseva.className} !text-5xl`}>
            Connect with us
          </h1>
        </div>

        <div className='w-full grid grid-cols-2 gap-4'>
          <div className='flex flex-row gap-4'>
            <div className="py-2">
              <CiPhone />
            </div>
            <div className='flex flex-col'>
              <h2 className={`${josefin.className} font-bold text-lg`}>Contact</h2>
              <Link className="text-sm" href="#">+234 999 999 999 </Link>
              <Link className="text-sm" href="#">+234 999 999 999 </Link>
            </div>
          </div>
          <div className='flex flex-row gap-3'>
            <div className="py-2">
              <MdOutlineEmail />
            </div>
            <div className='flex flex-col'>
              <h2 className={`${josefin.className} font-bold text-lg`}>Email</h2>
              <Link href="#" className="text-sm">mail@gmail.com</Link>
            </div>
          </div>
          <div className='flex flex-row gap-3'>
            <div className="py-2">
              <FaLinkedinIn />
            </div>
            <div className='flex flex-col'>
              <h2 className={`${josefin.className} font-bold text-lg`}>LinkedIn</h2>
              <Link className="text-sm" href="#">
                @username
              </Link>
            </div>
          </div>
          <div className='flex flex-row gap-3'>
            <div className="py-2">
              <FaInstagram />
            </div>
            <div className='flex flex-col'>
              <h2 className={`${josefin.className} font-bold text-lg`}>Instagram</h2>
              <Link className="text-sm" href="#">
                @username
              </Link>
            </div>
          </div>
          <div className='flex flex-row gap-3'>
            <div className="py-2">
              <FaXTwitter />
            </div>
            <div className='flex flex-col'>
              <h2 className={`${josefin.className} font-bold text-lg`}>X</h2>
              <Link className="text-sm" href="#">
                @username
              </Link>
            </div>
          </div>
          <div className='w-fit'>
            <div className='flex flex-col w-fit'>
              <Link href="#" className="px-4 py-2 rounded-3xl bg-[#069E06] text-base flex items-center space-x-2 font-semibold">
                <MdWhatsapp size={20}/>
                <span className="inline-flex">
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
