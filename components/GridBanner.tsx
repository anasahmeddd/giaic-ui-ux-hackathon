import Image from "next/image";

export const GridBanner: React.FC<GridBannerProps> = ({
    imageUrl,
    imageSize,
    gridColumn,
    gridRow,
    ariaLabel,
}) => {
    return (
        <article
            style={{ gridColumn: gridColumn, gridRow: gridRow }}
            className={`relative rounded-lg overflow-hidden `}
        >
            <div className="">
                <Image
                    loading="lazy"
                    src={imageUrl}
                    alt="gridBanner"
                    width={imageSize}
                    height={imageSize}
                    className="relative  rounded-lg bg-cover bottom-0 object-cover w-full"
                    aria-hidden="true"
                />
            </div>
            
        </article>
    );
};