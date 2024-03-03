'use client'

import { Separator } from "@/components/ui/separator"
import { EnterIcon, HomeIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { ThemeToggler } from "./ThemeToggler"
import { useEffect, useState } from "react"
import { Contact2Icon, Lightbulb } from "lucide-react"

export function NavItems() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  return (
    <div >
      <div className="flex h-5 items-center space-x-4 text-sm">
        <Link
          href=''
        >
          <TwitterLogoIcon className="h-3 w-3 hover:h-4 hover:w-4 md:h-6 md:w-6 md:hover:h-7 md:hover:w-7" />
        </Link>
        <Separator orientation="vertical" />
        <Link
          href=''
        >
          <InstagramLogoIcon className="h-3 w-3 hover:h-4 hover:w-4 md:h-6 md:w-6 md:hover:h-7 md:hover:w-7" />
        </Link>
        <Separator orientation="vertical" />
        <Link
          href=''
        >
          <LinkedInLogoIcon className="h-3 w-3 hover:h-4 hover:w-4 md:h-6 md:w-6 md:hover:h-7 md:hover:w-7" />
        </Link>
        <Separator orientation="vertical" />
        {/* Theme */}
        <ThemeToggler />
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 font-bold">
        {isMobile ? (
          <Link
          href=''
          >
            <HomeIcon className="h-3 w-3 md:h-6 md:w-6"/>
          </Link>
        ) : (
          <Link
          href=''
          className='text-sm hover:text-base'
        >
          Home
        </Link>
        )}
        <Separator orientation="vertical" />
        {isMobile ? (
          <Link
          href='/#about'
          >
            <EnterIcon className="h-3 w-3 md:h-6 md:w-6"/>
          </Link>
        ) : (
          <Link
          href='/#about'
          className='text-sm hover:text-base'
        >
          About Us
        </Link>
        )}
        <Separator orientation="vertical" />
        {isMobile ? (
          <Link
          href='/#services'
          >
            <Lightbulb className="h-3 w-3 md:h-6 md:w-6"/>
          </Link>
        ): (
          <Link
          href='/#services'
          className='text-sm hover:text-base'
        >
          Expertise
        </Link>
        )}
        <Separator orientation="vertical" />
        {isMobile ? (
          <Link
          href='/#contact'
          >
            <Contact2Icon className="h-3 w-3 md:h-6 md:w-6"/>
          </Link>
        ) : (
          <Link
          href='/#contact'
          className='text-sm hover:text-base'
        >
          Contact Us
        </Link>
        )}
      </div>
    </div>
  )
}
