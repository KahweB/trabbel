"use client"

import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { packages } from '@/constants'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Clock, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const RecentProduct = () => {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
            className='container mx-auto px-10 lg:px-36 '
        >
            <CarouselContent>
                {packages.map((pkg, index) => (
                    <CarouselItem key={index} className='lg:basis-1/2 xl:basis-1/4'>
                        <div className='p-3'>
                            <Card className='shadow-lg'>
                                <CardHeader className='relative'>
                                    <Image
                                        width={500}
                                        height={500}
                                        src={pkg.image}
                                        alt={pkg.title}
                                        className='w-full h-48 object-cover rounded-lg'
                                    />
                                    {
                                        pkg.discount && (
                                            <Badge className='absolute top-3 left-8 bg-green-300 text-black'>
                                                {pkg.discount}
                                            </Badge>
                                        )
                                    }
                                </CardHeader>
                                <CardContent className='p-3'>
                                    <CardTitle className='h-[120] text-xl'>{pkg.title}</CardTitle>
                                    <CardDescription className='flex item-center text-sm  text-gray-500 mt-2'>
                                        <MapPin className='w-4 h-4 mr-2' />{pkg.location}
                                    </CardDescription>
                                    <CardDescription className='flex item-center text-sm text-gray-500 mt-2'>
                                        <Clock className='w-4 h-4 mr-2' />{pkg.duration}
                                    </CardDescription>
                                    <div className='flex justify-between items-center mt-4'>
                                        <div>
                                            <span className='text-green-400 font-bold text-xl'>{pkg.price}</span>
                                            {pkg.oldPrice && (
                                                <span className='text-gray-400 line-through ml-2'>{pkg.oldPrice}</span>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className='bg-orange-500 hover:bg-orange-600 w-full'>
                                        View Details
                                    </Button>
                                </CardFooter>
                            </Card>

                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className='left-0' />
            <CarouselNext className='right-0' />
        </Carousel>
    )
}

export default RecentProduct