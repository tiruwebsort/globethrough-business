// import React, { useEffect, useState } from "react";

// interface ScrollLineProps {
//   startOffset: number;
//   endOffset: number;
// }

// const ScrollLine: React.FC<ScrollLineProps> = ({ startOffset, endOffset }) => {
//   const [scrollPercentage, setScrollPercentage] = useState(0);

//   const handleScroll = () => {
//     const scrollTop = window.scrollY || document.documentElement.scrollTop;
//     const scrollHeight = document.documentElement.scrollHeight;
//     const clientHeight = document.documentElement.clientHeight;

//     if (scrollTop < startOffset) {
//       setScrollPercentage(0);
//     } else if (scrollTop > endOffset) {
//       setScrollPercentage(100);
//     } else {
//       const percentage =
//         ((scrollTop - startOffset) / (endOffset - startOffset)) * 100;
//       setScrollPercentage(percentage);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [startOffset, endOffset]);

//   return (
//     <div className="absolute top-0 left-1/2  transform -translate-x-1/2 h-full w-3 bg-gray-200">
//       {/* Green filled line */}
//       <div
//         className=" bg-gradient-to-b rounded-2xl from-emerald-900 to-emerald-400  w-3"
//         style={{ height: `${scrollPercentage}%` }}
//       ></div>

//       {/* Circle that moves with the scroll */}
//       <div
//         className="absolute w-5 h-5 rounded-full bg-gray-400  left-[-3.5px]  transform -translate-y-1/2"
//         style={{ top: `${scrollPercentage}%` }}
//       ></div>
//     </div>
//   );
// };

// export default ScrollLine;

import React, { useEffect, useState } from "react";

interface ScrollLineProps {
  startOffset: number;
  endOffset: number;
}

const ScrollLine: React.FC<ScrollLineProps> = ({ startOffset, endOffset }) => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // const scrollHeight = document.documentElement.scrollHeight;
    // const clientHeight = document.documentElement.clientHeight;

    if (scrollTop < startOffset) {
      setScrollPercentage(0);
    } else if (scrollTop > endOffset) {
      setScrollPercentage(100);
    } else {
      const percentage =
        ((scrollTop - startOffset) / (endOffset - startOffset)) * 100;
      setScrollPercentage(percentage);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [startOffset, endOffset]);

  return (
    <div className="absolute top-0 left-1/2 max-[768px]:hidden transform -translate-x-1/2 h-full  max-[1000px]:w-2 w-3 bg-gray-200">
      {/* Green filled line */}
      <div
        className="bg-gradient-to-b rounded-2xl from-emerald-900 to-emerald-400  max-[1000px]:w-2 w-3"
        style={{ height: `${scrollPercentage}%` }}
      ></div>

      {/* Circle that moves with the scroll */}
      <div
        className="absolute w-5 h-5 max-[1000px]:w-4  max-[1000px]:h-4  bg-green-500 rounded-full  max-[1000px]:left-[-3.3px] left-[-3.5px] transform -translate-y-1/2"
        style={{ top: `${scrollPercentage}%` }}
      ></div>
    </div>
  );
};

export default ScrollLine;
