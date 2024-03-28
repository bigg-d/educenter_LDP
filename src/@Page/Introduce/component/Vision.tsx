"use client";
import { useBreakpoints } from "@/@Common/hooks/useBreakpoints";
import clsx from "clsx";
import { table } from "console";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Vision = () => {
  const { mobile, tablet, desktop, laptop } = useBreakpoints();
  return (
    <div className="w-full bg-blue-50 flex justify-center fhd:pb-[5rem] py-[2.5rem] relative overflow-hidden">
      <div className="flex flex-col items-center w-[85%]   gap-[3rem] relative z-[1] tablet:w-[65%] tablet:gap-[3.25rem] tablet:static">
        <Fade
          direction="up"
          className="w-[40%] md:w-[33%] fhd:w-[15%] px-6 py-2 rounded-full  items-center gap-1  bg-blue-100 flex justify-center"
        >
          <div className="text-center md:text-[1.375rem] fhd:text-sb22   text-sb14 font-semibold  leading-tight bg-gradient-to-r from-[#3E60FE] to-[#D23CFF] text-transparent bg-clip-text  md:py-3">
            Tầm nhìn
          </div>
        </Fade>
        <Fade direction="up" className="w-full">
          <div className="flex flex-col text-center w-full gap-2 tablet:gap-4 fhd:gap-10">
            <div className=" md:flex md:flex-col laptop:flex-row laptop:items-center   laptop:justify-center md:gap-5 laptop:gap-2">
              <h2 className="fhd:w-[25%]  text-zinc-900 text-[1.5rem] fhd:text-[4rem] md:text-[2.625rem] font-semibold  leading-[38px] tracking-wide">
                Trở thành
              </h2>
              <div className="fhd:w-[53%] laptop:w-[54%] laptop:px-3 bg-gradient-to-r from-[#3E60FE] to-[#D23CFF] justify-center flex items-center rounded-tl-full rounded-br-full w-full fhd:py-3 laptop:py-0 py-[0.4rem] gap-3">
                <span className="fhd:text-[4rem] md:text-[2.625rem] md:py-5 text-white text-2xl font-semibold  leading-[1.8rem] tracking-wide">
                  công ty hàng đầu
                </span>
                <div className=" bg-white rounded-full font-semibold  leading-none flex justify-center items-center w-7 h-7 md:w-10 md:h-10  text-[#D23CFF]">
                  #1
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 md:gap-5 fhd:gap-10 ">
              <div
                className={clsx("", {
                  "  w-full  mx-auto flex flex-col gap-2 md:gap-6 ": mobile,
                  "w-full  mx-auto flex flex-col laptop:flex-row gap-6  laptop:items-center laptop:justify-center":
                    tablet,
                })}
              >
                <span className="fhd:text-[4rem] md:text-[2.625rem] text-zinc-900 text-2xl font-semibold  leading-[2rem] tracking-wide">
                  trong lĩnh vực
                </span>
                <div className="fhd:text-[4rem] md:text-[2.625rem] flex justify-center text-zinc-900 text-2xl font-semibold  leading-[2rem] tracking-wide items-center gap-1">
                  <span>dịch vụ</span>
                  <img
                    src="/image/pen.png"
                    alt=""
                    className="w-7 md:w-8 fhd:w-14"
                  />
                  <span>giáo dục</span>
                </div>
              </div>
              <span className="fhd:text-[4rem] fhd:w-[95%] md:text-[2.625rem] md:leading-[3.5rem]  text-2xl font-semibold  leading-[2.5rem] tracking-wide w-[80%] md:w-[90%] mx-auto text-slate-400">
                trên nền tảng công nghệ hiện đại
              </span>
            </div>
          </div>
        </Fade>
      </div>
      <div className="absolute top-0 right-0 ">
        {mobile && <img src="/image/pathgroup.svg" alt="" />}
        {tablet && <img src="/image/Group2right.svg" alt="" />}
        {/* {fhd && <img src="/image/dkright.png" />} */}
      </div>
      <div className="absolute bottom-0 left-0 over">
        {mobile && <img src="/image/Groupleft.svg" alt="" />}
        {tablet && <img src="/image/Group2left.svg" alt="" />}
        {/* {fhd && <img src="/image/dkleft.svg" />} */}
      </div>
    </div>
  );
};

export default Vision;
