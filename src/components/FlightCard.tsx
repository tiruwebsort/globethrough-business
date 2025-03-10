const FlightCard = () => {
  return (
    <div className="flex absolute bottom-5 max-[500px]:hidden gap-2.5 pl-3 bg-white rounded-md shadow-sm">
      <div className="z-10 my-auto">
        <div className="flex gap-5 justify-between text-xs font-bold whitespace-nowrap text-neutral-900 text-opacity-70 max-md:mr-1.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f23894520008ced664e2e48ec37a983434498940ceea83cb3d1c6ce593fe1926?placeholderIfAbsent=true&apiKey=00bedd7c3997447984bf9cef0c80b29a"
            className="object-contain shrink-0 w-12 aspect-[2.09]"
            alt="Airline Logo"
          />
          <span className="self-start">Economy</span>
        </div>
        <div className="flex  gap-2 items-start mt-3">
          <div className="self-stretch ">
            <div className="z-10 max-md:mr-1">
              <div className="text-sm font-bold leading-4 text-neutral-900">
                <span className="text-[10px]">19:40 </span>
                <span className="text-[10px] text-[#131313]">(9:40 AM) </span>
                <br />
                <span className="text-[10px]">BLR,</span>{" "}
                <span className="text-[8px] text-[#131313]">Bangalore</span>
              </div>
              <div className="mt-1 text-xs font-medium leading-4 text-neutral-900 text-opacity-70">
                Kempegowda International Airport Terminal 2
              </div>
            </div>
            <div className="-mt-1 text-xs font-bold text-neutral-900 text-opacity-70">
              <span className="text-[10px]">Mon, 28 Jan</span>{" "}
              <span className="text-[6px] text-[#131313]">(Departure)</span>
            </div>
          </div>
          <div className="text-xs font-medium text-center text-neutral-900 text-opacity-70">
            <div>4h 10m</div>
            <div>1 Stop</div>
          </div>
          <div className="flex flex-col justify-center text-right">
            <div className="self-end text-sm font-bold leading-4 text-neutral-900">
              <span className="text-[10px]">19:40 </span>
              <span className="text-[10px] text-[#131313]">(9:40 AM)</span>{" "}
              <br />
              <span className="text-[10px]">IXE,</span>{" "}
              <span className="text-[8px] text-[#131313]">Mangalore</span>
            </div>
            <div className="mt-1 text-xs font-medium leading-4 text-neutral-900 text-opacity-70">
              Mangaluru
              <br />
              International Airport Terminal 2
            </div>
          </div>
        </div>
      </div>
      <div className="flex shrink-0 bg-emerald-900 rounded-none h-[142px] w-[13px] max-md:hidden" />
    </div>
  );
};

export default FlightCard;
