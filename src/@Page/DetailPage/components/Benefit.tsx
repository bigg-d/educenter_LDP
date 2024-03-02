import { RiVerifiedBadgeFill } from "react-icons/ri";
import clsx from "clsx";
import Image from "next/image";
import { useBreakpoints } from "@/@Common/hooks/useBreakpoints";
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
    <section className="relative flex flex-col desktop:pb-[6.25rem] tablet:pb-[2.5rem] z-0 ">
      <div className="w-full absolute top-0 desktop:aspect-[41/11] aspect-[768/489]">
        <div className="w-[21.25rem] tablet:w-[59rem] aspect-square -left-[7.625rem] -top-[9rem] desktop:-left-[13.5%] desktop:-top-[52%] tablet:-left-[31rem] tablet:-top-[28.5rem] absolute bg-blue-500 rounded-full z-[1]" />
        <div className="w-full hidden desktop:block desktop:w-[85%] top-0 desktop:top-[11rem] right-0 absolute aspect-[1646/592] ">
          <Image src="/image/DetailPage/benefitBg.svg" alt="Educenter" fill />
        </div>

        <div className="w-full desktop:hidden top-0 right-0 absolute aspect-[1646/592] transform scale-[1.75] translate-x-[-11%] translate-y-[37%] tablet:scale-[1.25] tablet:translate-x-[3%] tablet:translate-y-[12%]">
          <Image
            src="/image/DetailPage/benefitBgTablet.svg"
            alt="Educenter"
            fill
          />
        </div>
      </div>
      <div className="w-full pt-[2.5rem] desktop:pt-[14rem] tablet:pt-[3.125rem] px-[1.25rem] desktop:px-[15rem] tablet:px-[2rem] top-0  z-[1]">
        <h2 className="w-2/3 desktop:w-1/2 tablet:w-2/5 tablet:px-[1.75rem] text-white text-[1.375rem] desktop:text-[3.75rem] tablet:text-[1.75rem] font-semibold mb-[5.25rem] tablet:mb-[6rem]">
          Vì sao doanh nghiệp nên chọn dịch vụ của EduCenter
        </h2>
        <ul className="grid tablet:grid-cols-2 gap-5 tablet:gap-x-[3.75rem] tablet:gap-y-[2.5rem] p-[1.25rem] desktop:p-[3rem] tablet:p-[2rem] bg-white shadow-lg rounded-[1.75rem]">
          {benefits.map((item) => {
            return (
              <li className="text-m18 tablet:block flex">
                <h3 className="text-m14 tablet:text-m18 inline text-wrap">
                  <RiVerifiedBadgeFill className="text-[#40C63E] text-[1rem] mr-1 tablet:text-[1.75rem] tablet:block inline tablet:mb-[1.375rem]" />
                  {item.title}
                </h3>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default Benefit;
