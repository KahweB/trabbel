import Footer from '@/components/sections/Footer'
import Header from '@/components/sections/Header'
import React from 'react'

interface RouteLayoutProps {
    children: React.ReactNode;
}

const RouteLayout = ({ children }: RouteLayoutProps) => {
    return (
        <div>
            <Header />
            <div className='min-h-screen'>
                {children}
            </div>

            <Footer />
        </div>
    )
}

export default RouteLayout