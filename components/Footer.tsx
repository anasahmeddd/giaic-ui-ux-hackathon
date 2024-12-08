import * as React from "react";

const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bc63d1c42ce23b5f128bb9342a3c4cf333cc014e89fddc45c5b5090c6c5936a1?placeholderIfAbsent=true&apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f", alt: "Social media icon 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8dcb007c11f84d58a1d4d033bddda28c2a1064863b84e729c68abe0b44fdae36?placeholderIfAbsent=true&apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f", alt: "Social media icon 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/aab0f4e92533518bc86c96149e73e1c9b6c8dc2561116c9a4b9273f2a1c7449e?placeholderIfAbsent=true&apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f", alt: "Social media icon 3" }
];

const footerGroups = [
    {
        title: "Company Info",
        links: ["About Us", "Carrier", "We are hiring", "Blog"]
    },
    {
        title: "Legal",
        links: ["About Us", "Carrier", "We are hiring", "Blog"]
    },
    {
        title: "Features",
        links: ["Business Marketing", "User Analytic", "Live Chat", "Unlimited Support"]
    },
    {
        title: "Resources",
        links: ["IOS & Android", "Watch a Demo", "Customers", "API"]
    }
];
const Footer: React.FC = () => {
    const handleSubscribe = (email: string) => {
        console.log("Subscribed with email:", email);
    };

    return (
        <footer className="flex overflow-hidden flex-col justify-center items-center py-px w-full bg-white max-md:px-5 max-md:max-w-full">
            <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-0.5 mb-0.5 w-full bg-neutral-50 max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col w-full max-w-[1057px] max-md:max-w-full">
                    <div className="flex overflow-hidden flex-col justify-center py-10 max-md:mr-2 w-full">
                        <div className="flex justify-between overflow-hidden flex-wrap gap-10 items-center w-full">
                            <div className="flex overflow-hidden flex-col items-start self-stretch my-auto text-2xl font-bold tracking-normal leading-none whitespace-nowrap text-slate-800 ">
                                <div className="overflow-hidden py-3.5 max-w-full w-[187px] max-md:pr-5">
                                    Bandage
                                </div>
                            </div>
                            <div className="flex overflow-hidden flex-col items-center self-stretch my-auto w-[236px]">
                                <div className="flex overflow-hidden gap-5 justify-center items-center">
                                    {socialIcons.map((icon, index) => (
                                        <SocialIcon key={index} {...icon} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="z-10 shrink-0 h-px border border-solid border-neutral-200 max-md:max-w-full" />
                </div>
            </div>
            <div className="flex overflow-hidden flex-col justify-center py-12 w-full max-w-[1050px] max-md:max-w-full">
                <div className="flex overflow-hidden flex-wrap gap-8 items-start max-md:max-w-full">
                    {footerGroups.map((group, index) => (
                        <FooterLinkGroup key={index} {...group} />
                    ))}
                    <div className="flex overflow-hidden flex-col min-w-[240px] w-[321px]">
                        <div className="text-base font-bold tracking-normal text-slate-800">
                            Get In Touch
                        </div>
                        <SubscribeForm onSubmit={handleSubscribe} />
                    </div>
                </div>
            </div>
            <div className="flex overflow-hidden bg-neutral-50 sm:px-36 flex-col justify-center items-start py-6 w-full">
                <div className="flex overflow-hidden justify-start items-center w-full">
                    <p className="text-gray-500 font-semibold">
                        Made With Love By Anas Ahmed All Right Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
const SubscribeForm: React.FC<SubscribeFormProps> = ({ onSubmit }) => {
    // const [email, setEmail] = useState("");

    // const handleSubmit = (e: React.FormEvent) => {
    //   e.preventDefault();
    //   onSubmit(email);
    // };

    return (
        <form className="flex flex-col mt-5 w-full gap-3 tracking-wide leading-7 max-w-[321px]">
            <div className="flex max-sm:flex-col max-sm:gap-5 overflow-hidden  justify-between text-sm rounded-md bg-stone-50 ">
                <label htmlFor="emailInput" className="sr-only">Your Email</label>
                <input
                    id="emailInput"
                    type="email"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="border rounded-l outline-none px-2 py-4"
                    required
                    aria-label="Your Email"
                />
                <button
                    type="submit"
                    className="overflow-hidden px-6 py-1 text-center text-white whitespace-nowrap bg-sky-500 rounded-r border border-solid border-neutral-200 max-md:px-5"
                >
                    Subscribe
                </button>
            </div>
            <div className="self-start text-xs text-neutral-500">
                Lore imp sum dolor Amit
            </div>
        </form>
    );
};
const FooterLinkGroup: React.FC<FooterLinkGroupProps> = ({ title, links }) => (
    <div className="flex overflow-hidden flex-col font-bold w-[148px]">
        <div className="text-base tracking-normal text-slate-800">
            {title}
        </div>
        <div className="flex flex-col self-start mt-5 text-sm tracking-wide leading-6 text-neutral-500">
            {links.map((link, index) => (
                <div key={index} className={index > 0 ? "mt-2.5" : ""}>
                    {link}
                </div>
            ))}
        </div>
    </div>
);
const SocialIcon: React.FC<SocialIconProps> = ({ src, alt }) => (
    <img
        loading="lazy"
        src={src}
        alt={alt}
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
    />
);