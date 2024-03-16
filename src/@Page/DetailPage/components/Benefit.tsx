'use client'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import clsx from "clsx";
import Image from "next/image";
import { useBreakpoints } from "@/@Common/hooks/useBreakpoints";
import { Fade } from "react-awesome-reveal";
const Benefit = () => {
  const benefits = [
    {
      title:
        "Cập nhật nội dung đào tạo và phương pháp giảng dạy theo xu hướng mới nhất, đáp ứng với sự thay đổi của thị trường lao động và công nghệ",
    },
    {
      title:
        "Hệ thống quản lý chất lượng đào tạo nghiêm ngặt, đảm bảo chất lượng đào tạo luôn ở mức cao nhất",
    },
    {
      title:
        "Cung cấp các khóa học trực tuyến, kết hợp với các khóa học trực tiếp, giúp doanh nghiệp tiết kiệm chi phí và thời gian đào tạo.",
    },
    {
      title:
        "Cung cấp các dịch vụ đào tạo với giá cả cạnh tranh, giúp doanh nghiệp tiết kiệm chi phí đào tạo",
    },
    {
      title:
        "Đáp ứng nhu cầu của doanh nghiệp. cung cấp các chương trình đào tạo đa dạng, phù hợp với nhu cầu của doanh nghiệp",
    },
    {
      title:
        "Sử dụng các công cụ công nghệ hiện đại để hỗ trợ đào tạo, giúp doanh nghiệp tiết kiệm chi phí và thời gian đào tạo.",
    },
  ];
  return (
    <section className="relative flex flex-col fhd:pb-[6.25rem] tablet:pb-[2.5rem] z-0 ">
      <div className="w-full absolute top-0 fhd:aspect-[41/11] aspect-[768/489]">
        <div className="w-[21.25rem] tablet:w-[943px] aspect-square -left-[7.625rem] -top-[9rem] fhd:-left-[13.5%] fhd:-top-[52%] laptop:-left-[17%] laptop:-top-[26%] tablet:-left-[31rem] tablet:-top-[28.5rem] absolute bg-blue-500 rounded-full z-[1]" />
        <div className="w-full hidden fhd:block fhd:w-[85%] top-0 fhd:top-[8rem] laptop:top-[6rem] right-0 absolute aspect-[823/296] ">
          <Image src="/image/DetailPage/img_chooseBG.svg" alt="Educenter" fill />
        </div>
        <div className="w-full hidden laptop:block fhd:hidden fhd:w-[85%] top-0 fhd:top-[11rem] laptop:top-[6rem] right-0 absolute aspect-[823/296] ">
          <Image src="/image/DetailPage/benefitBgLaptop.svg" alt="Educenter" fill />
        </div>
        <div className="w-full hidden tablet:block laptop:hidden top-0 right-0 absolute aspect-[768/391] transform scale-[1.5] translate-x-[-13%] tablet:scale-[1] tablet:translate-x-0 translate-y-0">
          <Image
            src="/image/DetailPage/benefitBgTablet.svg"
            alt="Educenter"
            fill
          />
        </div>
        <div className="w-[390px] tablet:hidden top-0 right-0 absolute aspect-[360/258]">
          <Image
            src="/image/DetailPage/img_chooseBgMobile.svg"
            alt="Educenter"
            fill
          />
        </div>
      </div>
      <div className="w-full pt-[2.5rem] fhd:pt-[10rem] laptop:pt-[9.5rem] tablet:pt-[3.125rem] px-[1.25rem] fhd:px-[15rem] laptop:px-[6.25rem] tablet:px-[2rem] top-0  z-[1]">
        <h2 className="w-2/3 tablet:w-2/5 laptop:w-[54%] fhd:w-[45%]  text-white text-[1.375rem] laptop:text-[3.75rem] tablet:text-[1.75rem] font-semibold mb-[5.25rem] tablet:mb-[6rem]">
          Vì sao doanh nghiệp nên chọn dịch vụ của EduCenter
        </h2>
          <ul className="grid tablet:grid-cols-2 gap-5 tablet:gap-x-[3.75rem] tablet:gap-y-[2.5rem] p-[1.25rem] fhd:p-[3rem] tablet:p-[2rem] bg-white shadow-lg rounded-[1.75rem]">
            {benefits.map((item,index) => {
              return (
                <Fade key={index} duration={3000} className="text-m18 tablet:block flex">
                  <h3 className="text-m14 tablet:text-m18 inline text-wrap">
                    <RiVerifiedBadgeFill className="text-[#40C63E] text-[1rem] mr-1 tablet:text-[1.75rem] tablet:block inline tablet:mb-[1.375rem]" />
                    {item.title}
                  </h3>
                </Fade>
              );
            })}
          </ul>
      </div>
    </section>
  );
};
export default Benefit;
