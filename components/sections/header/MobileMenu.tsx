import React from 'react'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { navigationLinks } from '@/constants'


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
                        <div className='mt-8 flex flex-col gap-3'>

                            {navigationLinks.map((links, index) => (
                                <SheetClose asChild key={index}>
                                    <Link href={links.href} key={index} className='font-semibold text-3xl  block hover:text-orange-500'>{links.label}</Link>
                                </SheetClose>


                            ))}


                        </div>

                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default MobileMenu