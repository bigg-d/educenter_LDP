"use client";
import { useBreakpoints } from "@/@Common/hooks/useBreakpoints";
import { Fade } from "react-awesome-reveal";

const Process = () => {
  const { mobile } = useBreakpoints();
  const steps = [];
  return (
    <section className="px-[1.25rem] fhd:px-[11.25rem] laptop:px-[3.75rem] tablet:p-[2rem] pt-[1.75rem] fhd:pt-[6.25rem]  fhd:pb-[8.75rem] laptop:pb-[6.25rem]">
      <h2 className="text-center text-sb18 tablet:text-sb28 fhd:text-sb36 mb-[2.5rem] fhd:mb-[5.25rem]">
        Quy trình tạo ra sản phẩm
      </h2>
      <div className="hidden laptop:grid grid-cols-1 divide-y text-white">
        <ul className="grid grid-cols-5 divide-x">
          <li className="flex flex-col justify-between pt-6 pb-3 px-2 ">
            <h3 className="text-sb18 text-black text-center mb-[1.75rem]">
              Giai đoạn 1
            </h3>
              <Fade direction="down"   className="bg-[#3E65FE] text-sb18 laptop:px-5 laptop:py-3  rounded-xl">
                {/* <div className="bg-[#3E65FE] text-sb18 laptop:px-5 laptop:py-3  rounded-xl"> */}
                  Nghiên cứu dự án
                {/* </div> */}
              </Fade>
          </li>
          <li className="pt-6 pb-3 px-2">
            <h3 className="text-sb18 text-black text-center mb-[1.75rem]">
              Giai đoạn 2
            </h3>
          </li>
          <li className="pt-6 pb-3 px-2">
            <h3 className="text-sb18 text-black text-center mb-[1.75rem]">
              Giai đoạn 3
            </h3>
          </li>
          <li className="pt-6 pb-3 px-2">
            <h3 className="text-sb18 text-black text-center mb-[1.75rem]">
              Giai đoạn 4
            </h3>
          </li>
          <li className="pt-6 pb-3 px-2">
            <h3 className="text-sb18 text-black text-center mb-[1.75rem]">
              Giai đoạn 5
            </h3>
            <Fade direction="down"   className="bg-mainGradient text-sb18 laptop:px-5 laptop:py-3 rounded-xl">
              Hoàn thiện và đánh giá
            </Fade>
          </li>
        </ul>
        <ul className="grid grid-cols-5 divide-x">
          <li className="pt-6 pb-3 px-2"></li>
          <li className="pt-6 pb-3 px-2">
            <Fade direction="down"   duration={1400} className="bg-[#6DCA4D] text-sb18 laptop:px-5 laptop:py-3 rounded-xl">
              Tìm giải pháp
            </Fade>
          </li>
          <li className="pt-6 pb-3 px-2"></li>
          <li className="pt-6 pb-3 px-2">
            <Fade direction="down"   duration={1400} className="bg-[#8C7FFC] text-sb18 laptop:px-5 laptop:py-3 rounded-xl">
              Thiết kế sản phẩm
            </Fade>
          </li>
          <li className="pt-6 pb-3 px-2"></li>
        </ul>
        <ul className="grid grid-cols-5 divide-x">
          <li className="pt-6 pb-3 px-2"></li>
          <li className="pt-6 pb-3 px-2"></li>
          <li className="pt-6 pb-3 px-2">
            <Fade direction="down"   duration={2000} className="bg-[#F8C238] text-sb18 laptop:px-5 laptop:py-3 rounded-xl">
              Tư vấn giải pháp
            </Fade>
          </li>
          <li className="pt-6 pb-3 px-2"></li>
          <li className="pt-6 pb-3 px-2"></li>
        </ul>
      </div>

      <ul className="laptop:hidden grid grid-cols-1 divide-y text-white">
        <li className="w-full flex items-center divide-x">
          <h3 className="w-1/4 text-sb12 tablet:text-m18 text-black text-center ">
            {mobile ? "GD" : "Giai đoạn"} 1
          </h3>
          <div className="w-full p-3 tablet:p-4">
            <Fade direction="right"   className="bg-[#3E65FE] text-[0.875rem] tablet:text-sb18 p-2 tablet:p-5  rounded-xl">
              Nghiên cứu dự án
            </Fade>
          </div>
        </li>
        <li className="w-full flex items-center divide-x">
          <h3 className="w-1/4 text-sb12 tablet:text-m18 text-black text-center ">
            {mobile ? "GD" : "Giai đoạn"} 2
          </h3>
          <div className="w-full p-3 tablet:p-4">
            <Fade direction="right"   className="bg-[#6DCA4D] text-[0.875rem] tablet:text-sb18 p-2 tablet:p-5  rounded-xl">
              Tìm giải pháp
            </Fade>
          </div>
        </li>
        <li className="w-full flex items-center divide-x">
          <h3 className="w-1/4 text-sb12 tablet:text-m18 text-black text-center ">
            {mobile ? "GD" : "Giai đoạn"} 3
          </h3>
          <div className="w-full p-3 tablet:p-4">
            <Fade direction="right"   className="bg-[#F8C238] text-[0.875rem] tablet:text-sb18 p-2 tablet:p-5  rounded-xl">
              Tư vấn giải pháp
            </Fade>
          </div>
        </li>
        <li className="w-full flex items-center divide-x">
          <h3 className="w-1/4 text-sb12 tablet:text-m18 text-black text-center ">
            {mobile ? "GD" : "Giai đoạn"} 4
          </h3>
          <div className="w-full p-3 tablet:p-4">
            <Fade direction="right"   className="bg-[#8C7FFC] text-[0.875rem] tablet:text-sb18 p-2 tablet:p-5  rounded-xl">
              Thiết kế sản phẩm và giải pháp
            </Fade>
          </div>
        </li>
        <li className="w-full flex items-center divide-x">
          <h3 className="w-1/4 text-sb12 tablet:text-m18 text-black text-center ">
            {mobile ? "GD" : "Giai đoạn"} 5
          </h3>
          <div className="w-full p-3 tablet:p-4">
            <Fade direction="right"   className="bg-mainGradient text-[0.875rem] tablet:text-sb18 p-2 tablet:p-5  rounded-xl">
              Hoàn thiện và nhận đánh giá
            </Fade>
          </div>
        </li>
      </ul>
    </section>
  );
};
export default Process;
