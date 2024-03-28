"use client";
import { useBreakpoints } from "@/@Common/hooks/useBreakpoints";
import clsx from "clsx";
import { table } from "console";
import Image from "next/image";
import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";

const WorkCulture = () => {
  const { mobile, tablet, desktop, laptop } = useBreakpoints();
  const wordMap = [
    {
      index: 1,
      image: "/image/map1.svg",
      title: "Sáng tạo và cởi mở",
      text: "Nhân viên được khuyến khích đưa ra ý tưởng mới, thử nghiệm và thất bại. ",
    },
    {
      index: 2,
      image: "/image/map2.svg",
      title: "Đa dạng và hòa nhập",
      text: "Tạo ra môi trường làm việc thân thiện và bình đẳng cho tất cả nhân viên.",
    },
    {
      index: 3,
      image: "/image/map3.svg",
      title: "Cân bằng giữa công việc và cuộc sống",
      text: "Tạo điều kiện cho nhân viên có thể làm việc tại nhà hoặc linh hoạt về thời gian làm việc",
    },
    {
      index: 4,
      image: "/image/map4.svg",
      title: "Chuyên nghiệp và kỷ luật",
      text: "Làm việc chăm chỉ và đạt được kết quả cao, coi trọng việc  phát triển bản thân và đóng góp cho sự phát triển của tổ chức.",
    },
  ];
  return (
    <div
      className={clsx("", {
        " w-full bg-blue-50 justify-center flex py-6 flex-col  items-center gap-20":
          tablet,
        "  flex flex-col items-center relative": mobile,
      })}
    >
      <Fade
        direction="up"
        delay={1e3}
        className={clsx(
          "   bg-blue-100 rounded-full justify-start items-center gap-1 inline-flex",
          {
            "px-7 py-4": tablet,
            "px-7 py-2 absolute top-[23%] z-[1]": mobile,
          }
        )}
      >
        <div
          className={clsx(
            "text-center  bg-gradient-to-r from-[#3E60FE] to-[#D23CFF] text-transparent bg-clip-text  font-semibold  leading-loose",
            {
              " text-[1.375rem]": tablet,
            }
          )}
        >
          Văn hóa làm việc của Educenter
        </div>
      </Fade>
      <div
        className={clsx("", {
          "flex md:flex-col relative w-full gap-10": tablet,
          "flex flex-col  gap-10 bg-blue-50": mobile,
        })}
      >
        <Zoom
          triggerOnce
          className="top-0 aspect-[1004/887] w-full  relative tablet:w-[90%] tablet:mx-auto laptop:w-1/2  tablet:h-auto  laptop:left-[-5%] laptop:mx-0"
        >
          <Image
            fill
            src="/image/istockphoto.svg"
            alt="Văn hoá ...."
            title="EduCenter"
          />
        </Zoom>
        <div className="laptop:absolute w-full items-center laptop:items-start  laptop:w-[60%] fhd:w-1/2 h-max fhd:left-[39%] laptop:left-[30%]  laptop:top-[2rem] fhd:top-[4.25rem] gap-6 laptop:gap-[2rem] fhd:gap-[5rem] flex flex-col  ">
          {wordMap.map((item, index) => (
            <Fade
              key={Math.random().toString()}
              triggerOnce
              className="w-full flex flex-col items-center desktop:items-start desktop:gap-[2.7rem]"
              direction="right"
              delay={index * 50}
            >
              <div
                key={index}
                className={clsx(
                  "flex gap-[1.75rem] bg-white  shadow-xl border-solid border border-gray-100 w-[90%] fhd:w-[79%] px-4 py-4 rounded-2xl",
                  {
                    "desktop:ml-[15%] ml-[10%]": index === 1 && laptop,
                    "desktop:ml-[5%] ml-[10%]": index === 2 && laptop,
                    "ml-[20%]": index === 3 && desktop,
                    "desktop:flex-row items-center": tablet,
                    "flex-col": mobile,
                  }
                )}
              >
                <div className="">
                  <img src={item.image} alt="" />
                </div>
                <div className="flex flex-col full w-[90%] gap-2">
                  <span className="self-stretch text-zinc-900 text-base fhd:text-xl font-semibold  leading-normal">
                    {item.title}
                  </span>
                  <span className="self-stretch text-gray-500 text-sm fhd:text-base font-medium  leading-tight">
                    {item.text}
                  </span>
                </div>
              </div>
            </Fade>
          ))}
        </div>
        <div />
      </div>
    </div>
  );
};

export default WorkCulture;
