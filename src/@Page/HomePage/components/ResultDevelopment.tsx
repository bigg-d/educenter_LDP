"use client";

import { useBreakpoints } from "@/@Common/hooks/useBreakpoints";
import Image from "next/image";
import Link from "next/link";

export default function ResultDevelopment() {
  const { laptop } = useBreakpoints();
  // const bgUrl = `/images/home/journey_${laptop ? "desktop" : "mobile"}.svg`
  return (
    <div
      className="py-12"
      style={{
        background: `url("/images/home/journey_${
          laptop ? "desktop" : "mobile"
        }.svg")`,
      }}
    >
      <div className="flex flex-col gap-8 desktop:w-4/5 mx-auto desktop:py-12 w-[90%] py-6">
        <div className="desktop:w-3/5  w-full flex flex-col gap-6">
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
              <span className="laptop:text-[5rem] text-[3rem] font-bold text-transparent bg-gradient-to-r from-mainViolet to-mainBlue bg-clip-text">
                500 +
              </span>
              <span className="text-[1.375rem]">Khách hàng doanh nghiệp</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="laptop:text-[5rem] text-[3rem] font-bold text-transparent bg-gradient-to-r from-mainViolet to-mainBlue bg-clip-text">
                200K +
              </span>
              <span className="text-[1.375rem]">Người dùng sản phẩm</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="laptop:text-[5rem] text-[3rem] font-bold text-transparent bg-gradient-to-r from-mainViolet to-mainBlue bg-clip-text">
                90%
              </span>
              <span className="text-[1.375rem]">Phản hồi tích cực</span>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-6 desktop:my-32">
          <h2 className="laptop:text-[3rem] text-[2.4rem] font-bold">
            Báo chí nói gì về Educenter
          </h2>
          <Link href="#" className="text-mainBlue font-[600]">
            Xem toàn bộ
          </Link>
        </div>
      </div>
      <div className="flex flex-col laptop:flex-row gap-4 desktop:pl-[5%] w-[90%] mx-auto">
        <div className="w-full laptop:w-2/5 flex flex-col gap-4 laptop:order-1 order-2">
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
              layout="fill"
              title="EduQuiz – Hành trình trở thành công cụ ôn thi đắc lực cho sinh
              viên của thương hiệu ‘trẻ’"
            />
          </div>
        </div>
        <div className="w-full laptop:w-1/2 relative laptop:order-2 order-1 aspect-video">
          <Image src="/images/home/article.svg" alt="Educenter" layout="fill" />
        </div>
      </div>
    </div>
  );
}
