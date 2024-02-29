"use client";
import { useBreakpoints } from "@/@Common/hooks/useBreakpoints";
import { Button } from "@mui/material";
import clsx from "clsx";
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

    //       <div
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
    //     className={clsx("", {
    //       "pt-20 bg-white flex justify-center text-center": mobile,
    //       " flex justify-center bg-white 2xl:top-4": tablet,
    //     })}
    //   >
    //     <div className="w-[90%]  flex flex-col ">
    //       <h2 className="text-blue-500 font-bold text-[1.2rem] md:w-[45%] md:text-[1.1rem] md:text-black">
    //         Chúng tôi luôn đồng hành cùng doanh nghiệp
    //       </h2>
    //       <div className="flex flex-col">
    //         {missionList.map((item) => (
    //           <div key={item.stt} className="border-b-2 py-6 md:flex md:gap-9">
    //             <div className="font-bold text-[1.2rem]">
    //               {tablet && item.stt}
    //             </div>
    //             <div>
    //               <h2 className="font-bold text-[1.2rem]">{item.title}</h2>
    //               <span className="text-gray-500 text-[1.2rem] md:text-[0.8rem]">
    //                 {item.text}
    //               </span>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="w-full relative">
      <div className="w-full  left-0 top-0 absolute bg-blue-50" />
      <div className="w-[75%]  h-auto bg-red-500  absolute">
        <div className="w-[30%] h-auto gap-20 p-9 left-0 top-0 absolute bg-blue-500 rounded-[1rem] flex-col  items-start inline-flex">
          <div className="self-stretch h-auto flex-col justify-start items-start gap-[1rem] flex">
            <div className="self-stretch text-white text-[1.4rem] font-semibold font-['Montserrat'] leading-loose">
              Cung cấp sản phẩm giáo dục toàn diện
            </div>
            <div className="self-stretch text-blue-200 text-base font-medium font-['Montserrat'] leading-normal">
              Đồng hành cùng doanh nghiệp trong mọi lĩnh vực
            </div>
          </div>
          <div className="px-[1rem] py-[0.9rem] bg-white rounded-full border-2 border-white border-opacity-60 justify-center items-center gap-[7.49px] inline-flex">
            <div className="text-center text-zinc-900 text-sm font-semibold font-['Montserrat'] leading-tight">
              Xem dịch vụ của chúng tôi
            </div>
          </div>
        </div>
        <img
          className="w-[573px] h-[560px] left-[385px] top-0 absolute rounded-[18.73px]"
          src="/image/bg-img.png"
        />
      </div>
    </div>

    //  <div className="w-[1920px] h-[1100px] relative">
    //   <div className="w-[1920px] h-[594px] left-0 top-0 absolute bg-slate-50" />
    //   <div className="w-[1440px] h-[892.28px] left-[240px] top-[132px] absolute">
    //     <div className="w-[339px] h-[425px] p-9 left-0 top-0 absolute bg-blue-500 rounded-[18.73px] flex-col justify-between items-start inline-flex">
    //       <div className="self-stretch h-[179.77px] flex-col justify-start items-start gap-[14.98px] flex">
    //         <div className="self-stretch text-white text-[22px] font-semibold font-['Montserrat'] leading-loose">Cung cấp sản phẩm giáo dục toàn diện</div>
    //         <div className="self-stretch text-blue-200 text-base font-medium font-['Montserrat'] leading-normal">Đồng hành cùng doanh nghiệp trong mọi lĩnh vực</div>
    //       </div>
    //       <div className="px-[18.73px] py-[14.98px] bg-white rounded-full border-2 border-white border-opacity-60 justify-center items-center gap-[7.49px] inline-flex">
    //         <div className="text-center text-zinc-900 text-sm font-semibold font-['Montserrat'] leading-tight">Xem dịch vụ của chúng tôi</div>
    //       </div>
    //     </div>
    //     <img className="w-[573px] h-[560px] left-[385px] top-0 absolute rounded-[18.73px]" src="https://via.placeholder.com/573x560" />
    //     <div className="w-[384.81px] left-[1008px] top-[492px] absolute text-zinc-900 text-[28px] font-semibold font-['Montserrat'] leading-9">Chúng tôi luôn đồng hành cùng doanh nghiêp</div>
    //     <div className="h-[267.59px] left-[385px] top-[620px] absolute flex-col justify-start items-end gap-[30.90px] inline-flex">
    //       <div className="self-stretch justify-start items-center gap-[139px] inline-flex">
    //         <div className="h-9 justify-start items-center gap-7 flex">
    //           <div className="w-[46px] text-zinc-900 text-[28px] font-semibold font-['Montserrat'] leading-9">01</div>
    //           <div className="w-[514px] text-zinc-900 text-[22px] font-semibold font-['Montserrat'] leading-loose">Cung cấp dịch vụ hoàn hảo</div>
    //         </div>
    //         <div className="grow shrink basis-0 text-zinc-600 text-base font-medium font-['Montserrat'] leading-normal">Bất kể mọi ngành nghề, lĩnh vực hay quốc gia, dân tộc</div>
    //       </div>
    //       <div className="self-stretch h-[0px] border border-indigo-50"></div>
    //       <div className="self-stretch justify-start items-center gap-[139px] inline-flex">
    //         <div className="h-9 justify-start items-center gap-7 flex">
    //           <div className="w-[46px] text-zinc-900 text-[28px] font-semibold font-['Montserrat'] leading-9">02</div>
    //           <div className="w-[514px] text-zinc-900 text-[22px] font-semibold font-['Montserrat'] leading-loose">Chính xác, minh bạch</div>
    //         </div>
    //         <div className="grow shrink basis-0 text-zinc-600 text-base font-medium font-['Montserrat'] leading-normal">Bất kể mọi ngành nghề, lĩnh vực hay quốc gia, dân tộc</div>
    //       </div>
    //       <div className="self-stretch h-[0px] border border-indigo-50"></div>
    //       <div className="self-stretch justify-start items-center gap-[139px] inline-flex">
    //         <div className="h-9 justify-start items-center gap-7 flex">
    //           <div className="w-[46px] text-zinc-900 text-[28px] font-semibold font-['Montserrat'] leading-9">03</div>
    //           <div className="w-[514px] text-zinc-900 text-[22px] font-semibold font-['Montserrat'] leading-loose">Tối ưu giá trị doanh nghiệp</div>
    //         </div>
    //         <div className="grow shrink basis-0 text-zinc-600 text-base font-medium font-['Montserrat'] leading-normal">Bất kể mọi ngành nghề, lĩnh vực hay quốc gia, dân tộc</div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="left-[240px] top-[49px] absolute text-zinc-900 text-[28px] font-semibold font-['Montserrat'] leading-9">Với sứ mệnh</div>
    // </div>
  );
};

export default Mission;
