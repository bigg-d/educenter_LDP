import { useBreakpoints } from "@/@Common/hooks/useBreakpoints";

const Process = () => {
  const {mobile} = useBreakpoints();
  const process = Array(15).fill("");
  const steps = [];
  return (
    <section className="px-[1.25rem] desktop:px-[11.25rem] tablet:p-[2rem] pt-[1.75rem] desktop:pt-[6.25rem]  desktop:pb-[8.75rem]">
      <h2 className="text-center text-sb18 tablet:text-sb28 desktop:text-sb36 mb-[2.5rem] desktop:mb-[5.25rem]">
        Quy trình tạo ra sản phẩm
      </h2>
      <div className="hidden desktop:grid grid-cols-1 divide-y text-white">
        <ul className="grid grid-cols-5 divide-x">
          <li className="pt-6 pb-3 px-2 ">
            <h3 className="text-sb18 text-black text-center mb-[1.75rem]">
              Giai đoạn 1
            </h3>
            <div className="bg-[#3E65FE] text-sb18 p-5 rounded-xl">
              Nghiên cứu dự án
            </div>
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
            <div className="bg-mainGradient text-sb18 p-5 rounded-xl">
              Hoàn thiện và đánh giá
            </div>
          </li>
        </ul>
        <ul className="grid grid-cols-5 divide-x">
          <li className="pt-6 pb-3 px-2"></li>
          <li className="pt-6 pb-3 px-2">
            <div className="bg-[#6DCA4D] text-sb18 p-5 rounded-xl">
              Tìm giải pháp
            </div>
          </li>
          <li className="pt-6 pb-3 px-2"></li>
          <li className="pt-6 pb-3 px-2">
            <div className="bg-[#8C7FFC] text-sb18 p-5 rounded-xl">
              Thiết kế sản phẩm
            </div>
          </li>
          <li className="pt-6 pb-3 px-2"></li>
        </ul>
        <ul className="grid grid-cols-5 divide-x">
          <li className="pt-6 pb-3 px-2"></li>
          <li className="pt-6 pb-3 px-2"></li>
          <li className="pt-6 pb-3 px-2">
            <div className="bg-[#F8C238] text-sb18 p-5 rounded-xl">
              Tư vấn giải pháp
            </div>
          </li>
          <li className="pt-6 pb-3 px-2"></li>
          <li className="pt-6 pb-3 px-2"></li>
        </ul>
      </div>

      <ul className="desktop:hidden grid grid-cols-1 divide-y text-white">
        <li className="w-full flex items-center divide-x">
            <h3 className="w-1/4 text-sb12 tablet:text-m18 text-black text-center ">
              {mobile ? "GD": "Giai đoạn"} 1
            </h3>
            <div className="w-full p-3 tablet:p-4">
                <h3 className="bg-[#3E65FE] text-[0.875rem] tablet:text-sb18 p-2 tablet:p-5  rounded-xl">
                Nghiên cứu dự án
                </h3>
            </div>
        </li>
        <li className="w-full flex items-center divide-x">
            <h3 className="w-1/4 text-sb12 tablet:text-m18 text-black text-center ">
              {mobile ? "GD": "Giai đoạn"} 2
            </h3>
            <div className="w-full p-3 tablet:p-4">
                <h3 className="bg-[#6DCA4D] text-[0.875rem] tablet:text-sb18 p-2 tablet:p-5  rounded-xl">
                Tìm giải pháp
                </h3>
            </div>
        </li>
        <li className="w-full flex items-center divide-x">
            <h3 className="w-1/4 text-sb12 tablet:text-m18 text-black text-center ">
              {mobile ? "GD": "Giai đoạn"} 3
            </h3>
            <div className="w-full p-3 tablet:p-4">
                <h3 className="bg-[#F8C238] text-[0.875rem] tablet:text-sb18 p-2 tablet:p-5  rounded-xl">
                Tư vấn giải pháp
                </h3>
            </div>
        </li>
        <li className="w-full flex items-center divide-x">
            <h3 className="w-1/4 text-sb12 tablet:text-m18 text-black text-center ">
              {mobile ? "GD": "Giai đoạn"} 4
            </h3>
            <div className="w-full p-3 tablet:p-4">
                <h3 className="bg-[#8C7FFC] text-[0.875rem] tablet:text-sb18 p-2 tablet:p-5  rounded-xl">
                Thiết kế sản phẩm và giải pháp
                </h3>
            </div>
        </li>
        <li className="w-full flex items-center divide-x">
            <h3 className="w-1/4 text-sb12 tablet:text-m18 text-black text-center ">
              {mobile ? "GD": "Giai đoạn"} 5
            </h3>
            <div className="w-full p-3 tablet:p-4">
                <h3 className="bg-mainGradient text-[0.875rem] tablet:text-sb18 p-2 tablet:p-5  rounded-xl">
                Hoàn thiện và nhận đánh giá
                </h3>
            </div>
        </li>
      </ul>
    </section>
  );
};
export default Process;
