import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const StartTrail = () => {
  return (
    <section className="flex  px-4 sm:px-14  justify-center gap-3 py-20 items-center flex-col w-full">
                <h1 className="mt-9 text-center  text-6xl font-semibold tracking-wide leading-none max-md:text-4xl">
                    Start your 14 days free trial
                </h1>
                <p className="mt-9 text-center text-gray-500 font-semibold text-xl tracking-wide leading-8 texst-neutral-50">
                    Met minim Mollie non desert Alamo est sit cliquey dolor <br />
                    do met sent. RELIT official consequent.
                </p>
                <button className='px-16 py-3 my-8 rounded-md bg-sky-500 text-white'>Try it free now</button>
                <div className='flex items-center gap-4 sm:gap-8'>
                    <FaTwitter size={'2rem'} color='rgb(14 165 233 / var(--tw-bg-opacity, 1))'/>
                    <FaFacebook size={'2rem'} color='darkblue'/>
                    <FaInstagram size={'2rem'}/>
                    <FaLinkedin size={'2rem'} color='rgb(3 105 161 / var(--tw-bg-opacity, 1))'/>
                </div>
            </section>
  )
}

export default StartTrail
