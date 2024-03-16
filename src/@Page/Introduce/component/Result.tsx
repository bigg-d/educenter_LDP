"use client";
import { useBreakpoints } from "@/@Common/hooks/useBreakpoints";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import {
  Bounce,
  Fade,
  Flip,
  Hinge,
  JackInTheBox,
  Roll,
  Rotate,
  Slide,
  Zoom,
} from "react-awesome-reveal";

const Result = () => {
  const { mobile, tablet, desktop, laptop } = useBreakpoints();
  return (
    <div className="w-full h-auto py-10 flex gap-10 flex-col fhd:gap-0">
      <Fade
        direction="up"
        delay={1e2}
        className="mx-auto fhd:w-[23%] laptop:w-[40%] md:w-[60%]   px-6 py-2 rounded-full  items-center gap-1  bg-gray-200 flex justify-center"
      >
        <div className="text-center md:text-[1.375rem] text-[0.7rem] font-semibold  leading-tight bg-gradient-to-r from-[#3E60FE] to-[#D23CFF] text-transparent bg-clip-text  md:py-3">
          Kết quả của hành trình phát triển
        </div>
      </Fade>
      <div
        className={clsx("", {
          "w-full relative ": tablet,
          "w-full relative  flex justify-center": mobile,
        })}
      >
        <div
          className={clsx("", {
            "mt-5 desktop:mt-0 relative w-full h-auto aspect-[2/1] ": tablet,
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
        <Fade
          direction="up"
          delay={1e2}
          className={clsx("", {
            " w-[35%] laptop:w-[19%]  h-[25%]   laptop:h-auto absolute top-[10%] laptop:top-[18%] left-[5%] laptop:left-[10%]":
              tablet,
            "absolute top-0  w-[80%]  h-[23%] ": mobile,
          })}
        >
          <div className="w-full h-[100%] flex gap-5 tablet:gap-5 ">
            <img src="/image/do.svg" alt="" className="h-[100%]" />
            <div
              className={clsx("flex flex-col gap-2", {
                "w-[80%]": mobile,
              })}
            >
              <span className="self-stretch text-zinc-900 text-[0.875rem] desktop:text-[1.3rem] font-semibold  leading-tight">
                Tăng trưởng về quy mô
              </span>
              <span className="self-stretch text-zinc-600 desktop:text-base text-[0.75rem]  font-medium ">
                Số lượng học sinh từ 10.000 lên 20.000 trong vòng 5 năm, tăng số
                lượng nhân viên từ 100 lên 500 trong vòng 3 năm
              </span>
            </div>
          </div>
        </Fade>

        <Fade
          direction="up"
          delay={1e2}
          className={clsx("", {
            "  laptop:w-[19%]  w-[35%] h-[25%] laptop:h-auto top-[5%] right-[5%] absolute laptop:top-[15%] laptop:left-[40%]":
              tablet,
            " absolute top-[25%]   w-[80%]  h-[23%]": mobile,
          })}
        >
          <div className="flex h-[100%] flex-row-reverse tablet:flex-row gap-5">
            <img src="/image/vang.svg" alt="" />
            <div className="flex flex-col gap-2">
              <span className="self-stretch text-zinc-900 text-[0.875rem] desktop:text-[1.3rem] font-semibold  leading-tight">
                Tăng trưởng về quy mô
              </span>
              <span className="self-stretch text-zinc-600 text-[0.75rem] desktop:text-base font-medium ">
                Số lượng học sinh từ 10.000 lên 20.000 trong vòng 5 năm, tăng số
                lượng nhân viên từ 100 lên 500 trong vòng 3 năm
              </span>
            </div>
          </div>
        </Fade>

        <Fade
          direction="up"
          delay={1e2}
          className={clsx("", {
            "md:hidden  laptop:flex  w-[19%]  absolute top-[18%] right-[10%]":
              tablet,
            hidden: mobile,
          })}
        >
          <div className="flex gap-5">
            <img src="/image/xanhduong.svg" alt="" />
            <div className="flex flex-col gap-2">
              <span className="self-stretch text-zinc-900 text-[1.3rem] laptop:text-[0.875rem] desktop:text-[1.3rem] font-semibold  leading-tight">
                Tăng trưởng về quy mô
              </span>
              <span className="self-stretch text-zinc-600 text-base font-medium  laptop:text-[0.75rem] desktop:text-base">
                Số lượng học sinh từ 10.000 lên 20.000 trong vòng 5 năm, tăng số
                lượng nhân viên từ 100 lên 500 trong vòng 3 năm
              </span>
            </div>
          </div>
        </Fade>

        <Fade
          direction="up"
          delay={1e1}
          className={clsx("", {
            " laptop:w-[19%] w-[35%] h-[23%] laptop:h-auto top-[31%] left-[43%] absolute laptop:top-[37%] laptop:right-[40%]":
              tablet,
            " absolute top-[50%]   w-[80%]  h-[23%]": mobile,
          })}
        >
          <div className="flex h-[100%] gap-5">
            <img src="/image/danhla.svg" alt="" className="" />
            <div className="flex flex-col gap-2">
              <span className="self-stretch text-zinc-900 text-[0.875rem] desktop:text-[1.3rem] font-semibold  leading-tight">
                Tăng trưởng về quy mô
              </span>
              <span className="self-stretch text-zinc-600 text-[0.75rem] desktop:text-base font-medium ">
                Số lượng học sinh từ 10.000 lên 20.000 trong vòng 5 năm, tăng số
                lượng nhân viên từ 100 lên 500 trong vòng 3 năm
              </span>
            </div>
          </div>
        </Fade>

        <Fade
          direction="up"
          delay={1e2}
          className={clsx("", {
            " laptop:w-[19%] w-[35%] left-[13%] top-[52%] absolute laptop:top-[55%] laptop:left-[13%]":
              tablet,
            " absolute bottom-0 flex-row-reverse  w-[80%]  h-[23%]": mobile,
          })}
        >
          <div className="flex h-[100%] flex-row-reverse tablet:flex-row gap-5">
            <img src="/image/xanhnhat.svg" alt="" />
            <div className="flex flex-col gap-2">
              <span className="self-stretch text-zinc-900 text-[0.875rem] desktop:text-[1.3rem] font-semibold  leading-tight">
                Tăng trưởng về quy mô
              </span>
              <span className="self-stretch text-zinc-600 text-[0.75rem] desktop:text-base font-medium ">
                Số lượng học sinh từ 10.000 lên 20.000 trong vòng 5 năm, tăng số
                lượng nhân viên từ 100 lên 500 trong vòng 3 năm
              </span>
            </div>
          </div>
        </Fade>

        <Fade
          direction="up"
          delay={1e2}
          className={clsx("", {
            " laptop:w-[19%] w-[35%] bottom-[13%] h-[25%] laptop:h-auto right-[5%]  absolute laptop:bottom-[20%] laptop:left-[35%]":
              tablet,
            hidden: mobile,
          })}
        >
          <div className="flex gap-5">
            <img src="/image/tim.svg" alt="" />
            <div className="flex flex-col gap-2">
              <span className="self-stretch text-zinc-900 text-[0.875rem] desktop:text-[1.3rem] font-semibold  leading-tight">
                Tăng trưởng về quy mô
              </span>
              <span className="self-stretch text-zinc-600 text-[0.75rem] desktop:text-base font-medium ">
                Số lượng học sinh từ 10.000 lên 20.000 trong vòng 5 năm, tăng số
                lượng nhân viên từ 100 lên 500 trong vòng 3 năm
              </span>
            </div>
          </div>
        </Fade>

        <Fade
          direction="up"
          delay={1e2}
          className="laptop:flex hidden gap-5 w-[19%]  absolute bottom-[15%] right-[15%]"
        >
          <div className=" flex gap-5">
            <img src="/image/hong.svg" alt="" />
            <div className="flex flex-col gap-2">
              <span className="self-stretch text-zinc-900 text-[1.3rem] laptop:text-[0.875rem] desktop:text-[1.3rem] font-semibold  leading-tight">
                Tăng trưởng về quy mô
              </span>
              <span className="self-stretch text-zinc-600 text-base laptop:text-[0.75rem] desktop:text-base font-medium ">
                Số lượng học sinh từ 10.000 lên 20.000 trong vòng 5 năm, tăng số
                lượng nhân viên từ 100 lên 500 trong vòng 3 năm
              </span>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Result;
