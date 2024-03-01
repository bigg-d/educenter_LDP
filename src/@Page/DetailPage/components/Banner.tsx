"use client";
import SchoolIcon from "@mui/icons-material/School";
import { useBreakpoints } from "@/@Common/hooks/useBreakpoints";
import clsx from "clsx";
import Image from "next/image";

const Banner = () => {
  const { tablet, mobile, laptop, desktop } = useBreakpoints();

  return (
    <section
      className=" flex desktop:px-[15rem] tablet:px-[3.375rem] py-[6.25rem] justify-between"
    >
      <div className="w-full desktop:pr-[7.5rem] tablet:w-1/2">
        <h2
          className=
            "bg-gradient-to-r from-[#3E60FE] to-[rgb(210,60,255)] text-transparent bg-clip-text font-semibold desktop:text-[2.75rem] tablet:text-[1.125rem]"
        >
          Tạo đề thi, ôn thi, làm bài thi mọi lúc mọi nơi
        </h2>
        <h3 className="text-sb18 mt-[1.875rem]">
          Tạo đề thi, ôn thi, làm bài thi mọi lúc mọi nơi
        </h3>
        <ul className="text-m18 mt-[3rem]">
          <li className="flex mb-7">
            <SchoolIcon className="text-green-400" />
            <p className={clsx("ml-3")}>
              Tạo đề thi, ôn thi, làm bài thi mọi lúc mọi nơi
            </p>
          </li>
          <li className="flex mb-7">
            <SchoolIcon className="text-green-400" />
            <p className={clsx("ml-3")}>
              Tạo đề thi, ôn thi, làm bài thi mọi lúc mọi nơi
            </p>
          </li>
          <li className="flex mb-7">
            <SchoolIcon className="text-green-400" />
            <p className={clsx("ml-3")}>
              Tạo đề thi, ôn thi, làm bài thi mọi lúc mọi nơi
            </p>
          </li>
          <li className="flex mb-7">
            <SchoolIcon className="text-green-400" />
            <p className={clsx("ml-3")}>
              Tạo đề thi, ôn thi, làm bài thi mọi lúc mọi nơi
            </p>
          </li>
        </ul>
        <div className={clsx("flex mt-4 justify-around",{"justify-evenly": mobile},)}>
              <button className='btn-gradient'>
                Đăng kí dịch vụ
              </button>
              <button className='btn-default'>
                Tư vấn miễn phí
              </button>
            </div>
      </div>

      <div
        className={clsx(
          "relative desktop:w-[700px] bg-cover rounded-[40px] bg-gray-100 desktop:p-[9.125rem] tablet:p-[4rem]"
        )}
        style={{ backgroundImage: 'url("/image/DetailPage/bg.svg") ' }}
      >
        <div className="relative border border-[#ffff] desktop:p-6 tablet:p-3  rounded-[2.5rem]">
          <div className="bg-white p-8 rounded-[2.5rem] ">
            <div className="animate-pulse p-3 flex flex-col gap-2 bg-gray-100 h-1/2 rounded-xl">
              <div className="h-2 bg-[#e8e8e1] rounded"></div>
              <div className="h-2 bg-[#e8e8e1] rounded"></div>
              <div className="h-2 bg-[#e8e8e1] rounded"></div>
              <div className="h-2 bg-[#e8e8e1] rounded"></div>
              <div className="h-2 bg-[#e8e8e1] rounded"></div>
              <div
                className="w-full h-[200px] bg-contain bg-no-repeat"
                style={{
                  backgroundImage: 'url("/image/DetailPage/Mask group.svg") '
                }}
              ></div>
            </div>
            <div className="flex flex-col gap-3 bg-gray-100 mt-8 p-3 rounded-xl">
                <div className="flex justify-between">
                    <div className="w-3 h-3 bg-[#e8e8e1] rounded-full"></div>
                    <div className="w-[90%] h-3 bg-[#e8e8e1] rounded-2xl"></div>
                </div>
                <div className="flex justify-between">
                    <div className="w-3 h-3 bg-[#e8e8e1] rounded-full"></div>
                    <div className="w-[90%] h-3 bg-[#e8e8e1] rounded-2xl"></div>
                </div>
                <div className="flex justify-between">
                    <div className="w-3 h-3 bg-[#ff9300] rounded-full"></div>
                    <div className="w-[90%] h-3 bg-[#5AD052] rounded-2xl"></div>
                </div>
            </div>
            <div className="bg-[#3E65FE] mt-5 rounded-xl p-4">

            </div>
          </div>

          <div className="absolute w-[700px] flex flex-col top-[-12%] bottom-0 left-[-28%] z-[9]">
            <div className="absolute top-0 left-[54%] bg-white font-semibold desktop:text-[18px] desktop:p-7  desktop:rounded-2xl drop-shadow-lg">Làm trên mọi thiết bị</div>
            <div className="absolute top-[40%] left-[-1%] bg-white font-semibold text-[#3E65FE] desktop:text-[18px] desktop:p-7  desktop:rounded-2xl drop-shadow-lg">Bất kì thời gian</div>
            <div className="absolute top-[68%] left-[54%] bg-white font-semibold text-[#D23CFF] desktop:text-[18px] desktop:p-7  desktop:rounded-2xl drop-shadow-lg">Bất kì địa điểm</div>
          </div>
        </div>

      </div>
      <div>
        
      </div>
    </section>
  );
};
export default Banner;