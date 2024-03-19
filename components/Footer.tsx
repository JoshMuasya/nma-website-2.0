import { Copyright } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <div className='w-screen bg-primary flex flex-row justify-between items-center align-middle fixed bottom-0 left-0 px-10 h-7 text-xs'>
            {/* copyright */}
            <div className=''>
                <h2 className='flex flex-row justify-center items-center align-middle'>
                    Copyright<span><Copyright /></span>2024
                </h2>
            </div>

            {/* created by */}
            <div>
                <h4>
                    Created by Digimatic
                </h4>
            </div>
        </div>
    )
}

export default Footer
