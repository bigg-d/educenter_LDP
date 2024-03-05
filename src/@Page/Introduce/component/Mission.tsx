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
    // <div className="bg-blue-50 w-[95%] mx-auto">
    //   <div
    //     className={clsx("flex flex-col w-[90%] mx-auto gap-5 py-5", {
    //       "w-[90%] mx-auto items-center py-7 gap-6 ": mobile,
    //       "w-[80%] ": desktop,
    //     })}
    //   >
    //     <div
    //       className={clsx("text-[1.2rem] font-bold", {
    //         "text-center text-[1.3rem] font-bold": mobile,
    //       })}
    //     >
    //       <h2>Với sứ mệnh</h2>
    //     </div>
    //     <div
    //       className={clsx("w-full h-auto flex ", {
    //         "flex-col items-center ": mobile,
    //       })}
    //     >
    //       <div className="w-full 2xl:w-[50%] mx-auto relative">
    //         <img
    //           src="/image/bg-img.png"
    //           alt=""
    //           className="w-full md:w-[70%] "
    //         />
    //       </div>

    //        <div
    //         className={clsx("bg-blue-600 rounded-2xl absolute ", {
    //           " w-[85%] px-5  py-5 flex flex-col gap-7  mt-[50%]": mobile,
    //           "w-[40%] mt-[38%] ml-[50%] px-7 py-7 gap-8 flex flex-col 2xl:mt-0 2xl:ml-0 2xl:w-[20%] 2xl:gap-20 ":tablet,
    //           // "w-[30%] flex flex-col mt-0 ml-0  bg-red-500":laptop
    //         })}
    //       >
    //         <div className="flex flex-col gap-2 md:gap-5 text-white">
    //           <span className=" text-[1.5rem] md:text-[1.1rem] md:w-[70%] ">
    //             Cung cấp sản phẩm giáo dục toàn diện
    //           </span>
    //           <span className="text-gray-200 md:text-[0.8rem] md:w-[80%]">
    //             Đồng hành cùng doanh nghiệp trong mọi lĩnh vực
    //           </span>
    //         </div>
    //         <div className="flex justify-center w-full">
    //           <Button className="border-solid border-2 w-full border-gray-400 px-4 bg-white rounded-full text-black ">
    //             Xem dịch vụ của chúng tôi
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div
    //       className={clsx("", {
    //         "pt-20 bg-white flex justify-center text-center": mobile,
    //         " flex justify-center bg-white 2xl:top-4": tablet,
    //       })}
    //     >
    //       <div className="w-[90%]  flex flex-col ">
    //         <h2 className="text-blue-500 font-bold text-[1.2rem] md:w-[45%] md:text-[1.1rem] md:text-black">
    //           Chúng tôi luôn đồng hành cùng doanh nghiệp
    //         </h2>
    //         <div className="flex flex-col">
    //           {missionList.map((item) => (
    //             <div key={item.stt} className="border-b-2 py-6 md:flex md:gap-9">
    //               <div className="font-bold text-[1.2rem]">
    //                 {tablet && item.stt}
    //               </div>
    //               <div>
    //                 <h2 className="font-bold text-[1.2rem]">{item.title}</h2>
    //                 <span className="text-gray-500 text-[1.2rem] md:text-[0.8rem]">
    //                   {item.text}
    //                 </span>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    <div className="w-full bg-blue-50 relative pb-10 z-[1] ">
      <div className="w-full 2xl:h-[45%] h-[52%] md:h-[60%] left-0 bottom-0 absolute bg-white z-[0]"></div>
      <div className=" w-[90%] md:w-[85%]  py-10 mx-auto flex flex-col gap-10 z-[1] ">
        <div className={clsx("",{"w-full flex justify-center":mobile})}>
          <h2 className="text-zinc-900 2xl:text-3xl text-xl font-semibold font-['Montserrat'] leading-9">
            Với sứ mệnh
          </h2>
        </div>
        <div className="flex gap-[2.875rem] relative flex-col md:flex-row items-center">
          <div className={clsx("bg-blue-500  rounded-2xl",{
            "2xl:w-[20%] w-[45%] absolute  z-[1]  p-9 2xl:left-0 2xl:top-0 2xl:bottom-[30%] md:bottom-[-3rem] right-0    flex-col justify-between 2xl:gap-[11rem] gap-9 items-start inline-flex":tablet,
            " p-6  flex-col justify-between items-start inline-flex absolute w-[90%] mx-auto z-[1] bottom-[-25%] gap-9 ":mobile,
          })} >
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

          <div className={clsx("",{
            "relative 2xl:w-[40%] w-[80%]  2xl:left-[25%] aspect-[1/1] ":tablet,
            "w-full relative aspect-[1/1]":mobile
          })}>
            <Image src="/image/img_sumenh.svg" fill alt="" />
          </div>
          <div className={clsx("",{
            "2xl:right-0 2xl:bottom-0 bottom-[-7rem]  2xl:w-[30%] w-[50%] 2xl: absolute text-zinc-900 2xl:text-3xl text-lg font-semibold font-['Montserrat'] leading-9":tablet,
            "text-center bg-gradient-to-r from-[#3E60FE] to-[#D23CFF] text-transparent bg-clip-text text-lg font-semibold font-['Montserrat'] leading-normal absolute bottom-[-45%] w-[90%] ":mobile,
          })} >
            Chúng tôi luôn đồng hành cùng doanh nghiêp
          </div>
        </div>
      </div>
      <div className={clsx("",{
        "2xl:w-[80%] w-[85%] relative   mx-auto flex justify-end z-[1] mt-20 2xl:mt-0":tablet,
        "w-[85%] mx-auto relative mt-[30%] ":mobile
      })}>
        <div className=" 2xl:w-[77%] w-full  flex flex-col ">
          {missionList.map((item, index) => (
            <div key={index} className={`justify-start py-7 2xl:items-center gap-7 flex  ${index < 2 ? 'border-b-2 border-solid border-gray-300' : ''}`}>
              <span className="text-zinc-900 text-3xl font-semibold font-['Montserrat']  leading-9 hidden md:flex">{item.stt}</span>
              <div className={clsx("",{
                "flex w-[91%] justify-between flex-col 2xl:flex-row":tablet,
                "flex flex-col text-center ":mobile
              })} >
               <span className="text-zinc-900 text-lg md:text-xl font-semibold font-['Montserrat'] 2xl:leading-loose">{item.title}</span>
              <span className=" text-zinc-600 text:sm md:text-base font-medium font-['Montserrat'] leading-normal 2xl:w-[36%]">{item.text}</span> 
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Mission;

<div className="w-96 h-96 relative">
  <div className="w-96 h-96 left-0 top-0 absolute bg-slate-50" />
  <div className="w-80 left-[20px] top-[24px] absolute text-center text-zinc-900 text-lg font-semibold font-['Montserrat'] leading-7">Với sứ mệnh</div>
  <img className="w-80 h-80 left-[20px] top-[77px] absolute rounded-2xl" src="https://via.placeholder.com/320x320" />
  <div className="w-72 h-56 p-6 left-[30px] top-[263px] absolute bg-blue-500 rounded-2xl flex-col justify-between items-start inline-flex">
    <div className="self-stretch h-44 flex-col justify-start items-start gap-2 flex">
      <div className="self-stretch text-white text-lg font-semibold font-['Montserrat'] leading-7">Cung cấp sản phẩm giáo dục toàn diện</div>
      <div className="self-stretch text-blue-200 text-xs font-semibold font-['Montserrat'] leading-none">Đồng hành cùng doanh nghiệp trong mọi lĩnh vực</div>
    </div>
    <div className="self-stretch px-4 py-3 bg-white rounded-full border-2 border-white border-opacity-60 justify-center items-center gap-2 inline-flex">
      <div className="text-center text-zinc-900 text-sm font-semibold font-['Montserrat'] leading-tight">Xem dịch vụ của chúng tôi</div>
    </div>
  </div>
  <div className="w-80 left-[25px] top-[515px] absolute text-center text-blue-600 text-base font-semibold font-['Montserrat'] leading-normal">Chúng tôi luôn đồng hành cùng doanh nghiệp</div>
  <div className="h-80 left-[20px] top-[587px] absolute flex-col justify-start items-end gap-6 inline-flex">
    <div className="self-stretch h-16 flex-col justify-center items-center gap-1.5 flex">
      <div className="self-stretch text-center text-zinc-900 text-base font-semibold font-['Montserrat'] leading-normal">Cung cấp dịch vụ hoàn hảo</div>
      <div className="w-72 text-center text-zinc-600 text-sm font-medium font-['Montserrat'] leading-tight">Bất kể mọi ngành nghề, lĩnh vực hay quốc gia, dân tộc</div>
    </div>
    <div className="self-stretch h-px border border-indigo-50"></div>
    <div className="self-stretch h-16 flex-col justify-center items-center gap-1.5 flex">
      <div className="self-stretch text-center text-zinc-900 text-base font-semibold font-['Montserrat'] leading-normal">Chính xác, minh bạch</div>
      <div className="w-72 text-center text-zinc-600 text-sm font-medium font-['Montserrat'] leading-tight">Bất kể mọi ngành nghề, lĩnh vực hay quốc gia, dân tộc</div>
    </div>
    <div className="self-stretch h-px border border-indigo-50"></div>
    <div className="self-stretch h-16 flex-col justify-center items-center gap-1.5 flex">
      <div className="self-stretch text-center text-zinc-900 text-base font-semibold font-['Montserrat'] leading-normal">Tối ưu giá trị doanh nghiệp</div>
      <div className="w-72 text-center text-zinc-600 text-sm font-medium font-['Montserrat'] leading-tight">Bất kể mọi ngành nghề, lĩnh vực hay quốc gia, dân tộc</div>
    </div>
  </div>
</div>