"use client";

import Image from "next/image";
import { useContactForm } from "../hooks/useContactForm";
import { CoreAutocomplete, CoreInput } from "@/@Common/components/Input";
import { CircularProgress } from "@mui/material";

export default function ContactForm() {
  const {
    methodForm: {
      formState: { isSubmitting, isDirty },
      control,
    },
    onSubmit,
  } = useContactForm();
  return (
    <div className="bg-mainGradient flex items-center gap-4 desktop:py-24 py-12 px-[5%] laptop:px-0">
      <div className="flex flex-col gap-4 w-full laptop:w-[90%] desktop:w-4/5 mx-auto">
        <h3 className="font-[600] text-[2.4rem]  laptop:text-[3.75rem] text-white">
          Bắt đầu xây dựng
        </h3>
        <p className="laptop:text-[3.75rem] text-[2rem] text-white">
          tổ chức thông minh của bạn
        </p>
        <div className="grid laptop:grid-cols-3 grid-cols-1 laptop:divide-x">
          <div className="flex flex-col gap-4">
            <p className="text-[#F0C7FF] text-[1.5rem]">
              Liên hệ với EduCenter qua
            </p>
            <p className="text-white text-[1.2rem]">Số điện thoại</p>
            <p className="text-white font-[600] text-[2.4rem]">0394149966</p>
            <p className="text-white text-[1.2rem]">Chat với tư vấn viên</p>
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-white transition-all duration-100 hover:outline hover:outline-blue-300 p-2">
                <div className="relative aspect-square w-[45px]">
                  <Image alt="Educenter" src="/images/home/zalo.svg" fill />
                </div>
              </div>
              <div className="rounded-md bg-white transition-all duration-100 hover:outline hover:outline-blue-300 p-2">
                <div className="relative aspect-square w-[45px]">
                  <Image
                    alt="Educenter"
                    src="/images/home/messenger.svg"
                    fill
                  />
                </div>
              </div>
              <div className="rounded-md bg-white transition-all duration-100 hover:outline hover:outline-blue-300 p-2">
                <div className="relative aspect-square w-[45px]">
                  <Image alt="Educenter" src="/images/home/telegram.svg" fill />
                </div>
              </div>
            </div>
          </div>
          <form
            onSubmit={onSubmit}
            className="laptop:col-span-2 flex flex-wrap gap-4  laptop:pl-12"
          >
            {/* FORM */}
            <div className="flex laptop:flex-col gap-4 w-full laptop:py-0 py-12 flex-wrap desktop:w-4/5">
              <p className="text-[#F0C7FF] text-[1.5rem]">Đăng kí tư vấn</p>
              <div className="grid grid-cols-1 w-full laptop:grid-cols-2 gap-4">
                <CoreInput
                  labelClassName="text-white text-[1.4rem]"
                  control={control}
                  name="name"
                  label={"Họ và tên"}
                  placeholder="Nhập họ và tên"
                  required
                />
                <CoreInput
                  labelClassName="text-white text-[1.4rem]"
                  control={control}
                  name="email"
                  label={"Email"}
                  placeholder="Nhập Email"
                  required
                />
                <CoreInput
                  labelClassName="text-white text-[1.4rem]"
                  control={control}
                  name="phone"
                  label={"Số điện thoại"}
                  placeholder="Nhập số điện thoại"
                  required
                />
                <CoreAutocomplete
                  labelClassName="text-white text-[1.4rem]"
                  control={control}
                  options={[
                    {
                      label: "Option 1",
                      value: "VALUE",
                    },
                  ]}
                  returnValueType="enum"
                  name="phone"
                  label={"Số điện thoại"}
                  placeholder="Nhập số điện thoại"
                  required
                />
              </div>
            </div>
            <button
              className="rounded-md self-end laptop:my-7 w-full laptop:w-auto transition-all duration-200 font-bold hover:bg-mainBlue hover:text-white text-mainBlue bg-white px-6 py-4 border border-mainBlue"
              type="submit"
            >
              {isSubmitting ? <CircularProgress /> : "Đăng ký tư vấn"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
