import Image from "next/image"
import Link from "next/link";
import { getRelatedPost } from "@/@Page/News/services/blogService";

const RelatedPosts = async (props:any) =>{
  const relatedPost =await  getRelatedPost(props?.authorId)
    return (
        <div className="bg-white laptop:px-[4.5rem]  desktop:py-[3.75rem] laptop:py-[4.5rem] desktop:mb-[2.5rem] laptop:mb-[4.5rem] rounded-[2rem] laptop:shadow-lg">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="tablet:text-sb28 text-sb18 desktop:mb-[2.5rem]">Bài viết liên quan</h3>
            <Link
              href=""
              className="text-sb16 text-mainBlue tablet:hidden"
            >
              Xem thêm
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 desktop:gap-[2.5rem] laptop:gap-[2rem] tablet:gap-[1.25rem] tablet:grid-cols-3">
            {relatedPost.map((post) => (
              <div
                key={post?.title}
                className="flex tablet:flex-col gap-[1rem] tablet:rounded-[2rem] overflow-hidden tablet:shadow-md tablet:border-2 transition-all duration-300 hover:-translate-y-[2px]"
              >
                <Link className="tablet:w-full w-1/3"  href={`/tin-tuc/${post?.slug}`}>
                  <div className="w-full relative aspect-video">
                    <Image alt="1" title="1" src={post?.featuredImage?.node?.sourceUrl} fill />
                  </div>
                </Link>
                <div className="tablet:w-full w-2/3 desktop:p-[1.5rem] tablet:p-[1rem]">
                    <Link  href={`/tin-tuc/${post?.slug}`}>
                      <h4 className="desktop:text-sb16 tablet:text-sb14 text-sb12 tablet:lineClamp2 ">{post?.title}</h4>
                    </Link>
                    <div
                  className="hidden tablet:lineClamp3 desktop:text-m16 tablet:text-m14 mb-4 text-[#1A1A1E]"
                  dangerouslySetInnerHTML={{ __html: post?.excerpt }}
                ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
    )
}
export default RelatedPosts