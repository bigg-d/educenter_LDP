"use client";
import { useBreakpoints } from "@/@Common/hooks/useBreakpoints";
import Image from "next/image";
import React, { Component, ReactNode, useMemo } from "react";
import Slider from "react-slick";

export default function Feedback(): ReactNode {
  const { desktop, laptop, mobile, tablet } = useBreakpoints();

  const data: VerticalCarouselProps[] = useMemo(() => {
    const tabletData = [
      {
        data: [
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
        ],
        index: 0,
      },
      {
        data: [
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
        ],
        index: 1,
      },
      {
        data: [
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
        ],
        index: 2,
      },
    ];

    const concatData = [
      {
        data: [
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
          {
            avatar: "img",
            name: "Truong",
            feedback: [
              "Chúng tôi đánh giá Educenter là một nền tảng giáo dục trực tuyến uy tín, chất lượng cao, phù hợp với nhu cầu của doanh nghiệp. ",
              "Chúng tôi khuyến nghị các doanh nghiệp đang tìm kiếm các khóa học trực tuyến chất lượng cao cho doanh nghiệp",
            ],
          },
        ],
        index: 3,
      },
    ];
    return laptop ? tabletData.concat(concatData) : tabletData;
  }, []);
  return (
    <div className="flex flex-col gap-4  desktop:gap-24 w-[90%] mx-auto tablet:w-full">
      <div className=" text-center my-4 tablet:my-8 laptop:my-12 desktop:my-12 font-[500] desktop:text-sb36 text-sb22">
        Ấn tượng của khách hàng về EduCenter{" "}
      </div>
      {mobile ? (
        <FeedbackMobile data={data[0].data} index={0} />
      ) : (
        <div className="grid mx-auto desktop:w-4/5 desktop:grid-cols-4 gap-12 relative laptop:mb-24">
          {data.map((item: any, index: number) => (
            <VerticalCarousel key={index} index={index} {...item} />
          ))}

          <div
            className="absolute top-0 w-full aspect-[21/1]"
            style={{
              background:
                "linear-gradient(180deg, rgba(233,233,233,0.8393951330532212) 0%, rgba(255,255,255,0) 100%)",
            }}
          ></div>
          <div
            className="absolute bottom-0 w-full aspect-[21/1]"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(233,233,233,0.8393951330532212) 100%)",
            }}
          ></div>
        </div>
      )}
    </div>
  );
}

export interface VerticalCarouselProps {
  data: {
    avatar: string;
    name: string;
    feedback: string[];
  }[];
  index: number;
}
function VerticalCarousel(props: VerticalCarouselProps) {
  const { data, index } = props;

  //   const speeds = [2000, 3000, 2400, 2100];
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    // speed: speeds[index] + 1000,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    cssEase: "linear",
    pauseOnHover: false,
    beforeChange: function (currentSlide: any, nextSlide: any) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide: any) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div
            key={item.name}
            className="rounded-2xl bg-[#F6F7FF] flex flex-col gap-4 my-2 shadow-sm p-4"
          >
            <div className="flex items-center gap-4 my-4">
              <div className="relative aspect-square rounded-full overflow-hidden w-[56px]">
                <Image
                  src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1709251200&semt=ais"
                  alt="1"
                  fill
                />
              </div>

              <span className="font-[500] text-[1.2rem]">{item.name}</span>
            </div>
            <div className="flex flex-col gap-2 my-6q">
              {item.feedback.map((p) => (
                <p className="font-[400]" key={p}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export function FeedbackMobile(props: VerticalCarouselProps) {
  const { data, index } = props;
  return (
    <div className="flex flex-col gap-4">
      {data.map((item, index) => (
        <div
          key={item.name}
          className="rounded-2xl bg-[#F6F7FF] flex flex-col gap-4 my-2 shadow-sm p-4"
        >
          <div className="flex items-center gap-4 my-4">
            <div className="relative aspect-square rounded-full overflow-hidden w-[56px]">
              <Image
                src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1709251200&semt=ais"
                alt="1"
                fill
              />
            </div>

            <span className="font-[500] text-[1.2rem]">{item.name}</span>
          </div>
          <div className="flex flex-col gap-2 my-6q">
            {item.feedback.map((p) => (
              <p className="font-[400]" key={p}>
                {p}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
