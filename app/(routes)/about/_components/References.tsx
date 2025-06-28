"use client"
import Image from 'next/image';
import React from 'react'
import Marquee from "react-fast-marquee";

const References = () => {
    const companyLogos = [
        "/company/1.png",
        "/company/2.png",
        "/company/3.png",
        "/company/4.png",
        "/company/5.png",
        "/company/6.png",
        "/company/7.png",
        "/company/8.png",
    ]

    return (
        <div>
            <h2 className='text-center text-2xl lg:text-4xl font-bold text-gray-800 mb-6 mt-10'>
                Thrusted by Leading Companies
            </h2>
            <Marquee
                play={true}
                className=' py-10 mb-30'
                loop={0}
                speed={100}
                pauseOnHover={true}
            >
                {companyLogos.map((logo, index) => (
                    <div key={index} className='flex items-center justify-center w-40 h-auto'>
                        <Image
                            width={700}
                            height={500}
                            src={logo}
                            alt='companylogo'
                            className='w-full h-full object-contain'
                        />

                    </div>
                ))}

            </Marquee>

        </div>
    )
}

export default References