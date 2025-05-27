"use client"
import { Button } from '@/components/ui/button'
import React, { useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs';



const AboutUs = () => {
    const titleText = useRef(null);
    const paragrapghRef1 = useRef(null);
    const paragrapghRef2 = useRef(null);
    const buttonsRef = useRef(null);

    useEffect(() => {

        animate(titleText.current, {
            translateY: [-50, 0],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duraiton: 1000,
            delay: 200
        });
        animate([paragrapghRef1.current, paragrapghRef2.current], {
            translateY: [30, 0],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 800,
            delay: stagger(200)
        });
        animate(buttonsRef.current, {
            scale: [0.8, 1],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 800,
            delay: stagger(300)
        })




    });


    return (
        <div className='bg-orange-100'>
            <div className='mx-auto container text-center py-16 px-6 lg:px-28'>
                <h2 ref={titleText} className='sdf text-2xl lg:text-4xl font-bold text-blue-600 mb-4'>WELCOME TO TRABBEL</h2>
                <div className='flex justify-center items-center mb-6'>
                    <hr className='border-gray-300 w-1/5' />
                    <span className='mx-3 text-gray-400 text-xl'>&#128064;</span>
                    <hr className='border-gray-300 w-1/5' />

                </div>
                <p ref={paragrapghRef1} className='text-gray-600 mb-8 max-w-3xl mx-auto'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis sit doloribus ea ipsum pariatur tempora unde dicta excepturi natus quisquam eveniet esse earum repellendus consequatur voluptatum molestiae quos ratione, alias dolor obcaecati quibusdam, beatae neque. Eaque iusto voluptatem repellat maxime possimus quis facere esse? Quidem accusamus saepe ratione eius excepturi.
                </p>
                <p ref={paragrapghRef2} className='text-gray-600 mb-8 max-w-3xl mx-auto'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis sit doloribus ea ipsum pariatur tempora unde dicta excepturi natus quisquam eveniet esse earum repellendus consequatur voluptatum molestiae quos ratione, alias dolor obcaecati quibusdam, beatae neque. Eaque iusto voluptatem repellat maxime possimus quis facere esse? Quidem accusamus saepe ratione eius excepturi.
                </p>
                <div ref={buttonsRef} className='flex justify-center gap-4'>
                    <Button className='bg-green-500 text-white py-6 px-8 rounded-lg hover:bg-green-600 transition duration-500'>
                        Detail
                    </Button>
                    <Button className='bg-orange-500 text-white py-6 px-8 rounded-lg hover:bg-orange-600 transition duration-500'>
                        Browse
                    </Button>
                </div>
            </div>
        </div >
    )
}

export default AboutUs