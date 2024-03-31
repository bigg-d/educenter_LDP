import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const Operate = () => {
  const listData = [
    {
      images: "/image/operate.svg",
      text: "EduQuiz – Hành trình trở thành công cụ ôn thi đắc lực cho sinh viên của thương hiệu ‘trẻ’",
    },
    {
      images: "/image/operate1.svg",
      text: "EduQuiz – Hành trình trở thành công cụ ôn thi đắc lực cho sinh viên của thương hiệu ‘trẻ’",
    },
    {
      images: "/image/operate2.svg",
      text: "EduQuiz – Hành trình trở thành công cụ ôn thi đắc lực cho sinh viên của thương hiệu ‘trẻ’",
    },
    {
      images: "/image/operate3.svg",
      text: "EduQuiz – Hành trình trở thành công cụ ôn thi đắc lực cho sinh viên của thương hiệu ‘trẻ’",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center py-[7%] tablet:p-[4%] laptop:gap-16 fhd:gap-20 gap-10">
      <h2 className="text-zinc-900 w-[90%] text-center text-3xl laptop:text-4xl fhd:text-5xl font-bold">
        Vận hành tổ chức thông minh
      </h2>
      <div className="w-[90%] tablet:w-full mx-auto grid grid-cols-1 laptop:grid-cols-3 gap-10 desktop:grid-cols-4">
        {listData?.map((item, index) => (
          <div
            key={index}
            className={clsx(
              "tablet:p-5 w-full  tablet:rounded-3xl tablet:shadow tablet:border-2 items-center gap-5 tablet:border-indigo-50 laptop:flex-col justify-start laptop:items-start  laptop:gap-5 fhd:gap-7 inline-flex group cursor-pointer",
              {
                "hidden desktop:flex   ": index > 2,
              }
            )}
          >
            <div className="relative  w-full aspect-[11/8] overflow-hidden   tablet:w-[40%] laptop:w-full">
              <Image
                src={item.images}
                fill
                alt="EduCenter"
                title="EduCenter"
                className="w-full h-full group-hover:scale-[1.05] transition-all duration-300"
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-zinc-900 fhd:text-base laptop:text-sm text-base font-semibold leading-normal line-clamp-2">
                {item.text}
              </p>
              <Link
                href={"/"}
                className="text-blue-500 :text-base fhd:text-base desktop:text-sm font-semibold  leading-7"
              >
                Đọc Thêm
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Operate;
