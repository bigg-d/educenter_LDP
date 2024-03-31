"use client";

import clsx from "clsx";
import { useState } from "react";

export default function Categories() {
  const [active, setActive] = useState("");
  const categories = [
    {
      text: "Tất cả",
      value: "",
    },
    {
      text: "Cẩm nang Educenter",
      value: "a1",
    },
    {
      text: "Hướng dẫn sử dụng",
      value: "guide",
    },
    {
      text: "Tài liệu",
      value: "document",
    },
    {
      text: "Công cụ",
      value: "tool",
    },
    {
      text: "Hoạt động cộng đồng",
      value: "social",
    },
  ];
  return (
    <div className="hidden laptop:flex shadow-sm top-[-30px] absolute bg-white px-4 py-3 rounded-[1000px]  translate-x-[-50%] left-[50%] gap-4 items-center">
      {categories.map((i) => (
        <span
          key={i.text}
          onClick={() => setActive(i.value)}
          className={clsx("text-sb18  w-max  cursor-pointer", {
            "text-transparent bg-gradient-to-r from-mainViolet to-mainBlue bg-clip-text":
              active === i.value,
            "text-[#4B4C58] hover:text-transparent hover:bg-gradient-to-r hover:from-mainViolet hover:to-mainBlue bg-clip-text":
              active !== i.value,
          })}
        >
          {i.text}
        </span>
      ))}
    </div>
  );
}
