import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { IoLogoGithub } from 'react-icons/io'

const Footer = () => {
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
    const instagramImages = Array.from({ length: 11 }, (_, index) => `/instagram/${index + 1}.jpg`)
    return (
        <footer className='relative bg-black text-white'>
            <div></div>
            <div className='container mx-auto py-32 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8'>
                <div className='lg:col-span-2'>
                    <h3 className='text-2xl font-bold'>Travel</h3>
                    <p className='mt-4 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse illum aliquam voluptatibus impedit sed, minus ut magnam exercitationem rem fuga.</p>
                    <div className='flex mt-4 space-x-4 text-2xl'>
                        {
                            socialLinks.map((e, index) => (
                                <Link key={index} href={e.href} className='hover:text-orange-500'>
                                    {e.icon}
                                </Link>
                            ))
                        }
                    </div>

                </div>
                <div>
                    <h4 className='text-2xl font-bold mb-4'>Useful Links</h4>
                    <div className='space-y-2 text-sm'>
                        {
                            navigationLinks.map((e, index) => (
                                <Link href={e.href} key={index} className='block hover:text-orange-500'>{e.label}</Link>
                            ))
                        }
                    </div>
                </div>
                <div className='lg:col-span-2'>
                    <h3 className='text-2xl font-bold mb-4'>Instagram</h3>
                    <div className='grid grid-cols-6 gap-2'>
                        {
                            instagramImages.map((src, index) => (
                                <Image
                                    key={index}
                                    alt={`instagram image ${index}`}
                                    src={src}
                                    width={50}
                                    height={50}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer