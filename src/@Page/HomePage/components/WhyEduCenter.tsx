import Image from "next/image";

export default function WhyEduCenter() {
  const data = [
    {
      title: "Linh hoạt và tiết kiệm thời gian",
    },
    {
      title: "Giao diện thông minh, dễ dàng sử dụng",
    },
    {
      title: "Hỗ trợ kỹ thuật 24/7",
    },
    {
      title: "Cam kết tiến độ",
    },
    {
      title: "Tương thích trên mọi thiết bị",
    },
  ];
  return (
    <div className=" flex flex-col gap-8 items-center laptop:py-24 py-8  bg-[#F6F9FF] w-full mx-auto">
      <div className="bg-mainGradient rounded-[40px] text-white px-8 py-4 laptop:w-max text-[1.2rem] text-center laptop:text-[2rem] desktop:text-[2.3rem]">
        Tại sao doanh nghiệp nên chọn Educenter
      </div>
      <div className="desktop:w-4/5  tablet:w-[90%] rounded-[42px] bg-white drop-shadow-lg flex flex-col laptop:flex-row p-[5%] gap-[5%]">
        <div className="desktop:w-1/2 grid grid-cols-1 gap-2 divide-y">
          <div className="text-start pb-4 font-[600] text-[1.375rem]">
            Cung cấp dịch vụ đa dạng, toàn diện{" "}
          </div>
          {data.map((i) => (
            <div
              key={i.title}
              className="relative text-start pb-4 pt-[12px] font-[400] text-[1.125rem] laptop:text-[1.375rem]"
            >
              {i.title === "Linh hoạt và tiết kiệm thời gian" && (
                <div className="absolute -top-[2px] left-0 h-[4px] rounded-xl w-1/5 bg-mainGradient"></div>
              )}
              {i.title}
            </div>
          ))}
        </div>

        <div className="rounded-[3rem] bg-[#F6F9FF] flex items-center justify-center laptop:w-1/2 p-[2%]">
          <div className=" flex flex-col bg-white rounded-[3rem] relative laptop:aspect-[2/1] aspect-[1/1.4] tablet:aspect-[1/0.6] w-full h-full overflow-hidden">
            <div className="absolute w-[95%] -left-[22%] aspect-[4/1] justify-end">
              <Image
                src="/images/home/why_ico.svg"
                alt="EduCenter"
                title="EduCenter"
                fill
              />
            </div>
            <p className="text-[1.25rem] absolute font-[400] p-8 bottom-0 w-full">
              Tại EduCenter, doanh nghiệp có thể tìm thấy tất cả giải pháp thông
              minh trong lĩnh vực đào tạo, gồm: hệ thống ôn thi và thi trắc
              nghiệm, thiết kế website LMS, thiết kế website bán khoá học, tích
              hợp công cụ AI tiên tiến.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
