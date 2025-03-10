import { BlogCardProps } from "../types";
import { Link } from "react-router-dom";

const BlogCard: React.FC<BlogCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <Link
      to={""}
      className="flex flex-col max-[568px]:px-3 px-6 max-[568px]:w-[90%] max-[1000px]:w-[30%] max-[768px]:w-[45%] py-6 w-[28%] bg-white shadow-lg  min-h-[502px] max-md:px-5"
    >
      <img
        loading="lazy"
        src={imageSrc}
        alt={title}
        className="rounded-md object-contain"
      />
      <div className="flex flex-col justify-between mt-8 w-full min-h-[184px]">
        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full">
            <div className="flex-1 shrink gap-4 w-full max-[568px]:text-xl text-2xl font-bold leading-8 text-gray-900">
              {title}
            </div>
            <div className="mt-3 text-base leading-6 text-gray-500">
              {`${description.slice(0, 100)}....`}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
