"use client";
import { useBreakpoints } from "@/@Common/hooks/useBreakpoints";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const Result = () => {
  const { mobile, tablet, desktop, laptop } = useBreakpoints();
  return (
    <div className="w-full h-auto py-10 flex gap-10 flex-col 2xl:gap-0">
      <div className="mx-auto 2xl:w-[23%] md:w-[60%]   px-6 py-2 rounded-full  items-center gap-1  bg-gray-200 flex justify-center">
        <div className="text-center md:text-[1.375rem] text-[0.7rem] font-semibold font-['Montserrat'] leading-tight bg-gradient-to-r from-[#3E60FE] to-[#D23CFF] text-transparent bg-clip-text  md:py-3">
          Kết quả của hành trình phát triển
        </div>
      </div>
      <div className={clsx("",{
        "w-full relative ":tablet,
        "w-full relative  flex justify-center":mobile
      })} >
        <div
          className={clsx("", {
            "mt-5 2xl:mt-0 relative w-full h-auto aspect-[2/1] ": tablet,
            " relative w-full h-auto aspect-[1/1]": mobile,
          })}
        >
          {mobile ? (
            <Image src="/image/Curvedmobile.png" fill alt="" />
          ) : (
            <Image src="/image/Curved1.svg" fill alt="" />
          )}
        </div>
        <div className="absolute top-[50%] md:hidden w-full  aspect-[2/1]">
          <Image src="/image/Curved2.png" alt="" fill />
        </div>
        <div className={clsx("",{
          " flex gap-5 w-[35%] 2xl:w-[19%]  h-[25%] 2xl:h-auto absolute top-[10%] 2xl:top-[18%] left-[5%] 2xl:left-[10%]":tablet,
          "flex absolute top-0  w-[80%] gap-5 h-[23%]":mobile
        })}>
            <img src="/image/do.svg" alt="" />
            <div className={clsx("flex flex-col gap-2 ",{
              "w-[80%]":mobile
            })}> 
                <span className="self-stretch text-zinc-900 text-[0.875rem] 2xl:text-[1.3rem] font-semibold font-['Montserrat'] leading-tight">Tăng trưởng về quy mô</span>
                <span className="self-stretch text-zinc-600 text-[0.75rem]  font-medium font-['Montserrat']">Số lượng học sinh từ 10.000 lên 20.000 trong vòng 5 năm, tăng số lượng nhân viên từ 100 lên 500 trong vòng 3 năm</span>
            </div>
        </div>

        <div className={clsx("",{
          "flex gap-5 2xl:w-[19%]  w-[35%] h-[25%] 2xl:h-auto top-[5%] right-[5%] absolute 2xl:top-[15%] 2xl:left-[40%]":tablet,
          "flex absolute top-[25%] flex-row-reverse  w-[80%] gap-5 h-[23%]":mobile
        })}>
            <img src="/image/vang.svg" alt="" />
            <div className="flex flex-col gap-2"> 
                <span className="self-stretch text-zinc-900 text-[0.875rem] 2xl:text-[1.3rem] font-semibold font-['Montserrat'] leading-tight">Tăng trưởng về quy mô</span>
                <span className="self-stretch text-zinc-600 text-[0.75rem] 2xl:text-base font-medium font-['Montserrat']">Số lượng học sinh từ 10.000 lên 20.000 trong vòng 5 năm, tăng số lượng nhân viên từ 100 lên 500 trong vòng 3 năm</span>
            </div>
        </div>

        <div className={clsx("",{
          "md:hidden  2xl:flex gap-5 w-[19%]  absolute top-[18%] right-[10%]":tablet,
          "hidden":mobile
        })}>
            <img src="/image/xanhduong.svg" alt="" />
            <div className="flex flex-col gap-2"> 
                <span className="self-stretch text-zinc-900 text-[1.3rem] font-semibold font-['Montserrat'] leading-tight">Tăng trưởng về quy mô</span>
                <span className="self-stretch text-zinc-600 text-base font-medium font-['Montserrat']">Số lượng học sinh từ 10.000 lên 20.000 trong vòng 5 năm, tăng số lượng nhân viên từ 100 lên 500 trong vòng 3 năm</span>
            </div>
        </div>

        <div className={clsx("",{
          "flex gap-5 2xl:w-[19%] w-[35%] h-[23%] 2xl:h-auto top-[31%] left-[43%] absolute 2xl:top-[37%] 2xl:right-[40%]":tablet,
          "flex absolute top-[50%]   w-[80%] gap-5 h-[23%]":mobile
        })}>
            <img src="/image/danhla.svg" alt="" className=""/>
            <div className="flex flex-col gap-2"> 
                <span className="self-stretch text-zinc-900 text-[0.875rem] 2xl:text-[1.3rem] font-semibold font-['Montserrat'] leading-tight">Tăng trưởng về quy mô</span>
                <span className="self-stretch text-zinc-600 text-[0.75rem] 2xl:text-base font-medium font-['Montserrat']">Số lượng học sinh từ 10.000 lên 20.000 trong vòng 5 năm, tăng số lượng nhân viên từ 100 lên 500 trong vòng 3 năm</span>
            </div>
        </div>

        <div className={clsx("",{
          "flex gap-5 2xl:w-[19%] w-[35%] left-[13%] top-[52%] absolute 2xl:top-[55%] 2xl:left-[13%]":tablet,
          "flex absolute bottom-0 flex-row-reverse  w-[80%] gap-5 h-[23%]":mobile
        })} >
            <img src="/image/xanhnhat.svg" alt="" />
            <div className="flex flex-col gap-2"> 
                <span className="self-stretch text-zinc-900 text-[0.875rem] 2xl:text-[1.3rem] font-semibold font-['Montserrat'] leading-tight">Tăng trưởng về quy mô</span>
                <span className="self-stretch text-zinc-600 text-[0.75rem] 2xl:text-base font-medium font-['Montserrat']">Số lượng học sinh từ 10.000 lên 20.000 trong vòng 5 năm, tăng số lượng nhân viên từ 100 lên 500 trong vòng 3 năm</span>
            </div>
        </div>

        <div className={clsx("",{
          "flex gap-5 2xl:w-[19%] w-[35%] bottom-[13%] h-[25%] 2xl:h-auto right-[5%]  absolute 2xl:bottom-[20%] 2xl:left-[35%]":tablet,
          "hidden":mobile
        })}>
            <img src="/image/tim.svg" alt="" />
            <div className="flex flex-col gap-2"> 
                <span className="self-stretch text-zinc-900 text-[0.875rem] 2xl:text-[1.3rem] font-semibold font-['Montserrat'] leading-tight">Tăng trưởng về quy mô</span>
                <span className="self-stretch text-zinc-600 text-[0.75rem] 2xl:text-base font-medium font-['Montserrat']">Số lượng học sinh từ 10.000 lên 20.000 trong vòng 5 năm, tăng số lượng nhân viên từ 100 lên 500 trong vòng 3 năm</span>
            </div>
        </div>

        <div className="2xl:flex hidden gap-5 w-[19%]  absolute bottom-[15%] right-[15%]">
            <img src="/image/hong.svg" alt="" />
            <div className="flex flex-col gap-2"> 
                <span className="self-stretch text-zinc-900 text-[1.3rem] font-semibold font-['Montserrat'] leading-tight">Tăng trưởng về quy mô</span>
                <span className="self-stretch text-zinc-600 text-base font-medium font-['Montserrat']">Số lượng học sinh từ 10.000 lên 20.000 trong vòng 5 năm, tăng số lượng nhân viên từ 100 lên 500 trong vòng 3 năm</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Result;

<div className="w-[360px] h-[680px] pt-[45.32px] pb-[30.68px] bg-white flex-col justify-end items-center gap-10 inline-flex">
  <div className="self-stretch px-6 py-2 bg-indigo-50 rounded-full justify-start items-center gap-1 inline-flex">
    <div className="text-center text-blue-600 text-sm font-semibold font-['Montserrat'] leading-tight">Kết quả của hành trình phát triển</div>
  </div>
  <div className="w-[360px] h-[528px] relative flex-col justify-start items-start flex">
    <img className="w-[1719.26px] h-[451.40px] origin-top-left rotate-[177.43deg]" src="https://via.placeholder.com/1719x451" />
    <div className="justify-start items-start gap-[22.50px] inline-flex">
      <div className="w-[13.50px] h-[83.75px] relative">
        <div className="w-20 h-[0px] left-[6.75px] top-[83.75px] absolute origin-top-left -rotate-90 border border-neutral-400"></div>
        <div className="w-[13.50px] h-[13.50px] left-0 top-[13.50px] absolute bg-red-400 rounded-full" />
      </div>
      <div className="w-60 flex-col justify-start items-start gap-[9px] inline-flex">
        <div className="self-stretch text-zinc-900 text-sm font-semibold font-['Montserrat'] leading-tight">Tăng trưởng về quy mô</div>
        <div className="self-stretch text-zinc-600 text-xs font-medium font-['Montserrat']">Số lượng học sinh từ 10.000 lên 20.000 trong vòng 5 năm, tăng số lượng nhân viên từ 100 lên 500 trong vòng 3 năm</div>
      </div>
    </div>
    <div className="justify-start items-start gap-[22.50px] inline-flex">
      <div className="w-60 flex-col justify-start items-start gap-[9px] inline-flex">
        <div className="self-stretch text-zinc-900 text-sm font-semibold font-['Montserrat'] leading-tight">Tăng trưởng về quy mô</div>
        <div className="self-stretch text-zinc-600 text-xs font-medium font-['Montserrat']">Số lượng học sinh từ 10.000 lên 20.000 trong vòng 5 năm, tăng số lượng nhân viên từ 100 lên 500 trong vòng 3 năm</div>
      </div>
      <div className="w-[13.50px] h-[87px] relative">
        <div className="w-20 h-[0px] left-[7px] top-[87px] absolute origin-top-left -rotate-90 border border-neutral-400"></div>
        <div className="w-[13.50px] h-[13.50px] left-0 top-[13.50px] absolute bg-amber-300 rounded-full" />
      </div>
    </div>
    <div className="justify-start items-start gap-[22.50px] inline-flex">
      <div className="w-[13.50px] h-[68px] relative">
        <div className="w-[60px] h-[0px] left-[7px] top-[68px] absolute origin-top-left -rotate-90 border border-neutral-400"></div>
        <div className="w-[13.50px] h-[14.50px] left-0 top-[14.50px] absolute bg-green-500 rounded-full" />
      </div>
      <div className="w-60 flex-col justify-start items-start gap-[9px] inline-flex">
        <div className="self-stretch text-zinc-900 text-sm font-semibold font-['Montserrat'] leading-tight">Tăng trưởng về quy mô</div>
        <div className="self-stretch text-zinc-600 text-xs font-medium font-['Montserrat']">Số lượng học sinh từ 10.000 lên 20.000 trong vòng 5 năm, tăng số lượng nhân viên từ 100 lên 500 trong vòng 3 năm</div>
      </div>
    </div>
    <img className="w-[1719.26px] h-[293.90px] origin-top-left rotate-[2.57deg]" src="https://via.placeholder.com/1719x294" />
    <div className="justify-start items-start gap-[22.50px] inline-flex">
      <div className="w-60 flex-col justify-start items-start gap-[9px] inline-flex">
        <div className="self-stretch text-zinc-900 text-sm font-semibold font-['Montserrat'] leading-tight">Tăng trưởng về quy mô</div>
        <div className="self-stretch text-zinc-600 text-xs font-medium font-['Montserrat']">Số lượng học sinh từ 10.000 lên 20.000 trong vòng 5 năm, tăng số lượng nhân viên từ 100 lên 500 trong vòng 3 năm</div>
      </div>
      <div className="w-[13.50px] h-[69.25px] relative">
        <div className="w-[60px] h-[0px] left-[6.75px] top-[69.25px] absolute origin-top-left -rotate-90 border border-neutral-400"></div>
        <div className="w-[13.50px] h-[13.50px] left-0 top-[13.50px] absolute bg-teal-400 rounded-full" />
      </div>
    </div>
  </div>
</div>
