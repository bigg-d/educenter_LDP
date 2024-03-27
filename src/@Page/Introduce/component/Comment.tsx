"use client";
import { useBreakpoints } from "@/@Common/hooks/useBreakpoints";
import clsx from "clsx";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Slider from "react-slick";
const Comment = () => {
  const { mobile, tablet, desktop, laptop } = useBreakpoints();
  const [activeIndex, setActiveIndex] = useState(0);

  const listImage = [
    { image: "/image/logo1.svg" },
    { image: "/image/logo2.svg" },
    { image: "/image/logo3.svg" },
    { image: "/image/logo4.svg" },
    { image: "/image/logo5.svg" },
    { image: "/image/logo6.svg" },
    { image: "/image/logo7.svg" },
    { image: "/image/logo8.svg" },
    { image: "/image/logo9.png" },
    { image: "/image/logo10.png" },
    { image: "/image/logo11.svg" },
    { image: "/image/logo12.svg" },
    // {image:"/image/logo13.svg"},
  ];
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
    beforeChange: function (currentSlide: any, nextSlide: any) {
      setActiveIndex(nextSlide);
    },
  };
  const listFrame = [
    {
      image: "/image/avt.svg",
      name: "Theresa Webb",
      text: "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp.",
      value:
        "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho đội ngũ nhân viên của mình nên lựa chọn Educenter.",
    },
    {
      image: "/image/avt.svg",
      name: "Theresa Webb",
      text: "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp.",
      value:
        "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho đội ngũ nhân viên của mình nên lựa chọn Educenter.",
    },
    {
      image: "/image/avt.svg",
      name: "Theresa Webb",
      text: "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp.",
      value:
        "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho đội ngũ nhân viên của mình nên lựa chọn Educenter.",
    },
  ];

  return (
    <div className="w-full py-8 md:py-0 h-auto bg-blue-50 laptop:py-10 flex flex-col gap-9 md:gap-[7rem] ">
      <div className="mx-auto flex text-center w-[90%] flex-col-reverse laptop:flex-row tablet:w-4/5 tablet:justify-between tablet:gap-8 fhd:gap-0">
        <div className="w-full   desktop:w-[40%] flex flex-col fhd:gap-[3.75rem]  laptop:w-[30%] justify-center mt-[10%] laptop:mt-0">
          <div className="self-stretch text-zinc-900 text-2xl md:text-[2rem] fhd:text-[4rem] font-bold  laptop:text-[2.5rem] laptop:leading-[4rem] leading-[2rem] fhd:leading-[6rem] fhd:w-[80%] tracking-wider">
            <h2>Khách hàng nói gì về Educenter ?</h2>
          </div>
          {tablet && (
            <div className="fhd:px-8 fhd:py-4 px-3 py-4 bg-blue-500 rounded-full justify-center items-center gap-1 inline-flex fhd:w-[60%]">
              <div className="text-center text-white text-base fhd:text-xl fhd:font-bold leading-normal tracking-tight">
                Chứng thực từ khách hàng
              </div>
            </div>
          )}
        </div>
        {/* <Fade direction="up" delay={1e2}> */}
        <div className="grid desktop:grid-cols-4  grid-rows-3 grid-cols-3 gap-8 md:gap-3 fhd:gap-10 laptop:gap-3 h-full">
          {listImage.map((item, index) => (
            <div
              key={index}
              className="flex  w-full   fhd:w-full justify-center items-center"
            >
              <img
                src={item.image}
                alt=""
                className="w-[70%] fhd:w-[50%] laptop:w-[40%]"
              />
            </div>
          ))}
        </div>
        {/* </Fade> */}
      </div>
      <div className="w-full flex ">
        <div className="w-full   flex overflow-hidden ">
          {mobile ? (
            <div className="w-[90%] mx-auto flex flex-col gap-9">
              {listFrame.map((pro, index) => (
                // <Fade direction="right" delay={1e3}>
                <div
                  key={index}
                  className="fhd:p-[3rem] p-8   divSlide border-4 fhd:border-8 border-solid border-blue-300 flex-col justify-start items-start gap-7 inline-flex rounded-[2.6rem]"
                >
                  <div className="flex flex-col gap-5">
                    <div className="w-[15%]">
                      <img src="/image/img_mark.png" alt="" />
                    </div>
                    <div className="self-stretch justify-start items-center gap-5 inline-flex">
                      <img src={pro.image} alt="" />
                      <span className="grow shrink basis-0 text-zinc-600 text-lg  font-bold ">
                        {pro.name}
                      </span>
                    </div>
                  </div>
                  <div className="self-stretch  flex-col justify-start items-start gap-5 flex">
                    <span className="self-stretch text-zinc-900 text-sm  font-medium ">
                      {pro.text}
                    </span>
                    <span className="self-stretch text-zinc-900 text-sm  font-medium ">
                      {pro.value}
                    </span>
                  </div>
                </div>
                // </Fade>
              ))}
            </div>
          ) : (
            <Slider
              {...sliderSettings}
              className="w-full mx-auto right-[-10%] flex"
            >
              {listFrame.map((pro, index) => (
                <div key={index} className="p-4">
                  <div
                    className={clsx(" rounded-[1rem] p-[4px]", {
                      "bg-mainGradient": activeIndex === index,
                      "bg-white": activeIndex !== index,
                    })}
                  >
                    <div className="w-full flex flex-col gap-4 rounded-[1rem] bg-white fhd:p-[3rem] p-4">
                      <div className="flex fhd:flex-col gap-5">
                        <div className="w-[15%]">
                          <img src="/image/img_mark.png" alt="" />
                        </div>
                        <div className="self-stretch justify-start items-center gap-5 inline-flex">
                          <img src={pro.image} alt="" />
                          <span className="grow shrink basis-0 text-zinc-600 text-lg fhd:text-xl font-bold ">
                            {pro.name}
                          </span>
                        </div>
                      </div>
                      <div className="self-stretch mt-5  flex-col justify-start items-start gap-5 flex">
                        <span className="self-stretch text-zinc-900 text-sm fhd:text-lg font-medium ">
                          {pro.text}
                        </span>
                        <span className="self-stretch text-zinc-900 text-sm fhd:text-lg font-medium ">
                          {pro.value}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
