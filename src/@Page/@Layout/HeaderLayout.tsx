"use client";
import { Drawer, IconButton, useMediaQuery } from "@mui/material";
import { useState } from "react";
// import { IoIosSearch } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import useCoreSearchExamContext from "../core/useCoreSearchExamContext";
// import { tree } from "next/dist/build/templates/app-page";
import clsx from "clsx";
// import { useRouter } from "next/router";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeaderContainer from "./HeaderContainer";
const HeaderLayout = () => {
  const pathname = usePathname();
  const isTable = useMediaQuery("(min-width:788px)");
  const { renderSearchIcon, renderSearchBox } = useCoreSearchExamContext();
  const [openMenu, setOpenMenu] = useState(false);
  const navList = [
    { link: "/", name: "Trang Chủ" },
    { link: "/gioi-thieu-ve-educenter", name: "Giới Thiệu" },
    { link: "/dich-vu-cua-chung-toi", name: "Dịch Vụ" },
    { link: "/du-an-noi-bat-educenter", name: "Dự Án" },
    { link: "/tin-tuc", name: "Tin Tức" },
    { link: "/lien-he-voi-chung-toi", name: "Liên Hệ" },
  ];
  const renderNavList = () => {
    return (
      <nav className="flex justify-center ">
        <ul
          className={clsx("", {
            "w-[80%]  flex flex-col items-center mt-5": !isTable,
            "flex md:text-[0.9rem] md:gap-3 lg:gap-8": isTable,
          })}
        >
          {navList.map((item) => (
            <li key={item.link} className="my-3 ">
              <a href={item.link}>
                <span
                  className={clsx("font-bold", {
                    "bg-gradient-to-r from-[#3E60FE] to-[#D23CFF] text-transparent bg-clip-text":
                      item.link === pathname,
                    "text-black": item.link !== pathname,
                  })}
                >
                  {item.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  return (
    <HeaderContainer>
      <div className="sticky top-0 z-10 flex justify-center w-full bg-white shadow-md">
        <div className="w-[90%] h-20 flex items-center justify-between">
          <div className="flex gap-12 items-center">
            <Link href="/">
              <p className="text-[1.4rem] font-bold duration-300 transition-all hover:text-mainBlue">
                EduCenter
              </p>
            </Link>

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
    </HeaderContainer>
  );
};

export default HeaderLayout;
