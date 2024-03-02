import clsx from "clsx";
import Image from "next/image";
import { BsStars } from "react-icons/bs";

export default function Projects() {
  const data = [
    {
      image: "/images/project/edu_lms.svg",
      partnerImage: "/images/project/vietinbank.svg",
      name: "Dự án phần mềm giáo dục trực tuyến cho Vietinbank",
      result: [
        {
          label: (
            <p className="">
              Tổng số học viên tham gia qua hệ thống phần mềm đạt
              <span className="font-bold text-mainBlue"> 100.000 người.</span>
            </p>
          ),
        },
        {
          label: (
            <p className="">
              Tỷ lệ học viên hoàn thành khóa học đạt
              <span className="font-bold text-mainBlue"> 80%.</span>
            </p>
          ),
        },
        {
          label: (
            <p className="">
              Tỷ lệ học viên hài lòng với hệ thống phần mềm đạt
              <span className="font-bold text-mainBlue"> 95%.</span>
            </p>
          ),
        },
      ],
    },
    {
      image: "/images/project/edu_lms.svg",
      partnerImage: "/images/project/vietinbank.svg",
      name: "Dự án phần mềm giáo dục trực tuyến cho Vietinbank",
      result: [
        {
          label: (
            <p className="">
              Tổng số học viên tham gia qua hệ thống phần mềm đạt
              <span className="font-bold text-mainBlue"> 100.000 người.</span>
            </p>
          ),
        },
        {
          label: (
            <p className="">
              Tỷ lệ học viên hoàn thành khóa học đạt
              <span className="font-bold text-mainBlue"> 80%.</span>
            </p>
          ),
        },
        {
          label: (
            <p className="">
              Tỷ lệ học viên hài lòng với hệ thống phần mềm đạt
              <span className="font-bold text-mainBlue"> 95%.</span>
            </p>
          ),
        },
      ],
    },
    {
      image: "/images/project/edu_lms.svg",
      partnerImage: "/images/project/vietinbank.svg",
      name: "Dự án phần mềm giáo dục trực tuyến cho Vietinbank",
      result: [
        {
          label: (
            <p className="">
              Tổng số học viên tham gia qua hệ thống phần mềm đạt
              <span className="font-bold text-mainBlue"> 100.000 người.</span>
            </p>
          ),
        },
        {
          label: (
            <p className="">
              Tỷ lệ học viên hoàn thành khóa học đạt
              <span className="font-bold text-mainBlue"> 80%.</span>
            </p>
          ),
        },
        {
          label: (
            <p className="">
              Tỷ lệ học viên hài lòng với hệ thống phần mềm đạt
              <span className="font-bold text-mainBlue"> 95%.</span>
            </p>
          ),
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col gap-4 mx-auto  desktop:w-4/5 w-[90%]">
      <h1 className="laptop:text-sb36 text-sb22 my-12">
        Những dự án đã thực hiện
      </h1>

      <div className="grid grid-cols-1 gap-12 divide-y">
        {data.map((item, i) => (
          <div
            key={i}
            className={clsx(
              "grid grid-cols-1 laptop:grid-cols-2 gap-6 tablet:gap-12 laptop:gap-24",
              {
                "pt-12": i > 0,
              }
            )}
          >
            <div className="aspect-video relative border-2 rounded-2xl">
              <Image
                src={item.image}
                fill
                title="Dịch vụ phần mềm giáo dục EduCenter"
                alt="Dịch vụ phần mềm giáo dục EduCenter"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="w-1/2 tablet:w-1/3 aspect-[3/1] relative">
                <Image
                  src={item.partnerImage}
                  fill
                  title="Dịch vụ phần mềm giáo dục EduCenter"
                  alt="Dịch vụ phần mềm giáo dục EduCenter"
                />
              </div>
              <h2 className="text-sb18 laptop:text-sb22  mb-12">{item.name}</h2>

              <div className="rounded-[3rem] bg-mainGradient w-max flex items-center gap-2 text-white px-4 py-2 font-[600] text-sb18">
                <BsStars />
                <span> Kết quả</span>
              </div>

              <ul className="list-disc px-4">
                {item.result.map((item) => (
                  <li
                    key={String(Math.random())}
                    className="text-m12 laptop:text-m16 font-[500]"
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
