"use client";
import { useBreakpoints } from "@/@Common/hooks/useBreakpoints";
import Image from "next/image";

export default function BussinessField() {
  const { mobile } = useBreakpoints();

  return (
    <div
      className="relative aspect-[4.1/5] tablet:aspect-[2.79/1] tablet:my-12 flex flex-col laptop:flex-row bg-cover"
      style={{
        backgroundImage: mobile
          ? 'url("/images/project/bg_field_mb.svg")'
          : 'url("/images/project/bussiness_field_bg.svg")',
      }}
    >
      <div className=" desktop:ml-[10%] my-12 tablet:my-0 desktop:pt-[8%] flex flex-col items-center laptop:items-start gap-4 w-full laptop:w-1/2">
        <h2 className="hidden">
          EduCenter luôn nỗ lực để doanh nghiệp của tất cả lĩnh vực có thể đào
          tạo nguồn nhân lực chất lượng nhất
        </h2>
        {/* <div children;></div> */}
        <h3 className="desktop:text-[2.75rem] desktop:leading-[3rem] text-sb18 font-[600] text-center tablet:text-start">
          EduCenter luôn nỗ lực để doanh nghiệp của tất cả lĩnh vực có thể đào
          tạo
        </h3>
        <h3 className="desktop:text-[2.75rem] desktop:leading-[3rem] text-sb18 font-[600] w-max pr-2 bg-mainGradient -translate-x-2 pl-2 text-white">
          nguồn nhân lực chất lượng nhất
        </h3>
      </div>

      {/* <div className="absolute bottom-0 left-0 aspect-[3/1] w-1/3">
        <Image src="/images/project/nguoi.png" fill alt="ngon nhe" />
      </div> */}

      <div className="relative tablet:aspect-square aspect-[2/1] ">
        <div className="laptop:rounded-[2rem] rounded-[1rem] absolute p-2 left-2 tablet:-left-12 top-[40%] justify-center aspect-square  w-[56px] tablet:w-[64px] laptop:w-[111px] desktop:w-[144px] gap-2 laptop:gap-4  flex flex-col  items-center bg-white  shadow-md hover:shadow-2xl cursor-pointer">
          <div className="relative aspect-square w-[24px] tablet:w-[44px]">
            <Image src="/images/project/img_fashion.svg" fill alt="EduCenter" />
          </div>

          <span className="font-[500] w-max text-[9.8px] tablet:text-[1rem]">
            Thời trang
          </span>
        </div>
        <div className=" laptop:rounded-[2rem] rounded-[1rem] p-4 absolute top-0 tablet:top-[10%] left-[25%]  aspect-square justify-center w-[56px] tablet:w-[64px] laptop:w-[111px] desktop:w-[144px] gap-2 laptop:gap-4  flex flex-col items-center bg-white  shadow-md hover:shadow-2xl cursor-pointer">
          <div className="relative aspect-square w-[24px] tablet:w-[44px]">
            <Image src="/images/project/img_giaoduc.svg" fill alt="EduCenter" />
          </div>
          <span className="font-[500] w-max text-[9.8px] tablet:text-[1rem]">
            Giáo dục
          </span>
        </div>
        <div className="laptop:rounded-[2rem] rounded-[1rem] absolute bottom-0 tablet:bottom-[10%] left-[25%]  aspect-square justify-center flex flex-col w-[56px] tablet:w-[64px] laptop:w-[111px] desktop:w-[144px] gap-2 laptop:gap-4 items-center bg-white shadow-md hover:shadow-2xl cursor-pointer">
          <div className="relative aspect-square w-[24px] tablet:w-[44px]">
            <Image src="/images/project/img_service.svg" fill alt="EduCenter" />
          </div>

          <span className="font-[500] w-max text-[9.8px] tablet:text-[1rem]">
            Dịch vụ
          </span>
        </div>
        <div className="laptop:rounded-[2rem] rounded-[1rem] absolute top-[40%] left-[50%]  aspect-square justify-center flex flex-col w-[56px] tablet:w-[64px] laptop:w-[111px] desktop:w-[144px] gap-2 laptop:gap-4 items-center bg-white shadow-md hover:shadow-2xl cursor-pointer">
          <div className="relative aspect-square w-[24px] tablet:w-[44px]">
            <Image src="/images/project/img_hr.svg" fill alt="EduCenter" />
          </div>
          <span className="font-[500] w-max text-[9.8px] tablet:text-[1rem]">
            Nhân lực
          </span>
        </div>
        <div className="laptop:rounded-[2rem] rounded-[1rem] absolute right-2 tablet:right-0 top-[10%] aspect-square justify-center flex flex-col w-[56px] tablet:w-[64px] laptop:w-[111px] desktop:w-[144px] laptop:gap-4 gap-2 items-center bg-white shadow-md hover:shadow-2xl cursor-pointer">
          <div className="relative aspect-square w-[24px] tablet:w-[44px]">
            <Image src="/images/project/img_nurse.svg" fill alt="EduCenter" />
          </div>
          <span className="font-[500] w-max text-[9.8px] tablet:text-[1rem]">
            Y tế
          </span>
        </div>
        <div className="p-2 laptop:rounded-[2rem] rounded-[1rem] absolute right-2 tablet:right-0 bottom-[10%] aspect-square justify-center flex flex-col w-[64px] tablet:w-[64px] laptop:w-[111px] desktop:w-[144px] laptop:gap-4  gap-2 items-center bg-white shadow-md hover:shadow-2xl cursor-pointer">
          <div className="relative aspect-square w-[24px] tablet:w-[44px]">
            <Image src="/images/project/img_sale.svg" fill alt="EduCenter" />
          </div>

          <span className="font-[500] w-max text-[9.8px] tablet:text-[1rem]">
            Kinh Doanh
          </span>
        </div>
      </div>
    </div>
  );
}
