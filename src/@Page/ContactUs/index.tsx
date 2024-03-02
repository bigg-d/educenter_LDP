import Image from "next/image";
import Layout from "../@Layout";
import ContactFormV2 from "./components/ContactFormV2";

export default function ContactUs() {
  return (
    <Layout>
      <StaticUI />

      <ContactFormV2 />
    </Layout>
  );
}

function StaticUI() {
  return (
    <>
      <div className="flex flex-col gap-4 laptop:gap-8 desktop:gap-12 my-6 laptop:my-8 desktop:my-12">
        <h1 className="text-transparent w-max mx-auto bg-gradient-to-r from-mainViolet to-mainBlue bg-clip-text text-sb36">
          Liên hệ với chúng tôi
        </h1>

        <p className="text-m18 w-full laptop:w-1/2 text-center mx-auto">
          Việc liên lạc với EduQuiz chưa bao giờ dễ dàng hơn thế. Gọi cho chúng
          tôi, sử dụng tiện ích trò chuyện trực tiếp hoặc email của chúng tôi và
          chúng tôi sẽ liên hệ lại với bạn sớm nhất có thể!
        </p>
      </div>

      <div className="relative w-full bg-mainGradient aspect-[18/1]">
        <div className="absolute w-full h-full rounded-bl-[80%] rounded-br-[80%] bg-white">
          <h3 className="text-sb22 w-max mx-auto">Liên hệ với EduCenter</h3>
        </div>
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-3 items-center bg-mainGradient p-[5%]">
        <div className="flex flex-col  gap-8 items-center">
          <p className="text-white text-m18">Số điện thoại</p>
          <p className="text-white text-m22">034231218512</p>
        </div>
        <div className="flex flex-col  gap-8 items-center">
          <p className="text-white text-m18">Liên hệ với tư vấn viên</p>
          <div className="flex items-center gap-4">
            <div className="rounded-md bg-white transition-all duration-100 hover:outline hover:outline-blue-300 p-2">
              <div className="relative aspect-square w-[45px]">
                <Image alt="Educenter" src="/images/home/zalo.svg" fill />
              </div>
            </div>
            <div className="rounded-md bg-white transition-all duration-100 hover:outline hover:outline-blue-300 p-2">
              <div className="relative aspect-square w-[45px]">
                <Image alt="Educenter" src="/images/home/messenger.svg" fill />
              </div>
            </div>
            <div className="rounded-md bg-white transition-all duration-100 hover:outline hover:outline-blue-300 p-2">
              <div className="relative aspect-square w-[45px]">
                <Image alt="Educenter" src="/images/home/telegram.svg" fill />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  gap-8 items-center">
          <p className="text-white text-m18">Email</p>
          <p className="text-white text-m22">suport@eduquiz.vn</p>
        </div>
      </div>
      <div className="relative w-full bg-mainGradient aspect-[18/1]">
        <div className="absolute w-full h-full rounded-tl-[80%] rounded-tr-[80%] bg-[#F6F9FF]"></div>
      </div>
    </>
  );
}
