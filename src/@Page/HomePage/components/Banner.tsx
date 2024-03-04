"use client";
import { useBreakpoints } from "@/@Common/hooks/useBreakpoints";
import Image from "next/image";
import { ReactNode } from "react";

export default function Banner(): ReactNode {
  const { desktop, laptop, mobile, tablet } = useBreakpoints();
  console.log("🚀 ~ Banner ~ laptop:", laptop);
  return (
    <div className="flex  flex-wrap laptop:flex-nowrap">
      <div className="flex items-center justify-center w-full laptop:w-1/2">
        <div className="desktop:w-3/5 laptop:w-4/5 w-[90%] pt-6 flex flex-col gap-12">
          <BannerTextContent1 />
          {laptop ? <BannerTextContent2 /> : null}
        </div>
      </div>
      {mobile || (tablet && !laptop) ? (
        <>
          <div className="w-full">
            <BannerImageBox />
          </div>
          <BannerTextContent2 />
        </>
      ) : null}

      {laptop ? (
        <div className="laptop:w-1/2">
          <BannerImageBox />
        </div>
      ) : null}
    </div>
  );
}

export function BannerTextContent1() {
  return (
    <div className="flex flex-col gap-[2] ">
      <h2 className="hidden">Dịch vụ công nghệ về đào tạo cho doanh nghiệp</h2>
      <div className="text-[32px] tablet:text-[40px] laptop:text-[60px] flex gap-2 laptop:flex-col">
        <span>Dịch vụ</span>
        <span>{` `} công nghệ về</span>
      </div>
      <div className="flex gap-2 laptop:flex-col "></div>

      <p className="tablet:hidden  text-[40px] font-bold md:text-[60px] text-transparent bg-gradient-to-r from-mainViolet to-mainBlue bg-clip-text">
        đào tạo cho
      </p>
      <p className="tablet:hidden text-[40px] font-bold md:text-[60px] text-transparent bg-gradient-to-r from-mainViolet to-mainBlue bg-clip-text">
        doanh nghiệp
      </p>
      <p className="text-[40px]  hidden tablet:block font-bold md:text-[60px] text-transparent bg-gradient-to-r from-mainViolet to-mainBlue bg-clip-text">
        đào tạo cho doanh nghiệp
      </p>
    </div>
  );
}

export function BannerTextContent2() {
  return (
    <div className="flex flex-col gap-8 relative">
      <div className="bg-[#F6F9FF] -z-[1] h-full laptop:hidden right-0 w-[90%] absolute " />
      <p className="text-m18 px-4 laptop:w-full laptop:text-start laptop:px-0 my-4 tablet:text-[1.4rem] tablet:mx-auto tablet:w-4/5 tablet:text-center laptop:my-0">
        EduCenter cung cấp các giải pháp công nghệ về giáo dục và đào tạo. Giúp
        hàng ngàn doanh nghiệp xây dựng tổ chức thông minh.
      </p>
      <div className="flex gap-4 bg-transparent justify-center laptop:justify-start">
        <button className="btn-gradient">Liên hệ ngay</button>
        <button className="btn-default">Tìm hiểu thêm</button>
      </div>
    </div>
  );
}

export function BannerImageBox() {
  return (
    <div className="relative aspect-[9.5/10]">
      <div className="bg-[#F6F9FF] h-full right-0 w-[90%] absolute z-[0]" />
      <div className="absolute w-3/5 aspect-[7.6/10] top-[10%] left-0 z-[2]">
        <Image
          title="EduCenter"
          alt="Educenter"
          fill
          src="/images/home/banner_1.png"
        />
      </div>
      <div className="absolute w-3/5 aspect-[7.6/10] bottom-[5%] right-0 z-[1]">
        <Image
          title="EduCenter"
          alt="Educenter"
          fill
          src="/images/home/banner_2.png"
        />
      </div>

      <div className="absolute w-max laptop:w-2/5 rounded-[26px] bg-white shadow-md flex gap-4 items-center z-[3] px-8 py-4 top-[25%] left-[5%] laptop:left-[20%]">
        <Image src="/images/home/c.png" alt="1" width={20} height={20} />
        <span className="text-[0.8rem] tablet:text-[1rem] text-transparent font-[500] bg-gradient-to-r from-mainViolet to-mainBlue bg-clip-text">
          Tổ chức giáo dục thông minh
        </span>
      </div>
      <div className="absolute w-max laptop:w-2/5 rounded-[26px] bg-white shadow-md flex gap-4 items-center z-[3] px-8 py-4 top-[45%] left-[25%] laptop:left-[40%]">
        <Image src="/images/home/s.png" alt="1" width={20} height={20} />
        <span className=" text-[0.8rem]  tablet:text-[1rem] text-transparent font-[500] bg-gradient-to-r from-mainViolet to-mainBlue bg-clip-text">
          Công nghệ kĩ thuật hiện đại
        </span>
      </div>
      <div className="absolute w-max laptop:w-2/5 rounded-[26px] bg-white shadow-md flex gap-4 items-center z-[3] px-8 py-4 top-[75%] tablet:top-[65%] left-[10%]">
        <Image src="/images/home/j.png" alt="1" width={20} height={20} />
        <span className=" text-[0.8rem]  tablet:text-[1rem] text-transparent font-[500] bg-gradient-to-r from-mainViolet to-mainBlue bg-clip-text">
          Dịch vụ đa dạng, chất lượng cao
        </span>
      </div>
    </div>
  );
}
