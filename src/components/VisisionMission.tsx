const VisisionMission: React.FC<{ content: string[]; image: string }> = ({
  content,

  image,
}) => {
  return (
    <div className="flex max-[768px]:flex-col gap-5 justify-between items-center">
      <div className="flex flex-col  max-[768px]:w-full w-[60%] gap-4.5">
        {content.map((item, ind) => (
          <p key={ind} className="text-lg md:text-xl text-gray-500">
            {item}
          </p>
        ))}
      </div>

      <div className="rounded-2xl overflow-hidden max-[768px]:w-[70%] w-[32%] aspect-square max-[768px]:justify-center flex">
        <img
          loading="lazy"
          src={image}
          className="rounded-3xl  w-full h-full object-cover"
          alt="img"
        />
      </div>
    </div>
  );
};

export default VisisionMission;
