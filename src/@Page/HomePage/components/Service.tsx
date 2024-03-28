"use client";

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsImageAlt } from "react-icons/bs";
import { FaMousePointer, FaSearch } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
// import Lottie from "lottie-react";
import robot_animation from "../assets/animation_robot.json";
import { useBreakpoints } from "@/@Common/hooks/useBreakpoints";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
export function Content1() {
  return (
    <div className="border-2 rounded-[56px] shadow-sank p-[5%] border-white  relative w-[90%] laptop:w-3/5 animate-fadeIn">
      <div className="flex flex-col gap-8 p-8 bg-white rounded-[50px] ">
        <div className="flex flex-col gap-[12px] p-4 bg-gray-50 rounded-md">
          <div className="bg-gray-400 rounded-md aspect-[23/1] animate-pulse"></div>
          <div className="bg-gray-400 rounded-md aspect-[23/1] "></div>
          <div className="bg-gray-400 rounded-md aspect-[23/1] animate-pulse"></div>
          <div className="bg-gray-400 rounded-md aspect-[23/1] "></div>
          <div className="bg-gray-400 rounded-md aspect-[23/1] animate-pulse"></div>
          <div className="bg-gray-400 rounded-md aspect-video animate-pulse flex items-center justify-center ">
            <BsImageAlt className="text-[2rem] text-gray-700" />
          </div>
        </div>

        <div className="flex flex-col gap-[12px] rounded-md p-4 bg-gray-50">
          <div className=" flex gap-4 items-center">
            <div className="rounded-full bg-gray-200 w-[20px] aspect-square"></div>
            <div className="rounded-md w-full h-[20px] bg-gray-200"></div>
          </div>
          <div className=" flex gap-4 items-center">
            <div className="rounded-[50%] bg-gray-200 w-[20px] aspect-square"></div>
            <div className="rounded-md w-full h-[20px] bg-gray-200"></div>
          </div>
          <div className=" flex gap-4 items-center">
            <div className="rounded-full bg-gray-300 w-[20px] aspect-square p-[2px] relative">
              <div className="w-full h-full animate-pulse bg-orange-500 rounded-full"></div>
              <div className="absolute top-[50%] left-[20%]">
                <FaMousePointer className="text-gray-500 text-[1.2rem]" />
              </div>
            </div>
            <div className="rounded-md w-full h-[20px] bg-green-500 animate-pulse"></div>
          </div>
        </div>
        <div className="flex flex-col gap-[12px] rounded-md p-4 bg-[#5074FF]"></div>
      </div>

      <div className="animate-text-1 -right-[10%] tablet:-top-[5%] absolute rounded-2xl text-center  bg-[#3E65FE] text-[white] p-[0.7rem] font-bold border-2">
        Làm trên mọi thiết bị
      </div>
      <div className="animate-text-2 -left-[10%] top-[30%]  absolute rounded-2xl text-center  bg-[#10b981] text-[white] p-[0.7rem] font-bold border-2">
        Bất kì thời gian
      </div>
      <div className="animate-text-3 h-max -right-[4%] bottom-[20%]  absolute rounded-2xl text-center  bg-[#D23CFF] text-[white] p-[0.7rem] font-bold border-2">
        Bất kì địa điểm
      </div>
    </div>
  );
}

export function Content2() {
  return (
    <div className="relative w-[90%] aspect-square animate-fadeIn">
      <div className="absolute  w-4/5 aspect-video left-0  transition-all duration-300   animate-img-service-1">
        <img
          src="/images/home/service_app_1.svg"
          className="w-full h-full  z-[3] "
          alt="Thiết kế webapp LMS Công cụ quản lý chương trình đào tạo"
          title="Thiết kế webapp LMS Công cụ quản lý chương trình đào tạo"
        />
      </div>
      <div className="absolute w-4/5  aspect-video right-0 top-[25%]   transition-all duration-300  animate-img-service-2">
        <img
          src="/images/home/service_app_2.svg"
          className="w-full h-full  z-[3]"
          alt="Thiết kế webapp LMS Công cụ quản lý chương trình đào tạo"
          title="Thiết kế webapp LMS Công cụ quản lý chương trình đào tạo"
        />
      </div>
      <div className="absolute w-4/5  aspect-video left-[10%] bottom-0   transition-all duration-300  animate-img-service-3">
        <img
          src="/images/home/service_app_3.svg"
          className="w-full h-full z-[3]"
          alt="Thiết kế webapp LMS Công cụ quản lý chương trình đào tạo"
          title="Thiết kế webapp LMS Công cụ quản lý chương trình đào tạo"
        />
      </div>
    </div>
  );
}

export function Content3() {
  return (
    <div className="relative w-[90%] tablet:w-4/5  flex animate-fadeIn">
      {/* ui app */}
      <div className="w-[90%] tablet:w-[90%] laptop:w-[70%] bg-white p-4 rounded-2xl ">
        <div className="rounded-2xl bg-[#F6F9FF] flex flex-col  pt-4 px-2 laptop:px-2 desktop:px-4">
          {/* section1 */}
          <div className="flex gap-2">
            <div className="w-2/5 flex flex-col">
              <div className="aspect-square w-[33.33px] relative">
                <Image src="/images/home/avatar.svg" fill alt="EduCenter" />
              </div>

              <span className="text-[0.6rem] tablet:text-[1rem] font-500 text-gray-500">
                Xin chào
              </span>
              <div className="flex gap-2 items-center">
                <span className="w-max text-[0.6rem] laptop:text-[0.8rem]">
                  Linh Chi
                </span>
                <img
                  width={14}
                  height={14}
                  alt="eduCenter"
                  src="/images/home/ic_notification.svg"
                />
              </div>
              <span className=" text-[0.8rem] tablet:text-[0.9rem] my-6 font-[500]">
                Khoá học
              </span>
            </div>

            <div className="w-3/5 relative aspect-square">
              <Image src="/images/home/bg_app_3.svg" fill alt="EduCenter" />
            </div>
          </div>

          {/* searchbox */}
          <div className="rounded-xl -translate-y-4 flex gap-2 justify-between  items-center bg-white shadow-md p-2">
            <FaSearch className="text-gray-400 text-[1.2rem]" />
            <TypeAnimation
              sequence={["Tếng Anh", 1000, "Tâm lý học", 1000, "Toán 1", 1000]}
              wrapper="span"
              speed={50}
              className="text-[0.6rem] tablet:text-[0.6rem] laptop:text-[0.8rem] inline-block font-[500] "
              repeat={Infinity}
            />
            <button className="bg-blue-500 rounded-2xl text-white text-[0.6rem] laptop:text-[0.8rem] p-2">
              Tìm kiếm
            </button>
          </div>

          {/* app list */}

          <div className="flex  gap-4 my-2">
            <div className=" w-1/2 flex flex-col gap-4">
              <div className="aspect-video relative">
                <Image
                  src="/images/home/major.svg"
                  title="EduCenter App"
                  alt="EduCenter"
                  fill
                />
              </div>
              <div className="bg-[#FFE484] text-[0.6rem] laptop:text-[0.8rem] text-[#B08515] py-2 px-4 shadow-md rounded-md font-[600]">
                Chủ đề
              </div>
            </div>
            <div className=" w-1/2 flex flex-col gap-4">
              <div className="bg-[#FFBFBF]  text-[0.6rem] laptop:text-[0.8rem] text-white py-2 px-4 shadow-md rounded-md font-[600]">
                Môn học
              </div>
              <div className="aspect-video relative ">
                <Image
                  src="/images/home/skill.svg"
                  title="EduCenter App"
                  alt="EduCenter"
                  fill
                />
              </div>
            </div>
          </div>

          {/* footer */}
          <div className="relative aspect-[11/9] mb-6">
            <Image
              alt="linh"
              title="EduCenter"
              src="/images/home/app_footer.svg"
              fill
            />
          </div>
        </div>
      </div>

      {/* ui spin right */}
      <div className="absolute laptop:right-0 desktop:-bottom-[15%]  w-2/3 aspect-square -right-6 -bottom-12">
        <Image src="/images/home/spin_app.svg" alt="EduCenter" fill />
      </div>
    </div>
  );
}

export function Content4() {
  return (
    <div className="animate-fadeIn rounded-[52px] border-2 border-white w-4/5 p-6 flex flex-col gap-6 items-center relative aspect-[8.5/10]">
      {/* <div className="absolute w-full flex flex-col gap-6 h-max z-[2] items-center"> */}
      <div className="w-1/4 aspect-square relative bg-white rounded-2xl shadow-lg ">
        <Image
          alt="EduCenter"
          title="EduCenter AI"
          src="/images/home/ai_ico.svg"
          fill
        />
      </div>

      <div className="rounded-[40px] bg-white py-4 px-12 text-[#3E65FE] font-bold w-full laptop:w-4/5 text-center">
        Trí thông minh nhân tạo
      </div>

      <div className="bg-white rounded-2xl shadow-2xl w-full laptop:w-4/5 aspect-video">
        {typeof document !== "undefined" && (
          <Lottie animationData={robot_animation} />
        )}
      </div>

      <div className="rounded-[40px] bg-white py-4 px-12 text-[#D23CFF] font-bold w-full laptop:w-4/5 text-center z-[1] shadow-lg">
        Tác vụ tự động, thông minh
      </div>
      {/* </div> */}

      {/* <div className="rounded-[40px] bg-white p-6 w-[110%] absolute aspect-video bottom-0 shadow-sank z-1">
       
      </div> */}
    </div>
  );
}

const services = [
  {
    title: "Tạo đề thi, ôn thi, làm bài thi mọi lúc mọi nơi",
    description:
      "Thông qua các bài kiểm tra, EduCenter giúp doanh nghiệp đánh giá đúng năng lực nhân sự. Từ đó, doanh nghiệp sẽ có phương pháp hiệu quả để nâng cao chất lượng nguồn nhân lực.",
    buttons: [
      {
        text: "Dùng thử 7 ngày",
        className: "btn-gradient w-full md:w-auto",
        link: "",
      },
      {
        text: "Tư vấn miễn phí",
        className: "btn-default w-full md:w-auto",
        link: "",
      },
    ],
    content: <Content1 />,
  },
  {
    title: "Thiết kế webapp LMS Công cụ quản lý chương trình đào tạo",
    description:
      "Thiết kế website và mobile app LMS với giao diện chuyên nghiệp giúp doanh nghiệp dễ dàng áp dụng phương pháp đào tạo thông minh, linh hoạt và tiện lợi. Nhằm tiết kiệm thời gian và chi phí đào tạo cho doanh nghiệp.",
    buttons: [
      {
        text: "Tư vấn miễn phí",
        className: "btn-default",
        link: "",
      },
    ],
    content: <Content2 />,
  },
  {
    title: "Thiết kế web app bán khoá học chuyên nghiệp, tối đa lợi nhuận",
    description:
      "Thiết kế website và mobile app bán khoá học online thông minh, giúp doanh nghiệp dễ dàng tiếp cận học viên trên cả nước. Từ đó, giúp doanh nghiệp tăng doanh thu với chi phí thấp.",
    buttons: [
      {
        text: "Tư vấn miễn phí",
        className: "btn-default",
        link: "",
      },
    ],
    content: <Content3 />,
  },
  {
    title: "Phát triển AI thông minh trong hệ thống đào tạo",
    description:
      "Bằng việc ứng dụng sự phát triển vượt bậc của Công nghệ thông tin vào quy trình đào tạo nhân sự, giúp doanh nghiệp đạt được kết quả tốt nhất, nhanh nhất, tiết kiệm nhất.",
    buttons: [
      {
        text: "Tư vấn miễn phí",
        className: "btn-default",
        link: "",
      },
    ],
    content: <Content4 />,
  },
];

const sectionLength = services.length;

export default function Service() {
  const { tablet } = useBreakpoints();
  return (
    <div className="flex flex-col mx-auto desktop:w-4/5 laptop:w-[90%] my-8 laptop:my-12 desktop:my-24">
      <div className=" items-center hidden laptop:flex ">
        <div className="bg-[#ECEEFF] rounded-[36px] ">
          <h2 className="text-transparent w-max bg-gradient-to-r from-mainViolet to-mainBlue bg-clip-text px-8 py-6 text-[2rem]">
            Dịch vụ của Educenter
          </h2>
        </div>
        <div className="bg-[#ECEEFF] w-full h-[2px] "></div>
      </div>

      {tablet ? <ScrollTablet /> : <ScrollMobile />}
    </div>
  );
}

export function ScrollTablet() {
  const [showAnimate, setShowAnimate] = useState(false);
  const [currentContent, setCurrentContent] = useState<number>(0);
  //   console.log("🚀 ~ ScrollTablet ~ currentContent:", currentContent);
  console.log("🚀 ~ ScrollTablet ~ showAnimate:", showAnimate);
  useEffect(() => {
    const handleScroll = () => {
      const currentHeight = window.pageYOffset;

      const startDiv = document.getElementById("0") as any;

      const startHeight = startDiv.getBoundingClientRect().top + window.scrollY;

      const lastDiv = document.getElementById("3") as any;

      const lastHeight = lastDiv.getBoundingClientRect().top + window.scrollY;
      console.log("🚀 ~ handleScroll ~ startHeight:", startHeight);
      console.log("🚀 ~ handleScroll ~ currentHeight:", currentHeight);
      console.log("🚀 ~ handleScroll ~ lastHeight:", lastHeight);
      console.log(
        "🚀 ~ handleScroll ~ startHeight  < currentHeight < lastHeight:",
        startHeight < currentHeight && currentHeight < lastHeight
      );

      if (
        startHeight - 120 < currentHeight &&
        currentHeight < lastHeight + 1000
      ) {
        setShowAnimate(true);
        ["3", "2", "1", "0"].forEach((id, index) => {
          const e = document.getElementById(id) as any;
          const idHeight = e.getBoundingClientRect().top + window.scrollY;
          //   console.log("🚀 ~ .forEach ~ idHeight:", id, idHeight);
          if (currentHeight < idHeight + 420) {
            return setCurrentContent(Number(id));
          }
        });
      } else {
        setShowAnimate(false);
      }
    };

    // Thêm sự kiện scroll
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    // Xóa sự kiện khi component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="laptop:w-full mx-auto tablet:w-[90%] flex justify-between ">
      <div className="tablet:w-[45%] desktop:w-1/2e w-full ">
        {services.map((item, i) => (
          <div
            id={String(i)}
            key={item.title}
            className="flex items-center h-[100vh]"
          >
            <div className="laptop:w-4/5 desktop:w-3/5 flex items-center">
              <div className="flex flex-col gap-8">
                <h3 className="text-[22px] tablet:text-[24px] laptop:text-[40px] font-bold">
                  {item.title}
                </h3>
                {/* <TypeAnimation
                  sequence={[item.description, 1000]}
                  wrapper="p"
                  speed={50}
                  className="text-[1rem] inline-block font-[500] "
                  //   repeat={Infinity}
                /> */}
                <p className="text-[1rem] inline-block font-[500] laptop:text-[1.2rem] text-gray-500">
                  {item.description}
                </p>

                <div className="flex items-center gap-8">
                  {item.buttons.map((btn) => (
                    <button
                      key={`${item.title} ${btn.text}`}
                      className={btn.className}
                    >
                      {btn.text}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className={clsx(
          "tablet:w-1/2 laptop:w-2/5 desktop:w-2/5 tablet:h-[65vh] laptop:h-[90vh] bg-cover flex items-center justify-center rounded-[50px]",
          {
            "sticky top-[15vh] laptop:top-[5vh]": showAnimate,
          }
        )}
        style={{
          backgroundImage: 'url("/images/home/bg_service.png")',
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          {services[currentContent].content}
        </div>
      </div>
    </div>
  );
}

export function ScrollMobile() {
  return (
    <div className="flex flex-col gap-12 my-12 w-[90vw] mx-auto">
      {services.map((service, index) => (
        <div key={index} className="flex flex-col gap-8">
          <div
            style={{
              backgroundImage: 'url("/images/home/bg_service.png")',
            }}
            className="flex  justify-center items-center aspect-[9/10] rounded-[32px] py-12"
          >
            {service.content}
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-[22px] tablet:text-[24px] laptop:text-[40px] font-bold">
              {service.title}
            </h3>
            {/* <TypeAnimation
              sequence={[service.description, 1000]}
              wrapper="p"
              speed={50}
              className="text-[1rem] inline-block font-[500] "
              //   repeat={Infinity}
            /> */}
            <p>{service.description}</p>

            <div className="flex items-center gap-8">
              {service.buttons.map((btn) => (
                <button
                  key={`${service.title} ${btn.text}`}
                  className={btn.className}
                >
                  {btn.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
