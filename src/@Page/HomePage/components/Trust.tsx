import Image from "next/image";

export default function Trust() {
  return (
    <div className="flex flex-col w-[90%] gap-4 laptop:flex-row desktop:w-4/5 mx-auto laptop:gap-[5%] my-12 laptop:my-24 items-end">
      <div className="desktop:w-[45%] laptop:w-1/2 flex flex-col items-center laptop:items-start gap-2">
        <p className="desktop:text-[32px] laptop:text-[28px] laptop:text-start text-center  text-[18px] font-[600]">
          Chúng tôi được tin tưởng bởi{" "}
        </p>
        <p className="laptop:text-[32px] text-[18px] font-[600] hidden">
          Chúng tôi được tin tưởng bởi những công ty
        </p>

        <p className="desktop:text-[32px] laptop:text-[28px] laptop:text-start font-[600]  text-mainBlue text-[18px] text-center w-4/5 laptop:w-full ">
          những công ty, trường học hàng đầu cả nước
        </p>
      </div>

      <div className="w-full flex flex-col gap-4 laptop:gap-0">
        <h3 className="font-[500] laptop:text-[26px] text-center laptop:text-start">
          KHÁCH HÀNG CỦA EDUCENTER
        </h3>
        <div className="flex gap-4 items-center w-full justify-between">
          <div className="relative aspect-[3/1] w-[100px]">
            <Image
              alt="EduCenter"
              title="EduCenter"
              src="/images/home/trust_1.svg"
              fill
            />
          </div>
          <div className="relative aspect-square w-[100px]">
            <Image
              alt="EduCenter"
              title="EduCenter"
              src="/images/home/trust_2.svg"
              fill
            />
          </div>
          <div className="relative aspect-square w-[100px]">
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
