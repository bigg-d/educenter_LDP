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
  // console.log("🚀 ~ MainContent ~ post:", post);
  return (
    <div className="relative z-10  desktop:bg-[#FAFAFA]">
      <div className="hidden desktop:block w-full absolute top-0 aspect-[192/41]">
        <Image src="/images/detailNews/newsDetailBg.svg" alt="Educenter" fill />
      </div>
      <div className="relative z-10 w-ful px-[1.25rem] desktop:px-[17%] tablet:px-[1.75rem] pt-[1.5rem] tablet:pt-[2.5rem] desktop:mb-[2.5rem] desktop:pb-0 tablet:pb-[1.875rem] pb-[1.75rem]">
        <p className="text-mainBlue desktop:text-m14 tablet:text-sb12 desktop:text-white desktop:mb-[2.75rem] tablet:mb-[1.5rem] mb-[1.25rem]">
          bread crumps
        </p>
        <div className="desktop:bg-white desktop:px-[4.5rem] desktop:py-[3.75rem] rounded-[2rem] laptop:shadow-lg">
          <h2 className="desktop:text-sb36 tablet:text-sb28 text-sb18 desktop:mb-[2.125rem] tablet:mb-[1.5rem] mb-[1.25rem]">
            {post?.title}
          </h2>
          <div className="flex desktop:mb-[3.25rem] tablet:mb-[1.5rem] mb-[1.25rem]">
            <p className="mr-[2rem]">{post?.date}</p>
            <p className="text-sb12 text-mainBlue">Chia sẻ bài viết</p>
          </div>
          <div className="relative aspect-[16/10] desktop:mb-[3rem] tablet:mb-[1.5rem] mb-[1.25rem]">
            <Image src={post?.featuredImage?.node?.sourceUrl} alt="Educenter" fill />
          </div>
          <p className="desktop:mb-[3rem] tablet:mb-[1.5rem] mb-[1.25rem]">
          <div
                  className="lineClamp3 laptop:text-m18 text-m16  px-4 mb-4 text-[#1A1A1E]"
                  dangerouslySetInnerHTML={{ __html: post?.excerpt }}
                ></div>
          </p>
          <div className="bg-[#F6F9FF] tablet:p-[1.75rem] p-[1.25rem] rounded-[2rem] desktop:mb-[3rem] tablet:mb-[1.5rem] mb-[1.25rem]">
            <h3 className="text-sb16 mb-[1rem]">Nội dung chính</h3>
            <h3 className="text-sb16 mb-[1rem]">
              Suy nghĩ lại về vai trò của AI
            </h3>
            <h3 className="text-sb16 mb-[1rem]">
              Chuẩn bị cho thế giới cookie hậu bên thứ ba
            </h3>
            <h3 className="text-sb16 mb-[1rem]">
              Mở khóa tăng trưởng, lợi nhuận năng lượng
            </h3>
            <h3 className="text-sb16 mb-[1rem]">
              Đổi mới sự tham gia của khách hàng
            </h3>
            <h3 className="text-sb16 mb-[1rem]">Kết</h3>
          </div>
          <div
                  className="laptop:text-m18 text-m16 desktop:mb-[3rem]  px-4 mb-4 text-[#1A1A1E]"
                  dangerouslySetInnerHTML={{ __html: post?.content }}
                ></div>
          <p>Đánh giá bài viết</p>
        </div>
      </div>
      <div className="desktop:bg-[#FAFAFA] px-[1.25rem] desktop:px-[17%] tablet:px-[1.75rem] desktop:pb-[6.25rem] tablet:pb-[2rem] pb-[2.5rem] laptop:shadow-none tablet:shadow-lg">
        <RelatedPost authorId={post?.author?.node?.databaseId} />
      </div>
    </div>
  );
};
export default MainContent;
