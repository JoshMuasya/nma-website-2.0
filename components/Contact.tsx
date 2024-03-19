'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import { Button } from "@/components/ui/button"
import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'

const Contact = () => {
    const handleEmail = () => {
        const recipientEmail = 'muasyajoshua07@gmail.com';
        const gmailComposeUrl = `mailto:${recipientEmail}`;
        window.open(gmailComposeUrl, '_blank');
    }

    const handleWhatsApp =() => {
        const phoneNumber = '+254798040353';
        const whatsappUrl = `https://wa.me/${phoneNumber}`;
        window.open(whatsappUrl, '_blank');
    }

    return (
        <div className='w-full mt-14' id='contact'>
            <div className='flex flex-col lg:flex-row lg:items-start lg:justify-around justify-center align-middle items-center pb-40 w-full px-14'>
                {/* Logo */}
                <Link
                    href=''
                >
                    <Image
                        src="/Logo.png"
                        width={80}
                        height={80}
                        alt="Logo"
                    />
                </Link>

                {/* Get In Touch */}
                <div className='w-full lg:max-w-md py-10 lg:py-0'>
                    {/* Send Message Links */}
                    <div className='flex flex-col justify-center align-middle items-center w-full'>
                        <h1 className='font-bold text-xl pb-5'>
                            Talk to us:
                        </h1>
                        {/* Email */}
                        <div className='flex flex-col justify-center align-middle items-center font-semibold text-base pb-5'>
                            <h1 className='pb-2'>
                                Send us an Email
                            </h1>

                            {/* Button */}
                            <Button 
                            className='font-semibold hover:font-bold'
                            onClick={handleEmail}
                            >
                                Send Email
                            </Button>
                        </div>

                        {/* WhatsApp */}
                        <div className='flex flex-col justify-center align-middle items-center font-semibold text-base pb-5'>
                            <h1 className='pb-2'>
                                Talk to us Directly
                            </h1>

                            {/* Button */}
                            <Button 
                            className='font-semibold hover:font-bold'
                            onClick={handleWhatsApp}
                            >
                                WhatsApp
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Social Media */}
                <div className='flex flex-col align-middle justify-center items-center lg:items-start lg:w-1/5 w-2/3 pt-8 lg:pt-0'>
                    {/* Title */}
                    <h1 className='pb-3 text-2xl'>
                        Our Social Media Links
                    </h1>

                    {/* Links */}
                    <div className='flex flex-row w-full justify-around align-middle'>
                        <TwitterLogoIcon className="h-3 w-3 md:h-6 md:w-6 hover:h-5 hover:w-5 md:hover:h-8 md:hover:w-8" />

                        <InstagramLogoIcon className="h-3 w-3 md:h-6 md:w-6 hover:h-5 hover:w-5 md:hover:h-8 md:hover:w-8" />

                        <LinkedInLogoIcon className="h-3 w-3 md:h-6 md:w-6 hover:h-5 hover:w-5 md:hover:h-8 md:hover:w-8" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
