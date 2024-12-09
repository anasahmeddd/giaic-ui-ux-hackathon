import { HeroContent } from "@/components/HeroContent";
import { ProductCard } from "@/components/ProductCard";
import { Banner, gridBanners, posts, products } from "@/lib/constant";
import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";

export default function Home() {
  const heroContent = {
    date: "SUMMER 2020",
    title: "NEW COLLECTION",
    description: [
      "We know how large objects will act,",
      "but things on a small scale."
    ],
    ctaText: "SHOP NOW"
  };
  return (
    <main className="flex flex-col items-center justify-between ">

      <section className="flex overflow-hidden relative flex-col items-center px-20 pb-4 w-full min-h-[716px] max-md:px-5 max-md:max-w-full">
        <Image
          loading="lazy"
          src="/hero.jpg"
          fill
          alt="hero"
          className="object-cover absolute size-full "
        />
        <div className="flex overflow-hidden relative flex-col justify-center items-center py-28 max-md:py-24 max-md:max-w-full">
          <div className="flex overflow-hidden flex-wrap gap-8 items-center py-12 max-md:max-w-full">
            <HeroContent {...heroContent} btnColor={'rgb(34 197 94 / var(--tw-bg-opacity, 1))'}/>
            <div className="flex shrink-0 self-stretch my-auto h-[280px] min-w-[240px] w-[415px]" />
          </div>
        </div>
      </section>
      <section
        className=" px-4 flex flex-col bg-neutral-50 items-center w-full pb-20 sm:px-6 lg:px-8"
        aria-labelledby="new-arrivals-title"
      >
        <div className="bg-blue-500 h-1 w-8 my-16" />
        <h2
          id="new-arrivals-title"
          className="text-4xl font-semibold tracking-widest text-gray-800 mb-3"
        >
          EDITORS'S PICK
        </h2>
        <p className="text-md text-gray-400">Problems trying to resolve the conflict between </p>
        <div className="bg-red-500 h-1 w-8 my-8" />

        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {gridBanners.slice(0,4).map((product, index) => (
            <GridBanner key={index} {...product} />
          ))}
        </div>
      </section>
      <section
        className=" px-4 flex flex-col items-center w-full pb-20 sm:px-6 lg:px-8"
      >
        <h4
          id="new-arrivals-title"
          className="text-2xl mt-16 font-semibold tracking-widest text-gray-400 mb-3"
        >
          Featured Products
        </h4>
        <h2
          id="new-arrivals-title"
          className="text-4xl font-semibold tracking-widest text-gray-800 mb-3"
        >
          BESTSELLERS PRODUCTS
        </h2>
        <p className="text-md text-gray-500">Problems trying to resolve the conflict between </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-12 place-itemss-center lg:grid-cols-4 gap-3 sm:gap-9 lg:gap-14">
          {products.slice(0,8).map((product, index) => (
            <ProductCard key={`product-${index}`} {...product} />
          ))}
        </div>
      </section>
      <section className="flex justify-center overflow-hidden bg-[#23856D] w-full flex-wrap gap-8 items-center max-md:max-w-full">
        <div className="flex overflow-hidden flex-col pt-16 text-white min-w-[240px] w-[509px] max-md:max-w-full">
          <h1 className="text-xl tracking-wide">{Banner.title}</h1>
          <h2 className="mt-8 text-6xl font-bold tracking-wide leading-[80px] max-md:max-w-full max-md:text-4xl max-md:leading-[62px]">
            {Banner.subtitle}
          </h2>
          <p className="mt-8 text-sm tracking-wide leading-5">
            {Banner.description}
          </p>
          <div className="flex gap-9 items-center self-start mt-8 font-bold text-center">
            <div className="self-stretch my-auto text-2xl tracking-normal leading-none">
              ${Banner.price.toFixed(2)}
            </div>
            <button
              className="overflow-hidden self-stretch px-10 py-4 my-auto text-sm tracking-wide leading-loose bg-green-500 rounded-md max-md:px-5"
              // onClick={() => { }}
              aria-label="Add item to cart"
            >
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="flex overflow-hidden flex-col items-start mt-20 max-md:max-w-full">
        <Image
            loading="lazy"
            src={Banner.imageUrl}
            width={500}
            height={500}
            alt="Vita Classic Product showcase"
            className="object-contain max-w-full w-[453px]"
          />
        </div>
      </section>
      {/* hero3 */}
      <section className="flex flex-wrap justify-center items-center w-full max-sm:gap-8 px-4 max-w-7xl mx-auto">
        <div className="w-full sm:w-1/2 flex justify-center">
          <Image
            loading="lazy"
            src={'/hero-cover3.png'}
            width={500}
            height={500}
            alt="Vita Classic Product showcase"
            className="object-contain"
          />
        </div>
        <div className="w-full sm:w-1/2 flex flex-col items-center text-center sm:items-start sm:text-left">
          <h1 className="text-lg sm:text-xl tracking-wide">SUMMER 2020</h1>
          <h2 className="mt-4 text-4xl sm:text-6xl font-bold tracking-wide leading-tight sm:leading-[80px]">
            Part Of The Neural Universe
          </h2>
          <p className="mt-4 text-sm tracking-wide leading-5 sm:mt-8">
            We know how large objects will act. <br />
            But things on a small scale...
          </p>
          <div className="flex gap-6 items-center mt-6 sm:mt-8">
            <button
              className="px-6 py-3 bg-green-500 text-white text-sm font-bold rounded-md hover:bg-green-600 transition-colors"
            >
             BUY NOW
            </button>
            <button
              className="px-6 py-3 bg-white text-green-500 border border-green-500 text-sm font-bold rounded-md hover:bg-white transition-colors"
            >
              READ MORE
            </button>
          </div>
        </div>
      </section>
      {/* feature sec */}
      <section className="flex overflow-hidden flex-col justify-center items-center px-20 w-full tracking-wide bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center py-28 w-full max-w-[1050px] max-md:py-24 max-md:max-w-full">
          <header className="flex overflow-hidden flex-col items-center max-w-full text-sm font-bold text-center w-[692px]">
            <div className="flex overflow-hidden flex-col items-center w-full">
              <div className="leading-6 text-sky-500">Practice Advice</div>
              <h1 className="mt-2.5 text-4xl leading-none text-slate-800">Featured Posts</h1>
              <p className="mt-2.5 leading-5 text-neutral-500 max-md:max-w-full">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
              </p>
            </div>
          </header>
          <div className="flex flex-wrap gap-8 justify-center items-start mt-20 max-md:mt-10 max-md:max-w-full">
            {posts.map((post, index) => (
              <PostCard key={index} {...post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function PostCard({
  imageSrc,
  date,
  commentCount,
  title,
  description
}: {
  imageSrc: string;
  date: string;
  commentCount: number;
  title: string;
  description: string;
}) {
  return (
    <article className="flex flex-col items-center min-w-[240px] w-[328px]">
      <div className="flex overflow-hidden flex-col max-w-full bg-white shadow-sm w-[348px]">
        <div className="flex overflow-hidden flex-col w-full text-sm font-bold leading-6 text-center text-white whitespace-nowrap">
          <div className="flex overflow-hidden relative flex-col items-start px-5 pt-5 pb-64 w-full aspect-[1.16] max-md:pb-24">
            <Image
              loading="lazy"
              src={imageSrc}
              fill
              alt={title}
              className="object-cover absolute inset-0 size-full"
            />
            <div className="overflow-hidden py-3 flex items-center relative self-strsetch px-2.5 mb-0 bg-red-500 rounded shadow-sm max-md:mb-2.5" role="status">
              NEW
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden flex-col px-6 pt-6 pb-9 w-full text-xs text-neutral-500 max-md:px-5">
          <div className="flex overflow-hidden gap-4 items-center self-start leading-none whitespace-nowrap">
            <div className="self-stretch my-auto text-blue-300">Google</div>
            <div className="self-stretch my-auto">Trending</div>
            <div className="self-stretch my-auto">New</div>
          </div>
          <h2 className="mt-2.5 text-xl leading-8 text-slate-800">{title}</h2>
          <p className="mt-2.5 text-sm leading-5">{description}</p>
          <div className="flex overflow-hidden gap-10 justify-between items-center py-4 mt-2.5 w-full leading-none">
            <div className="flex overflow-hidden gap-1.5 items-center self-stretch my-auto">
              <Image
                loading="lazy"
                src="/icons/alaram.png"
                alt="date icon"
                width={4}
                height={4}
                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              />
              <time className="self-stretch my-auto">{date}</time>
            </div>
            <div className="flex overflow-hidden gap-1.5 items-center self-stretch my-auto">
              <Image
                loading="lazy"
                src="/icons/graph.png"
                alt="graph icon"
                width={4}
                height={4}
                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-[1.14]"
              />
              <span className="self-stretch my-auto">{commentCount} comments</span>
            </div>
          </div>
          <button className="flex overflow-hidden gap-2.5 items-center self-start mt-2.5 text-sm font-bold leading-6">
            <span className="self-stretch my-auto">Learn More</span>
            <BiChevronRight size={'1.3rem'} color="lightblue" />
          </button>
        </div>
      </div>
    </article>
  );
}


const GridBanner: React.FC<GridBannerProps> = ({
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
      {/* Content section */}
      <div className="absolute bottom-0 p-6 z-10">
        {/* <h3
          className="text-xl font-semibold text-white"
        >
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-300">{description}</p> */}
        <button
          className="group mt-4 py-3 px-6 inline-flex items-center text-sm font-semibold bg-white "
          aria-label={`Shop ${ariaLabel} now`}
        >
          <span>{ariaLabel}</span>
        </button>
      </div>
    </article>
  );
};