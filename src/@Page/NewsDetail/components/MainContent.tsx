import Image from "next/image"
import RelatedPost from "./RelatedPosts"

const MainContent  = ()=>{
    return (
        <div className="relative z-10  desktop:bg-[#FAFAFA] ">
            <div className="hidden desktop:block w-full absolute top-0 aspect-[192/41]">
                <Image src="/images/detailNews/newsDetailBg.svg" alt="Educenter" fill/>
            </div>
            <div className="relative z-10 w-ful px-[1.25rem] desktop:px-[17%] tablet:px-[1.75rem] pt-[1.5rem] tablet:pt-[2.5rem] desktop:pb-[6.25rem] tbalet:pb-[2rem]">
                <p className="text-mainBlue desktop:text-m14 tablet:text-sb12 desktop:text-white desktop:mb-[2.75rem] tablet:mb-[1.5rem] mb-[1.25rem]">bread crumps</p>
                <div className="desktop:bg-white desktop:px-[4.5rem] desktop:py-[3.75rem] desktop:mb-[2.5rem] rounded-[2rem] laptop:shadow-lg">
                    <h2 className="desktop:text-sb36 tablet:text-sb28 text-sb18 desktop:mb-[2.125rem] tablet:mb-[1.5rem] mb-[1.25rem]">Học đại học từ xa hiệu quả</h2>
                    <div className="flex desktop:mb-[3.25rem] tablet:mb-[1.5rem] mb-[1.25rem]">
                        <p className="mr-[2rem]">Tháng Một 16, 2024</p>
                        <p className="text-sb12 text-mainBlue">Chia sẻ bài viết</p>
                    </div>
                    <div className="relative aspect-[16/10] desktop:mb-[3rem] tablet:mb-[1.5rem] mb-[1.25rem]">
                        <Image src="/images/detailNews/avatar.svg" alt="Educenter" fill/>
                    </div>
                    <p className="desktop:mb-[3rem] tablet:mb-[1.5rem] mb-[1.25rem]">Cùng với sự thay đổi nhanh chóng của giáo dục hiện đại, học đại học từ xa trở thành xu hướng phổ biến giúp sinh viên linh hoạt trong việc quản lý thời gian và học tập theo lịch trình cá nhân. Bài viết này EduQuiz Blog sẽ chia sẻ cho bạn 11 cách học đại học từ xa một cách hiệu quả, đạt được điểm số cao.</p>
                    <div className="bg-[#F6F9FF] tablet:p-[1.75rem] p-[1.25rem] rounded-[2rem] desktop:mb-[3rem] tablet:mb-[1.5rem] mb-[1.25rem]">
                        <h3 className="text-sb16 mb-[1rem]">Nội dung chính</h3>
                        <h3 className="text-sb16 mb-[1rem]">Suy nghĩ lại về vai trò của AI</h3>
                        <h3 className="text-sb16 mb-[1rem]">Chuẩn bị cho thế giới cookie hậu bên thứ ba</h3>
                        <h3 className="text-sb16 mb-[1rem]">Mở khóa tăng trưởng, lợi nhuận năng lượng</h3>
                        <h3 className="text-sb16 mb-[1rem]">Đổi mới sự tham gia của khách hàng</h3>
                        <h3 className="text-sb16 mb-[1rem]">Kết</h3>
                    </div>
                    <h3 className="text-m18 desktop:mb-[3rem]">Hình thức học đại học từ xa</h3>
                    <p>Đánh giá bài viết</p>
                </div>
                <RelatedPost/>
            </div>

        </div>
    )
}
export default MainContent