import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { ImPinterest2 } from "react-icons/im";
// import { SlSocialFacebook } from "react-icons/sl";
import { IoLogoLinkedin } from "react-icons/io";

const SocialCompo = ({
  bg,
  icon_color,
}: {
  bg: string;
  icon_color: string;
}) => {
  return (
    <div className={`flex  gap-3 sm:gap-5 items-center`}>
      {/* <a
        className={` h-7 w-7 sm:h-9 sm:w-9 rounded-full flex items-center justify-center ${bg}`}
        href=""
        target="_blank"
      >
        <SlSocialFacebook className={`${icon_color}`} />
      </a> */}
      <a
        className={`h-7 w-7 sm:h-9 sm:w-9  rounded-full flex items-center justify-center ${bg}`}
        href="https://x.com/globethrough"
        target="_blank"
      >
        <BsTwitterX className={`${icon_color}`} />
      </a>
      <a
        className={`h-7 w-7 sm:h-9 sm:w-9  rounded-full flex items-center justify-center ${bg}`}
        href="https://www.instagram.com/globethrough/"
        target="_blank"
      >
        <FaInstagram className={`${icon_color}`} />
      </a>
      <a
        className={`h-7 w-7 sm:h-9 sm:w-9  rounded-full flex items-center justify-center ${bg}`}
        href="https://in.pinterest.com/Globethrough/"
        target="_blank"
      >
        <ImPinterest2 className={`${icon_color}`} />
      </a>
      <a
        className={`h-7 w-7 sm:h-9 sm:w-9  rounded-full flex items-center justify-center ${bg}`}
        href="https://www.linkedin.com/company/globethrough/"
        target="_blank"
      >
        <IoLogoLinkedin className={`${icon_color}`} />
      </a>
    </div>
  );
};

export default SocialCompo;
