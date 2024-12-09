import Image from 'next/image'
import React from 'react'
import { BiPhone } from 'react-icons/bi'
import { CgMail } from 'react-icons/cg'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Giaic UI/IX Hackathon | Contact",
    description: "Giaic UI/IX Hackathon made by Anas Ahmed | Contact PaGe",
};

export const dynamic = 'force-static'; //ssg becuase there is no dynamic data.


const page = () => {

    return (
        <main className="flex flex-col max-sm:px-4 items-center justify-between ">

            <section className="flex overflow-hidden relative flex-col items-center px-20 pb-4 w-full min-h-[716px] max-md:px-5 max-md:max-w-full">
                <Image
                    loading="lazy"
                    src="/contact-hero.png"
                    fill
                    alt="hero"
                    className="object-cover absolute size-full "
                />
                <div className="flex overflow-hidden relative flex-col justify-center items-center py-8 max-md:max-w-full">
                    <div className="flex overflow-hidden flex-wrap gap-8 items-center py-12 max-md:max-w-full">
                        <div className="flex text-gray-800  overflow-hidden  flex-col self-stretch my-auto min-w-[240px] w-[599px] max-md:max-w-full">
                            <div className="text-base font-semibold">CONTACT US</div>
                            <h1 className="mt-9 max-w-96 text-6xl font-semibold text-whiste tracking-wide leading-none max-md:max-w-full max-md:text-4xl">
                                Get in touch
                                today!
                            </h1>
                            <div className="mt-9 text-gray-500 text-xl tracking-wide leading-8 texst-neutral-50">
                                We know how large objects will act, <br />
                                but things on a small scale
                            </div>
                            <div className="flex gap-2.5 items-start self-start mt-9 text-2xl leading-none text-center">

                            </div>
                            <p className='text-xl font-bold'>Phone: +451 215 215</p>
                            <p className='text-xl mt-3 mb-8 font-bold'>Fax: +451 215 215</p>
                            <div className='flex items-center gap-4 sm:gap-8'>
                                <FaTwitter size={'2rem'} />
                                <FaFacebook size={'2rem'} />
                                <FaInstagram size={'2rem'} />
                                <FaLinkedin size={'2rem'} />
                            </div>
                        </div>
                        <div className="flex shrink-0 self-stretch my-auto h-[280px] min-w-[240px] w-[415px]" />
                    </div>
                </div>
            </section>
            <section className="flex overflow-hidden relative my-8 sm:my-20 flex-col items-center px-20 pb-4 w-full max-md:px-5 max-md:max-w-full">
                <p className='text-center text-lg font-semibold  text-gray-700'>VISIT OUR OFFICE</p>
                <h1 className='text-center font-bold text-4xl mb-12 text-gray-700'>We help small businesses <br /> 
                with big ideas</h1>
                <div className="flex max-xl:gap-7 items-center flex-wrap sm:px-14 p-6 justify-center">
                    <div id='1' className='bg-white p-12 flex items-center flex-col gap-6'>
                        <BiPhone size={'5rem'} color='rgb(14 165 233 / var(--tw-bg-opacity, 1))' />
                        <p className='font-semibold text-center'>georgia.young@example.com<br /> georgia.young@ple.com</p>
                        <p className=' text-xl font-semibold text-center'>
                            Get Support
                        </p>
                        <button
                            className='sm:px-12  px-4 py-3 border border-sky-500 text-sky-500 rounded-full '
                        >
                            Submit Request
                        </button>
                    </div>
                    <div id='2' className='bg-slate-700 text-white p-12 flex items-center flex-col gap-6'>
                        <FaLocationDot size={'5rem'} color='rgb(14 165 233 / var(--tw-bg-opacity, 1))' />
                        <p className='font-semibold text-center'>georgia.young@example.com<br /> georgia.young@ple.com</p>
                        <p className=' text-xl font-semibold text-center'>
                            Get Support
                        </p>
                        <button
                            className='px-12 py-3 border border-sky-500 text-sky-500 rounded-full bg-slate-700'
                        >
                            Submit Request
                        </button>
                    </div>
                    <div id='3' className='bg-white p-12 rounded-md flex items-center flex-col gap-6'>
                        <CgMail size={'5rem'} color='rgb(14 165 233 / var(--tw-bg-opacity, 1))' />
                        <p className='font-semibold text-center'>georgia.young@example.com<br /> georgia.young@ple.com</p>
                        <p className=' text-xl font-semibold text-center'>
                            Get Support
                        </p>
                        <button
                            className='px-12 py-3 border border-sky-500 text-sky-500 rounded-full bg-slate-700s'
                        >
                            Submit Request
                        </button>
                    </div>
                </div>
            </section>
            <section className="flex overflow-hidden relative mb-10 flex-col items-center px-20 pb-4 w-full max-md:px-5 max-md:max-w-full">
                <div id='1' className='bg-white p-12 flex items-center flex-col gap-6'>
                    <Image
                        src={'/icons/curve-arrow-d.png'}
                        alt='arrow down'
                        width={80}
                        className='-rotate-12'
                        height={80}
                    />
                    <p className='font-semibold text-center'>
                        WE Can't WAIT TO MEET YOU
                    </p>
                    <h2 className='font-bold text-5xl'>
                        Let's Talk
                    </h2>
                    <button className='sm:px-12  px-4 py-3 rounded-md bg-sky-500 text-white'>
                        Try it free now
                    </button>

                </div>

            </section>
        </main>
    )
}

export default page
