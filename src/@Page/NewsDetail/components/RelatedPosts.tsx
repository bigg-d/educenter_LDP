import Image from "next/image"
import Link from "next/link";

const RelatedPosts = () =>{
    const data = [
        {
          title: "Bài viết liên quan",
          viewMoreLink: "/",
          posts: [
            {
              link: "/",
              image:
                "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?cs=srgb&dl=pexels-pixabay-301920.jpg&fm=jpg",
              title:
                "EduQuiz – Hành trình trở thành công cụ ôn thi đắc lực cho sinh viên của thương hiệu ‘trẻ’",
              description:
                "Bước từng bước vào thị trường giáo dục đang có sự chuyển hóa mạnh mẽ về công nghệ số, EduQuiz đã dần khẳng định được vị thế khi trở thành công cụ ôn thi hiệu quả được rất nhiều bạn sinh viên tin tưởng sử dụng để phục vụ cho việc học tập của",
            },
            {
              link: "/",
              image:
                "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?cs=srgb&dl=pexels-pixabay-301920.jpg&fm=jpg",
              title:
                "EduQuiz – Hành trình trở thành công cụ ôn thi đắc lực cho sinh viên của thương hiệu ‘trẻ’",
              description:
                "Bước từng bước vào thị trường giáo dục đang có sự chuyển hóa mạnh mẽ về công nghệ số, EduQuiz đã dần khẳng định được vị thế khi trở thành công cụ ôn thi hiệu quả được rất nhiều bạn sinh viên tin tưởng sử dụng để phục vụ cho việc học tập của",
            },
            {
              link: "/",
              image:
                "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?cs=srgb&dl=pexels-pixabay-301920.jpg&fm=jpg",
              title:
                "EduQuiz – Hành trình trở thành công cụ ôn thi đắc lực cho sinh viên của thương hiệu ‘trẻ’",
              description:
                "Bước từng bước vào thị trường giáo dục đang có sự chuyển hóa mạnh mẽ về công nghệ số, EduQuiz đã dần khẳng định được vị thế khi trở thành công cụ ôn thi hiệu quả được rất nhiều bạn sinh viên tin tưởng sử dụng để phục vụ cho việc học tập của",
            },
            
          ],
        }]
    return (
        <div className="bg-white desktop:px-[4.5rem] desktop:py-[3.75rem] desktop:mb-[2.5rem] rounded-[2rem] laptop:shadow-lg">
            {data.map((section) => (
        <div className="flex flex-col gap-4" key={section.title}>
          <div className="flex items-center justify-between">
            <h3 className="tablet:text-sb28 text-sb18 desktop:mb-[2.5rem]">{section.title}</h3>
            <Link
              href={section.viewMoreLink}
              className="text-sb16 text-mainBlue tablet:hidden"
            >
              Xem thêm
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 desktop:gap-[2.5rem] laptop:gap-8 tablet:gap-[1.25rem] tablet:grid-cols-3">
            {section.posts.map((post) => (
              <div
                key={post.title}
                className="flex tablet:flex-col gap-[1rem] tablet:rounded-[2rem] overflow-hidden tablet:shadow-md tablet:border-2 transition-all duration-300 hover:-translate-y-[2px]"
              >
                <div className="w-full relative aspect-video">
                  <Image alt="1" title="1" src={post.image} fill />
                </div>
                <div className=" desktop:p-[1.5rem] tablet:p-[1rem]">
                    <h4 className="desktop:text-sb16 tablet:text-sb14 text-sb12 tablet:lineClamp2 ">{post.title}</h4>
                    <p className="hidden tablet:lineClamp3 desktop:text-m16 tablet:text-m14 mb-4 text-[#787A8C]">
                    {post.description}
                    </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}   
        </div>
    )
}
export default RelatedPosts