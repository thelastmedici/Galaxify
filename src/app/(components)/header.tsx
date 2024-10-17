import React from 'react'
import { ThemeSwitch } from './themeswitch'
import Image from 'next/image'
import Link from 'next/link'
import { josefin } from '../font'

const Header = () => {
  return (
    <header className={`flex justify-center items-center w-full mx-auto text-black dark:text-lavender ${josefin.className} py-4 fixed backdrop-blur-xl left-0 top-0 z-[100] px-3`}>
      <nav className='w-full flex items-center justify-between max-w-[1280px]'>
        <Link href="/">
          <Image 
          src="/images/galaxyfi.svg"
          alt="logo"
          width={40}
          height={40}
          quality={100}
          />
        </Link>

      <div className={`sm:flex items-center gap-6 text-light tracking-normal hidden`}>
        {
          [
            ['about us', '/'],
            [ 'contact us', '/contact' ],
            [ 'our products', '/' ]
          ].map(([text, link]) => (
            <Link href={link} key={link}>
              { text }
            </Link>
          ))
        }
      </div>
      <div className="flex items-center space-x-2">
        <Link 
        className="py-2 px-4 rounded-md bg-darkViolet text-lavender text-sm"
        href="/waitlist">
          Join Waitlist
        </Link>
        <ThemeSwitch />
      </div>
      </nav>
    </header>
  )
}

export default Header
