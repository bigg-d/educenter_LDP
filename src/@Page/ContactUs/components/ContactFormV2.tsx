"use client";

import { CoreAutocomplete, CoreInput } from "@/@Common/components/Input";
import { useContactForm } from "@/@Page/HomePage/hooks/useContactForm";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function ContactFormV2() {
  return (
    <div className=" bg-[#F6F9FF] w-full desktop:pb-24 pb-12 px-4">
      <div className="flex flex-col gap-4 laptop:gap-8 desktop:gap-12 mx-auto desktop:w-3/5">
        <h2 className="text-sb22 w-max mx-auto">Đăng kí tư vấn miễn phí</h2>

        <div className="shadow-lg rounded-[2rem] p-[2rem] grid grid-cols-1 laptop:grid-cols-2 divide-y laptop:divide-y-0 laptop:divide-x bg-white">
          <div className="flex flex-wrap ">
            <ContactText1 />

            <div className="h-[1px] my-2 bg-gray-200 w-full"></div>

            <ContactText2 />
            <ContactBG />
          </div>

          <CForm />
        </div>
      </div>
    </div>
  );
}

function ContactText1() {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-m18">
        Chúng tôi đang giúp cho 150+ khách hàng và đối tác phát triển dịch vụ
        giáo dục họ mong muốn.
      </p>
      <div>
        <p className="font-bold text-[2rem] text-transparent bg-gradient-to-r from-mainViolet to-mainBlue bg-clip-text">
          Hãy để chúng tôi tư vấn giải pháp
        </p>
        <p className="text-transparent text-[2rem] bg-gradient-to-r from-mainViolet to-mainBlue bg-clip-text">
          cho riêng doanh nghiệp bạn
        </p>
      </div>
    </div>
  );
}

function ContactText2() {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-m16 text-[#787A8C]">Văn phòng</p>
      <p className="text-sb-16">
        Tầng 5, số 33 , phố Trung Kính - P. Trung Hoà - Q. Cầu Giấy
      </p>
      <p className="text-[#787A8C]">Nghe cộng đồng nói về chúng tôi</p>

      <div className="flex items-center gap-4">
        <div className="rounded-md border p-2">
          <FaFacebook className="text-blue-500 text-[2rem]" />
        </div>
        <div className="rounded-md border p-2">
          <FaTiktok className=" text-[2rem]" />
        </div>
        <div className="rounded-md border p-2">
          <FaInstagram className="text-orange-500 text-[2rem]" />
        </div>
        <div className="rounded-md border p-2">
          <FaYoutube className="text-red-500 text-[2rem]" />
        </div>
      </div>
    </div>
  );
}

function CForm() {
  const {
    methodForm: { control },
    onSubmit,
  } = useContactForm();
  return (
    <form className="laptop:p-6 my-6 pt-4" onSubmit={onSubmit}>
      {/* FORM */}
      <div className="grid grid-cols-1 gap-4">
        <CoreInput
          labelClassName=" text-[1.4rem]"
          control={control}
          name="name"
          label={"Họ và tên"}
          placeholder="Nhập họ và tên"
        />
        <CoreInput
          labelClassName=" text-[1.4rem]"
          control={control}
          name="email"
          label={"Email"}
          placeholder="Nhập Email"
        />
        <CoreInput
          labelClassName=" text-[1.4rem]"
          control={control}
          name="phone"
          label={"Số điện thoại"}
          placeholder="Nhập số điện thoại"
        />
        <CoreAutocomplete
          labelClassName=" text-[1.4rem]"
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
        />
        <button className="btn-gradient" type="submit">
          Đăng ký tư vấn
        </button>
      </div>
    </form>
  );
}

function ContactBG() {
  return (
    <div className="relative w-full aspect-[2/1] laptop:aspect-[6/1] ">
      <div className="absolute z-[2] aspect-square w-1/2 right-0  laptop:w-1/3 laptop:right-[20%] bottom-0">
        <Image alt="1" src="/images/img_support.svg" fill />
      </div>
      <div className="w-full h-full z-[1] absolute overflow-hidden">
        <div className="h-full w-[200%] -left-[60%] -bottom-[60%] laptop:w-[200%] laptop:h-[200%] absolute laptop:-bottom-[100%] laptop:-left-[110%] rotate-[25deg]  z-[1] aspect-[12/1] bg-mainGradient"></div>
      </div>
    </div>
  );
}
