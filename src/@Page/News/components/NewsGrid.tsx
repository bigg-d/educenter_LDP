import Image from "next/image";
import Link from "next/link";
import { getCarouselNew, getSummary } from "../services/blogService";

export default async function NewsGrid() {
  const [lastestPosts, sumaryPosts] = await Promise.all([
    getCarouselNew(),
    getSummary(),
  ]);

  const data = [
    {
      title: "Bài viết liên quan",
      viewMoreLink: "/",
      posts: lastestPosts,
    },

    {
      title: "Bài viết mới nhất",
      viewMoreLink: "/",
      posts: lastestPosts,
    },
    {
      title: "Tổng hợp bài viết",
      viewMoreLink: "/",
      posts: sumaryPosts,
    },
  ];

  return (
    <div className="flex flex-col gap-4 laptop:gap-8 desktop:gap-12 mx-auto desktop:w-4/5 my-12 px-4">
      {data.map((section) => (
        <div className="flex flex-col gap-4" key={section.title}>
          <div className="flex items-center justify-between">
            <h3 className="text-sb16 laptop:text-sb28">{section.title}</h3>
            <Link
              href={section.viewMoreLink}
              className="text-sb16 text-mainBlue"
            >
              Xem thêm
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 desktop:gap-12 laptop:gap-8 tablet:grid-cols-2 laptop:grid-cols-4">
            {section.posts.map((post) => (
              <div
                key={post.title}
                className="flex flex-col gap-2 rounded-[2rem] overflow-hidden shadow-md border-2 transition-all duration-300 hover:-translate-y-[2px]"
              >
                <Link href={`/tin-tuc/${post.slug}`}>
                  <div className="relative aspect-video">
                    <Image
                      alt={post.title}
                      title={post.title}
                      src={post.featuredImage.node.sourceUrl}
                      fill
                    />
                  </div>
                </Link>
                <Link href={`/tin-tuc/${post.slug}`}>
                  <h4 className="text-sb16 lineClamp2 px-4">{post.title}</h4>
                </Link>

                <div
                  className="lineClamp3 text-m16  px-4 mb-4 text-[#787A8C]"
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
