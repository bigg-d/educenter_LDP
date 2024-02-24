"use client";
import { useBreakpoints } from "@/@Common/hooks/useBreakpoints";
import { Stepper, Button } from "@mui/material";
import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Banner = () => {
  const pathname = usePathname();
  const [showAll, setShowAll] = useState(false)
  const { mobile, tablet, laptop, desktop } = useBreakpoints();
  const frameList = [
    {
      year: "2024",
      items: [
        {
          day: "26/1/2024",
          text: "Chính thức công ty đại chúng",
          image: "/image/image1.png",
        },
        {
          day: "26/1/2024",
          text: "Khai trương chi nhánh HCM",
          image: "/image/image2.png",
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
          day: "26/1/2022",
          text: "Khai trương chi nhánh HCM",
          image: "/image/image6.png",
        },
      ],
    },
    {
      year: "2021",
    },
    {
      year: "2020",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center bg-white">
      <div className="w-[90%] mt-10 md:w-[85%] gap-5 flex flex-col">
        {mobile && (
          <div>
            <h1 className="font-bold">Giới Thiệu</h1>
          </div>
        )}
        <div className="flex flex-col text-[1.7rem] md:text-[2.5rem] lg:text-[3rem]  w-[65%]">
          <h2 className="bg-gradient-to-r from-[#3E60FE] to-[#D23CFF] text-transparent bg-clip-text  font-semibold">
            Chúng tôi đã có 10 năm
          </h2>
          <h2 className="font-semibold md:font-light">
            đồng hành cùng doanh nghiệp
          </h2>
        </div>

        <div className="">
          <>
            <div
              className={clsx("flex gap-2", {
                "flex justify-between gap-0 ": mobile,
                "flex gap-5 ": tablet,
                "mx-auto flex justify-center ": laptop,
              })}
            >
              {frameList.map((item) => (
                <div
                  key={item.year}
                  className={clsx(
                    "border-solid border-2 border-blue-500 rounded-full",
                    {
                      " border-blue-500 ": item.year == pathname,
                      "border-gray-500": item.year !== pathname,
                    }
                  )}
                >
                  <Button className="rounded-full">
                    <span className="text-black font-semibold">
                      {item.year}
                    </span>
                  </Button>
                </div>
              ))}
            </div>

            <div className="w-full  h-auto flex-col flex gap-5 mt-5 ">
              {frameList.map((item, index) =>
                item.items?.map((pro, indexPro) => (
                  <div className="flex flex-col " key={indexPro}>
                    <div className="flex gap-5">
                      <div className="w-5 h-5 relative">
                        <div className="w-2 h-2 left-[6px] top-[6px] absolute bg-slate-300 rounded-full" />
                        <div className="w-5 h-5 left-0 top-0 absolute rounded-full border border-slate-300" />
                      </div>

                      <div className="flex flex-col gap-5">
                        <div className=" py-0.5 flex-col justify-start items-start gap-2 inline-flex">
                          <div className=" text-zinc-900 text-xs font-semibold  leading-none">
                            {pro.day}
                          </div>
                          <div className=" text-gray-500 text-sm font-medium  leading-tight">
                            {pro.text}
                          </div>
                        </div>
                        <div className="">
                          <img src={pro.image} alt="" />
                        </div>
                      </div>

                    </div>
                  </div>
                ))
              )}
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Banner;
