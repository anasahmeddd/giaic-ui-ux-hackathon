import Brands from '@/components/Brands'
import StartTrail from '@/components/StartTrail'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Giaic UI/IX Hackathon | Pricing",
    description: "Giaic UI/IX Hackathon made by Anas Ahmed | Pricing PAge",
};

export const dynamic = 'force-static'; //ssg becuase there is no dynamic data.


const page = () => {

    const planFeature = [
        { src: "/icons/green-circle-tick.png", text: "Unlimited product updates" },
        { src: "/icons/green-circle-tick.png", text: "Unlimited product updates" },
        { src: "/icons/green-circle-tick.png", text: "Unlimited product updates" },
        { src: "/icons/gray-circle-tick.png", text: "1gb Cloud storage" },
        { src: "/icons/gray-circle-tick.png", text: "Email and community support" },
    ]
    return (
        <main>
            {/* Hero sec */}
            <section className="flex justify-center gap-3 sm:mt-10 items-center flex-col w-full">
                <div className="text-base font-semibold"></div>
                <p className="mt-9 text-gray-500 font-semibold text-xl tracking-wide leading-8 texst-neutral-50">
                    PRICING
                </p>
                <h1 className="mt-9 text-6xl font-semibold tracking-wide leading-none max-md:text-4xl">
                    Simple Pricing
                </h1>
                <nav className='flex gap-1 py-8 w-fsull px-5 md:px-36 text-gray-500 font-semibold  items-center'>
                    <Link href={'/'}>Home
                    </Link>
                    <BiChevronRight />
                    <span><Link className='text-black' href={'/pricing'}>Pricing</Link></span>
                </nav>
            </section>
            {/* pricing sec */}
            <section className="flex bg-neutral-100 justify-center gap-3 mt-10 items-center flex-col w-full">
                <h1 className="mt-9 text-6xl font-semibold tracking-wide leading-none max-md:text-4xl">
                    Pricing
                </h1>
                <p className="mt-2 text-center text-gray-500 font-semibold text-md tracking-wide leading-8 texst-neutral-50">
                    Problems trying to resolve the conflict between <br />
                    the two major realms of Classical physics: Newtonian mechanics
                </p>
                <nav className='flex gap-1 py-8 w-fsull px-5 md:px-36 text-gray-500 font-semibold  items-center'>
                    <Link href={'/'}>Home
                    </Link>
                    <BiChevronRight />
                    <span><Link className='text-black' href={'/pricing'}>Pricing</Link></span>
                </nav>

                <div className="flex items-center gap-4">
                    <p className='font-semibold'>Monthly</p>
                    <Image src={'/icons/check-input.png'} alt='check icon' width={40} height={40} />
                    <p className='font-semibold'>Yearly</p>
                    <button className='text-sky-500 bg-sky-200 rounded-full px-4 py-3'>
                        Save 25%
                    </button>
                </div>
                {/* price Carda */}
                <div className="flex max-xl:gap-7 items-center flex-wrap sm:px-14 p-6 justify-center">
                    <div id='1' className='bg-white p-12 rounded-md flex items-center flex-col gap-10'>
                        <h2 className='font-bold text-3xl'>
                            FREE
                        </h2>
                        <p className='text-gray-500 font-semibold text-center'>Organize across all <br /> apps by hand</p>
                        <h1 className='flex gap-2 text-4xl font-bold text-sky-500'>0 <span className='text-2xl font-semibold'>$ <br />Per Month</span></h1>
                        <div className="flex flex-col gap-5 items-start ">
                            {planFeature.map((item, _) => (
                                <div key={_} className='flex gap-2 items-center'>
                                    <Image src={item.src} alt={item.src} width={30} height={30} />
                                    <p className='font-semibold'>{item.text}</p>
                                </div>
                            ))}
                        </div>
                        <button className='sm:px-12  px-4 py-3 rounded-md bg-slate-700 text-white'>Try for free</button>
                    </div>
                    <div id='2' className='bg-slate-700 xl:scale-105 text-white p-12 rounded-md flex items-center flex-col gap-10'>
                        <h2 className='font-bold text-3xl'>
                            STANDARD
                        </h2>
                        <p className='font-semibold text-center'>Organize across all <br /> apps by hand</p>
                        <h1 className='flex gap-2 text-4xl font-bold text-sky-500'>9.99 <span className='text-2xl font-semibold'>$ <br />Per Month</span></h1>
                        <div className="flex flex-col gap-5 items-start ">
                            {planFeature.map((item, _) => (
                                <div key={_} className='flex gap-2 items-center'>
                                    <Image src={item.src} alt={item.src} width={30} height={30} />
                                    <p className='font-semibold'>{item.text}</p>
                                </div>
                            ))}
                        </div>
                        <button className='sm:px-12  px-4 py-3 rounded-md bg-sky-500 text-white'>Try for free</button>
                    </div>
                    <div id='3' className='bg-white p-12 rounded-md flex items-center flex-col gap-10'>
                        <h2 className='font-bold text-3xl'>
                            PREMIUM
                        </h2>
                        <p className='text-gray-500 font-semibold text-center'>Organize across all <br /> apps by hand</p>
                        <h1 className='flex gap-2 text-4xl font-bold text-sky-500'>19.99 <span className='text-2xl font-semibold'>$ <br />Per Month</span></h1>
                        <div className="flex flex-col gap-5 items-start ">
                            {planFeature.map((item, _) => (
                                <div key={_} className='flex gap-2 items-center'>
                                    <Image src={item.src} alt={item.src} width={30} height={30} />
                                    <p className='font-semibold'>{item.text}</p>
                                </div>
                            ))}
                        </div>
                        <button className='sm:px-12  px-4 py-3 rounded-md bg-sky-500 text-white'>Try for free</button>
                    </div>
                </div>
            </section>

            {/* Brands */}

            <section className='flex flex-col pt-16 bg-neutral-50 items-center'>
                <h4 className='text-xl font-medium'>Trusted By Over 4000 Big Companies</h4>
                <Brands />
            </section>

            {/* FAQ's */}

            <section className="flex  justify-center gap-3 mt-20 items-center flex-col w-full">
                <h1 className="mt-9 text-4xl font-semibold tracking-wide leading-none max-md:text-4xl">
                    Pricing FAQs
                </h1>
                <p className="mt-2 text-center text-gray-500 font-semibold text-md tracking-wide leadsing-8 texst-neutral-50">
                    Problems trying to resolve the conflict between <br />
                    the two major realms of Classical physics
                </p>
                <div className="grid grid-cols-1 mt-12 sm:mt-20 sm:grid-cols-2 gap-6 sm:gap-14">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="flex items-start">
                            <BiChevronRight size={'2rem'} color='rgb(14 165 233 / var(--tw-bg-opacity, 1))' className="object-contain shrink-0 aspect-[0.56] " />

                            <div className='max-w-96 gap-8'>
                                <span className='text-black mb-2 font-semibold'>the quick fox jumps over the lazy dog
                                </span><br />
                                <span className='text-gray-500'>
                                    Met minim Mollie non desert Alamo est sit cliquey
                                    dolor do met sent. RELIT official consequent door ENIM
                                    RELIT Mollie. Excitation venial consequent sent
                                    nostrum met.
                                </span>
                            </div>

                        </div>
                    ))}
                </div>
                <h4 className='text-xl my-8 text-gray-500 font-medium'>Haven't got your answer? Contact our support</h4>

            </section>
            <StartTrail />
        </main>
    )
}

export default page
