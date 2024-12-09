import Brands from '@/components/Brands';
import { HeroContent } from '@/components/HeroContent'
import { statisticsData, teamData } from '@/lib/constant';
import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Giaic UI/IX Hackathon | About",
    description: "Giaic UI/IX Hackathon made by Anas Ahmed | About Page",
};

export const dynamic = 'force-static'; //ssg becuase there is no dynamic data.


const page = () => {
    const heroContent = [
        {
            date: "ABOUT COMPANY",
            title: "ABOUT US",
            description: [
                "We know how large objects will act,",
                "but things on a small scale."
            ],
            ctaText: "Get Qoute Now"
        },
        {
            date: "WORK WITH US",
            title: "Now Let's grow Yours",
            description: [
                "The gradual accumulation of information about atomic and ",
                "small-scale behavior during the first quarter of the 20th."
            ],
            ctaText: "Button"
        }
]
    return (
        <main className="flex flex-col px-3 items-center justify-between ">

            <section className="flex overflow-hidden relative flex-col items-center px-20 pb-4 w-full min-h-[716px] max-md:px-5 max-md:max-w-full">
                <Image
                    loading="lazy"
                    src="/background.png"
                    fill
                    alt="hero"
                    className="object-cover absolute size-full "
                />
                <div className="flex overflow-hidden relative flex-col justify-center items-center py-8 max-md:max-w-full">
                    <div className="flex overflow-hidden flex-wrap gap-8 items-center py-12 max-md:max-w-full">
                        <HeroContent {...heroContent[0]} textColor='black' btnColor={'rgb(2 132 199 / var(--tw-bg-opacity, 1))'} />
                        <div className="flex shrink-0 self-stretch my-auto h-[280px] min-w-[240px] w-[415px]" />
                    </div>
                </div>
            </section>
            <section className="flex overflow-hidden flex-col justify-center items-center py-6 w-full max-md:max-w-full" >
                <div className="flex flex-wrap gap-10 justify-center items-center max-w-full w-[1018px]">


                    <div className="flex flex-col grow shrink justify-center self-stretch py-6 my-auto min-w-[240px] w-[315px]">
                        <div className="flex flex-col max-w-full w-[394px]">
                            <div className="text-sm tracking-wide leading-none text-red-500">
                                Problems trying
                            </div>
                            <h2 id="content-title" className="mt-6 text-2xl font-bold tracking-normal leading-8 text-slate-800">
                                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                            </h2>
                        </div>
                    </div>
                    <div className="overflow-hidden grow shrink self-stretch my-auto text-sm tracking-wide leading-5 min-w-[240px] text-neutral-500 w-[450px] max-md:max-w-full">
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                    </div>
                </div>
            </section>
            <div className="flex overflow-hidden flex-col justify-center items-center px-20 w-full font-bold text-center bg-white max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col justify-center items-center py-20 w-full max-w-[1050px] max-md:max-w-full">
                    <div className="flex flex-wrap gap-8 items-start max-md:max-w-full">
                        {statisticsData.map((stat, index) => (
                            <div key={index} className={`flex flex-col gap-3 items-center ${stat.width}`}>
                                <div className="text-6xl tracking-wide leading-none text-slate-800 max-md:text-4xl">
                                    {stat.value}
                                </div>
                                <div className="text-base tracking-normal text-neutral-500">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <section >
                <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-28 w-full bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
                    <Image
                        loading="lazy"
                        src={'/Video.png'}
                        alt={'Hero section main image'}
                        width={989}
                        height={989}
                        className="object-contain mb-0 w-full aspect-[1.83] max-w-[989px] max-md:mb-2.5 max-md:max-w-full"
                    />
                </div>
            </section>
            <section className="flex overflow-hidden flex-col justify-center items-center px-20 pb-2 w-full bg-white max-md:px-5 max-md:max-w-full" >
                <div className="flex overflow-hidden flex-col items-center py-28 w-full max-w-[1050px] max-md:py-24 max-md:max-w-full">
                    <div className="flex overflow-hidden flex-col items-center max-w-full tracking-wide w-[607px]">
                        <div className="flex overflow-hidden flex-col items-center w-full">
                            <h2 id="team-section-title" className="text-4xl font-bold leading-none text-slate-800">
                                {teamData.title}
                            </h2>
                            <p className="mt-2.5 text-sm leading-5 text-center text-neutral-500 max-md:max-w-full">
                                {teamData.description}
                            </p>
                        </div>
                    </div>
                    <div className="flex overflow-hidden flex-wrap gap-8 items-center mt-28 max-md:mt-10 max-md:max-w-full">
                        {teamData.members.map((member, index) => (
                            <div key={index} className="flex overflow-hidden flex-col self-stretch my-auto min-w-[240px] w-[316px]">
                                <div className="flex overflow-hidden flex-col max-w-full bg-white w-[316px]">
                                    <div className="flex overflow-hidden flex-col w-full">
                                        <img
                                            loading="lazy"
                                            src={member.imageSrc}
                                            alt={`Team member ${member.username}`}
                                            className="object-contain w-full aspect-[1.37]"
                                        />
                                    </div>
                                    <div className="flex overflow-hidden flex-col items-center self-center p-8 w-full max-w-[316px] max-md:px-5">
                                        <h3 className="text-base font-bold tracking-normal text-center text-slate-800">
                                            {member.username}
                                        </h3>
                                        <p className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
                                            {member.profession}
                                        </p>
                                        <div className="flex overflow-hidden gap-3 justify-center items-center mt-2.5">
                                            <button
                                                className="focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            >

                                                <FaFacebook color='rgb(14 165 233 / var(--tw-bg-opacity, 1))' className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
                                            </button>
                                            <button
                                                className="focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            >

                                                <FaInstagram color='rgb(14 165 233 / var(--tw-bg-opacity, 1))' className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
                                            </button>
                                            <button
                                                className="focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            >

                                                <FaTwitter color='rgb(14 165 233 / var(--tw-bg-opacity, 1))' className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className='flex flex-col gap-8 items-center w-full'>
                <h1 className='text-4xl font-semibold'>
                    Big Companies Are Here
                </h1>
                <p className='text-gray-500 text-center font-medium'>Problems trying to resolve the conflict between
                    <br />the two major realms of Classical physics: Newtonian mechanics </p>
                <Brands />
            </section>
            <section className="flex overflow-hidden relative flex-col items-center px-20 pb-4 w-full min-h-[716px] max-md:px-5 max-md:max-w-full">
                <Image
                    loading="lazy"
                    src="/about-hero-2.png"
                    fill
                    alt="hero"
                    className="object-cover absolute size-full "
                />
                <div className="flex overflow-hidden relative flex-col justify-center items-center py-28 max-md:py-24 max-md:max-w-full">
                    <div className="flex overflow-hidden flex-wrap gap-8 items-center py-12 max-md:max-w-full">
                        <HeroContent {...heroContent[1]} textColor='white' btnColor={'rgb(2 132 199 / var(--tw-bg-opacity, 1))'} />
                        <div className="flex shrink-0 self-stretch my-auto h-[280px] min-w-[240px] w-[415px]" />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default page
