"use client";
import { useBreakpoints } from "@/@Common/hooks/useBreakpoints";
import { Stepper, Button } from "@mui/material";
import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import CoreCarousel from "../hook/CoreCarousel";
import Slider from "react-slick";
const Banner = () => {
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

  const [nav1, setNav1] = useState<any>(null);
  const [nav2, setNav2] = useState<any>(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const [selectedYear, setSelectedYear] = useState("2024");
  const handleYearChange = (year: string) => {
    setSelectedYear(year);
  };
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    // autoplaySpeed: 2000
  };
  return (
    <div className="w-full flex flex-col items-center bg-white">
      <div className="w-[90%] mt-10 md:w-full gap-5 flex flex-col 2xl:pb-10 pb-10">
        {mobile && (
          <div>
            <h1 className="font-bold">Giới Thiệu</h1>
          </div>
        )}
        <div className="md:w-[80%] md:mx-auto flex flex-col text-[1.7rem] md:text-[2.5rem] lg:text-[3rem]  w-[65%]">
          <h2 className="bg-gradient-to-r from-[#3E60FE] to-[#D23CFF] text-transparent bg-clip-text  font-semibold">
            Chúng tôi đã có 10 năm
          </h2>
          <h2 className="font-semibold md:font-light">
            đồng hành cùng doanh nghiệp
          </h2>
        </div>

        <div className="">
          <div className="flex 2xl:w-full  flex-col gap-5  slider-container ">
            <Slider
              asNavFor={nav1}
              ref={(slider: any) => (sliderRef2 = slider)}
              swipeToSlide={true}
              focusOnSelect={true}
              // afterChange={handleYearChange}
              {...settings}
              className={clsx(" ", {
                " 2xl:mx-auto   ml-[10%] w-max  my-2 ": tablet,
                "  mx-auto w-max": mobile,
              })}
            >
              {frameList.map((item) => (
                <div
                  onClick={() => handleYearChange(item.year)}
                  key={item.year}
                  className={clsx("", {
                    "border-solid border rounded-full    px-4 py-2  flex justify-center slider-item cursor-pointer transition-all duration-300 hover:bg-blue-500 hover:text-white":
                      tablet,
                    "border-blue-500  font-[600] text-blue-500":
                      item.year === selectedYear,
                    "border-gray-500 text-black": item.year !== selectedYear,
                    "px-2 py-2  border-solid border rounded-full flex justify-center slider-item text-[0.8rem] transition-all duration-300 hover:bg-blue-500 hover:text-white":
                      mobile,
                  })}
                >
                  {item.year}
                </div>
              ))}
            </Slider>
            <div className=" relative flex md:justify-end overflow-hidden ">
              <div
                className={clsx("", {
                  "border absolute border-solid-5 md:border-gray-200 top-[19%] w-full ":
                    tablet,
                  "border absolute border-solid-5 md:border-gray-200 top-[2%] left-[3%] h-[67%] ":
                    mobile,
                })}
              />
              <Slider
                className={clsx("", {
                  "slide-phong   w-[100%] right-[-10%]  flex gap-30 ": tablet,
                  "slide-phong   w-[100%]  flex  ": mobile,
                })}
                asNavFor={nav2}
                ref={(slider: any) => (slider ? (sliderRef1 = slider) : null)}
                slidesToShow={5}
                vertical={false}
                responsive={[
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 3,
                      vertical: false,
                    },
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 3,
                      vertical: true,
                    },
                  },
                ]}
              >
                {frameList.map((item, index) =>
                  item.items?.map((pro, indexPro) => (
                    <div
                      key={indexPro}
                      className={clsx("", {
                        "w-full": mobile,
                        "flex flex-col z-[1]  relative": tablet,
                      })}
                    >
                      {tablet && (
                        <div className="mb-3 ml-0 bg-gradient-to-r from-[#3E60FE] to-[#D23CFF] text-transparent bg-clip-text 2xl:text-2xl  font-semibold">
                          {item.year}
                        </div>
                      )}
                      <div className="flex md:w-[120%] dektop:w-full  flex-wrap relative  ">
                        <div className="flex gap-5">
                          <div>
                            <div className="w-5 2xl:w-7 2xl:h-7  h-5 relative  ">
                              <div className="w-2 2xl:w-3 2xl:h-3 h-2 left-[6px] top-[6px] z-[2] absolute bg-slate-300 rounded-full" />
                              <div className="w-5 h-5 2xl:w-6 2xl:h-6 left-0 top-0 absolute z-[2] rounded-full border border-slate-300" />
                            </div>
                            {tablet && (
                              <div className="border z-0 absolute border-solid border-gray-200 h-[500%]  md:top-[0.7rem] left-[0.65rem]" />
                            )}
                          </div>
                          <div
                            className={clsx("", {
                              " py-9 px-6 flex-col justify-start items-start gap-2 inline-flex ":
                                tablet,
                              "flex flex-col gap-3": mobile,
                            })}
                          >
                            <div className=" text-zinc-900 text-[1rem]  md:text-xs 2xl:text-lg font-semibold  leading-none">
                              {pro.day}
                            </div>
                            <div className=" text-gray-500 text-[0.9rem] md:text-sm font-medium 2xl:text-base  leading-tight">
                              {pro.text}
                            </div>
                          </div>
                        </div>
                        <div
                          className={clsx("", {
                            "w-full relative  top-0 left-0 z-[2]": tablet,
                            "w-full relative  top-0 left-[10%] z-[2]": mobile,
                          })}
                        >
                          <div
                            className={clsx("", {
                              "relative aspect-[200/120] md:w-[50%]  h-auto ":
                                tablet,
                              "relative aspect-[200/120] w-[60%] my-4  h-auto ":
                                mobile,
                            })}
                          >
                            <Image src={pro.image} alt="" fill />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
