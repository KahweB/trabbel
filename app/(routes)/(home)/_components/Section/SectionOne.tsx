"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const fadeInVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
}

const SectionOne = () => {
    return (
        <div className='mx-auto container lg:mt-8 md:mt-44 mt-64'>
            <div className='flex flex-col md:flex-row gap-8 px-3 lg:px-28'>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ delay: 0.1 }}
                    variants={fadeInVariants}
                    className='group overflow-hidden relative rounded-xl cursor-pointer'>
                    <Image
                        alt=''
                        src="/home/1.jpg"
                        width={1260}
                        height={590}
                        className='rounded-xl transition-transform duration-300 group-hover:scale-102'
                    />


                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ delay: 0.1 }}
                    variants={fadeInVariants}
                    className='group overflow-hidden relative rounded-xl cursor-pointer'>
                    <Image
                        alt=''
                        src="/home/2.jpg"
                        width={1260}
                        height={590}
                        className='rounded-xl transition-transform duration-300 group-hover:scale-102'
                    />


                </motion.div>

            </div>
        </div>
    )
}

export default SectionOne