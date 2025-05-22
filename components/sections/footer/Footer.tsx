import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { IoLogoGithub } from 'react-icons/io'
import { Input } from '../../ui/input'
import { Button } from '../../ui/button'
import { navigationLinks } from '@/constants'

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


    const instagramImages = Array.from({ length: 11 }, (_, index) => `/instagram/${index + 1}.jpg`)
    return (
        <footer className='relative bg-black text-white '>
            <div className='absolute -top-12 left-1/2 transform -translate-x-1/2 bg-orange-500 text-left px-6 py-12 rounded-md shadow-lg w-11/12 max-w-6xl h-72 grid grid-cols-1 md:grid-cols-2 items-center gap-6'>
                <div>
                    <h2 className='text-3xl font-bold'> Ready to get started?</h2>
                    <p className='mt-2 text-lg'>It only takes a few minutes to register your FREE travel account.</p>
                    <Link href="/register">
                        <Button className='mt-4 bg-white text-orange-500 px-6 py-2 font-semibold rounded shadow-md '>
                            OPEN ACCOUNT
                        </Button>
                    </Link>

                </div>
                <div className='felx justify-center relative'>
                    <Image
                        src="/travelfooter.png"
                        alt='footer graphic'
                        height={456}
                        width={564}
                        className='hidden md:block absolute w-full -bottom-28'
                    />


                </div>
            </div>
            <div className='container mx-auto py-56 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8'>
                <div className='lg:col-span-2 mt-16'>
                    <h4 className='text-2xl font-bold mb-3'>Travel</h4>
                    <div className='relative w-16 h-1 bg-orange-500 mb-3'>
                        <div className='absolute top-1/2 left-0 right-0 h-[1px] bg-orange-500'></div>
                        <div className='absolute h-3 w-3 bg-orange-500 rounded-full top-1/2 -translate-y-1/2 animate-move-dot'></div>
                        <div className='absolute h-1.5 w-1.5 ml-0.5 bg-white rounded-full top-1/2 -translate-y-1/2 animate-move-dot'></div>
                    </div>
                    <p className='mt-4 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse illum aliquam voluptatibus impedit sed, minus ut magnam exercitationem rem fuga.</p>
                    <div className='flex mt-4 space-x-4 text-2xl '>
                        {
                            socialLinks.map((e, index) => (
                                <Link key={index} href={e.href} className='hover:text-orange-500'>
                                    {e.icon}
                                </Link>
                            ))
                        }
                    </div>

                </div>
                <div className='lg:col-span-1 mt-16'>
                    <h4 className='text-2xl font-bold mb-4'>Useful Links</h4>
                    <div className='relative w-16 h-1 bg-orange-500 mb-3'>
                        <div className='absolute top-1/2 left-0 right-0 h-[1px] bg-orange-500'></div>
                        <div className='absolute h-3 w-3 bg-orange-500 rounded-full top-1/2 -translate-y-1/2 animate-move-dot'></div>
                        <div className='absolute h-1.5 w-1.5 ml-0.5 bg-white rounded-full top-1/2 -translate-y-1/2 animate-move-dot'></div>
                    </div>
                    <div className='space-y-2 text-sm'>
                        {
                            navigationLinks.map((e, index) => (
                                <Link href={e.href} key={index} className='block hover:text-orange-500'>{e.label}</Link>
                            ))
                        }
                    </div>
                </div>
                <div className='lg:col-span-2 mt-16'>
                    <h4 className='text-2xl font-bold mb-4'>Instagram</h4>
                    <div className='relative w-16 h-1 bg-orange-500 mb-3'>
                        <div className='absolute top-1/2 left-0 right-0 h-[1px] bg-orange-500'></div>
                        <div className='absolute h-3 w-3 bg-orange-500 rounded-full top-1/2 -translate-y-1/2 animate-move-dot'></div>
                        <div className='absolute h-1.5 w-1.5 ml-0.5 bg-white rounded-full top-1/2 -translate-y-1/2 animate-move-dot'></div>
                    </div>
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
                <div className='lg:col-span-2 mt-16'>
                    <h3 className='text-2xl font-bold mb-4'>Subscribe</h3>
                    <div className='relative w-16 h-1 bg-orange-500'>
                        <div className='absolute top-1/2 left-0 right-0 h-[1px] bg-orange-500'></div>
                        <div className='absolute h-3 w-3 bg-orange-500 rounded-full top-1/2 -translate-y-1/2 animate-move-dot'></div>
                        <div className='absolute h-1.5 w-1.5 ml-0.5 bg-white rounded-full top-1/2 -translate-y-1/2 animate-move-dot'></div>
                    </div>
                    <p className='text-sm mb-4 mt-8'>subscribe our newsletter for getting quick updates</p>
                    <div className='flex flex-col sm:flex-row'>
                        <Input
                            type='email'
                            placeholder='Your Email Address'
                            className='w-full px-4 '
                        />
                        <Button className='hover:bg-orange-500' >Subscribe</Button>
                    </div>
                </div>
            </div>
            <div className='container mx-auto py-4 text-center text-sm border-t border-gray-700'>
                <span>Made With Love By Kahwe</span><br />
                <span>Trabbel 2025</span>
            </div>
        </footer >
    )
}

export default Footer