import { HiBriefcase } from "react-icons/hi";
import SchoolIcon from "@mui/icons-material/School";
import { HiMiniCpuChip } from "react-icons/hi2";
import Image from "next/image";
import { useBreakpoints } from "@/@Common/hooks/useBreakpoints";
import clsx from "clsx";

const Solution = () => {
  const {mobile} = useBreakpoints();
  const solutions = [
    {
      title: "Cập nhật nội dung đào tạo và phương pháp giảng dạy",
      icon: <SchoolIcon className="w-[4.25rem] h-[4.375rem] bg-[#F5F5F5] p-[1rem] rounded-[1.5rem] mb-[2.5rem] text-green-400" />,
    },
    {
      title:
        "Nhân viên được khuyến khích đưa ra ý tưởng mới, thử nghiệm và thất bại",
      icon: <SchoolIcon className="w-[4.25rem] h-[4.375rem] bg-[#F5F5F5] p-[1rem] rounded-[1.5rem] mb-[2.5rem] text-red-400" />,
    },
    {
      title: "Cá nhân hóa học tập có thể giúp học viên học tập hiệu quả hơn",
      icon: <HiBriefcase className="w-[4.25rem] h-[4.375rem] bg-[#F5F5F5] p-[1rem] rounded-[1.5rem] mb-[2.5rem] text-green-400" />,
    },
    {
      title: "Phương pháp giảng dạy trực tuyến được áp dụng",
      icon: <SchoolIcon className="w-[4.25rem] h-[4.375rem] bg-[#F5F5F5] p-[1rem] rounded-[1.5rem] mb-[2.5rem] text-purple-400" />,
    },
    {
      title:
        "Các tài nguyên học tập đa dạng, chẳng hạn như video, bài giảng, bài tập",
      icon: <HiMiniCpuChip className="w-[4.25rem] h-[4.375rem] bg-[#F5F5F5] p-[1rem] rounded-[1.5rem] mb-[2.5rem] text-[#6ecbd2]" />,
    },
    {
      title: "Hệ thống đánh giá học tập được hỗ trợ bởi công nghệ",
      icon: <SchoolIcon className="w-[4.25rem] h-[4.375rem] bg-[#F5F5F5] p-[1rem] rounded-[1.5rem] mb-[2.5rem] text-green-400" />,
    },
  ];
  return (
    <section className="relative bg-[#FFF8E1] px-[1.25rem] desktop:px-[15rem] overflow-hidden tablet:px-[2rem] pt-[8.75rem] tablet:pt-[15rem] pb-[2.5rem] desktop:pb-[5rem] tablet:pb-[3.75rem] z-10">
      <div className="w-[160%] tablet:w-[142%] desktop:w-1/2 absolute top-0 inset-1/2 transform -translate-x-1/2 aspect-video z-0">
        <Image className="z-0" src="/image/DetailPage/starBackground.svg" alt="Educenter" title="Educenter" fill />
      </div>
      {/* <div className={clsx("absolute top-0 inset-1/2 transform -translate-x-1/2 bg-top bg-no-repeat w-full h-full bg-[20%] ")}
        style={{ backgroundImage: 'url("/image/DetailPage/starBackground.svg")', }}
      >
      </div> */}

      {/* <div className="absolute w-full aspect-video">
        <Image src='/image/DetailPage/starBackground.svg' layout="fill" alt="Educenter" title="Educenter" />
      </div> */}
      <h2 className="relative font-semibold text-center text-sb18 desktop:text-[2.5rem] tablet:text-sb28 mb-[2rem] desktop:mb-[4.125rem] tablet:mb-[3.75rem] z-[1]">Giải pháp của chúng tôi</h2>
      <ul className="relative grid desktop:grid-cols-3 tablet:grid-cols-2 gap-[1.25rem] desktop:gap-[2.5rem] tablet:gap-[1.75rem]">
        {solutions.map((solution) => {
          return (
            <li className="bg-white p-6 tablet:p-7 rounded-[1.75rem]">
              {solution.icon}
              <h3 className="text-sb16 tablet:text-sb18">
                {solution.title}
              </h3>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Solution;
