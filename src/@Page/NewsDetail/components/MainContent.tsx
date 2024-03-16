import { FaRegCalendar } from "react-icons/fa";
import { PiShareFatLight } from "react-icons/pi";
import { MdStarRate } from "react-icons/md";
import Image from "next/image";
import RelatedPost from "./RelatedPosts";
import { getDetailPost } from "@/@Page/News/services/blogService";
import { Console } from "console";

interface Props {
  slug: string;
}
const MainContent = async (props: Props) => {
  const { slug } = props;

  const post = await getDetailPost(slug);
  console.log(post);
  
  return (
    <div className="relative z-10  fhd:bg-[#FAFAFA]">
      <div className="hidden laptop:block w-full absolute top-0 aspect-[192/41]">
        <Image src="/images/detailNews/newsDetailBg.svg" alt="Educenter" fill />
      </div>
      <div className="relative z-10 w-ful px-[1.25rem] fhd:px-[17%] laptop:px-[6%] tablet:px-[1.75rem] pt-[1.5rem] tablet:pt-[2.5rem] fhd:mb-[2.5rem] fhd:pb-0 tablet:pb-[1.875rem] pb-[1.75rem]">
        <div className="flex desktop:justify-start laptop:justify-center text-mainBlue fhd:text-m14 tablet:text-sb12 laptop:text-white fhd:mb-[2.75rem] tablet:mb-[1.5rem] mb-[1.25rem]">
          <p>Trang chủ / </p>
          {post?.categories?.nodes?.map((category) =>(
            <p key={category?.id}>{category?.name}</p>
          ))}
        </div>
        <div className="laptop:bg-white fhd:px-[4.5rem] laptop:px-[4.5rem] laptop:py-[3.75rem] rounded-[2rem] laptop:shadow-lg ">
          <h2 className="laptop:text-sb36 tablet:text-sb28 text-sb18 fhd:mb-[2.125rem] tablet:mb-[1.5rem] mb-[1.25rem]">
            {post?.title}
          </h2>
          <div className="flex fhd:mb-[3.25rem] laptop:text-m18 tablet:text-m16 text-sb12 tablet:mb-[1.5rem] mb-[1.25rem]">
            <div className="flex gap-3">
              <FaRegCalendar />
              <p className="mr-[2rem] ">{post?.date}</p>
            </div>
            <div className="flex items-center gap-1 text-mainBlue">
              <PiShareFatLight />
              <p className="">Chia sẻ bài viết</p>
            </div>
          </div>
          <div className="relative aspect-[16/10] fhd:mb-[3rem] tablet:mb-[1.5rem] mb-[1.25rem]">
            <Image src={post?.featuredImage?.node?.sourceUrl} alt="Educenter" fill />
          </div>
          <div
                  className="lineClamp3 laptop:text-m18 text-m16  px-4 fhd:mb-[3rem] tablet:mb-[1.5rem] mb-[1.25rem] text-[#1A1A1E]"
                  dangerouslySetInnerHTML={{ __html: post?.excerpt }}
                ></div>
          <div className="bg-[#F6F9FF] tablet:text-sb18 text-sb14 tablet:p-[1.75rem] p-[1.25rem] rounded-[2rem] fhd:mb-[3rem] tablet:mb-[1.5rem] mb-[1.25rem]">
            <h3 className="mb-[1rem]">Nội dung chính</h3>
            <h3 className="mb-[1rem]">
              Suy nghĩ lại về vai trò của AI
            </h3>
            <h3 className="mb-[1rem]">
              Chuẩn bị cho thế giới cookie hậu bên thứ ba
            </h3>
            <h3 className="mb-[1rem]">
              Mở khóa tăng trưởng, lợi nhuận năng lượng
            </h3>
            <h3 className="mb-[1rem]">
              Đổi mới sự tham gia của khách hàng
            </h3>
            <h3 className="mb-[1rem]">Kết</h3>
          </div>
          <div
                  className="laptop:text-m18 text-m16 fhd:mb-[3rem]  px-4 mb-4 text-[#1A1A1E]"
                  dangerouslySetInnerHTML={{ __html: post?.content }}
                ></div>
          <div className="flex items-center gap-3">
            <p>Đánh giá bài viết</p>
            <ul className="flex text-gray-500">
              <li><MdStarRate/></li>
              <li><MdStarRate/></li>
              <li><MdStarRate/></li>
              <li><MdStarRate/></li>
              <li><MdStarRate/></li>
            </ul>
          </div>      
        </div>
      </div>
      <div className="fhd:bg-[#FAFAFA] px-[1.25rem] fhd:px-[17%] laptop:px-[6%] tablet:px-[1.75rem] fhd:pb-[6.25rem] tablet:pb-[2rem] pb-[2.5rem] laptop:shadow-none tablet:shadow-lg">
        <RelatedPost authorId={post?.author?.node?.databaseId} />
      </div>
    </div>
  );
};
export default MainContent;
