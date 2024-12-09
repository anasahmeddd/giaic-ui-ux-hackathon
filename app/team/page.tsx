import { GridBanner } from '@/components/GridBanner'
import StartTrail from '@/components/StartTrail'
import { gridBanners, moreTeamData } from '@/lib/constant'
import Link from 'next/link'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Giaic UI/IX Hackathon | Team",
    description: "Giaic UI/IX Hackathon made by Anas Ahmed | Team Page",
};

export const dynamic = 'force-static'; //ssg becuase there is no dynamic data.

const page = () => {
    return (
        <main>
            {/* Hero sec */}
            <section className="flex  px-4 sm:px-14  justify-center gap-3 sm:mt-10 items-center flex-col w-full">
                <div className="text-base font-semibold"></div>
                <p className="mt-9 text-gray-500 font-semibold text-xl tracking-wide leading-8 texst-neutral-50">
                    WHAT WE DO
                </p>
                <h1 className="mt-9 text-6xl text-center font-semibold tracking-wide leading-none max-md:text-4xl">
                    Innovation tailored for you
                </h1>
                <nav className='flex gap-1 py-8 w-fsull px-5 md:px-36 text-gray-500 font-semibold  items-center'>
                    <Link href={'/'}>Home
                    </Link>
                    <BiChevronRight />
                    <span><Link className='text-black' href={'/team'}>Team</Link></span>
                </nav>
                <div className="grid gap-4 px-4 sm:px-14 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                    {gridBanners.slice(4, 9).map((product, index) => (
                        <GridBanner key={index} {...product} />
                    ))}
                </div>
            </section>
            <section className="flex overflow-hidden flex-col justify-center items-center px-20 pb-2 w-full bg-white max-md:px-5 max-md:max-w-full" >
                <div className="flex overflow-hidden flex-col items-center py-28 w-full max-w-[1050px] max-md:py-24 max-md:max-w-full">
                    <div className="flex overflow-hidden flex-col items-center max-w-full tracking-wide w-[607px]">
                        <div className="flex overflow-hidden flex-col items-center w-full">
                            <h2 id="team-section-title" className="text-4xl font-bold leading-none text-slate-800">
                                {moreTeamData.title}
                            </h2>
                        </div>
                    </div>
                    <div className="flex overflow-hidden flex-wrap gap-8 items-center mt-28 max-md:mt-10 max-md:max-w-full">
                        {moreTeamData.members.map((member, index) => (
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
            <StartTrail />
        </main>
    )
}

export default page
