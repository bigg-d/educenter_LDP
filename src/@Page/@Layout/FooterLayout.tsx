"use client";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { AiTwotoneEnvironment } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import clsx from "clsx";
const FooterLayout = () => {
  const isTablet = useMediaQuery("(min-width:768px)");
  const [expandedItem, setExpanded] = useState(null);
  const handleItemClick = (index) => {
    setExpanded(expandedItem === index ? null : index);
  };

  const icon = [
    { icon: <FaFacebookF /> },
    { icon: <FaTwitter /> },
    { icon: <AiFillInstagram /> },
    { icon: <FaLinkedinIn /> },
    { icon: <FaYoutube /> },
  ];
  const services = [
    {
      title: "Giải pháp",
      items: [
        { name: "Tạo đề thi trắc nghiệm" },
        { name: "Ôn thi trắc nghiệm" },
        { name: "Làm bài thi trắc nghiệm" },
        { name: "Thiết kế webapp LMS" },
        { name: "Thiết kế webapp bán khoá học" },
        { name: "Phát triển AI thông minh" },
      ],
    },
    {
      title: "Công ty",
      items: [
        { name: "Về chúng tôi" },
        { name: "Facebook" },
        { name: "Tuyển dụng" },
        { name: "Blog" },
      ],
    },
    {
      title: "Hỗ trợ",
      items: [
        { name: "Câu hỏi thường gặp" },
        { name: "Hướng dẫn sử dụng" },
        { name: "CSKH" },
        { name: "Hỗ trợ trực tuyến" },
        { name: "Báo lỗi" },
      ],
    },
    {
      title: "Liên hệ",
      items: [
        { icon: <FaRegEnvelope />, name: "support@eduquiz.vn" },
        { icon: <BsTelephone />, name: "0914812000" },
        {
          icon: <AiTwotoneEnvironment />,
          name: "Tầng 5, số 33 , phố Trung Kính - P. Trung Hoà - Q. Cầu Giấy - Tp Hà Nội",
        },
      ],
    },
  ];
  return (
    <div className="w-full bg-white">
      <div className="w-[90%] mx-auto flex flex-col gap-8">
        <div
          className={clsx("", {
            "flex flex-col gap-5 ": !isTablet,
            "flex items-center justify-between": isTablet,
          })}
        >
          <div
            className={clsx("", {
              "flex flex-col gap-5": !isTablet,
              "flex flex-col text-[2rem]": isTablet,
            })}
          >
            <div className="mt-5">
              <img src="/image/logoEduQuiz.png" alt="" className="w-[140px]" />
            </div>
            <div>
              <span className="text-gray-500 text-[20px] md:text-[16px]">
                Dịch vụ công nghệ về đào tạo cho doanh nghiệp
              </span>
            </div>
          </div>
          <div>
            <ul className="flex gap-5">
              {icon.map((item, index) => (
                <li key={index} className="text-[1.3rem] text-gray-500">
                  {item.icon}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="bg-gray-400 h-0.5  md:hidden" />
        <div
          className={clsx("", {
            "flex flex-col gap-5": !isTablet,
            "flex flex-wrap justify-between gap-10 ": isTablet,
          })}
        >
          {services.map((service, index) => (
            <div key={index} className="gap-4 flex flex-col lg:w-[20%]">
              <div
                className="font-bold flex justify-between items-center"
                onClick={() => {
                  handleItemClick(index);
                }}
              >
                {service.title}
                {!isTablet &&
                  (expandedItem === index ? (
                    <IoIosArrowDown />
                  ) : (
                    <IoIosArrowForward />
                  ))}
              </div>

              {(expandedItem === index || isTablet) &&
                service.items?.map((pro, index) => (
                  <div
                    className={
                      service.title === "Liên hệ" && isTablet ? "flex  items-center gap-5" : "flex flex-col gap-5"
                    }
                  >
                    <div
                      key={index}
                      className="flex text-gray-500  "
                    >
                      <span className="text-[1.2rem]">{pro.icon}</span>
                      <span>{pro.name}</span>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>

        <hr className="bg-gray-400 h-0.5  " />
        <div className={clsx("",{
          "gap-1 flex flex-col ":!isTablet,
          "flex justify-between":isTablet
        })}>
          <span className="text-gray-500">Copyright © 2016-2023 EduQuiz</span>
          <div className={clsx("",{
            "flex flex-col gap-1":!isTablet,
            "flex gap-3":isTablet
          })}>
            <span className="text-gray-500">All Rights Reserved</span>
            <div className="text-blue-400">
              <span>Điều khoản sử dụng</span> | <span>Chính sách bảo mật</span>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default FooterLayout;
