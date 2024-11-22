"use client"
import React from 'react'
import { inter, dmsans } from '../font'

const page = () => {
  return (
    <div className="text-white mt-20 w-full max-w-6xl mx-auto min-h-screen mb-20">
      <h1 className={`${inter.className} !mb-0 min-[400px]:text-[80px] text-[60px] sm:text-[80px] md:text-[80px] text-center`}>About <p className={`tracking-wider leading-none !mb-0 font-bold text-gradient inline-block`}>Galaxy<span className='capitalize'>Fi</span></p></h1>   
      <div className='flex flex-col text-center gap-6 mt-10 px-3'>
        <p className={`${dmsans.className} text-lg`}>
        Welcome to <span className="font-semibold">GalaxyFi</span>, the all-in-one financial platform designed to bring you simplicity, control, and endless possibilities in your digital finance experience. At GalaxyFi, we believe that financial freedom and flexibility should be within everyone’s reach, regardless of location or financial background. Our mission is to empower you by providing a secure, versatile app that covers every aspect of your financial journey, from managing crypto to handling local and international transactions, all in one place.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="flex flex-col gap-3 text-center md:text-left justify-center">
            <h1 className={`text-4xl font-bold text-darkViolet ${inter.className}`}>Our Vision</h1>
            <p className={`${dmsans.className} text-lg`}>
            To be the leading digital finance solution in Africa and beyond, uniting the world of traditional and decentralized finance into a seamless, accessible experience for all. We envision a future where GalaxyFi stands as a bridge, connecting users with limitless financial services and helping them thrive in a global, digital economy.
            </p>
          </div>
          <img src="/images/our_vision.png" alt="our vision" className='order-first'/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-between items-center">
          <img src="/images/our_mission.png" alt="our mission" className='order-first md:order-last'/>
          <div className="flex flex-col gap-3 text-center md:text-left justify-center">
            <h1 className={`text-4xl font-bold text-darkViolet ${inter.className}`}>Our Mission</h1>
            <p className={`${dmsans.className} text-lg`}>
            GalaxyFi is on a mission to redefine financial access and inclusivity. We are committed to making financial services convenient, transparent, and affordable, allowing you to handle everything—wallet management, currency conversion, gift card trading, and virtual banking—within a single app. We aim to deliver a user-friendly, secure, and feature-rich platform that empowers people across Africa to manage their finances without limitations.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className={`text-4xl font-bold text-darkViolet !mt-16 ${inter.className}`}>Why GalaxyFi</h1>
          <p className={`${dmsans.className} text-lg`}>
          The inspiration behind GalaxyFi was simple: to create an app that combines multiple financial services under one roof, making it easier for users to manage their financial lives. Our platform brings together a wide range of essential tools, such as personalized crypto wallets, multi-currency support for African countries, a US virtual debit card for freelancers, gift card trading, and bill payments. With GalaxyFi, there’s no need to switch between apps. Now, everything you need is right at your fingertips—an all-in-one app that keeps you connected to what matters most.
          With GalaxyFi, your financial future is limitless. Join us as we build a world where finances work for you, without barriers or boundaries.
          </p>
        </div>
      </div>
    </div>
  )
}

export default page
