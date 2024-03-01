import clsx from "clsx";
import { MdCorporateFare } from "react-icons/md";
import Image from "next/image"
import { useBreakpoints } from "@/@Common/hooks/useBreakpoints"
const Intro = ()=>{
  const {tablet,mobile,laptop} = useBreakpoints();
    
    return (
        <div className="relative">
        <div className={clsx("relative px-6 pt-[30px] z-[99]",{"px-[3.75rem]": tablet})}>
          <h2 className={clsx("font-semibold",{"text-[1.5rem]":mobile},{"text-[2.5rem]":tablet})}>Dịch vụ công nghệ về</h2>
          <h2 className={clsx(" font-bold bg-gradient-to-r from-[#3E60FE] to-[#D23CFF] text-transparent bg-clip-text",{"text-[40px]": mobile}, {"w-[70%] text-[3.25rem]":tablet})}>
            đào tạo cho doanh nghiệp
          </h2>
        </div>

        <div className={clsx("relative pb-6",{"top-[-70px]":tablet})}>
          <div className={clsx("absolute top-0  right-0 h-full bg-[#F6F9FF]",{"w-[70%]":mobile},{"w-[80%] py-6":tablet})}></div>
          <div className={clsx("relative w-[60%] aspect-[222/293] z-[9]",{"top-[1.125rem]":mobile}, {"top-[7.5rem]":tablet})}>
            <Image src="/Rectangle 34624186.png" layout="fill" alt="" />
          </div>
          <div className={clsx("absolute w-[60%] right-0 aspect-[65/91]",{"top-[3.125rem]":mobile}, {"top-[18%]":tablet})}>
            <Image src="/img_2.png" layout="fill" alt="" />
          </div>

          <div className={clsx("relative px-6",{" mt-[80px]": mobile}, {"w-[80%] mt-[320px] px-[3.75rem]":tablet})}>
            <p className={clsx("m-auto",{"w-[90%] text-center text-sb12": mobile},{"text-left text-m18":tablet})}>
              EduCenter cung cấp các giải pháp công nghệ về giáo dục và đào tạo.
              Giúp hàng ngàn doanh nghiệp xây dựng tổ chức thông minh.
            </p>
            <div className={clsx("flex mt-4",{"justify-evenly": mobile}, {"justify-around":tablet})}>
              <button className={clsx("text-white bg-gradient-to-r from-[#3E60FE] to-[#D23CFF] rounded-[40px] px-4 py-2 hover:scale-105 hover:bg-[#5278FF]",{"text-[12px] font-semibold": mobile},{"text-[20px] w-[200px] py-5 px":tablet})}>
                Liên hệ ngay
              </button>
              <button className={clsx(" border rounded-[40px]  px-4 py-2 lg:py-3 lg:px-4 hover:scale-105 hover:bg-[#5278FF]",{"text-[12px] font-semibold": mobile},{"text-[20px] w-[200px] py-5 px":tablet})}>
                Tìm hiểu thêm
              </button>
            </div>
          </div>

          <div className="absolute w-full h-full top-0   z-[9]">
            <div className={clsx("absolute flex items-center bg-white px-[0.625rem] drop-shadow-lg text-center",{"text-[0.625rem] left-[20%] top-[12%] rounded-2xl py-1":mobile},{"top-[20%] left-[28%] rounded-3xl p-3":tablet})}>
              <MdCorporateFare className="text-[#3E60FE]"/>
              <p className={clsx("bg-gradient-to-r from-[#3E60FE] to-[#D23CFF] text-transparent bg-clip-text font-semibold",{"ml-2":mobile},{"text-[0.875rem] ml-3":tablet})}>Tổ chức giáo dục thông minh</p> 
            </div>
            <div className={clsx("absolute flex items-center bg-white px-[0.625rem] drop-shadow-lg text-center",{"text-[0.625rem] left-[50%] top-[22%] rounded-2xl py-1":mobile},{"top-[32%] left-[50%] rounded-3xl p-3":tablet})}>
              <MdCorporateFare className="text-[#3E60FE]"/>
              <p className={clsx("bg-gradient-to-r from-[#3E60FE] to-[#D23CFF] text-transparent bg-clip-text font-semibold",{"ml-2":mobile},{"text-[0.875rem] ml-3":tablet})}>Công nghệ kĩ thuật hiện đại </p> 
            </div>
            <div className={clsx("absolute flex items-center bg-white px-[0.625rem] drop-shadow-lg text-center",{"text-[0.625rem] left-[26%] top-[42%] rounded-2xl py-1":mobile},{"top-[56%] left-[34%] rounded-3xl p-3":tablet})}>
              <MdCorporateFare className="text-[#3E60FE]"/>
              <p className={clsx("bg-gradient-to-r from-[#3E60FE] to-[#D23CFF] text-transparent bg-clip-text font-semibold",{"ml-2":mobile},{"text-[0.875rem] ml-3":tablet})}>Tổ chức giáo dục thông minh</p> 
            </div>


            {/* <div className={clsx("absolute flex items-center bg-white rounded-2xl px-[0.625rem] py-1 drop-shadow-lg text-center",{"text-[0.625rem] left-[50%] top-[22%]":mobile})}>
              <MdCorporateFare className="text-[#3E60FE]"/>
              <p className={clsx("bg-gradient-to-r from-[#3E60FE] to-[#D23CFF] text-transparent bg-clip-text",{"px-1":mobile})}>Công nghệ kĩ thuật hiện đại </p> 
            </div>
            <div className={clsx("absolute flex items-center bg-white rounded-2xl px-[0.625rem] py-1 drop-shadow-lg text-center",{"text-[0.625rem] left-[26%] top-[42%]":mobile})}>
              <MdCorporateFare className="text-[#3E60FE]"/>
              <p className={clsx("bg-gradient-to-r from-[#3E60FE] to-[#D23CFF] text-transparent bg-clip-text",{"px-1":mobile})}>Dịch vụ đa dạng, chất lượng cao</p> 
            </div> */}
          </div>
        </div>
        <div></div>
      </div>
    )
}
export default Intro