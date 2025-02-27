import { Link } from "react-router-dom";
import SocialCompo from "./SocialCompo";
import { MdEmail, MdWifiCalling3 } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="mx-6 flex text-emerald-900 flex-col py-5 max-[1600px]:px-5 mt-9 gap-9">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d498f58c6c27ddfbc793b00a720be2cd72be5d33066a0cb8700137e6fd70544a?placeholderIfAbsent=true&apiKey=00bedd7c3997447984bf9cef0c80b29a"
        alt=""
        className="object-contain aspect-[5.13] w-[292px] max-[650px]:mx-auto"
      />
      <div className="flex max-[650px]:flex-col max-[900px]:gap-10 max-[650px]:items-center justify-between">
        <div className=" max-[650px]:w-full w-[30%] max-[650px]:text-center ">
          <h5 className="font-semibold">
            Your Journey Starts Here:  Adventure is calling – will you answer?
            <br />
          </h5>
          <p className="text-[0.9rem] mt-3">
            Let Globethrough be your bridge to extraordinary experiences,
            unforgettable memories, and stress-free travel.  “With Globethrough
            Discover Your Next Destinations.”
          </p>
        </div>
        <div className="max-[650px]:text-center">
          <h5 className="font-semibold">Resources</h5>
          <div className="flex  mt-5 flex-col gap-2">
            <a href="" className="text-[0.9rem]">
              Blog
            </a>
            <a href="" className="text-[0.9rem]">
              Booking
            </a>
            <a href="" className="text-[0.9rem]">
              Support
            </a>
            <a href="" className="text-[0.9rem]">
              Site Map
            </a>
          </div>
        </div>
        <div className="max-[650px]:text-center">
          <h5 className="font-semibold">Company</h5>
          <div className="flex  mt-5 flex-col gap-2">
            <Link className="text-[0.9rem]" to="about">
              About Us
            </Link>
            <Link className="text-[0.9rem]" to="careers">
              Careers
            </Link>{" "}
            <Link className="text-[0.9rem]" to="team">
              Team
            </Link>
            <Link className="text-[0.9rem]" to="contact">
              Contact
            </Link>
          </div>
        </div>
        <div className="max-[650px]:text-center">
          <h5 className="font-semibold">Contact Us</h5>
          <div className="flex mt-5 flex-col gap-2">
            <a
              className="max-[450px]:gap-2 flex max-[650px]:justify-center items-center text-[0.9rem] gap-5"
              href="tel:+919380583373"
            >
              <MdWifiCalling3 className="text-[1rem]" />
              <span>+919380583373</span>
            </a>
            <a
              className="max-[450px]:gap-2 flex max-[650px]:justify-center items-center gap-5 text-[0.9rem]"
              href="mailto:info@globethrough.com"
            >
              <MdEmail className="text-[1rem]" />
              <span>info@globethrough.com</span>
            </a>
            <a
              className="max-[450px]:gap-2 flex max-[650px]:justify-center items-center gap-5 text-[0.9rem]"
              href="https://maps.app.goo.gl/bTEXgAuMhQ2NkST79"
              target="_blank"
            >
              <IoLocationSharp className="max-[450px]:text-[1.3rem] text-[1rem]" />
              <span className=" text-start">
                Garuda ,Bhive workspace Btm Layout ,Bengaluru
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <SocialCompo bg="bg-emerald-900  " icon_color="text-white" />
      </div>
    </footer>
  );
};

export default Footer;
