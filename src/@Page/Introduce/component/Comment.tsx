"use client";
import React from "react";
import Slider from "react-slick";

const Comment = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  const listImage = [
    { image: "/image/logo1.svg" },
    { image: "/image/logo2.svg" },
    { image: "/image/logo3.svg" },
    { image: "/image/logo4.svg" },
    { image: "/image/logo5.svg" },
    { image: "/image/logo6.svg" },
    { image: "/image/logo7.svg" },
    { image: "/image/logo8.svg" },
    { image: "/image/logo9.png" },
    { image: "/image/logo10.png" },
    { image: "/image/logo11.svg" },
    { image: "/image/logo12.svg" },
    // {image:"/image/logo13.svg"},
  ];
  const listFrame = [
    {
      image: "/image/avt.svg",
      name: "Theresa Webb",
      text: "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp.",
      value:
        "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho đội ngũ nhân viên của mình nên lựa chọn Educenter.",
    },
    {
      image: "/image/avt.svg",
      name: "Theresa Webb",
      text: "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp.",
      value:
        "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho đội ngũ nhân viên của mình nên lựa chọn Educenter.",
    },
    {
      image: "/image/avt.svg",
      name: "Theresa Webb",
      text: "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp.",
      value:
        "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho đội ngũ nhân viên của mình nên lựa chọn Educenter.",
    },
    {
        image: "/image/avt.svg",
        name: "Theresa Webb",
        text: "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp.",
        value:
          "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho đội ngũ nhân viên của mình nên lựa chọn Educenter.",
      },
  ];
  
  return (
    <div className="w-full h-auto bg-blue-50 py-10 flex flex-col gap-[7rem]">
      <div className="flex w-[80%] mx-auto justify-between">
        <div className=" w-[40%] flex flex-col gap-[3.75rem]">
          <div className="self-stretch text-zinc-900 text-[4rem] font-bold font-['Montserrat'] leading-[6rem] w-[80%] tracking-wider">
            <h2>Khách hàng nói gì về Educenter ?</h2>
          </div>
          <div className="px-8 py-4 bg-blue-500 rounded-full justify-center items-center gap-1 inline-flex w-[60%]">
            <div className="text-center text-white text-xl font-bold font-['Montserrat'] leading-normal tracking-tight">
              Chứng thực từ khách hàng
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 grid-rows-3">
          {listImage.map((item, index) => (
            // <div key={index} className={`flex justify-center items-center ${index < 4 || index > 7 ? 'filter blur-sm' : ''}`}>
            <div key={index} className="flex justify-center items-center">
              <img src={item.image} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="w-[80%] mx-auto flex">
        {listFrame.map((pro, index)=> (
            <Slider {...settings}>
                <div key={index} className="p-[3rem] w-[45%] border-8 border-solid border-blue-300 flex-col justify-start items-start gap-9 inline-flex rounded-[2.6rem]">
                    <img src="/image/img_mark.png" alt="" />
                    <div className="self-stretch justify-start items-center gap-5 inline-flex">
                        <img src={pro.image} alt="" />
                        <span className="grow shrink basis-0 text-zinc-600 text-xl font-bold font-['Montserrat']">{pro.name}</span>
                    </div>
                    <div className="self-stretch  flex-col justify-start items-start gap-5 flex">
                        <span className="self-stretch text-zinc-900 text-lg font-medium font-['Montserrat']">{pro.text}</span>
                        <span className="self-stretch text-zinc-900 text-lg font-medium font-['Montserrat']">{pro.value}</span>
                    </div>
                </div>  
            </Slider>
            
        ))}
      </div>
    </div>
  );
};

export default Comment;
