import { logos } from '@/lib/constant';
import React from 'react'

const Brands = () => {
    return (
        <div className="flex overflow-hidden flex-col justify-center items-center px-10 w-full bg-neutral-50 max-md:px-5 max-md:max-w-full">
            <div className="flex overflow-hidden flex-col items-center w-full sw-full">
                <div className="flex overflow-hidden flex-wrap gap-8 justify-center items-center py-12 max-md:max-w-full">
                    {logos.map((logo, index) => (
                        <BrandLogo
                            key={index}
                            src={logo.src}
                            width={logo.width}
                            aspectRatio={logo.aspectRatio}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
const BrandLogo = ({ src, width, aspectRatio }: { src: string; width: string; aspectRatio: string; }) => {
    return (
        <div className="flex overflow-hidden flex-col items-center self-stretch my-auto w-[151px]">
            <img
                loading="lazy"
                src={src}
                alt=""
                className={`object-contain ${width} ${aspectRatio}`}
            />
        </div>
    );
};

export default Brands
