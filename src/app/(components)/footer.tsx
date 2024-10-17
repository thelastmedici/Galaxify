import React from 'react'
import { dmsans, sofia } from '../font'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";;


const Footer = () => {
  return (
    <footer className="bg-darkViolet w-full py-12 flex flex-row px-6 lg:px-3 !text-white">
      <div className='w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-10'>
        {/* left */}
        <div className='flex flex-col justify-between space-y-10'>
          <div className='flex space-x-2 items-center'>
            <img src="/images/galaxyfi.svg" alt="" className='inline-flex w-7 '/>
            <span className='font-medium ml-2'>Galaxyfi</span>
          </div>
          <div className='w-full flex gap-x-6 flex-row'>
            <FaFacebookF size={20} />
            <FaLinkedinIn size={20} />
            <FaXTwitter size={20} />
            <FaInstagram size={20} />
          </div>
        </div>

        {/* middle */}
        <div className='grid grid-cols-1 lg:grid-cols-3 flex-1 gap-10 lg:gap-10'>
          <div className='flex flex-col gap-5'>
            <h1 className={`!text-white ${sofia.className} text-xl`}>Company</h1>
            <ul className={`${dmsans.className} flex flex-col gap-3 text-base font-medium`}>
              <li>About us</li>
              <li>Contact us</li>
              <li>Products</li>
            </ul>
          </div>
          <div className='flex flex-col gap-5'>
            <h1 className={`!text-white ${sofia.className} text-xl`}>Products</h1>
            <ul className={`${dmsans.className} flex flex-col gap-3 text-base font-medium`}>
              
            </ul>
          </div>
          <div className='flex flex-col gap-5'>
            <h1 className={`!text-white ${sofia.className} text-xl`}>Support</h1>
            <ul className={`${dmsans.className} flex flex-col gap-3 text-base font-medium`}>
              <li>Help Center</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>

        {/* right */}
        <div className='flex flex-col gap-5 max-w-[250px] w-full'>
          <p className={`${dmsans.className} text-lg font-medium text-white`}>
            Start your journey with GalaxyFi as we save the digital space with Financial freedom
          </p>

          <div className="flex items-center space-x-3">
            <img src="/images/googleplay.png" alt=""  className='w-28 h-16 object-contain'/>
            <img src="/images/appstore.png" alt="" className='w-28 h-16 object-contain'/>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
