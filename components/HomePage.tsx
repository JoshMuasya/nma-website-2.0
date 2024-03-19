'use client'

import React, { useEffect, useState } from 'react'
import ButtonIcon from './ButtonIcon'
import { ArrowUpCircle } from 'lucide-react';

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  };

  return (
    <div className='hero-background h-screen w-full'>
      <div className='h-full flex flex-col justify-center align-middle px-10'>
        {/* Title */}
        <div className='pb-5'>
          <h1 className='flex flex-col text-5xl font-bold'>
            Explore our
            <span>
              Expertise
            </span>
          </h1>
        </div>

        {/* Button */}
        <div>
          <ButtonIcon
            text='Expertise'
            href='/expertise'
          />
        </div>
      </div>

      {/* Floating icon for scrolling to the top */}
      {isScrolled && (
        <div
          className="fixed bottom-14 right-4 bg-primary p-3 rounded-full cursor-pointer"
          onClick={scrollTop}
        >
          <ArrowUpCircle className="" />
        </div>
      )}
    </div>
  )
}

export default HomePage
