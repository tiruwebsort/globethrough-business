const VisisionMission: React.FC<{ content: string; image: string }> = ({
  content,

  image,
}) => {
  return (
    <div className="flex  max-[768px]:flex-col gap-5  justify-between items-center ">
      <p className="text-lg md:text-xl text-gray-500  max-[768px]:w-full  w-[60%]">
        {content}
      </p>

      <div className="rounded-2xl overflow-hidden  max-[768px]:w-full  w-[40%]  h-[350px]">
        <img
          loading="lazy"
          src={image}
          className=" h-full w-full object-cover aspect-square "
          alt="img"
        />
      </div>
    </div>
  );
};

export default VisisionMission;
