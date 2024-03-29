"use client";

import { useBreakpoints } from "@/@Common/hooks/useBreakpoints";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import { CarouselPostDto } from "../../new.entities";
import Link from "next/link";

interface Props {
  list: CarouselPostDto[];
}
export default function NewCarousel(props: Props) {
  const { list } = props;
  const data = [
    {
      image: "",
      tag: ["Cẩm nang EduCenter"],
      title: "Liên thông đại học từ xa và những điều cần biết",
      description:
        "Bước từng bước vào thị trường giáo dục đang có sự chuyển hóa mạnh mẽ về công nghệ số, EduQuiz đã dần khẳng định được vị thế khi trở thành công cụ ôn thi hiệu quả được rất nhiều bạn sinh viên tin tưởng sử dụng để phục vụ cho việc học tập của",
    },
    {
      image: "",
      tag: ["Cẩm nang EduCenter"],
      title: "Liên thông đại học từ xa và những điều cần biết",
      description:
        "Bước từng bước vào thị trường giáo dục đang có sự chuyển hóa mạnh mẽ về công nghệ số, EduQuiz đã dần khẳng định được vị thế khi trở thành công cụ ôn thi hiệu quả được rất nhiều bạn sinh viên tin tưởng sử dụng để phục vụ cho việc học tập của",
    },
    {
      image: "",
      tag: ["Cẩm nang EduCenter"],
      title: "Liên thông đại học từ xa và những điều cần biết",
      description:
        "Bước từng bước vào thị trường giáo dục đang có sự chuyển hóa mạnh mẽ về công nghệ số, EduQuiz đã dần khẳng định được vị thế khi trở thành công cụ ôn thi hiệu quả được rất nhiều bạn sinh viên tin tưởng sử dụng để phục vụ cho việc học tập của",
    },
    {
      image: "",
      tag: ["Cẩm nang EduCenter"],
      title: "Liên thông đại học từ xa và những điều cần biết",
      description:
        "Bước từng bước vào thị trường giáo dục đang có sự chuyển hóa mạnh mẽ về công nghệ số, EduQuiz đã dần khẳng định được vị thế khi trở thành công cụ ôn thi hiệu quả được rất nhiều bạn sinh viên tin tưởng sử dụng để phục vụ cho việc học tập của",
    },
    {
      image: "",
      tag: ["Cẩm nang EduCenter"],
      title: "Liên thông đại học từ xa và những điều cần biết",
      description:
        "Bước từng bước vào thị trường giáo dục đang có sự chuyển hóa mạnh mẽ về công nghệ số, EduQuiz đã dần khẳng định được vị thế khi trở thành công cụ ôn thi hiệu quả được rất nhiều bạn sinh viên tin tưởng sử dụng để phục vụ cho việc học tập của",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const settings = {
    dots: false,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    autoPlay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: function (currentSlide: number) {
      setCurrentIndex(currentSlide);
    },
    beforeChange: function (currentSlide: any, nextSlide: any) {
      setCurrentIndex(nextSlide);
    },
  };

  const { laptop } = useBreakpoints();

  return (
    <div
      className="slider-container [&>.slick-slider>button.slick-arrow::before]:shadow-2xl"
      id="phong-carousel"
    >
      <Slider {...settings}>
        {list.map((item, index) => (
          <div key={item.title} className="relative">
            <div className="aspect-[1.604/1] w-full relative laptop:w-[70%]">
              <Image
                src={item.featuredImage.node.sourceUrl}
                title={item.title}
                alt={item.title}
                fill
              />
            </div>
            <div
              className={clsx(
                "laptop:absolute z-[1] laptop:w-1/3 laptop:rounded-[2.4rem] laptop:-translate-y-[50%] laptop:top-[50%] laptop:right-0 bg-white",
                {
                  "animate-zoomIn": currentIndex === index && laptop,
                  "animate-zoomOut": currentIndex !== index && laptop,
                }
              )}
            >
              <div className=" flex flex-col gap-4 p-8">
                <div className="flex flex-wrap items-center gap-2 ">
                  {/* {item.tag.map((tag) => (
                    <div
                      className="rounded-[2rem] bg-[#F6F9FF] px-6 py-2 uppercase font-[400]"
                      key={tag}
                    >
                      {tag}
                    </div>
                  ))} */}
                </div>

                <h3 className="text-sb22">{item.title}</h3>
                {/* <p className="text-m14 text-[#787A8C] line-clamp-3">
                  {item.description}
                </p> */}
                <div
                  className="text-m14 laptop:text-m18 laptop:text-[#787A8C]  text-[#787A8C] line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: item.excerpt }}
                />
                <button className="btn-gradient w-max">
                  <Link href={`/tin-tuc/${item.slug}`}>Đọc thêm</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
