"use client";
import { useBreakpoints } from "@/@Common/hooks/useBreakpoints";
import { Button } from "@mui/material";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

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
      <div className="w-full  laptop:h-[45%] h-[52%] md:h-[60%] left-0 bottom-0 absolute bg-white z-[0]"></div>
      <div className="w-[90%] md:w-[85%]  py-10 mx-auto flex flex-col gap-10 z-[1] ">
        <div className="w-full flex justify-center tablet:justify-start">
          <h2 className="text-zinc-900 fhd:text-sb28 text-xl font-semibold  leading-9">
            Với sứ mệnh
          </h2>
        </div>
        <div className="flex gap-[2.875rem] relative flex-col laptop:flex-row  items-center tablet:items-start">
          <div
            className={clsx(
              "bg-blue-500  rounded-2xl justify-between items-start inline-flex gap-9 flex-col ",
              {
                "fhd:w-[20%] fhd:p-9 laptop:w-[22%] laptop:p-7 w-[45%] absolute  z-[1]  p-9 laptop:left-0 laptop:top-0 laptop:bottom-[30%] md:bottom-[5rem] right-0  inline-flex":
                  tablet,
                " p-6   absolute w-[90%] mx-auto z-[1] bottom-[-25%]  ": mobile,
              }
            )}
          >
            <div className="self-stretch  flex-col justify-start items-start gap-3.5 flex">
              <h3 className="self-stretch text-white fhd:text-[1.5rem] desktop:text-[1.3rem] desktop:leading-7 fhd:leading-9 laptop:text-[1rem] text-lg font-semibold   leading-7">
                Cung cấp sản phẩm giáo dục toàn diện
              </h3>
              <h3 className="self-stretch text-blue-200 desktop:text-base text-xs font-medium  leading-normal">
                Đồng hành cùng doanh nghiệp trong mọi lĩnh vực
              </h3>
            </div>
            <div className="px-5 py-3.5 laptop:px-4 w-full md:w-auto bg-white rounded-full border-2 border-white border-opacity-60 justify-center items-center gap-2 inline-flex">
              <button className="text-center w-full text-zinc-900 fhd:text-sb14  text-xs font-semibold  leading-tight">
                Xem dịch vụ của chúng tôi
              </button>
            </div>
          </div>

          <Fade
            direction="up"
            triggerOnce
            className="relative laptop:w-[40%] tablet:w-[80%] w-full  laptop:left-[25%] aspect-[1/1]"
          >
            <Image src="/image/img_sumenh.svg" fill alt="" loading="lazy" />
          </Fade>
          <Fade
            triggerOnce
            direction="up"
            className={clsx("font-semibold", {
              "laptop:right-0 laptop:text-xl laptop:bottom-[4%] desktop:bottom-0   bottom-[-7rem]  laptop:w-[30%] w-[50%] laptop:absolute text-zinc-900 fhd:text-3xl text-lg leading-9":
                tablet,
              "text-center bg-gradient-to-r from-[#3E60FE] to-[#D23CFF] text-transparent bg-clip-text text-lg   leading-normal absolute bottom-[-45%] w-[90%] ":
                mobile,
            })}
          >
            Chúng tôi luôn đồng hành cùng doanh nghiệp
          </Fade>
        </div>
      </div>
      <div className="laptop:w-[80%] w-[85%] relative   mx-auto flex justify-end z-[1] mt-[30%] tablet:mt-0 laptop:mt-0">
        <div className=" laptop:w-[77%] w-full  flex flex-col ">
          {missionList.map((item, index) => (
            <Fade direction="up">
              <div
                key={index}
                className={`justify-start py-7 laptop:items-center gap-7 flex  ${
                  index < 2 ? "border-b-2 border-solid border-gray-300" : ""
                }`}
              >
                <span className="text-zinc-900 text-3xl fhd:text-[2.4rem] font-semibold   leading-9 hidden md:flex">
                  {item.stt}
                </span>
                <div className="flex tablet:w-[91%] text-center tablet:text-left tablet:justify-between flex-col laptop:flex-row">
                  <span className="text-zinc-900 fhd:text-[1.6rem] text-lg md:text-xl font-semibold  laptop:leading-loose">
                    {item.title}
                  </span>
                  <span className=" text-zinc-600 fhd:text-[1.2rem] text:sm md:text-base font-medium  leading-normal laptop:w-[36%]">
                    {item.text}
                  </span>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mission;
