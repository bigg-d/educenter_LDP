"use client";
import { useBreakpoints } from "@/@Common/hooks/useBreakpoints";
import clsx from "clsx";
import Image from "next/image";
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Slide, Zoom } from "react-awesome-reveal";

const Problem = () => {
  const { tablet, laptop, mobile } = useBreakpoints();
  const issues = [
    {
      title: "Vấn đề về mục tiêu đào tạo",
      desc: "Mục tiêu đào tạo không rõ ràng, sẽ dẫn đến việc lựa chọn chương trình đào tạo và phương pháp đào tạo không phù hợp.",
    },
    {
      title: "Vấn đề về kinh phí",
      desc: "Đào tạo là một hoạt động tốn kém, doanh nghiệp cần có kế hoạch đào tạo hợp lý để đảm bảo hiệu quả đào tạo với chi phí hợp lý.",
    },
    {
      title: "Vấn đề về thời gian",
      desc: "Đào tạo đòi hỏi thời gian và công sức của cả doanh nghiệp và nhân viên.",
    },
    {
      title: "Vấn đề về sự tham gia của nhân viên",
      desc: "Nhân viên cần có sự chủ động và tích cực tham gia vào quá trình đào tạo để đạt được hiệu quả cao nhất.",
    },
    {
      title: "Vấn đề về đánh giá đào tạo",
      desc: "Đánh giá đào tạo cần được thực hiện một cách khách quan và chính xác để xác định hiệu quả của chương trình đào tạo.",
    },
  ];

  return (
    <section className="flex flex-wrap bg-[#F6F9FF] py-[1.4rem] px-[1.25rem] fhd:px-[15rem] fhd:py-[6.25rem] laptop:px-[6.25rem] laptop:py-[5rem] tablet:p-[2rem] items-end laptop:items-start">
      <h2 className="laptop:w-full mx-auto tablet:w-[38%] laptop:order-1 tablet:order-2  fhd:text-[2.5rem] laptop:text-sb28 tablet:text-sb22 mb-[1.5rem] tablet:mb-0 laptop:mb-[5rem]  font-semibold">
        Vấn đề doanh nghiệp gặp phải
      </h2>
      <Fade direction="left" duration={1200} className="w-full tablet:w-1/2 laptop:order-2 tablet:order-1 fhd:pr-[9rem] laptop:pr-[6.25rem]">
        <div className="relative aspect-[597/547]">
          <Image src="/image/DetailPage/Frame 40670.svg" fill alt="image" />
        </div>
      </Fade>
      <div className="w-full laptop:w-1/2 tablet:order-3 mt-[2rem] tablet:mt-[3.75rem] laptop:mt-0">
        {issues?.map((issue,index) => {
          return (
            <div key={index} className="mb-8">
              <h3 className={clsx("text-sb16 laptop:text-sb22 tablet:text-sb18 laptop:mb-3 tablet:mb-2",{"fhd:block laptop:hidden":index === 0})}>
                {issue?.title}
              </h3>
              <p className="text-m14 laptop:text-m16">{issue?.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Problem;
