import { useState } from "react";
import woweare from "../../assets/images/woweare.jpg";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import VisisionMission from "../../components/VisisionMission";
import { missionVission } from "../../utilities";

import imgIcons from "../../assets";
const About = () => {
  const [active, setActive] = useState<string>("Mission");
  const [hover, setHover] = useState<string>("");
  const result = missionVission.filter((item) => {
    return item.title == active;
  });

  return (
    <div className="flex-1 ">
      <div className="flex mx-6 flex-col-reverse  max-md:gap-8  md:flex-row py-9">
        <div className="flex-1 ">
          <h2 className="font-semibold text-2xl sm:text-3xl md:text-5xl">
            Travel Smarter, Explore Further-Welcome to GlobeThrough{" "}
          </h2>
          <h5 className="text-xl md:text-2xl my-5 md:my-9">
            Founded by explorers, for explorers
          </h5>
          <p className="md:text-xl text-gray-500 text-lg leading-8 md:leading-9">
            The world is full of endless adventures, and at GlobeThrough, we
            make exploring them effortless with seamless, affordable, and
            hassle-free travel solutions. Say goodbye to hidden fees,
            complicated bookings, and overpriced trips—our user-friendly
            platform ensures you get the best travel deals on flights, hotels,
            and vacation packages with complete transparency. Whether you’re
            craving a spontaneous getaway, a luxury escape, or a budget-friendly
            vacation, we provide handpicked destinations, exclusive discounts,
            and personalized travel experiences to match your dreams. From
            exotic beaches and cultural explorations to adrenaline-packed
            adventures, your next journey is just a click away. Book now and
            experience stress-free, unforgettable travel with GlobeThrough!
          </p>
        </div>

        <div className="flex-1 flex md:items-center md:justify-end max-[768px]:justify-center">
          <img
            loading="lazy"
            className="max-[768px]:w-[90%] max-[400px]:w-[100%] w-[80%] sm:aspect-[0]"
            src={woweare}
            alt=""
          />
        </div>
      </div>
      <div className=" mx-6">
        <h2 className="md:text-5xl text-xl sm:text-3xl font-semibold capitalize">
          Get to know us
        </h2>
        <div className="flex max-[768px]:flex-col gap-5 items-center mt-10">
          <div className=" max-[768px]:hidden flex w-[40%] flex-col">
            {missionVission.map((item, ind) => {
              return (
                <div key={ind}>
                  {ind !== 0 && (
                    <div className="h-[0.2px] my-9 w-full bg-gray-400" />
                  )}
                  <span
                    onMouseEnter={() => {
                      setHover(item.title);
                    }}
                    onMouseLeave={() => {
                      setHover("");
                    }}
                    onClick={() => {
                      setActive(item.title);
                    }}
                    className={`${
                      active == item.title
                        ? "text-emerald-900"
                        : "text-gray-300"
                    } font-semibold cursor-pointer flex text-2xl items-center  gap-3 `}
                  >
                    {item.title}
                    <HiMiniArrowLongRight
                      className={`text-xl  scale-150 transition font-bold ${
                        hover == item.title && " scale-x-250"
                      }`}
                    />
                  </span>
                </div>
              );
            })}
          </div>
          <div className="flex  gap-3 px-5 py-1 md:hidden bg-gray-200 rounded-3xl">
            {missionVission.map((item, ind) => {
              return (
                <span
                  key={ind}
                  onMouseEnter={() => {
                    setHover(item.title);
                  }}
                  onClick={() => {
                    setActive(item.title);
                  }}
                  className={`${
                    active == item.title
                      ? "text-white  bg-emerald-900"
                      : "text-gray-500"
                  } font-semibold rounded-3xl p-2 cursor-pointer flex  max-[768px]:text-[0.9rem] text-2xl items-center  gap-3`}
                >
                  {item.title}
                </span>
              );
            })}
          </div>
          <VisisionMission
            image={result[0].image}
            content={result[0].content}
          />
        </div>
      </div>
      <div className="mt-10 mx-6">
        <h2 className=" md:text-5xl text-xl sm:text-3xl font-semibold capitalize">
          Message from CEO
        </h2>
        <div className="mt-10 overflow-hidden max-[500px]:h-[250px] h-[400px] flex relative rounded-2xl">
          <img
            src={imgIcons.jayanth}
            className="max-[650px]:w-[45%] max-[830px]:w-[40%] max-[830px]:object-cover  h-full  max-[768px]  max-[1020px]:left-[0%]   max-[1150px]:left-[10%] left-[15%] absolute bottom-0"
            loading="lazy"
            alt="founder"
          />

          <div className="text-white bg-emerald-900  rounded-3xl max-[500px]:text-[0.5rem] max-[500px]:py-2 max-[500px]:px-2 max-[768px]:py-5 max-[828px]:py-10 py-14   self-end flex  items-end justify-end  max-[768px]:text-[1rem]  max-[1090px]:text-xl text-2xl px-5">
            <div className="w-[50%] max-[500px]:pl-2">
              <p>
                <b>“Do Good For The World” </b>— that’s what my teacher taught
                us. With this mission, we started Globethrough — a platform to
                serve our customers. Customers who enjoy hassle-free and
                affordable booking. It is our mission to empower everyone to
                travel anywhere and everywhere while doing good for the world.
              </p>
              <p className="mt-5">
                <b className=" max-[500px]:text-[0.5rem] max-[768px]:text-[1rem]">
                  Jayanth S
                </b>
                <br />
                <small>Websort</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
