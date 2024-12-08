import Brands from '@/components/Brands';
import { ProductCard } from '@/components/ProductCard';
import { StarRatings } from '@/components/StarRatings';
import {  featureList1, featureList2, products } from '@/lib/constant';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'
import { BiChevronRight } from 'react-icons/bi';
export async function generateMetadata({ params }: { params: { slug: string } }) {
    const product = products.find((i) => params.slug === i.slug)
    if (!product) return;
    return {
        title: `${product.title} | Ecommerce Design by Anas Ahmed.`,
        description: product.title || "Shop high-quality products at Ecommerce Design by Anas Ahmed for giac hackhton practice.",
        openGraph: {
            title: `${product.title} | Ecommerce Design`,
            description: product.title || "Shop high-quality products at Ecommerce Design by Anas Ahmed.",
            url: `${process.env.ECOM_STORE_URL}/products/${params.slug}`,
            images: [
                {
                    url: product.imageSrc || 'fallback-image.jpg',
                    width: 220,
                    height: 250,
                    alt: product.title,
                },
            ],
            site_name: 'Figma to Code Next.js Ecommerce app Design by Anas Ahmed',
        },
    };
}

// ssr rendering
const page = async ({ params }: { params: { slug: string } }) => {
    const product = products.find((i) => params.slug === i.slug)



    if (!product) return notFound();
    return (
        <main className=''>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        name: product.title,
                        description: product.slug || 'flex flex-col px-4 sm:px-10 self-center mt-10 w-full max-md:mt',
                        image: product.imageSrc,
                        offers: {
                            "@type": "AggregateOffer",
                            availability: product.stock > 0
                                ? 'https://schema.org/InStock'
                                : 'https://schema.org/OutOfStock',
                            priceCurrency: "USD",
                            price: product.discountedPrice,
                        },
                        aggregateRating: {
                            "@type": "AggregateRating",
                            ratingValue: product.rating,
                            reviewCount: product.reviews,
                        },
                    }),
                }}
            />
            <nav className='flex gap-1 py-8 w-full px-5 md:px-36 bg-neutral-50 items-center'>
                <Link href={'/'}>Home
                </Link>
                <BiChevronRight />
                <span><Link href={'/shop'}>Shop</Link></span>
            </nav>
            <main className="flex overflow-hidden flex-col items-center px-20 w-full bg-neutral-50 max-md:px-5 max-md:max-w-full">
                <div className="flex overflow-hidden flex-col pb-12 w-full">
                    <div className="flex overflow-hidden justify-center flex-col sm:flex-row gap-8 items-start w-full">
                        <div className="flex overflow-hidden gap-6 sm:w-[510px] flex-col justify-center py-0.5 w-fulls">
                            <img
                                loading="lazy"
                                src={product.imageSrc}
                                alt={product.title}
                                className="object-fill rounded-md sm:h-[450px] aspect-[0.93] w-full"
                            />
                            <div className="flex gap-3 items-center">
                                <img
                                    loading="lazy"
                                    src={'/product/product1.png'}

                                    alt={product.title}
                                    className="object-fill rounded-sm w-28 h-24"
                                />
                                <img
                                    loading="lazy"
                                    src={'/product/product2.jpg'}
                                    alt={product.title}
                                    className="object-fill rounded-sm w-28 h-24"
                                />
                            </div>
                        </div>

                        <section className="flex overflow-hidden flex-col items-start px-6 pt-3 pb-6 min-w-[240px] w-[510px] max-md:px-5 max-md:max-w-full">
                            <h1 className="text-xl tracking-wide text-slate-800">
                                {product.title}
                            </h1>
                            <StarRatings size={1.5} rating={product.rating} reviews={product.reviews} />
                            <div className="mt-5 text-2xl font-bold tracking-normal leading-none text-center text-slate-800">
                                {product.discountedPrice}
                            </div>
                            <div className="flex gap-1.5 items-center mt-1.5 text-sm font-bold tracking-wide leading-6">
                                <span className="self-stretch my-auto text-neutral-500">
                                    Availability :
                                </span>
                                <span className="self-stretch my-auto text-sky-500">{product.stock > 0 ? 'In Stock' : 'Out Of Stock'}</span>
                            </div>
                            <p className="self-stretch mt-8 text-sm tracking-wide leading-5 text-zinc-500 max-md:max-w-full">
                                Met minim Mollie non desert Alamo est sit cliquey dolor <br />
                                do met sent. RELIT official consequent door ENIM RELIT Mollie.{" "}
                                <br />
                                Excitation venial consequent sent nostrum met.
                            </p>
                            <div className="shrink-0 mt-7 max-w-full h-px border border-solid bg-stone-300 border-stone-300 w-[445px]" />
                            <div className="flex gap-2.5 items-center mt-7">
                                {product.colors && product.colors.map((option, index) => (
                                    <div
                                        key={index}
                                        style={{ backgroundColor: option }}
                                        className={`flex shrink-0 self-stretch my-auto rounded-full h-[30px] w-[30px]`}
                                    />
                                ))}
                            </div>
                            <div className="flex overflow-hidden gap-2.5 items-start mt-16 text-sm font-bold tracking-wide leading-6 text-center text-white max-md:mt-10">
                                <button className="overflow-hidden px-5 py-2.5 bg-sky-500 rounded-md">
                                    Select Options
                                </button>
                                <button
                                    className="object-contain shrink-0 w-10 aspect-square"
                                >
                                    <img loading="lazy" src={'/icons/heart.png'} alt={'heart'} className="w-full h-full" />
                                </button>
                                <button
                                    className="object-contain shrink-0 w-10 aspect-square"
                                >
                                    <img loading="lazy" src={'/icons/cart.png'} alt={'cart'} className="w-full h-full" />
                                </button>
                                <button
                                    className="object-contain shrink-0 w-10 aspect-square"
                                >
                                    <img loading="lazy" src={'/icons/eye.png'} alt={'eye'} className="w-full h-full" />
                                </button>

                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <div className='flex justify-center flex-wrap gap-8 py-8 w-full px-5 md:px-36 items-center text-gray-500'>
                <span className='cursor-pointer hover:border-gray-200 border-transparent border-b'>Description</span>
                <span className='cursor-pointer hover:border-gray-200 border-transparent border-b'>Additional Information</span>
                <span className='cursor-pointer hover:border-gray-200 border-transparent border-b'>Reviews (0)</span>
            </div>
            <div className="flex flex-col items-center w-full max-md:max-w-full">
                <div className="h-[1.4px] mb-4 w-[80%] bg-gray-200" />

                <div className="flex flex-col items-center pt-6 pb-12 max-w-full w-[1056px]">
                    <div className="flex flex-wrap gap-8 items-start w-full">
                        <div className="flex overflow-hidden flex-col grow shrink min-h-[392px] min-w-[240px] w-[266px]">
                            <img
                                loading="lazy"
                                src="/product/product-feature-hero.png"
                                className="object-contain max-w-full rounded-lg aspect-[0.86] w-[337px]"
                                alt="Product feature illustration"
                            />
                        </div>
                        <div className="flex overflow-hidden flex-col grow shrink min-w-[240px] w-[266px]">
                            <div className="flex overflow-hidden flex-col pb-6 max-w-full rounded-lg w-[332px]">
                                <div className="text-2xl font-bold tracking-normal leading-none text-slate-800">
                                    the quick fox jumps over
                                </div>
                                <div className="mt-8 text-sm tracking-wide leading-5 text-neutral-500">
                                    Met minim Mollie non desert Alamo est sit cliquey dolor do met
                                    sent. RELIT official consequent door ENIM RELIT Mollie.
                                    Excitation venial consequent sent nostrum met.
                                    <br />
                                    <br />
                                    Met minim Mollie non desert Alamo est sit cliquey dolor do met
                                    sent. RELIT official consequent door ENIM RELIT Mollie.
                                    Excitation venial consequent sent nostrum met.
                                    <br />
                                    <br />
                                    Met minim Mollie non desert Alamo est sit cliquey dolor do met
                                    sent. RELIT official consequent door ENIM RELIT Mollie.
                                    Excitation venial consequent sent nostrum met.
                                </div>
                            </div>
                        </div>
                        <div className="flex overflow-hidden flex-col grow shrink font-bold min-w-[240px] w-[266px]">
                            <div className="flex overflow-hidden flex-col max-w-full rounded-lg w-[332px]">
                                <div className="text-2xl font-bold tracking-normal leading-none text-slate-800">
                                    {featureList1.title}
                                </div>
                                <div className="flex flex-col self-start mt-8 text-sm tracking-wide leading-6 text-neutral-500" role="list">
                                    {featureList1.items.map((item, index) => (
                                        <div key={index} className="flex overflow-hidden gap-3 items-start mt-2.5 first:mt-0">
                                            <BiChevronRight size={'2rem'} className="object-contain shrink-0 aspect-[0.56] " />
                                            <div role="listitem">{item.text}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="pt-6">
                                <div className="flex overflow-hidden flex-col max-w-full rounded-lg w-[332px]">
                                    <div className="text-2xl font-bold tracking-normal leading-none text-slate-800">
                                        {featureList2.title}
                                    </div>
                                    <div className="flex flex-col self-start mt-8 text-sm tracking-wide leading-6 text-neutral-500" role="list">
                                        {featureList2.items.map((item, index) => (
                                            <div key={index} className="flex overflow-hidden gap-3 items-start mt-2.5 first:mt-0">

                                                <BiChevronRight size={'2rem'} className="object-contain shrink-0 aspect-[0.56] " />
                                                <div role="listitem">{item.text}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='flex flex-col items-center px-8 sm:px-36 bg-neutral-50 py-16'>
                <h1 className='text-3xl self-start font-semibold uppercase'>
                    bestsellers products
                </h1>
                <div className="h-[2px] mt-8 w-full bg-gray-200" />
                <div className="grid grid-cols-1 md:grid-cols-2 mt-8 place-itemss-center lg:grid-cols-4 gap-8 place-content-center">
                    {products.slice(20, 28).map((product, index) => (
                        <ProductCard key={`product-${index}`} {...product} />
                    ))}
                </div>
            </section>
            <Brands />
        </main>
    )
}

export default page
