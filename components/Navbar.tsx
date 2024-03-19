'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { NavItems } from './NavItems'
import Image from 'next/image'

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = `w-screen py-5 fixed transition-all z-20 ${scrollY > 0 ? 'bg-background bg-opacity-60' : 'bg-transparent'
    }`;

  return (
    <nav className={navbarClasses}>
      <div className='flex flex-row justify-around items-center align-middle w-full'>
        {/* Logo */}
        <Link
          href=''
          className='flex flex-row justify-center items-center align-middle'
        >
          <Image
            src="/Logo.png"
            width={80}
            height={80}
            alt="Logo"
          />

          <Image
            src="/scale.png"
            className='pl-3'
            width={80}
            height={80}
            alt="Logo"
          />
        </Link>

        {/* NavBar */}
        <NavItems />
      </div>
    </nav>
  )
}

export default Navbar
