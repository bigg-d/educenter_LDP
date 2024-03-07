"use client";
import { useBreakpoints } from "@/@Common/hooks/useBreakpoints";
import { Button } from "@mui/material";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const Mission = () => {
  const { mobile, tablet, desktop, laptop } = useBreakpoints();
  const missionList = [
    {
      stt: "01",
      title: "Cung cấp dịch vụ hoàn hảo",
      text: "Bất kể mọi ngành nghề, lĩnh vực hay quốc gia, dân tộc",
    },
    {
      stt: "02",
      title: "Chính xác, minh bạch",
      text: "Bất kể mọi ngành nghề, lĩnh vực hay quốc gia, dân tộc",
    },
    {
      stt: "03",
      title: "Tối ưu giá trị doanh nghiệp",
      text: "Bất kể mọi ngành nghề, lĩnh vực hay quốc gia, dân tộc",
    },
  ];
  return (
    <div className="w-full bg-blue-50 relative pb-10 z-[1] ">
      <div className="w-full 2xl:h-[45%] h-[52%] md:h-[60%] left-0 bottom-0 absolute bg-white z-[0]"></div>
      <div className=" w-[90%] md:w-[85%]  py-10 mx-auto flex flex-col gap-10 z-[1] ">
        <div className={clsx("", { "w-full flex justify-center": mobile })}>
          <h2 className="text-zinc-900 2xl:text-3xl text-xl font-semibold font-['Montserrat'] leading-9">
            Với sứ mệnh
          </h2>
        </div>
        <div className="flex gap-[2.875rem] relative flex-col md:flex-row items-center">
          <div
            className={clsx("bg-blue-500  rounded-2xl", {
              "2xl:w-[20%] w-[45%] absolute  z-[1]  p-9 2xl:left-0 2xl:top-0 2xl:bottom-[30%] md:bottom-[-3rem] right-0    flex-col justify-between 2xl:gap-[11rem] gap-9 items-start inline-flex":
                tablet,
              " p-6  flex-col justify-between items-start inline-flex absolute w-[90%] mx-auto z-[1] bottom-[-25%] gap-9 ":
                mobile,
            })}
          >
            <div className="self-stretch  flex-col justify-start items-start gap-3.5 flex">
              <div className="self-stretch text-white 2xl:text-xl text-lg font-semibold font-['Montserrat'] 2xl:leading-loose leading-7">
                Cung cấp sản phẩm giáo dục toàn diện
              </div>
              <div className="self-stretch text-blue-200 2xl:text-base text-xs font-medium font-['Montserrat'] leading-normal">
                Đồng hành cùng doanh nghiệp trong mọi lĩnh vực
              </div>
            </div>
            <div className="px-5 py-3.5 w-full md:w-auto bg-white rounded-full border-2 border-white border-opacity-60 justify-center items-center gap-2 inline-flex">
              <button className="text-center text-zinc-900 2xl:text-sm  text-xs font-semibold font-['Montserrat'] leading-tight">
                Xem dịch vụ của chúng tôi
              </button>
            </div>
          </div>

          <div
            className={clsx("", {
              "relative 2xl:w-[40%] w-[80%]  2xl:left-[25%] aspect-[1/1] ":
                tablet,
              "w-full relative aspect-[1/1]": mobile,
            })}
          >
            <Image src="/image/img_sumenh.svg" fill alt="" />
          </div>
          <div
            className={clsx("", {
              "2xl:right-0 2xl:bottom-0 bottom-[-7rem]  2xl:w-[30%] w-[50%] 2xl: absolute text-zinc-900 2xl:text-3xl text-lg font-semibold font-['Montserrat'] leading-9":
                tablet,
              "text-center bg-gradient-to-r from-[#3E60FE] to-[#D23CFF] text-transparent bg-clip-text text-lg font-semibold font-['Montserrat'] leading-normal absolute bottom-[-45%] w-[90%] ":
                mobile,
            })}
          >
            Chúng tôi luôn đồng hành cùng doanh nghiêp
          </div>
        </div>
      </div>
      <div
        className={clsx("", {
          "2xl:w-[80%] w-[85%] relative   mx-auto flex justify-end z-[1] mt-20 2xl:mt-0":
            tablet,
          "w-[85%] mx-auto relative mt-[30%] ": mobile,
        })}
      >
        <div className=" 2xl:w-[77%] w-full  flex flex-col ">
          {missionList.map((item, index) => (
            <div
              key={index}
              className={`justify-start py-7 2xl:items-center gap-7 flex  ${
                index < 2 ? "border-b-2 border-solid border-gray-300" : ""
              }`}
            >
              <span className="text-zinc-900 text-3xl font-semibold font-['Montserrat']  leading-9 hidden md:flex">
                {item.stt}
              </span>
              <div
                className={clsx("", {
                  "flex w-[91%] justify-between flex-col 2xl:flex-row": tablet,
                  "flex flex-col text-center ": mobile,
                })}
              >
                <span className="text-zinc-900 text-lg md:text-xl font-semibold font-['Montserrat'] 2xl:leading-loose">
                  {item.title}
                </span>
                <span className=" text-zinc-600 text:sm md:text-base font-medium font-['Montserrat'] leading-normal 2xl:w-[36%]">
                  {item.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mission;
