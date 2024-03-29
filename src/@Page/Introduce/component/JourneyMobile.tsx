"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function JourneyMobile() {
  const [activeYear, setActiveYear] = useState(0);

  const data = [
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
    <div className="flex flex-col gap-2 py-4">
      <p className="text-sb14">Giới thiệu</p>
      <h2 className="text-sb28 text-[#3E65FE] w-[70%]">
        Chúng tôi đã có 10 năm
      </h2>
      <p className="text-sb28 text-[#4B4C58]  w-[70%]">
        đồng hành cùng doanh nghiệp
      </p>
      <div className="flex items-center gap-2 py-2">
        {data.map((i, index) => (
          <div
            onClick={() => setActiveYear(index)}
            key={`year ${i.year}`}
            className={clsx(" rounded-[5000px] p-[1px]", {
              "bg-mainGradient": index === activeYear,
              "bg-[#CFD1E4]": index !== activeYear,
            })}
          >
            <div className="rounded-[5000px] bg-white px-4 py-2 text-sb12">
              {i.year}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 mt-8 px-4">
        {data[activeYear].items.map((i) => (
          <div key={i.day} className="relative flex gap-4 w-full">
            <div className="absolute z-[2] w-[26px] aspect-square rounded-[50%] border-2 border-gray-100 top-[-16px] left-[-13px] flex items-center justify-center">
              <div className="w-[12px] h-[12px] rounded-[50%] bg-gray-200"></div>
            </div>

            <div className="flex flex-col gap-0 border-l border-gray-100 px-8 w-full py-8">
              <div className="flex flex-col gap-2 -translate-y-12">
                <p className="text-m18">{i.day}</p>
                <p className="text-m16 text-[#787A8C]">{i.text}</p>
              </div>
              <div className="w-full  -translate-x-2 aspect-video rounded-xl relative">
                <Image
                  quality={100}
                  src={i.image}
                  fill
                  alt="EduCenter"
                  title="EduCenter"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
