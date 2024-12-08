import Link from "next/link";

export function ProductCard({
    imageSrc,
    imageAlt,
    slug,
    title,
    department,
    originalPrice,
    discountedPrice,
    colors
}: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    slug: string;
    department: string;
    originalPrice: string;
    discountedPrice: string;
    colors?: string[];
}) {
    return (
        <div className="flex flex-col items-center w-[238px]">
            <div className="flex overflow-hisden flex-col max-w-full bg-white w-[239px]">
                <Link href={`/product/${slug}`}>
                    <div className="flex overflow-hidden flex-col w-full">
                        <img
                            loading="lazy"
                            src={imageSrc}
                            alt={imageAlt}
                            className="object-contain w-full aspect-[0s.56]"
                        />
                    </div>
                </Link>
                <div className="flex overflow-hidden flex-col items-center px-6 pt-6 pb-9 w-full max-md:px-5">
                    <h2 className="text-base font-bold tracking-normal text-center text-slate-800">
                        {title}
                    </h2>
                    <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
                        {department}
                    </div>
                    <div className="flex gap-1.5 items-start px-1 py-1.5 mt-2.5 text-base font-bold tracking-normal text-center whitespace-nowrap">
                        <div className="text-stone-300 w-[52px]">{originalPrice}</div>
                        <div className="text-teal-700 w-[45px]">{discountedPrice}</div>
                    </div>
                    <div className="flex gap-1.5 items-center mt-2.5">
                        {colors && colors.map((color, index) => (
                            <div
                                key={index}
                                style={{ backgroundColor: color }}
                                className={`flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full `}
                                role="presentation"
                                aria-hidden="true"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
}