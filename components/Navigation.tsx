import Link from 'next/link'
import React from 'react'
import { BiCart, BiChevronRight, BiHeart, BiSearch, BiUser } from 'react-icons/bi'
const Navigation = () => {
    return (
        <nav className="flex py-4 px-8 flex-wrap items-center justify-between">
            <div className="flex flex-wrap w-1/2 justify-between">

                <Link href={'/'} className="text-3xl font-semibold">
                    Bandage
                </Link>
                <ul className='flex flex-wrap gap-2 md:gap-4 items-center'>
                    <Link href={'/'} className="text-lg font-medium">
                        Home
                    </Link>
                    <Link href={'/shop'} className="text-lg flex gap-1 items-center font-medium">
                        Shop <BiChevronRight />
                    </Link>
                    <Link href={'/about'} className="text-lg font-medium">
                        About
                    </Link>
                    <Link href={'/blog'} className="text-lg font-medium">
                        Blog
                    </Link>
                    <Link href={'/contact'} className="text-lg font-medium">
                        Contact
                    </Link>
                    <Link href={'/pages'} className="text-lg font-medium">
                        Pages
                    </Link>

                </ul>
            </div>
            <ul className="flex gap-4 justify-between items-center">
                <Link href={'/auth'} className="flex gap-1 items-center text-lg font-medium">
                    <BiUser size={'1.5rem'} /> Login / Register
                </Link>
                <Link href={'/shop'} className="flex gap-1 items-center text-lg font-medium">
                    <BiSearch size={'1.5rem'} />
                </Link>
                <Link href={'/auth'} className="flex gap-1 items-center text-lg font-medium">
                    <BiCart size={'1.5rem'} /> 1
                </Link>
                <Link href={'/auth'} className="flex gap-1 items-center text-lg font-medium">
                    <BiHeart size={'1.5rem'} /> 1
                </Link>
            </ul>
        </nav>
    )
}

export default Navigation
