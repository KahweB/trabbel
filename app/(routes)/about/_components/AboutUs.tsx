import { Button } from '@/components/ui/button'
import React from 'react'

const AboutUs = () => {
    return (
        <div className='bg-orange-100'>
            <div className='mx-auto container text-center py-16 px-6 lg:px-28'>
                <h2 className='text-2xl lg:text-4xl font-bold text-blue-600 mb-4'>WELCOME TO TRABBEL</h2>
                <div className='flex justify-center items-center mb-6'>
                    <hr className='border-gray-300 w-1/5' />
                    <span className='mx-3 text-gray-400 text-xl'>&#128064;</span>
                    <hr className='border-gray-300 w-1/5' />
                </div>
                <p className='text-gray-600 mb-8 max-w-3xl mx-auto'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis sit doloribus ea ipsum pariatur tempora unde dicta excepturi natus quisquam eveniet esse earum repellendus consequatur voluptatum molestiae quos ratione, alias dolor obcaecati quibusdam, beatae neque. Eaque iusto voluptatem repellat maxime possimus quis facere esse? Quidem accusamus saepe ratione eius excepturi.
                </p>
                <p className='text-gray-600 mb-8 max-w-3xl mx-auto'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis sit doloribus ea ipsum pariatur tempora unde dicta excepturi natus quisquam eveniet esse earum repellendus consequatur voluptatum molestiae quos ratione, alias dolor obcaecati quibusdam, beatae neque. Eaque iusto voluptatem repellat maxime possimus quis facere esse? Quidem accusamus saepe ratione eius excepturi.
                </p>
                <div className='flex justify-center gap-4'>
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