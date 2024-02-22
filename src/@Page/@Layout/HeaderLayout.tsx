"use client";
import { Drawer, IconButton, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import useCoreSearchExamContext from "../core/useCoreSearchExamContext";
import { tree } from "next/dist/build/templates/app-page";
import clsx from "clsx";
import { useRouter } from "next/router";
import { usePathname } from 'next/navigation'
const HeaderLayout = () => {
  const pathname = usePathname()
  const isTable = useMediaQuery("(min-width:768px)");
  const { renderSearchIcon, renderSearchBox } = useCoreSearchExamContext();
  const [openMenu, setOpenMenu] = useState(false);
  const navList = [
    { link: "/", name: "Trang Chủ" },
    { link: "/gioithieu", name: "Giới Thiệu" },
    { link: "/dichvu", name: "Dịch Vụ" },
    { link: "/duan", name: "Dự Án" },
    { link: "/tintuc", name: "Tin Tức" },
    { link: "/lienhe", name: "Liên Hệ" },
  ];
  const renderNavList = () => {
    return (
      <nav className="flex justify-center">
        <ul
          className={clsx("", {
            "w-[80%]  flex flex-col items-center mt-5": !isTable,
            "flex md:text-[0.9rem] md:gap-3 lg:gap-8": isTable,
          })}
        >
          {navList.map((item) => (
            <li key={item.link} className="my-3 ">
              <a href={item.link}>
                <span className={clsx(
                    "font-bold",
                    {
                      "bg-gradient-to-r from-[#3E60FE] to-[#D23CFF] text-transparent bg-clip-text": item.link === pathname,
                      "text-black": item.link !== pathname,
                    }
                  )}>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  return (
    <div className="w-full bg-white flex justify-center">
      <div className="w-[90%] h-20 flex items-center justify-between">
        <div className="flex gap-12 ">
          <span className="text-[1.4rem] font-bold">EduCenter</span>
          {isTable && (
            <div className="lg:max-w-[400px] min-w-[240px]">
              <div>{renderSearchBox()}</div>
            </div>
          )}
        </div>
        {!isTable && (
          <div>
            {renderSearchIcon()}
            <IconButton onClick={() => setOpenMenu(true)}>
              <IoIosMenu className="text-[2.1rem]" />
            </IconButton>
          </div>
        )}

        {isTable && (
          <div className="flex items-center justify-between">
            <div>{renderNavList()}</div>
          </div>
        )}

        {!isTable && (
          <>
            <Drawer
              anchor="left"
              open={openMenu}
              onClose={() => setOpenMenu(false)}
              PaperProps={{ style: { width: 280 } }}
            >
              {renderNavList()}
            </Drawer>
          </>
        )}
      </div>
    </div>
  );
};

export default HeaderLayout;
