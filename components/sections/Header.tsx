
import React from 'react'

import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { MessageCircle, Phone } from 'lucide-react';





const Header = () => {
    const socialLinks = [
        {
            href: "#", icon: <FaXTwitter />
        },
        {
            href: "#", icon: <IoLogoGithub />
        },
        {
            href: "#", icon: <FaInstagram />
        }
    ]
    return (
        <header className='bg-black text-white'>
            <div className='flex container mx-auto h-16 justify-center md:justify-between items-center px-4 py-2 text-sm'>
                <div className='flex items-center gap-5'>
                    <div className='flex gap-3 items-center'>
                        <div className='bg-white p-2 rounded-full'>
                            <MessageCircle size={12} className='text-orange-500' />

                        </div>
                        info@trabbel.com
                    </div>

                    <div className='flex gap-3 items-center'>
                        <div className='bg-white p-2 rounded-full'>
                            <Phone size={12} className='text-orange-500' />
                        </div>
                        123 123 13 12
                    </div>


                </div>
            </div>
        </header>
    )
}

export default Header