import React, { useRef, useState, useEffect } from "react";
import ScrollLine from "./ScrollLine";

import { howItWorksData } from "../../utilities";

const WorkingCompo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [startOffset, setStartOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();

      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      setStartOffset(scrollTop + rect.top);
      setEndOffset(scrollTop + rect.bottom);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative  flex flex-col gap-10  max-[768px]:gap-5 mx-8  py-12"
    >
      <h2 className="max-[500px]:text-3xl max-[1050px]:text-4xl text-5xl font-semibold">
        How Our App Works
      </h2>
      <div className="flex relative">
        <div className="w-full max-[768px]:space-y-9 space-y-12">
          {howItWorksData.map((item, index) => {
            if ((index + 1) % 2 == 0) {
              return (
                <div
                  key={index}
                  className="bg-white   max-[768px]:flex-col justify-between flex-1 flex gap-5 max-[768px]:p-3 p-6   rounded-lg  "
                >
                  <div className=" flex w-1/2  max-[768px]:w-full [word-spacing:0.2rem] items-center justify-center flex-col ">
                    <div className="  max-[768px]:w-full  w-[80%]">
                      <h3 className="text-2xl  font-semibold">{item.title}</h3>
                      <ul className="list-disc text-xl max-[500px]:text-[1rem]  list-inside text-gray-600 mt-2">
                        {item.description.map((point, i) => (
                          <li className="" key={i}>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex  bg-emerald-50 p-4 max-[1000px]:w-[45%]    max-[768px]:w-full justify-center rounded">
                    <img
                      src={item.image}
                      className="h-full w-full object-contain aspect-square     max-[500px]:aspect-auto"
                      alt={item.title}
                    />
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  key={index}
                  className="bg-white   max-[768px]:flex-col flex-row-reverse justify-between max-[768px]:p-3  flex-1 flex gap-5 p-6 rounded-lg "
                >
                  <div className=" flex w-1/2 max-[768px]:w-full [word-spacing:0.2rem]  items-center justify-center flex-col ">
                    <div className=" w-[80%] max-[768px]:w-full order-2">
                      <h3 className="text-2xl  font-semibold">{item.title}</h3>
                      <ul className="list-disc text-xl max-[500px]:text-[1rem] list-inside text-gray-600 mt-2">
                        {item.description.map((point, i) => (
                          <li className="" key={i}>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex border-red-400  bg-emerald-50 p-4 max-[1000px]:w-[45%]  max-[768px]:w-full  justify-center rounded">
                    <img
                      src={item.image}
                      className="h-full w-full object-contain aspect-square   max-[500px]:aspect-auto"
                      alt={item.title}
                    />
                  </div>
                </div>
              );
            }
          })}
        </div>

        {/* Animated Middle Line */}
        <ScrollLine startOffset={startOffset} endOffset={endOffset} />
      </div>
    </div>
  );
};

export default WorkingCompo;
