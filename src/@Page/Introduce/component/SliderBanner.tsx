import React from "react";
import Image from "next/image";

const SliderBanner = () => {
  const frameList = [
    {
      year: "2024",
      items: [
        {
          day: "26/01/2024",
          text: "Ra mắt website",
          image: "/image/image3.png",
        },
        {
          day: "26/12/2024",
          text: "Ra mắt phần mềm",
          image: "/image/image4.png",
        },
      ],
    },
    {
      year: "2023",
      items: [
        {
          day: "26/01/2023",
          text: "Ra mắt website",
          image: "/image/image3.png",
        },
        {
          day: "26/12/2023",
          text: "Ra mắt phần mềm",
          image: "/image/image4.png",
        },
      ],
    },
    {
      year: "2022",
      items: [
        {
          day: "26/01/2022",
          text: "Ra mắt website",
          image: "/image/image3.png",
        },
        {
          day: "26/12/2022",
          text: "Ra mắt phần mềm",
          image: "/image/image4.png",
        },
      ],
    },
    {
      year: "2021",
      items: [
        {
          day: "26/01/2023",
          text: "Ra mắt website",
          image: "/image/image3.png",
        },
        {
          day: "26/12/2023",
          text: "Ra mắt phần mềm",
          image: "/image/image4.png",
        },
      ],
    },
    {
      year: "2020",
      items: [
        {
          day: "26/1/2022",
          text: "Khai trương chi nhánh HCM",
          image: "/image/image6.png",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div>
        <div className=" w-full gap-3 flex">
          {frameList.map((item) => (
            <div
              key={item.year}
              className="border-solid font-[600] border-2 !w-max rounded-full p-2  tablet:px-4 tablet:py-2  flex justify-center slider-item cursor-pointer transition-all duration-300 hover:bg-blue-500 hover:text-white"
            >
              {item.year}
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex gap-5 flex-col">
        {frameList.map((item, index) => {
          const i = item.items[0];
          return (
            <div key={index} className="flex flex-col gap-5">
              <div className="flex gap-5 w-full">
                <div className="w-5 h-5 relative z-[1]">
                  <div className="w-2 h-2 left-[6px] top-[6px] absolute bg-slate-300 rounded-full" />
                  <div className="w-5 h-5 left-0 top-0 absolute rounded-full border border-slate-300" />
                </div>
                {/* đường kẻ nối các ô lại hehe */}
                <div className="absolute h-[82%] w-[2px] z-0 top-[10px] bg-gray-100 left-[9px]"></div>
                <div className="flex w-full flex-col gap-5">
                  <div className="flex flex-col gap-3">
                    <p className="text-zinc-900 text-xs font-semibold leading-none">
                      {i.day}
                    </p>
                    <p className="text-gray-500 text-sm font-medium leading-tight">
                      {i.text}
                    </p>
                  </div>
                  <div className="relative w-[50%] aspect-video rounded-xl">
                    <Image
                      src={i.image}
                      quality={100}
                      fill
                      alt="EduCenter"
                      // className="w-full h-full object-cover"
                      title="EduCenter"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-blue-500 text-sm ml-[11%]  font-semibold  leading-none">
        xem thêm
      </div>
    </div>
  );
};

export default SliderBanner;
