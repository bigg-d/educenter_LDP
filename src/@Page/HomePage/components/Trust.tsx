import Image from "next/image";

export default function Trust() {
  return (
    <div className="flex flex-col w-[90%] gap-4 justify-between laptop:flex-row desktop:w-4/5 mx-auto laptop:gap-[1%]  my-12 laptop:my-24 items-end">
      <div className="desktop:w-[40%] laptop:w-1/2 flex flex-col items-center laptop:items-start gap-2">
        <p className="desktop:text-[32px] laptop:text-[28px] laptop:text-start text-center tablet:text-[28px] text-[18px] font-[600]">
          <span> Chúng tôi được tin tưởng bởi </span>
          <span className="text-mainBlue ">
            {" "}
            những công ty, trường học hàng đầu cả nước
          </span>
        </p>
      </div>

      <div className="laptop:w-max w-full flex flex-col gap-4 laptop:gap-0">
        <h3 className="font-[500] text-[22px] laptop:text-[26px] text-center laptop:text-start">
          KHÁCH HÀNG CỦA EDUCENTER
        </h3>
        <div className="flex flex-wrap gap-4 items-center w-full justify-between">
          <div className="relative hidden md:block aspect-[3/1] w-[100px]">
            <Image
              alt="EduCenter"
              title="EduCenter"
              src="/images/home/trust_1.svg"
              fill
            />
          </div>
          <div className="relative hidden md:block aspect-square w-[100px]">
            <Image
              alt="EduCenter"
              title="EduCenter"
              src="/images/home/trust_2.svg"
              fill
            />
          </div>
          <div className="relative  aspect-square w-[100px]">
            <Image
              alt="EduCenter"
              title="EduCenter"
              src="/images/home/trust_3.svg"
              fill
            />
          </div>
          <div className="relative aspect-square w-[100px]">
            <Image
              alt="EduCenter"
              title="EduCenter"
              src="/images/home/trust_4.svg"
              fill
            />
          </div>
          <div className="relative aspect-square w-[100px]">
            <Image
              alt="EduCenter"
              title="EduCenter"
              src="/images/home/trust_5.svg"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
}
