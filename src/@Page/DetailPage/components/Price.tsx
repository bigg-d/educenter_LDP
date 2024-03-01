import clsx from "clsx";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
const Price = () => {
  const options = [
    {
      name: "Cơ bản",
      price: "10 Tr",
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
    <section className="desktop:px-[12.5%] desktop:py-[5rem] bg-[#F6F9FF]">
      <h2 className="font-semibold text-center desktop:text-[2.5rem] desktop:mb-[13.125rem]">
        Báo giá sản phẩm
      </h2>
      <div className="grid grid-cols-3 gap-[1.875rem] rounded-[2.25rem] bg-white">
        {options.map((option, index) => {
          return (
            <div
              key={index}
              className={clsx(
                "h-max p-[2.5rem] rounded-[2.25rem] flex flex-col justify-center",
                { "-mt-[10rem] bg-mainGradient text-white": index == 1 },
                { "text-[#848199]": index !== 1 }
              )}
            >
              <div className="grid text-center ">
                {index == 1 ? (
                  <div className="m-auto shadow-md desktop:w-1/2 text-sb14 bg-[#D23CFF] desktop:px-5 desktop:py-[0.625rem] desktop:mb-[3rem] desktop:rounded-3xl">
                    MOST POPULAR
                  </div>
                ) : (
                  false
                )}
                <h2
                  className={clsx("mb-[2rem] text-black desktop:text-sb28", {
                    "text-white": index == 1,
                  })}
                >
                  {option?.name}
                </h2>
                <div className="mb-[2.5rem]">
                  <p
                    className={clsx("text-sb22 mb-[1.5rem] ", {
                      "text-black": index !== 1,
                    })}
                  >
                    <span
                      className={clsx(" desktop:text-[2.5rem] font-semibold ", {
                        "bg-mainGradient text-transparent bg-clip-text":
                          index !== 1,
                      })}
                    >
                      {option?.price}
                    </span>
                    {index == 2 ? "" : " / tháng"}
                  </p>
                  <p className="">Phù hợp với doanh nghiệp 1-10 người</p>
                </div>
              </div>
              <ul className="desktop:mb-[3.5rem]">
                {option.feature.map((label) => (
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
                      className={clsx("text-m18", {
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
                  <div className="bg-gradient-to-r from-[#3E60FE] to-[rgb(210,60,255)] text-transparent bg-clip-text ">
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
