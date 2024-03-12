import { getCarouselNew } from "../../services/blogService";
import NewCarousel from "./NewsCarousel";

export default async function SliderNews() {
  const data = await getCarouselNew();

  return (
    <div className="w-full laptop:rounded-[3rem] laptop:bg-mainGradient laptop:p-[4px] laptop:w-[90%] mx-auto my-12">
      <div className="bg-white rounded-[3rem] flex items-center justify-center">
        <div className="w-full laptop:w-[90%] relative desktop:my-16 laptop:my-12 bg-[#ECEEFF] p-6 laptop:p-12 rounded-2xl">
          <NewCarousel list={data} />
        </div>
      </div>
    </div>
  );
}