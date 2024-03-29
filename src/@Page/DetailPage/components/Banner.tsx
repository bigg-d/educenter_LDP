"use client";
import SchoolIcon from "@mui/icons-material/School";
import { useBreakpoints } from "@/@Common/hooks/useBreakpoints";
import clsx from "clsx";
// import Image from "next/image";
import { Content1 } from "@/@Page/HomePage/components/Service";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  const { tablet, mobile, laptop, desktop } = useBreakpoints();

  return (
    <section className="flex tablet:flex-row flex-col items-center fhd:px-[15rem] laptop:px-[9.72%] tablet:px-[3.375rem] laptop:py-[6.25rem] tablet:py-[2.5rem] fhd:gap-[2.25rem] laptop:gap-[6.25rem] justify-between laptop:h-[calc(100vh-64px)]">
      <div className="px-5 py-7 tablet:px-0 tablet:py-0 w-full fhd:pr-[7.5rem] tablet:order-1 order-2 tablet:w-[48.75%]">
        {/* <Fade cascade direction="up"> */}
        <h2 className="bg-gradient-to-r from-[#3E60FE] to-[rgb(210,60,255)] text-transparent bg-clip-text font-semibold fhd:text-[2.75rem] laptop:leading-none laptop:text-[2.5rem] tablet:text-sb18 text-sb22">
          Tạo đề thi, ôn thi, làm bài thi mọi lúc mọi nơi
        </h2>
        <h3 className="laptop:text-sb18 text-sb14 fhd:mt-[1.875rem] laptop:mt-[2.75rem] tablet:mt-[0.875rem] mt-[1rem]">
          Tạo đề thi, ôn thi, làm bài thi mọi lúc mọi nơi
        </h3>
        <ul className="text-m18 laptop:mt-[3rem] tablet:mt-[1.5rem] mt-[1.75rem]">
          <li className="flex items-center laptop:gap-6 gap-3 laptop:mb-7 mb-3 relative">
            <div className="relative laptop:w-[2.25rem] w-5 aspect-square">
              <Image
                src="/image/DetailPage/eduIcon_banner.svg"
                alt="icon"
                fill
              />
            </div>
            <p className="laptop:text-m18 tablet:text-m12  text-[0.75rem] font-medium">
              Tạo đề thi, ôn thi, làm bài thi mọi lúc mọi nơi
            </p>
          </li>
          <li className="flex items-center laptop:gap-6 gap-3 laptop:mb-7 mb-3 relative">
            <div className="relative laptop:w-[2.25rem] w-5 aspect-square">
              <Image
                src="/image/DetailPage/briefcaseIcon_banner.svg"
                alt="icon"
                fill
              />
            </div>
            <p className="laptop:text-m18 tablet:text-m12  text-[0.75rem] font-medium">
              Tạo đề thi, ôn thi, làm bài thi mọi lúc mọi nơi
            </p>
          </li>
          <li className="flex items-center laptop:gap-6 gap-3 laptop:mb-7 mb-3 relative">
            <div className="relative laptop:w-[2.25rem] w-5 aspect-square">
              <Image
                src="/image/DetailPage/appIcon_banner.svg"
                alt="icon"
                fill
              />
            </div>
            <p className="laptop:text-m18 tablet:text-m12  text-[0.75rem] font-medium">
              Tạo đề thi, ôn thi, làm bài thi mọi lúc mọi nơi
            </p>
          </li>
          <li className="flex items-center laptop:gap-6 gap-3 laptop:mb-7 mb-3 relative">
            <div className="relative laptop:w-[2.25rem] w-5 aspect-square">
              <Image
                src="/image/DetailPage/cpuIcon_banner.svg"
                alt="icon"
                fill
              />
            </div>
            <p className="laptop:text-m18 tablet:text-m12  text-[0.75rem] font-medium">
              Tạo đề thi, ôn thi, làm bài thi mọi lúc mọi nơi
            </p>
          </li>
        </ul>
        <div
          className={clsx("flex mt-4 fhd:gap-4 tablet:gap-3", {
            "justify-evenly": mobile,
          })}
        >
          <button className="rounded-[30px] cursor-pointer tablet:text-sb14 text-m14 fhd:text-[1.4rem] laptop:text-[1.1rem] inline-block bg-gradient-to-r from-mainBlue to-mainViolet py-2 px-4  laptop:px-6 laptop:py-4 text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-[2px]">
            Đăng kí dịch vụ
          </button>
          <button className="rounded-[30px] cursor-pointer tablet:text-sb14 text-m14 fhd:text-[1.4rem] laptop:text-[1.1rem] px-4 py-2 inline-block bg-white text-[#4A4A4A] border-2 font-[500] laptop:px-6 laptop:py-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-[2px];">
            Tư vấn miễn phí
          </button>
        </div>
        {/* </Fade> */}
      </div>

      <div
        className={clsx(
          "hidden tablet:flex tablet:w-[45%] laptop:w-2/5 fhd:w-2/5 w-full laptop:h-[80vh] tablet:h-[50vh] bg-cover items-center justify-center tablet:rounded-[50px] tablet:order-2 order-1"
        )}
        style={{
          backgroundImage: 'url("/images/home/bg_service.png")',
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <Content1 />
        </div>
      </div>

      <div
        className={clsx(
          "w-full bg-cover flex tablet:hidden items-center justify-center order-1 p-[5rem]"
        )}
        style={{
          backgroundImage: 'url("/image/DetailPage/bannerBg_mobile.svg")',
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <Content1 />
        </div>
      </div>
    </section>
  );
};
export default Banner;
