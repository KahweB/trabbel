import React from 'react'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { navigationLinks } from '@/links'


const MobileMenu = () => {

    return (
        <Sheet>
            <SheetTrigger>
                <div className='p-3 lg:hidden  bg-orange-500 cursor-pointer text-white rounded-full' >
                    <Menu />
                </div>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription>
                        {navigationLinks.map((links, index) => (
                            <Link href={links.href} key={index} className='text-orange-500'>{links.label}</Link>
                        ))}
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default MobileMenu