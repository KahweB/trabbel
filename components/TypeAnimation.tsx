"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';


const TypeAnimationText = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'WELCOME TO TRABBEL',
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                'TRABBEL E HOŞ GELDINIZ',
                2000,
                'WILLKOMMEN BEI TRABBEL',
                2000,
                'BIENVENUE A TRABBEL',
                2000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
            className='text-blue-400 font-bold'
        />
    )
}

export default TypeAnimationText