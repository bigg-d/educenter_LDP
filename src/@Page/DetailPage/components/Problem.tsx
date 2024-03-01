import { useBreakpoints } from "@/@Common/hooks/useBreakpoints";
import clsx from "clsx";
import Image from "next/image";

const Problem = () => {
  const { tablet,desktop,mobile} = useBreakpoints();
  const issues = [
    {
        title:"Vấn đề về mục tiêu đào tạo",
        desc: "Mục tiêu đào tạo không rõ ràng, sẽ dẫn đến việc lựa chọn chương trình đào tạo và phương pháp đào tạo không phù hợp."
    },
    {
        title: "Vấn đề về kinh phí",
        desc: "Đào tạo là một hoạt động tốn kém, doanh nghiệp cần có kế hoạch đào tạo hợp lý để đảm bảo hiệu quả đào tạo với chi phí hợp lý."
    },
    {
        title: "Vấn đề về thời gian",
        desc: "Đào tạo đòi hỏi thời gian và công sức của cả doanh nghiệp và nhân viên."
    },
    {
        title: "Vấn đề về sự tham gia của nhân viên",
        desc: "Nhân viên cần có sự chủ động và tích cực tham gia vào quá trình đào tạo để đạt được hiệu quả cao nhất."
    },
    {
        title: "Vấn đề về đánh giá đào tạo",
        desc: "Đánh giá đào tạo cần được thực hiện một cách khách quan và chính xác để xác định hiệu quả của chương trình đào tạo."
    },

  ]

  return (
    <section className="flex flex-wrap bg-[#F6F9FF] py-[1.4rem] px-[1.25rem] desktop:px-[15rem] desktop:py-[6.25rem] tablet:p-[2rem] items-end desktop:items-start">
        <h2 className="desktop:w-full mx-auto tablet:w-[38%] desktop:order-1 tablet:order-2  desktop:text-[2.5rem] tablet:text-sb22 mb-[1.5rem] tablet:mb-0 desktop:mb-[5rem]  font-semibold">Vấn đề doanh nghiệp gặp phải</h2>
        <div className="w-full tablet:w-1/2 desktop:order-2 tablet:order-1 desktop:pr-[10rem]">
            <div className="relative aspect-[597/547]">
                <Image src="/image/DetailPage/Frame 40670.svg" fill alt="image"/>
            </div>
        </div>
        <div className="w-full desktop:w-1/2 tablet:order-3 mt-[2rem] tablet:mt-[3.75rem] desktop:mt-0">
            {
                issues?.map((issue)=>{
                    return (
                        <div className="mb-6">
                        <h3 className="text-sb16 desktop:text-sb22 tablet:text-sb18 desktop:mb-3 tablet:mb-2">
                        {issue?.title}
                        </h3>
                        <p className="text-m14 desktop:text-m16">{issue?.desc}</p>
                    </div> 
                    )
                })
            }
            
        </div>
    </section>
  );
};
export default Problem;
