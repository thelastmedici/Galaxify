import React from 'react'
import { ThemeSwitch } from './themeswitch'
import Image from 'next/image'
import Link from 'next/link'
import { yeseva, josefin } from '../font'

const Header = () => {
  return (
    <header className={`flex justify-center items-center w-full max-w-[1280px] mx-auto text-black dark:text-white ${josefin.className} py-4`}>
      <nav className='w-full flex items-center justify-between'>
      <Image 
      src="/images/3dlogo.jpg"
      alt="logo"
      width={100}
      height={100}
      quality={100}

      />

      <div className={`flex items-center gap-6 text-light tracking-normal`}>
        {
          [
            ['about us', 'about'],
            [ 'contact us', 'contact' ],
            [ 'our products', 'products' ]
          ].map(([text, link]) => (
            <Link href={link} key={link}>
              { text }
            </Link>
          ))
        }
      </div>
      <div className="flex items-center space-x-2">
      <Link 
      className="py-2 px-4 rounded-md bg-[#07070A] dark:bg-white text-white dark:text-[#07070A] text-sm"
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
