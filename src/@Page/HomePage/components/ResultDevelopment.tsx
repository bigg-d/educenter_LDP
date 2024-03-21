"use client";

import { useBreakpoints } from "@/@Common/hooks/useBreakpoints";
import Image from "next/image";
import Link from "next/link";
import QuizPercentRunner from "./QuizPercentRunner";
import { Slide } from "react-awesome-reveal";

export default function ResultDevelopment() {
  const { laptop } = useBreakpoints();
  // const bgUrl = `/images/home/journey_${laptop ? "desktop" : "mobile"}.svg`
  return (
    <>
      <div
        className="flex flex-col bg-auto gap-8  mx-auto laptop:p-8 desktop:p-0 w-full p-6"
        style={{
          background: `url("/images/home/journey_${
            laptop ? "desktop" : "mobile"
          }.svg")`,
          backgroundSize: "cover",
        }}
      >
        <div className="desktop:w-4/5 mx-auto w-full flex flex-col gap-6">
          <h2 className="laptop:text-[3rem] font-bold text-[1.4rem]">
            Kết quả của hành trình phát triển
          </h2>

          <h3 className="text-[1.25rem] ">
            EduCenter luôn sẵn sàng tư vấn, giải đáp bất kỳ thắc mắc nào của quý
            doanh nghiệp. Đảm bảo quy trình phối hợp làm việc chuyên nghiệp,
            hiệu quả.
          </h3>

          <div className="grid grid-cols-1 laptop:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <QuizPercentRunner
                end={500}
                suffix={"+"}
                className="laptop:text-[5rem] text-[3rem] font-bold text-transparent bg-gradient-to-r from-mainViolet to-mainBlue bg-clip-text"
              />
              <span className="text-[1.375rem]">Khách hàng doanh nghiệp</span>
            </div>
            <div className="flex flex-col gap-2">
              <QuizPercentRunner
                end={200}
                suffix={"K+"}
                className="laptop:text-[5rem] text-[3rem] font-bold text-transparent bg-gradient-to-r from-mainViolet to-mainBlue bg-clip-text"
              />
              <span className="text-[1.375rem]">Người dùng sản phẩm</span>
            </div>
            <div className="flex flex-col gap-2">
              <QuizPercentRunner
                end={90}
                suffix={"%"}
                className="laptop:text-[5rem] text-[3rem] font-bold text-transparent bg-gradient-to-r from-mainViolet to-mainBlue bg-clip-text"
              />
              <span className="text-[1.375rem]">Phản hồi tích cực</span>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-6 mx-auto desktop:w-4/5 desktop:my-32">
          <h2 className="laptop:text-[3rem] text-[2.4rem] font-bold">
            Báo chí nói gì về Educenter
          </h2>
          <Link href="#" className="text-mainBlue font-[600]">
            Xem toàn bộ
          </Link>
        </div>
      </div>
      <div className="flex flex-col laptop:flex-row gap-4 desktop:w-4/5 w-[90%] laptop:gap-[20%] desktop:gap-[10%] mx-auto mb-16">
        <div className="w-full laptop:w-1/2 desktop:w-2/5 flex flex-col gap-4 laptop:order-1 order-2">
          <h3 className="text-[2rem] font-[500] ">
            EduQuiz – Hành trình trở thành công cụ ôn thi đắc lực cho sinh viên
            của thương hiệu ‘trẻ’
          </h3>
          <p className="text-[#787A8C] text-[1.125rem] ">
            Bước từng bước vào thị trường giáo dục đang có sự chuyển hóa mạnh mẽ
            về công nghệ số, EduQuiz đã dần khẳng định được vị thế khi trở thành
            công cụ ôn thi hiệu quả được rất nhiều bạn sinh viên tin tưởng sử
            dụng để phục vụ cho việc học tập của
          </p>

          <div className="h-2 w-1/4 bg-mainGradient"></div>

          <div className="w-2/5 aspect-video relative">
            <Image
              src="/images/home/tien_phong.svg"
              alt="Educenter"
              fill
              title="EduQuiz – Hành trình trở thành công cụ ôn thi đắc lực cho sinh
              viên của thương hiệu ‘trẻ’"
            />
          </div>
        </div>
        <div className="w-full laptop:w-1/2 relative laptop:order-2 order-1 aspect-video">
          <Image src="/images/home/article.svg" alt="Educenter" fill />
        </div>
      </div>
    </>
  );
}
