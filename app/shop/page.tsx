import Brands from '@/components/Brands';
import { ProductCard } from '@/components/ProductCard';
import { categories, products } from '@/lib/constant'
import Image from 'next/image';
import React from 'react'
import { BiChevronRight } from 'react-icons/bi';

const page = () => {
    const breadcrumbItems = [
        { label: "Home", isActive: false },
        { label: "Shop", isActive: true }
    ];
    return (
        <main>
            <div className="flex sm:px-32 overflow-hidden flex-col justify-center items-baseline py-6 w-full font-bold text-center whitespace-nowrap bg-neutral-50 max-md:max-w-full">
                <div className="flex overflow-hidden flex-wrap gap-8 my-auto  justify-between items-center w-full">
                    <div className="overflow-hidden seslf-start text-2xl tracking-normal leading-none text-slate-800  max-md:max-w-full">
                        Shop
                    </div>
                    <div className="flex overflow-hidden flex-col items-end self-stretch my-auto text-sm tracking-wide leading-6 min-w-[240px] w-[509px] max-md:max-w-full">
                        <div className="flex overflow-hidden gap-2 items-center py-2.5">
                            {breadcrumbItems.map((item, index) => (
                                <React.Fragment key={index}>
                                    <div
                                        className={`self-stretch my-auto ${item.isActive ? 'text-stone-300' : 'text-slate-800'}`}
                                        role="link"
                                        tabIndex={0}
                                    >
                                        {item.label}
                                    </div>
                                    {index < breadcrumbItems.length - 1 && 
                                    <BiChevronRight size={'1.5rem'} className="object-contain shrink-0 self-stretch my-auto "/>
                                    }
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex overflow-hidden flex-col justify-center items-center px-20 mb-1 w-full text-white bg-neutral-50 max-md:px-5 max-md:max-w-full">
                <div className="flex overflow-hidden flex-col items-center pb-12 max-md:max-w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-12 place-itemss-center lg:grid-cols-5 gap-5 ">
                        {categories.map((category, index) => (
                            <div key={index} className="flex overflow-hidden flex-col w-[205px]">
                                <div className="flex overflow-hidden flex-col bg-white">
                                    <div className="flex overflow-hidden relative flex-col items-center px-5 py-20 aspect-[0.919] w-[205px] max-md:px-5">
                                        <Image
                                            loading="lazy"
                                            src={category.imageSrc}
                                            fill
                                            alt={`${category.title} category thumbnail`}
                                            className="object-cover absolute inset-0 size-full"
                                        />
                                       
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* filters */}
            <div className="flex overflow-hidden flex-col items-center px-20 w-full bg-white max-md:px-5 max-md:max-w-full">
                <div className="flex overflow-hidden flex-col justify-center items-center py-6 w-full max-w-[1050px] max-md:max-w-full">
                    <div className="flex overflow-hidden flex-wrap gap-10 justify-between items-center w-full max-w-[1049px] max-md:max-w-full">
                        <div className="gap-4 self-stretch px-px my-auto text-sm font-bold tracking-wide leading-6 text-neutral-500">
                            Showing all 12 results
                        </div>
                        <div className="flex gap-4 items-center self-stretch px-px my-auto">
                            <div className="self-stretch my-auto text-sm font-bold tracking-wide leading-6 text-neutral-500">
                                Views:
                            </div>
                            <div className="flex gap-4 items-center self-stretch my-auto">
                                <div className="flex overflow-hidden items-center self-stretch p-4 my-auto rounded-md border border-gray-200 border-solid h-[46px] w-[46px]">
                                    <img
                                        loading="lazy"
                                        src={'https://cdn.builder.io/api/v1/image/assets/TEMP/3a3d26b4b8ef9b01153f9a9e3aaf5640efb1e25bcd5695f85df5f47e66a840ce?placeholderIfAbsent=true&apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f'}
                                        alt={'Grid view'}
                                        className="object-contain self-stretch my-auto w-4 aspect-square"
                                    />
                                </div>
                                <div className="flex overflow-hidden items-center self-stretch p-4 my-auto rounded-md border border-gray-200 border-solid h-[46px] w-[46px]">
                                    <img
                                        loading="lazy"
                                        src={'https://cdn.builder.io/api/v1/image/assets/TEMP/f04d583400d49dd37a415a2393188266e3b09eff18047c9430503dcf3ba690af?placeholderIfAbsent=true&apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f'}
                                        alt={'List view'}
                                        className="object-contain self-stretch my-auto w-4 aspect-square"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 self-stretch px-px my-auto text-sm tracking-wide whitespace-nowrap min-w-[240px]">
                            <div className="flex overflow-hidden flex-col my-auto leading-7 text-neutral-500 w-[141px]">
                                <div className="flex overflow-hidden gap-1.5 px-3.5 py-3 rounded-md border border-solid bg-stone-50 border-zinc-300 max-md:pr-5">
                                    <div className="grow">Popularity</div>
                                    <img
                                        loading="lazy"
                                        src={"https://cdn.builder.io/api/v1/image/assets/TEMP/ee18bfb1513c3f32537bd552cadb1013d4b8cbdd88643a4540e952af02bc3400?placeholderIfAbsent=true&apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f"}
                                        alt='Sort by popularity'
                                        className="object-contain shrink-0 my-auto w-3.5 aspect-[1.75] fill-neutral-500"
                                    />
                                </div>
                            </div>
                            <button
                                className="overflow-hidden px-5 py-2.5 font-bold leading-6 text-center text-white bg-sky-500 rounded-md w-[94px]"
                            >
                                Filters
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Brands />
            <section className="flex flex-col justify-center items-center p-3 sm:p-8">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-12 place-itemss-center lg:grid-cols-4 gap-3 sm:gap-9 lg:gap-14">
                    {products.slice(8, 20).map((product, index) => (
                        <ProductCard key={`product-${index}`} {...product} />
                    ))}
                </div>
                <nav
                    aria-label="Pagination"
                    className="flex overflow-hidden flex-col justify-center mt-12 max-w-full text-sm font-bold tracking-wide leading-6 text-center text-sky-500 whitespace-nowrap bg-white rounded-md border-solid shadow-sm border-[1.346px] border-stone-300  max-md:mt-10"
                >
                    <div className="flex items-start" role="list">
                        <PaginationItem
                            label="First"
                        />
                        {[1, 2, 3].map((page) => (
                            <PaginationItem
                                key={page}
                                label={page.toString()}
                                isActive={page === 2 ? true : false}
                            />
                        ))}
                        <PaginationItem
                            label="Next"
                        />
                    </div>
                </nav>
            </section>
        </main >
    )
}
const PaginationItem = ({
    label,
    isActive,
    isDisabled,
}: {
    label: string;
    isActive?: boolean;
    isDisabled?: boolean;
}) => {
    const baseStyles = "overflow-hidden self-stretch px-5 py-6 border border-solid";
    const activeStyles = isActive ? "text-white bg-sky-500" : "bg-white";

    return (
        <button
            disabled={isDisabled}
            className={`${baseStyles} ${activeStyles}`}
            aria-current={isActive ? "page" : undefined}
        >
            {label}
        </button>
    );
};

export default page
