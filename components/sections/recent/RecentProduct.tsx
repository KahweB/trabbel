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
        >
            <CarouselContent>
                {packages.map((pkg, index) => (
                    <CarouselItem key={index} className='lg:basis-1/2 xl:basis-1/4'>
                        <div className='p-3'>
                            <Card>
                                <CardHeader className='relative'>
                                    <Image
                                        width={500}
                                        height={500}
                                        src={pkg.image}
                                        alt={pkg.title}
                                        className='w-full h-48 object-cover rounded-t-lg'
                                    />
                                    {
                                        pkg.discount && (
                                            <Badge className='absolute top-3 left-8 bg-green-300 text-black'>
                                                {pkg.discount}
                                            </Badge>
                                        )
                                    }
                                </CardHeader>
                                <CardContent>
                                    <CardTitle>Card Title</CardTitle>
                                    <CardDescription>Card Description</CardDescription>

                                </CardContent>
                                <CardFooter>
                                    <p>Card Footer</p>
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