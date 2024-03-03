'use client'

import React from 'react'
import ButtonIcon from './ButtonIcon'

const HomePage = () => {

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
    </div>
  )
}

export default HomePage
