import { Link } from "react-router-dom";
import { nav_items } from "../utilities";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <nav className="flex relative max-[462px]:gap-3 gap-5 justify-between items-center  px-6 w-full font-medium   py-3   max-md:max-w-full">
      <Link to={"/"}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d498f58c6c27ddfbc793b00a720be2cd72be5d33066a0cb8700137e6fd70544a?placeholderIfAbsent=true&apiKey=00bedd7c3997447984bf9cef0c80b29a"
          className="object-contain  max-[462px]:w-[180px] aspect-[5.13] w-[292px]"
          alt="Company Logo"
        />
      </Link>
      <div className="flex max-[768px]:hidden gap-10 items-center my-auto text-base leading-none text-emerald-900">
        {nav_items.map((item, ind) => (
          <Link
            className="   gap-1
           text-emerald-800
            self-stretch
            my-auto
            hover:text-emerald-700"
            key={ind}
            to={item.path}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex gap-2.5 max-[768px]:hidden items-center self-start mt-1 text-sm leading-none text-white min-h-11">
        <Link
          to={"/contact"}
          className="gap-3  self-stretch px-5 py-3 my-auto bg-emerald-900 rounded hover:bg-emerald-800 transition-colors"
        >
          JOIN US
        </Link>
      </div>

      <div className="md:hidden ">
        {!toggle && (
          <RxHamburgerMenu
            className=" text-emerald-900 text-xl cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        )}
      </div>
      {toggle && (
        <div className="flex  bg-emerald-900 absolute top-[100px] p-2 right-10 rounded-2xl h-[50vh] w-1/2 z-13 md:hidden flex-col gap-3 mt-3">
          <div className="flex justify-end p-2 ">
            <RxCross1
              onClick={() => setToggle(!toggle)}
              className="cursor-pointer align text-white max-[462px]:text-xl text-2xl"
            />
          </div>
          <div className="flex flex-1  flex-col items-center justify-center gap-8 text-white ">
            {nav_items.map((item, ind) => (
              <Link
                onClick={() => {
                  setToggle(!toggle);
                }}
                className="gap-1
         text-white
           
            hover:text-emerald-700"
                key={ind}
                to={item.path}
              >
                {item.title}
              </Link>
            ))}
            <Link
              to={"/contact"}
              onClick={() => {
                setToggle(!toggle);
              }}
              className="gap-3 border-1 px-5 py-2  rounded hover:bg-emerald-700 transition-colors"
            >
              JOIN US
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
