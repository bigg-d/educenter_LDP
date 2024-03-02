import NewCarousel from "./NewsCarousel";

export default async function SliderNews() {
  return (
    <div className="rounded-[3rem] bg-mainGradient p-[4px] desktop:w-[90%] mx-auto my-12">
      <div className="bg-white rounded-[3rem] flex items-center justify-center">
        <div className="w-[90%] relative desktop:my-16 laptop:my-12 bg-[#ECEEFF] p-12 rounded-2xl">
          <NewCarousel />
        </div>
      </div>
    </div>
  );
}
