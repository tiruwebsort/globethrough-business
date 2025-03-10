import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { blog_cards, features, partner } from "../../utilities";
import FeatureCard from "../../components/FeatureCard";
import wowe from "../../assets/images/wowe.jpg";
import FlightCard from "../../components/FlightCard";
import BlogCard from "../../components/BlogCard";
import SliderCompo from "../../components/Slider";
import WorkingCompo from "./WorkingCompo";
import { useState } from "react";
// import imgIcons from "../../assets";

const Home = () => {
  const [active, setActive] = useState<boolean>(false);
  const handleComingSoon = () => {
    setActive(true);
  };
  return (
    <div className="h-full w-full">
      <div className="flex  gap-5 py-8 mx-8  max-md:flex-col">
        <div className="w-6/12 max-md:w-full">
          <div className="mt-16 max-md:mt-10 max-md:max-w-full">
            <div className="max-w-full  w-[762px]  relative">
              <h1 className="font-bold max-[300px]:text-[2rem] max-[500px]:text-[3rem] max-[500px]:leading-[50px] max-[1050px]:text-[4rem] text-black text-[5rem] max-[1050px]:leading-[80px] leading-[90px] max-md:max-w-full">
                Your Gateway to
                <span className="bg-gradient-to-r from-emerald-900 to-emerald-400 bg-clip-text px-2 text-transparent">
                  Hassle-Free
                </span>
                Travel
              </h1>
              <p className="max-[1050px]:my-8 my-10 max-[300px]:text-lg max-[500px]:text-xl text-2xl font-light leading-7 text-zinc-800 max-md:max-w-full">
                Whether you're planning a last-minute getaway, a business trip,
                or a dream vacation, we've got you covered.
              </p>
              {active && (
                <div className="h-[300px] px-2  overflow-hidden w-full flex-col rounded-3xl bg-emerald-900 flex absolute top-0">
                  <span
                    onClick={() => {
                      setActive(false);
                    }}
                    className="text-2xl text-white p-5 cursor-pointer self-end"
                  >
                    {" "}
                    x
                  </span>
                  <div className="flex-1 flex items-center justify-center">
                    <h1 className="max-[350px]:text-3xl text-5xl text-white mb-6 ">
                      Coming Soon
                    </h1>
                  </div>
                </div>
              )}
              <div className="flex max-[500px]:flex-col max-[500px]:gap-4 gap-8">
                <a
                  onClick={handleComingSoon}
                  href="#"
                  className="px-2 py-1 max-[500px]:w-[150px] w-[180px] rounded-md flex items-center justify-center gap-2.5 bg-black text-white"
                >
                  <IoLogoGooglePlaystore className="text-[2rem] max-[500px]:text-[1rem]" />
                  <span className="flex max-[500px]:text-[0.9rem] max-[300px]:text-[0.8rem]  text-lg flex-col">
                    <span>Get it on</span>
                    <span className="capitalize font-medium ">Google Play</span>
                  </span>
                </a>
                <a
                  onClick={handleComingSoon}
                  href="#"
                  className="px-2 py-1 w-[180px] max-[500px]:w-[150px] rounded-md flex items-center justify-center gap-2.5 bg-black text-white"
                >
                  <FaApple className="text-[2rem] max-[500px]:text-[1rem]" />
                  <span className="flex max-[500px]:text-[0.9rem] max-[300px]:text-[0.8rem]  text-lg flex-col">
                    <span>Get it on</span>
                    <span className="capitalize font-medium ">App Store</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-5  w-6/12 max-md:ml-0  max-md:w-full">
          <div className="flex relative flex-col items-start max-[500px]:p-0 px-16 pt-80 pb-24 w-full rounded-none min-h-[567px] max-[768px]:min-h-[450px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2cf582593e77706d9a19f30bf630cefccf80600bb4ff6943656a97e6445a529?placeholderIfAbsent=true&apiKey=00bedd7c3997447984bf9cef0c80b29a"
              className="max-[1050px]:object-cover absolute inset-0 size-full"
              alt="Travel Background"
            />
            <FlightCard />
          </div>
        </div>
      </div>

      <div className="py-10 my-15 mx-0 bg-gray-200">
        <SliderCompo>
          {partner.map((item, ind) => (
            <div key={ind} className="flex m-0 p-0 items-center justify-center">
              <img
                className="mx-auto h-[150px]"
                alt={item.altText}
                src={item.image}
              />
            </div>
          ))}
        </SliderCompo>
      </div>
      <div className="flex  mx-8 flex-col max-[768px]:gap-5 gap-15">
        <h2 className="max-[500px]:text-3xl max-[1050px]:text-4xl text-5xl font-semibold">
          Why Choose Us
        </h2>
        <div className="flex max-[768px]:gap-4 gap-10 max-md:flex-col">
          {features.map((item, ind) => (
            <div key={ind} className="w-[54%] max-md:w-full">
              <FeatureCard {...item} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex mx-8 gap-20 mt-9 max-[768px]:mt-4 max-[768px]:gap-10 max-[768px]:flex-col justify-center">
        <img
          src={wowe}
          alt="Who We Are"
          className="w-[40%] max-[768px]:w-full max-[768px]:h-[500px] max-[300px]:h-[300px] object-contain  max-[500px]:h-[350px] max-[1050px]:w-[50%] "
        />
        <div className="flex flex-col w-[40%] max-[768px]:w-full  justify-center  gap-5">
          <h2 className="max-[500px]:text-3xl  max-[1050px]:text-4xl text-5xl font-semibold">
            Who We Are
          </h2>
          <p className="max-[500px]:text-lg max-[500px]:leading-8  max-[1050px]:text-2xl text-3xl font-medium max-[1050px]:leading-10 leading-12 text-emerald-900">
            Globethrough was born from a simple idea: make flight booking
            effortless and rewarding. We saw travelers struggling with
            complicated bookings and businesses missing out on opportunities to
            earn. So, we built a platform that serves both. For travelers (B2C),
            we provide affordable fares, instant bookings, and real-time
            updates, ensuring a smooth journey. For businesses (B2B), we offer a
            commission-based model, where you earn on every ticket booked,
            turning flight sales into a profitable venture. At Globethrough, we
            don’t just sell tickets—we create seamless travel experiences and
            business opportunities. Fly Smart. Earn More. Grow with
            Globethrough.
          </p>
        </div>
      </div>
      <WorkingCompo />
      <div className="flex flex-col gap-8 mx-8">
        <h2 className="max-[500px]:text-3xl max-[1050px]:text-4xl text-5xl font-semibold">
          Join Us
        </h2>

        <div className="flex max-[768px]:flex-col gap-20">
          <article className="justify-center flex flex-col gap-8 flex-1 max-md:ml-0 max-md:w-full">
            <p className=" max-[500px]:text-lg max-[500px]:leading-8  max-[1050px]:text-2xl text-3xl font-medium max-[1050px]:leading-10 leading-12 text-emerald-900">
              Who We Are: More than a booking platform, we're your travel
              companion. Our Mission: Making travel seamless, transparent, and
              accessible. What We Do: Connect travelers to dream destinations
              effortlessly. Our Focus: Memorable, affordable, and stress-free
              journeys.
            </p>
            <a
              href="#"
              className="gap-2.5  self-start px-2.5 py-3  text-base tracking-normal bg-emerald-900 rounded-md text-zinc-300 hover:bg-emerald-800 transition-colors"
              aria-label="Get started with a live demo"
            >
              Click Here
            </a>
          </article>

          <div className=" flex-1 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/00bedd7c3997447984bf9cef0c80b29a/3fab3a50792a33f04e4ba1b22195e7fb3a844318793a044981e2b3cd618faae0?placeholderIfAbsent=true"
              alt="Travel platform demonstration"
              className="  rounded-none object-contain   w-full  h-full max-md:max-w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex max-[1400px]:mt-8 mx-8 flex-col gap-15">
        <h2 className="max-[500px]:text-3xl max-[1050px]:text-4xl  text-5xl font-semibold">
          Blogs
        </h2>
        <div className="flex max-[768px]:justify-normal  max-[568px]:justify-center flex-wrap gap-8 justify-between items-start">
          {blog_cards.map((card, index) => (
            <BlogCard
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
      <div className="max-[650px]:h-auto max-[650px]:p-4 max-[650px]:gap-8 h-96 mx-8 rounded-4xl text-white flex flex-col gap-14 bg-emerald-900 my-15 justify-center items-center">
        <h3 className=" max-[650px]:text-2xl max-[650px]:text-center capitalize text-4xl font-bold">
          Your Journey starts here
        </h3>
        <p className="text-white text-center max-[650px]:text-lg  text-xl font-medium max-[650px]:w-[90%] w-[60%]">
          Adventure is calling – will you answer?Let Globethrough be your bridge
          to extraordinary experiences, unforgettable memories, and stress-free
          travel. 
        </p>
        <div className="flex max-[650px]:flex-col justify-center text-2xl max-[650px]:gap-5  items-center gap-15">
          <a
            href="#"
            className="px-3 py-3  max-[250px]:w-[150px] rounded-md max-[650px]:py-2 max-[650px]:px-2  max-[650px]:w-[200px] w-[230px]  flex items-center font-medium justify-center gap-2.5 bg-white text-emerald-900"
          >
            <IoLogoGooglePlaystore className=" text-emerald-900  text-[2rem] max-[650px]:text-lg" />
            <span className="capitalize font-medium max-[650px]:text-lg">
              Google Play
            </span>
          </a>
          <a
            href="#"
            className="px-3 py-3  max-[250px]:w-[150px] max-[650px]:w-[200px] max-[650px]:py-2 max-[650px]:px-2  rounded-md w-[230px]  flex items-center font-medium justify-center gap-2.5 bg-white text-emerald-900"
          >
            <FaApple className=" text-emerald-900  text-[2rem] max-[650px]:text-lg" />
            <span className="capitalize font-medium max-[650px]:text-lg ">
              App Store
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
