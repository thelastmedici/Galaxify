import React from 'react'
import { dmsans, sofia } from '../font'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";import Link from 'next/link';
import Image from 'next/image';
;


const Footer = () => {
  return (
    <footer className="bg-darkViolet w-full py-12 flex flex-row px-6 lg:px-3 !text-white">
      <div className='w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-10'>
        {/* left */}
        <div className='flex flex-col justify-between space-y-10'>
          <div className='flex space-x-2 items-center'>
            <Image
            src={'/images/galaxy.svg'}
            width={100}
            height={80}
            quality={100}
            alt='logo'
            />
          </div>
          <div className='w-full flex gap-x-6 flex-row'>
            {/* <Link href="#">
              <FaFacebookF size={20} />
            </Link>
            <Link href="">
              <FaLinkedinIn size={20} />
            </Link> */}
            <Link href="https://www.instagram.com/usegalaxyfi" target='_blank'>
              <FaInstagram size={20} />
            </Link>
            <Link href="https://x.com/useGalaxyFi" target="_blank">
              <FaXTwitter size={20} />
            </Link>
          </div>
        </div>

        {/* middle */}
        <div className='grid grid-cols-1 lg:grid-cols-3 flex-1 gap-10 lg:gap-10'>
          <div className='flex flex-col gap-5'>
            <h1 className={`!text-white ${sofia.className} text-xl`}>Company</h1>
            <ul className={`${dmsans.className} flex flex-col gap-3 text-base font-medium`}>
              <Link href="/about">About us</Link>
              <Link href="/contact">Contact us</Link>
              {/* <li>Products</li> */}
            </ul>
          </div>
          {/* <div className='flex flex-col gap-5'>
            <h1 className={`!text-white ${sofia.className} text-xl`}>Products</h1>
            <ul className={`${dmsans.className} flex flex-col gap-3 text-base font-medium`}>
              
            </ul>
          </div> */}
          <div className='flex flex-col gap-5'>
            <h1 className={`!text-white ${sofia.className} text-xl`}>Support</h1>
            <ul className={`${dmsans.className} flex flex-col gap-3 text-base font-medium`}>
              <li className="cursor-not-allowed">Help Center</li>
              <li className="cursor-not-allowed">FAQ</li>
            </ul>
          </div>
        </div>

        {/* right */}
        <div className='flex flex-col gap-5 max-w-[250px] w-full'>
          <p className={`${dmsans.className} text-lg font-medium text-white`}>
            Start your journey with GalaxyFi as we save the digital space with Financial freedom
          </p>

          <div className="flex items-center space-x-3">
            <img src="/images/googleplay.png" alt="googleplay" className=""/>
            <img src="/images/appstore.png" alt="appstore" className=""/> 
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
