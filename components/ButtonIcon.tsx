'use client'

import React, { useState } from 'react'
import { Button, buttonVariants } from './ui/button'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface ButtonIconProps {
    text: string;
    href: string;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ text, href }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div>
            <Link
                href={href}
                className={`${buttonVariants({ variant: "default" })} text-lg font-semibold transition-all`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {text} {isHovered ? <ArrowTopRightIcon className="ml-2 h-4 w-4" /> : <ArrowRight className="ml-2 h-4 w-4" />}
            </Link>
        </div>
    )
}

export default ButtonIcon
