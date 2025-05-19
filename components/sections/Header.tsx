
import React from 'react'

import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { MessageCircle, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Herr_Von_Muellerhoff } from 'next/font/google';
import { getHmrRefreshHash } from 'next/dist/server/app-render/work-unit-async-storage.external';





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
    const navigationLinks = [
        {
            href: "/", label: "Home"
        },
        {
            href: "/about", label: "About"
        },
        {
            href: "/contact", label: "Contact"
        },
        {
            href: "/hotels", label: "Hotels"
        },
        {
            href: "/rent-a-cars", label: "Rent A Car"
        },
        {
            href: "/trips", label: "Trips"
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
                <div className='hidden md:flex items-center space-x-4'>
                    {
                        socialLinks.map((e, index) => (
                            <Link key={index} href={e.href} className='hover:text-orange-500'>
                                {e.icon}
                            </Link>
                        ))
                    }
                </div>
            </div>
            {/**nav bar */}
            <div className='bg-white h-28 text-black shadow flex items-center'>
                <div className='container mx-auto px-4 py-3 flex justify-between items-center'>
                    <Image
                        src={"/logo.png"}
                        alt='travel'
                        width={210}
                        height={50}
                        className='w-36 lg:w-52 h-auto'
                    />
                    <nav className='hidden lg:flex space-x-8 text-lg font-semibold'>
                        {
                            navigationLinks.map((e, index) => (
                                <Link href={e.href} key={index}>{e.label}</Link>
                            ))
                        }
                    </nav>


                </div>
            </div>

        </header>
    )
}

export default Header