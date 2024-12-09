interface HeroContentProps {
    date: string;
    title: string;
    description: string[];
    ctaText: string;
    btnColor: string;
    textColor?: string
}
export const HeroContent: React.FC<HeroContentProps> = ({
    date,
    title,
    description,
    ctaText,
    btnColor,
    textColor = 'white'
}) => {
    return (
        <div style={{ color: textColor }} className="flex overflow-hidden  flex-col self-stretch my-auto min-w-[240px] w-[599px] max-md:max-w-full">
            <div className="text-base font-semibold">{date}</div>
            <h1 className="mt-9 text-6xl font-semibold text-whiste tracking-wide leading-none max-md:max-w-full max-md:text-4xl">
                {title}
            </h1>
            <div className="mt-9 text-xl tracking-wide leading-8 texst-neutral-50">
                {description.map((line, index) => (
                    <p key={index}>
                        {line}
                        <br />
                    </p>
                ))}
            </div>
            <div className="flex gap-2.5 items-start self-start mt-9 text-2xl leading-none text-center">
                <button
                    className="overflow-hidden border border-white text-white px-10 py-4 rounded-md max-md:px-5"
                    style={{ backgroundColor: btnColor }}
                >
                    {ctaText}
                </button>
            </div>
           
        </div>
    );
};