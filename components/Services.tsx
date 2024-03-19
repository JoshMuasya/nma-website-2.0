'use client'

import React, { useEffect, useState } from 'react'
import ButtonIcon from './ButtonIcon'

import { Progress } from "@/components/ui/progress"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { CarouselApi } from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card"

import Image from 'next/image'
import Link from 'next/link'

const Services = () => {

    const serviceData = [
        { image: '/Banking.jpg', text: 'Banking Finance' },
        { image: '/Corporate.jpg', text: 'Corporate M&A' },
        { image: '/Dispute.jpg', text: 'Dispute Resolution' },
        { image: '/Trade.jpg', text: 'International Trade' },
        { image: '/social.png', text: 'Intellectual Property' },
        { image: '/Intellectual.jpg', text: 'Private Client' },
        { image: '/road2.png', text: 'Projects & Infrastructure' },
        { image: '/Estate.jpg', text: 'Real Estate' },
        { image: '/Tax.jpg', text: 'Tax' },
        { image: '/Employment.jpg', text: 'Employement' }
    ];

    return (
        <div className='w-full mt-16 flex flex-col justify-center items-center align-middle' id='services'>
            <div className='flex flex-col justify-center align-middle items-center pb-20 w-full'>
                {/* Title */}
                <div className='flex flex-row justify-between align-middle items-center w-full px-10 py-5'>
                    <h1 className='text-xl md:text-4xl font-bold'>
                        Services
                    </h1>

                    <ButtonIcon
                        text='Read More'
                        href='/expertise'
                    />
                </div>

                {/* Services */}
                <div className='w-full flex flex-col justify-center items-center align-middle'>
                    {/* Images */}
                    <div className='py-10 h-full w-full px-16'>
                        <Carousel
                            className="w-full h-full"
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                        >
                            <CarouselContent className="-ml-1">
                                {serviceData.map((service, index) => (
                                    <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                        <div className="p-3">
                                            <Card>
                                                <CardContent
                                                    className="flex relative aspect-square items-center justify-center p-10">
                                                    <Image
                                                        src={service.image}
                                                        fill={true}
                                                        alt="Logo"
                                                        className='rounded-2xl'
                                                    />

                                                    {/* Overlay */}
                                                    <div className='bg-foreground hover:bg-primary hover:opacity-65 absolute z-0 h-full w-full opacity-40 rounded-2xl' />

                                                    <Link
                                                        href=''
                                                        className="text-2xl absolute bottom-2 font-semibold z-10 text-secondary"
                                                    >
                                                        {service.text}
                                                    </Link>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
