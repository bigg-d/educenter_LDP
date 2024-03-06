import Image from "next/image";
import Link from "next/link";

export default async function NewsGrid() {
  //GET DATA BY API HERE
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
    },
    {
      title: "Bài viết mới nhất",
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
    },
    {
      title: "Bài viết mới nhất",
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
    },
    {
      title: "Bài viết mới nhất",
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
                <div className="relative aspect-video">
                  <Image alt="1" title="1" src={post.image} fill />
                </div>
                <h4 className="text-sb16 lineClamp2 px-4">{post.title}</h4>
                <p className="lineClamp3 text-m16  px-4 mb-4 text-[#787A8C]">
                  {post.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
