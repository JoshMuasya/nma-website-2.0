'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'

const formSchema = z.object({
    name: z.string(),
    email: z.string(),
    message: z.string()
})

const Contact = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: ""
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <div className='w-full mt-20' id='contact'>
            <div className='flex flex-col lg:flex-row lg:items-start lg:justify-around justify-center align-middle items-center pb-40 w-full'>
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
                <div className='w-full lg:max-w-md'>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            {/* Name */}
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Email */}
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="name@provider.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Message */}
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Enter your Message here"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit">Send Message</Button>
                        </form>
                    </Form>
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
