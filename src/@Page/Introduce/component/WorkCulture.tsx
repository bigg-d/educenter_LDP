"use client";
import { useBreakpoints } from "@/@Common/hooks/useBreakpoints";
import clsx from "clsx";
import { table } from "console";
import Image from "next/image";
import React from "react";

const WorkCulture = () => {
  const { mobile, tablet, desktop, laptop } = useBreakpoints();
  const wordMap = [
    {
      index:1,
      image: "/image/map1.svg",
      title: "Sáng tạo và cởi mở",
      text: "Nhân viên được khuyến khích đưa ra ý tưởng mới, thử nghiệm và thất bại. ",
    },
    {
      index:2,
      image: "/image/map2.svg",
      title: "Đa dạng và hòa nhập",
      text: "Tạo ra môi trường làm việc thân thiện và bình đẳng cho tất cả nhân viên.",
    },
    {
      index:3,
      image: "/image/map3.svg",
      title: "Cân bằng giữa công việc và cuộc sống",
      text: "Tạo điều kiện cho nhân viên có thể làm việc tại nhà hoặc linh hoạt về thời gian làm việc",
    },
    {
      index:4,
      image: "/image/map4.svg",
      title: "Chuyên nghiệp và kỷ luật",
      text: "Làm việc chăm chỉ và đạt được kết quả cao, coi trọng việc  phát triển bản thân và đóng góp cho sự phát triển của tổ chức.",
    },
  ];
  return (
    <div className={clsx("",{
      " w-full bg-blue-50 justify-center flex py-6 flex-col  items-center gap-20":tablet,
      "  flex flex-col items-center ":mobile
    })} >
      <div className={clsx("   bg-blue-100 rounded-full justify-start items-center gap-1 inline-flex",{
        "px-7 py-4":tablet,
        "px-7 py-2 absolute bottom-[-1.5%] z-[1]":mobile
      })} >
        <div className={clsx("text-center  bg-gradient-to-r from-[#3E60FE] to-[#D23CFF] text-transparent bg-clip-text  font-semibold font-['Montserrat'] leading-loose",{
          " text-[1.375rem]":tablet,
        })}>
          Văn hóa làm việc của Educenter
        </div>
      </div>
      <div className={clsx("",{
        "flex md:flex-col relative w-full gap-10":tablet,
        "flex flex-col gap-10 bg-blue-50":mobile
      })}>
        <div className={clsx("",{
              "w-[90%] mx-auto 2xl:w-1/2  h-auto relative aspect-[1004/887] 2xl:left-[-5%] 2xl:mx-0": tablet,
              " top-0 aspect-[1004/887] w-full  relative":mobile
        })} >
          <Image
            fill
            src="/image/istockphoto.svg"
            alt="Văn hoá ...."
            title="EduCenter"
          />
        </div>
        <div className= "2xl:absolute w-full items-center 2xl:items-start 2xl:w-1/2 h-max left-[39%] top-[4.25rem] gap-6 2xl:gap-[5rem] flex flex-col  ">
          {wordMap.map((item , index)=> (
            <div key={index} className={clsx("flex gap-[1.75rem] bg-white  shadow-xl border-solid border border-gray-100 w-[90%] 2xl:w-[79%] px-4 py-4 rounded-2xl",{
              "ml-[15%]":index === 1 && desktop,
              "ml-[5%]":index === 2 && desktop,
              "ml-[20%]":index === 3 && desktop,
              "2xl:flex-row items-center":tablet,
              "flex-col":mobile
            })} >
              <div className="">
                <img src={item.image} alt="" />
              </div>
              <div className="flex flex-col full w-[90%] gap-2">
                <span className="self-stretch text-zinc-900 text-base font-semibold font-['Montserrat'] leading-normal">{item.title}</span>
                <span className="self-stretch text-gray-500 text-sm font-medium font-['Montserrat'] leading-tight">{item.text}</span>
              </div>
            </div>
          ))}
        </div>
        <div />
      </div>
    </div>
  );
};

export default WorkCulture;

<div className="w-[360px] h-[1322.19px] bg-slate-50 flex-col justify-start items-start inline-flex">
  <div className="flex-col justify-start items-center flex">
    <img className="w-[360px] h-[360px] origin-top-left rotate-180" src="https://via.placeholder.com/360x360" />
    <div className="px-6 py-2 bg-indigo-50 rounded-full justify-start items-center gap-1 inline-flex">
      <div className="text-center text-blue-600 text-sm font-semibold font-['Montserrat'] leading-tight">Văn hóa làm việc của Educenter</div>
    </div>
  </div>
  <div className="px-5 pt-6 pb-11 flex-col justify-start items-start gap-5 flex">
    <div className="h-[183.05px] p-5 bg-white rounded-[28px] shadow border border-indigo-50 flex-col justify-center items-start gap-7 flex">
      <div className="p-[9.52px] bg-neutral-100 rounded-xl justify-start items-start gap-[1.90px] inline-flex">
        <div className="w-6 h-6 relative">
          <div className="w-[8.73px] h-[8.73px] left-[4.91px] top-[4.91px] absolute bg-red-200 rounded-sm" />
          <div className="w-[8.73px] h-[8.73px] left-[7.64px] top-[7.64px] absolute bg-orange-300 rounded-sm" />
          <div className="w-[8.73px] h-[8.73px] left-[10.36px] top-[10.36px] absolute bg-orange-600 rounded-sm" />
        </div>
      </div>
      <div className="self-stretch h-[72px] flex-col justify-center items-start gap-2 flex">
        <div className="self-stretch text-zinc-900 text-base font-semibold font-['Montserrat'] leading-normal">Sáng tạo và cởi mở</div>
        <div className="self-stretch text-gray-500 text-sm font-medium font-['Montserrat'] leading-tight">Nhân viên được khuyến khích đưa ra ý tưởng mới, thử nghiệm và thất bại. </div>
      </div>
    </div>
    <div className="h-[183.05px] p-5 bg-white rounded-[28px] shadow border border-indigo-50 flex-col justify-center items-start gap-7 flex">
      <div className="p-[9.52px] bg-neutral-100 rounded-xl justify-start items-start gap-[1.90px] inline-flex">
        <div className="w-6 h-6 relative">
          <div className="w-1.5 h-1.5 left-[4.91px] top-[5.45px] absolute bg-pink-600 bg-opacity-40 rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-sm" />
          <div className="w-1.5 h-1.5 left-[4.91px] top-[18.55px] absolute bg-pink-600 bg-opacity-40 rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-sm" />
          <div className="w-1.5 h-1.5 left-[19.09px] top-[5.45px] absolute origin-top-left rotate-180 bg-pink-600 bg-opacity-40 rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-sm" />
          <div className="w-1.5 h-1.5 left-[19.09px] top-[18.55px] absolute origin-top-left rotate-180 bg-pink-600 bg-opacity-40 rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-sm" />
          <div className="w-[8.73px] h-[8.73px] left-[7.64px] top-[7.64px] absolute bg-pink-500 bg-opacity-30 rounded-sm" />
        </div>
      </div>
      <div className="self-stretch h-[72px] flex-col justify-center items-start gap-2 flex">
        <div className="self-stretch text-zinc-900 text-base font-semibold font-['Montserrat'] leading-normal">Đa dạng và hòa nhập</div>
        <div className="self-stretch text-gray-500 text-sm font-medium font-['Montserrat'] leading-tight">Tạo ra môi trường làm việc thân thiện và bình đẳng cho tất cả nhân viên.</div>
      </div>
    </div>
    <div className="h-[227.05px] p-5 bg-white rounded-[28px] shadow border border-indigo-50 flex-col justify-center items-start gap-7 flex">
      <div className="p-[9.52px] bg-neutral-100 rounded-xl justify-start items-start gap-[1.90px] inline-flex">
        <div className="w-6 h-6 relative">
          <div className="w-[14.18px] h-[14.18px] left-[4.91px] top-[4.91px] absolute bg-emerald-100 rounded-full" />
          <div className="w-[9.82px] h-[9.82px] left-[7.09px] top-[7.09px] absolute bg-emerald-300 rounded-full" />
          <div className="w-[5.45px] h-[5.45px] left-[9.27px] top-[9.27px] absolute bg-emerald-500 rounded-full" />
        </div>
      </div>
      <div className="self-stretch h-[116px] flex-col justify-center items-start gap-2 flex">
        <div className="self-stretch text-zinc-900 text-base font-semibold font-['Montserrat'] leading-normal">Cân bằng giữa công việc và cuộc sống</div>
        <div className="self-stretch text-gray-500 text-sm font-medium font-['Montserrat'] leading-tight">Tạo điều kiện cho nhân viên có thể làm việc tại nhà hoặc linh hoạt về thời gian làm việc</div>
      </div>
    </div>
    <div className="h-[223.05px] p-5 bg-white rounded-[28px] shadow border border-indigo-50 flex-col justify-center items-start gap-7 flex">
      <div className="p-[9.52px] bg-neutral-100 rounded-xl justify-start items-start gap-[1.90px] inline-flex">
        <div className="w-6 h-6 relative">
          <div className="w-3 h-3 left-[7.09px] top-[7.09px] absolute bg-indigo-200 rounded-full" />
          <div className="w-3 h-3 left-[6px] top-[6px] absolute bg-blue-400 rounded-full" />
          <div className="w-3 h-3 left-[4.91px] top-[4.91px] absolute bg-blue-700 rounded-full" />
          <div className="w-[1.09px] h-[1.09px] left-[11.45px] top-[10.36px] absolute origin-top-left rotate-180 bg-emerald-50 rounded-full" />
        </div>
      </div>
      <div className="self-stretch h-28 flex-col justify-center items-start gap-2 flex">
        <div className="self-stretch text-zinc-900 text-base font-semibold font-['Montserrat'] leading-normal">Chuyên nghiệp và kỷ luật</div>
        <div className="self-stretch text-gray-500 text-sm font-medium font-['Montserrat'] leading-tight">Làm việc chăm chỉ và đạt được kết quả cao, coi trọng việc  phát triển bản thân và đóng góp cho sự phát triển của tổ chức.</div>
      </div>
    </div>
  </div>
</div>


