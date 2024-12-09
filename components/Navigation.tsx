'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { BiCart, BiChevronRight, BiHeart, BiMenuAltRight, BiSearch, BiUser } from 'react-icons/bi'
const Navigation = () => {
    const [open, setOpen] = useState(false)
    return (
        <header className='border-b'>

            <nav className="flex py-4 px-8 flex-wrap items-center justify-between">
                <div className="flex flesx-wrap w-1/2 justify-between">

                    <Link href={'/'} className="text-3xl font-semibold">
                        Bandage
                    </Link>
                    <ul className='flex max-lg:hidden  text-gray-500 gap-2 md:gap-4 items-center'>
                        <Link href={'/'} className="text-lg font-medium">
                            Home
                        </Link>
                        <Link href={'/shop'} className="text-lg flex gap-1 items-center font-medium">
                            Shop <BiChevronRight />
                        </Link>
                        <Link href={'/about'} className="text-lg font-medium">
                            About
                        </Link>
                        <Link href={'/pricing'} className="text-lg font-medium">
                            Pricing
                        </Link>
                        <Link href={'/contact'} className="text-lg font-medium">
                            Contact
                        </Link>
                        <Link href={'/team'} className="text-lg font-medium">
                            Team
                        </Link>

                    </ul>
                </div>
                <ul className="flex flex-wrap gap-4 text-sky-500 justify-between items-center">
                    <Link href={'/auth'} className="flex max-lg:hidden  gap-1 items-center text-lg font-medium">
                        <BiUser size={'1.5rem'} /> Login / Register
                    </Link>
                    <Link href={'/shop'} className="flex gap-1 items-center text-lg font-medium">
                        <BiSearch size={'1.5rem'} />
                    </Link>
                    <Link href={'/auth'} className="flex gap-1 items-center text-lg font-medium">
                        <BiCart size={'1.5rem'} /> 1
                    </Link>
                    <Link href={'/auth'} className="flex max-lg:hidden gap-1 items-center text-lg font-medium">
                        <BiHeart size={'1.5rem'} /> 1
                    </Link>
                    <button onClick={() => setOpen(!open)} className="flex lg:hidden gap-1 items-center text-lg font-medium">
                        <BiMenuAltRight size={'1.5rem'} />
                    </button>
                </ul>
                {/* mob nav */}
            </nav>
            {open && <nav className='duration-300 text-gray-500 lg:hidden  transition-all'>
                <ul onClick={()=>setTimeout(()=>setOpen(false),130)} className='flex border-b gap-2 font-semibold py-4 text-2xl flex-col items-center w-full'>
                    <Link href={'/'} className='hover:bg-neutral-100 py-2 w-full text-center'>
                        Home
                    </Link>
                    <Link href={'/shop'} className='hover:bg-neutral-100 py-2 w-full text-center'>
                        Shop
                    </Link>
                    <Link href={'/about'} className='hover:bg-neutral-100 py-2 w-full text-center'>
                        About
                    </Link>
                    <Link href={'/pricing'} className='hover:bg-neutral-100 py-2 w-full text-center'>
                        Pricing
                    </Link>
                    <Link href={'/contact'} className='hover:bg-neutral-100 py-2 w-full text-center'>
                        Contact
                    </Link>
                    <Link href={'/team'} className='hover:bg-neutral-100 py-2 w-full text-center'>
                        Team
                    </Link>
                </ul>
            </nav>}
        </header>
    )
}

export default Navigation
