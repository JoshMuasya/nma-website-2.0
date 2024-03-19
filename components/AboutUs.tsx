'use client'

import React from 'react'
import ButtonIcon from './ButtonIcon'
import Link from 'next/link'

const AboutUs = () => {
    return (
        <div className='w-full mt-20' id='about'>
            <div className='flex flex-col lg:flex-row justify-around align-middle items-center pb-20'>
                {/* Left */}
                <div className='flex flex-row justify-between align-middle items-start w-full p-10'>
                    {/* Text */}
                    <div className='pb-5'>
                        <h1 className='text-4xl font-bold pb-4'>
                            About Us
                        </h1>

                        <div>
                            Our Mission
                        </div>

                        <div>
                            Our Vision
                        </div>
                    </div>

                    {/* Button */}
                    <div>
                        <ButtonIcon
                            text='Read More'
                            href='/about'
                        />
                    </div>
                </div>

                {/* Right */}
                <div className='flex flex-col justify-center align-middle w-full lg:max-w-md font-poppins text-3xl px-20 lg:px-0'>
                    <Link
                        href='/about'
                        className='pb-3'
                    >
                        About Us
                    </Link>

                    <div className='border-secondary-foreground border-t-4 w-full pb-6' />

                    <Link
                        href='/expertise'
                        className='pb-3'
                    >
                        Expertise
                    </Link>

                    <div className='border-secondary-foreground border-t-4 w-full pb-6' />

                    <Link
                        href='/#contact'
                        className='pb-3'
                    >
                        Contact Us
                    </Link>

                    <div className='border-secondary-foreground border-t-4 w-full pb-6' />
                </div>
            </div>
        </div>
    )
}

export default AboutUs
