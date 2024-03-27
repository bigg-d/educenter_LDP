"use client";
// import { useBreakpoints } from "@/@Common/hooks/useBreakpoints";
// import { Stepper, Button } from "@mui/material";
import clsx from "clsx";
import Image from "next/image";
// import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
// import CoreCarousel from "../hook/CoreCarousel";
import Slider from "react-slick";
import { Slide } from "react-awesome-reveal";
const Banner = () => {
  // const { mobile, tablet, laptop, desktop } = useBreakpoints();
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
    <div className="w-[90%] mx-auto tablet:w-full  flex flex-col items-center bg-white">
      <div className=" w-full mt-10 gap-5 flex flex-col fhd:pb-10 pb-10">
        <div>
          <h1 className="font-bold tablet:hidden text-sb14">Giới Thiệu</h1>
        </div>

        <div className="tablet:w-[85%] w-[80%] tablet:mx-auto flex flex-col text-sb28 laptop:text-[3.25rem] laptop:leading-[4rem]  tablet:text-[2.5rem] fhd:text-[3.5rem]  fhd:w-[80%]">
          <h2 className="bg-gradient-to-r from-[#3E60FE] to-[#D23CFF] text-transparent bg-clip-text  font-semibold">
            Chúng tôi đã có 10 năm
          </h2>

          <h2 className="font-semibold md:font-light ">
            đồng hành cùng doanh nghiệp
          </h2>
        </div>

        <div className="">
          <div className="flex fhd:w-full  flex-col gap-5 relative  slider-container ">
            <div>
              <Slider
                asNavFor={nav1}
                ref={(slider: any) => (sliderRef2 = slider)}
                swipeToSlide={true}
                focusOnSelect={true}
                // afterChange={handleYearChange}
                {...settings}
                className="desktop:mx-auto laptop:w-1/3 desktop:  w-full  fhd:my-5  slider-arrow tablet:w-2/3 tablet:ml-[10%]"
              >
                {frameList.map((item) => (
                  <div
                    onClick={() => handleYearChange(item.year)}
                    key={item.year}
                    className={clsx(
                      "border-solid font-[600] border-2 !w-max rounded-full p-2  tablet:px-4 tablet:py-2  flex justify-center slider-item cursor-pointer transition-all duration-300 hover:bg-blue-500 hover:text-white",
                      {
                        "border-blue-500  text-blue-500":
                          item.year === selectedYear,
                        // "border-gray-500 text-black": item.year !== selectedYear,
                        // "px-2 py-2  border-solid border rounded-full flex justify-center slider-item text-[0.8rem] transition-all duration-300 hover:bg-blue-500 hover:text-white":
                        //   mobile,
                      }
                    )}
                  >
                    {item.year}
                  </div>
                ))}
              </Slider>
            </div>

            <div className=" relative flex justify-end overflow-hidden">
              <Slider
                className={clsx(
                  "slide-phong w-full flex  tablet:gap-30 [&>.slick-list>.slick-track>*]:!w-auto [&>.slick-list]:!pl-[8%]"
                )}
                asNavFor={nav2}
                ref={(slider: any) => (slider ? (sliderRef1 = slider) : null)}
                slidesToShow={2.5}
                autoplay={false}
                infinite={false}
                // vertical={false}
                arrows={false}
                // responsive={[
                //   {
                //     breakpoint: 1024,
                //     settings: {
                //       slidesToShow: 3,
                //       vertical: false,
                //     },
                //   },
                //   {
                //     breakpoint: 480,
                //     settings: {
                //       slidesToShow: 3,
                //       vertical: true,
                //     },
                //   },
                // ]}
              >
                {frameList.map((item, index) => {
                  return (
                    <div
                      key={String(Math.random() + index)}
                      className="!flex gap-8 flex-col"
                    >
                      <div className="text-sb28 text-transparent bg-gradient-to-r from-mainViolet to-mainBlue bg-clip-text">
                        {item.year}
                      </div>
                      <div className="flex">
                        {item.items?.map((i) => {
                          return (
                            <div
                              key={i.day}
                              className="relative border-t border-gray-100 laptop:min-w-[320px]"
                            >
                              <div className="absolute z-[2] w-[26px] aspect-square rounded-[50%] border-2 border-gray-100 top-[-13px] left-[-13px] flex items-center justify-center">
                                <div className="w-[12px] h-[12px] rounded-[50%] bg-gray-200"></div>
                              </div>
                              <div className="absolute w-screen h-[1px] top-[-1px] bg-gray-100 right-0"></div>
                              <div className="absolute w-screen h-[1px] top-[-1px] bg-gray-100 left-0"></div>
                              <div className="flex flex-col border-l border-gray-100 p-12">
                                <div className="flex flex-col gap-2">
                                  <p className="text-m18">{i.day}</p>
                                  <p className="text-m16 text-[#787A8C]">
                                    {i.text}
                                  </p>
                                </div>
                              </div>

                              <div className="w-[80%]  -translate-x-2 aspect-video rounded-xl relative">
                                <Image
                                  quality={100}
                                  src={i.image}
                                  fill
                                  alt="EduCenter"
                                  title="EduCenter"
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
