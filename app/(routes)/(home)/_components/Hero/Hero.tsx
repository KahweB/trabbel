"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import { slides } from '@/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import MainSearch from './MainSearch';


const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    return (
        <div className='relative bg-orange-100 py-16'>
            <div className='container mx-auto px-4 flex flex-col lg:flex-row items-center'>

                {/**Left===================== */}

                <div className='lg:w-1/2 space-y-6 text-center lg:text-left px-6 transition-all duration-500'>
                    <h4 className='text-orange-600 font-bold text-lg'>
                        Lets Go Now
                    </h4>
                    <h1 className='text-3xl md:text-5xl font-semibold text-gray-900 lg:h-1/4 md:h-35'>
                        {slides[currentSlide].title}
                    </h1>
                    <p className='text-gray-600 text-base md:text-lg'>
                        {slides[currentSlide].description}
                    </p>
                    <Button className='bg-orange-500 hover:bg-orange-600 hover:cursor-pointer'>
                        {slides[currentSlide].buttonText}
                    </Button>
                </div>

                {/**Right======================== */}

                <div className='lg:w-1/2 mt-12 lg:mt-0 w-full'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        navigation={false}
                        loop={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="w-full"
                        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className='relative rounded-3xl overflow-hidden'>
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        width={800}
                                        height={600}
                                        className='w-full h-auto object-cover'
                                    />
                                </div>
                            </SwiperSlide>
                        ))}


                    </Swiper>
                </div>
                <MainSearch />

            </div>

        </div>
    )
}

export default Hero