"use client";
import SchoolIcon from "@mui/icons-material/School";
import { useBreakpoints } from "@/@Common/hooks/useBreakpoints";
import clsx from "clsx";
// import Image from "next/image";
import { Content1 } from "@/@Page/HomePage/components/Service";

const Banner = () => {
  const { tablet, mobile, laptop, desktop } = useBreakpoints();

  return (
    <section className=" flex items-center desktop:px-[15rem] tablet:px-[3.375rem] desktop:py-[6.25rem] tablet:py-[2.5rem] gap-[2.25rem] justify-between">
      <div className="w-full desktop:pr-[7.5rem] tablet:w-[48.5%]">
        <h2 className="bg-gradient-to-r from-[#3E60FE] to-[rgb(210,60,255)] text-transparent bg-clip-text font-semibold desktop:text-[2.75rem] tablet:text-sb18 text-sb22">
          Tạo đề thi, ôn thi, làm bài thi mọi lúc mọi nơi
        </h2>
        <h3 className="desktop:text-sb18 tablet:text-sb14 desktop:mt-[1.875rem] tablet:mt-[0.875rem]">
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
        <div className={clsx("flex mt-4 gap-4", { "justify-evenly": mobile })}>
          <button className="btn-gradient">Đăng kí dịch vụ</button>
          <button className="btn-default">Tư vấn miễn phí</button>
        </div>
      </div>

      <div
        className={clsx(
          "tablet:w-[45%] laptop:w-2/5 desktop:w-2/5 desktop:h-[90vh] tablet:h-[50vh] bg-cover flex items-center justify-center rounded-[50px]"
        )}
        style={{
          backgroundImage: 'url("/images/home/bg_service.png")',
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
