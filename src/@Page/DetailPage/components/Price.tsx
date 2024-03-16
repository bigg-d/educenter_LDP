import clsx from "clsx";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
const Price = () => {
  const options = [
    {
      name: "Cơ bản",
      price: "10 Tr",
      detail:"Phù hợp với doanh nghiệp 1-10 người",
      feature: [
        "Cung cấp bài kiểm tra",
        "Không giới hạn sản phẩm thiết kế",
        "Tư vấn giờ hành chính",
        "Dung lượng 1TB",
        "Công nghệ cao ",
        "Công nghệ cao ",
      ],
    },
    {
      isPopular: true,
      name: "Cơ bản",
      price: "20 Tr",
      detail: "Phù hợp với doanh nghiệp 10-50 người",
      feature: [
        "Cung cấp bài kiểm tra",
        "Không giới hạn sản phẩm thiết kế",
        "Tư vấn giờ hành chính",
        "Dung lượng 1TB",
        "Công nghệ cao ",
        "Công nghệ cao ",
      ],
    },
    {
      name: "Nâng cao",
      price: "Liên hệ",
      detail: "Phù hợp với doanh nghiệp trên 100 người",
      feature: [
        "Cung cấp bài kiểm tra",
        "Không giới hạn sản phẩm thiết kế",
        "Tư vấn giờ hành chính",
        "Dung lượng 1TB",
        "Công nghệ cao ",
        "Công nghệ cao ",
      ],
    },
  ];
  return (
    <section className="px-[1.25rem] desktop:px-[12.5%] laptop:px-[2.5rem] tablet:px-[2rem] py-[2.5rem] desktop:py-[5rem] tablet:py-[3.75rem] bg-[#F6F9FF]">
      <h2 className=" text-center text-sb18 desktop:text-[2.5rem] tablet:text-sb28 mb-[2.5rem] laptop:mb-[13.125rem] tablet:mb-[3.75rem]">
        Báo giá sản phẩm
      </h2>
      <div className="flex tablet:justify-between flex-wrap desktop:gap-[1.875rem] laptop:gap-[0.75rem]  desktop:[&>*]:-mx-10 desktop:[&>*]:px-20 laptop:[&>*]:-mx-1 laptop:[&>*]:px-[1.5rem] rounded-[2.25rem] laptop:bg-white">
        {options.map((option: any, index) => {
          return (
            <div
              key={index}
              className={clsx(
                " laptop:w-1/3 h-max p-[1.25rem] desktop:p-[3rem] rounded-[2.25rem] flex flex-col justify-center",
                {
                  "laptop:-mt-[10rem] tablet:p-[2.5rem] bg-mainGradient text-white order-1 laptop:order-2 w-full shadow-lg": index == 1,
                  "text-[#848199] order-2 bg-white tablet:px-[1.75rem] tablet:py-[2.25rem] w-full tablet:w-[47%]": index !== 1,
                  "order-3": index == 2,
                }
              )}
            >
              <div className="grid laptop:grid-cols-1 tablet:grid-cols-3 text-center ">
                {index == 1 ? (
                  <div className="laptop:m-auto shadow-md w-1/2 tablet:w-4/5 laptop:w-1/2 col-span-1 text-sb12 tablet:text-sb14 bg-[#D23CFF] px-5 py-[0.625rem] mb-[1.25rem] laptop:mb-[3rem] tablet:mb-[2.5rem] rounded-3xl">
                    MOST POPULAR
                  </div>
                ) : (
                  false
                )}
                <div className="laptop:col-span-1 tablet:col-span-3 laptop:block flex justify-between laptop:mb-0 tablet:mb-3">
                  <h2
                    className={clsx("laptop:mb-[2rem] text-black ", {
                      "text-white text-sb18 tablet:text-sb28": index == 1,
                      "laptop:text-sb28 text-sb18 tablet:text-sb22": index !== 1,
                    })}
                  >
                    {option?.name}
                  </h2>
                  <p
                    className={clsx("text-sb22 laptop:mb-[1.5rem] ", {
                      // " tablet:leading-[3.25rem]": index == 1,
                      "text-black": index !== 1,
                    })}
                  >
                    <span
                      className={clsx(" font-semibold ", {
                        "tablet:text-[2.5rem]":index == 1,
                        "bg-mainGradient text-transparent bg-clip-text laptop:text-[2.5rem] tablet:text-sb22":index !== 1,
                      })}
                    >
                      {option?.price}
                    </span>
                    {index == 2 ? "" : " / tháng"}
                  </p>
                </div>

                <p className="text-m14 laptop:text-m18 mb-[2.5rem] laptop:col-span-1 tablet:col-span-3 desktop:text-center text-left">
                  {option?.detail}
                </p>
              </div>
              <ul className={clsx("laptop:mb-[3.5rem] tablet:mb-[2.5rem] flex flex-col flex-wrap laptop:h-full ",{"tablet:h-[8.25rem]":index ==1})}>
                {option.feature.map((label: any) => (
                  <li
                    className={clsx("flex mb-4", { "text-white": index === 1 })}
                    key={label}
                  >
                    <div
                      className={clsx(
                        "w-[1.75rem] relative aspect-square mr-[0.875rem]",
                        {
                          "border border-white bg-white rounded-[50%]":
                            index === 1,
                        }
                      )}
                    >
                      <Image
                        src="/image/DetailPage/check-circle-1.svg"
                        alt="Educenter"
                        fill
                      />
                    </div>
                    <p
                      className={clsx("desktop:text-m18 text-m14", {
                        "text-white": index === 1,
                      })}
                    >
                      {label}
                    </p>
                  </li>
                ))}
              </ul>
              <div
                className={clsx(
                  "text-center",

                  {
                    "btn-gradient": index !== 1,
                    "btn-default": index === 1,
                  }
                )}
              >
                {index === 1 ? (
                  <div className="bg-gradient-to-r from-[#3E60FE] to-[rgb(210,60,255)] text-sb18 text-transparent bg-clip-text ">
                    Chọn gói
                  </div>
                ) : (
                  "Chọn gói"
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Price;
