"use client"
import TypeAnimationText from '@/components/TypeAnimation'
import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'

import React from 'react'

const SectionTwo = () => {
    return (
        <div className='bg-orange-100 mt-12'>
            <div className='mx-auto container text-center py-16 px-6 lg:px-28'>
                <TypeAnimationText />
                <div className='flex justify-center items-center mb-6'>
                    <hr className='border-gray-300 w-1/5' />
                    <span className='mx-3 text-gray-400 text-xl'>&#128064;</span>
                    <hr className='border-gray-300 w-1/5' />
                </div>
                <p className='text-gray-600 mb-8 max-w-3xl mx-auto'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis sit doloribus ea ipsum pariatur tempora unde dicta excepturi natus quisquam eveniet esse earum repellendus consequatur voluptatum molestiae quos ratione, alias dolor obcaecati quibusdam, beatae neque. Eaque iusto voluptatem repellat maxime possimus quis facere esse? Quidem accusamus saepe ratione eius excepturi.
                </p>
                <div className='flex justify-center gap-4'>
                    <motion.div
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <Button className='bg-green-500 text-white py-6 px-8 rounded-lg hover:bg-green-600 transition duration-500 cursor-pointer'>
                            Detail
                        </Button>

                    </motion.div>

                    <motion.div
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <Button className='bg-orange-500 text-white py-6 px-8 rounded-lg hover:bg-orange-600 transition duration-500 cursor-pointer'>
                            Browse
                        </Button>

                    </motion.div>
                </div>
            </div>
        </div >
    )
}

export default SectionTwo