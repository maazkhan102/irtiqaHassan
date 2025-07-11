import React, { useRef } from "react";
import hs1 from "../../assets/hs-1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, EffectFade } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import test2 from "../../assets/test-2.jpg"
import test3 from "../../assets/test-3.jpg"
import test4 from "../../assets/test-4.jpg"
import co11 from "../../assets/finalImages/corporate/co7.jpg"
import ml1 from '../../assets/finalImages/modernLuxury/ml7.jpg'
import co1 from '../../assets/finalImages/corporate/co8.jpg'
import ml2 from '../../assets/finalImages/modernLuxury/ml2.jpg'
import ml3 from '../../assets/finalImages/modernLuxury/ml14.jpg'
import co2 from '../../assets/finalImages/corporate/co5.jpg'


const PageOneSectionFour = () => {
    const swiperRef = useRef(null);
    const slides = [
        {
            img: co11,
            text: "I just wanted to take a moment to express my sincere gratitude for the amazing work that you did on my office and your attention to detail and creativity really transformed the space into a beautiful and functional environment.",
            by: "Mr. Asif Peer",
            address: "CEO - Systems Ltd."
        },
        {
            img: ml1,
            text: "Thank you and your team for your good work Irtiqa, everyone likes it.",
            by: "Mr. Humayun Saeed",
            address: "Actor"
        },
        {
            img: co1,
            text: "High Regards & a sincere thanks for all the innovative designing work, IHI has done for us in creating our Zaitoon Ashraf Information Technology Park by Saylani Welfare. We love it and were continually impressed by your professionalism, attention to detail, care and the support you provided us during this project. You have a professional team. You made the process so easy for us and we are very grateful.",
            by: "Mr. Afzal Chamdia",
            address: "Manager and acting Head of Development Department - Saylani IT Park"
        },
        {
            img: ml2,
            text: "IHI & Team had done various project for Emaar Pakistan that included Tower Lobbies, Amenity Areas, Children Play areas. They had done a tremendous job in achieving the project charter and bringing the best results the way we demanded. We can now entertain our residents and achieve their satisfaction level by enabling them to enjoy the promised lifestyle within Emaar. I wish Irtiqa & IHI Team best of luck for their future endeavor.",
            by: "Mrs. Rabiva",
            address: "Emaar"
        },
        {
            img: ml3,
            text: "Working with Irtiqa and team has been a great experience. The team is very through and extremely professional from start to finish we didn't have to worry about a thing couldn't be happier with how our spaces turned out! Thanks for making our house into a home and going out of the way to include my love for birds.",
            by: "Mrs. Zulekha Tabba Ali",
            address: ""
        },
        {
            img: co2,
            text: "It has been a pleasure working with Irtiqa, she was able to understand our style and ideas. We are happy with the way she translated our design into interior space",
            by: "Mrs. Nargis Shahid Soorty",
            address: "Soorty Textiles"
        }
    ];


    return (
        <div className="min-h-screen relative">
            {/* Title and Border Lines */}
            <div className="relative flex items-center justify-center z-[10]">
                <div className="hidden md:flex absolute left-0 top-[85px] w-[53%] border-t border-white"></div>
                <h2 className="text-[35px] text-[45px] absolute top-16 md:left-[55%] left-[20%] text-[50px] nigelina text-white leading-14 tracking-wider">
                    CUSTOMER <br /> STORIES
                </h2>
                <div className="hidden md:flex absolute right-0 top-[140px] w-[31%] border-t border-white"></div>
            </div>

            {/* Swiper with Fade Effect and Custom Navigation */}
            <div className="relative">
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    navigation={false}
                    modules={[Navigation, EffectFade]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    loop
                    className="w-full min-h-screen"
                >
                    {slides.map((_, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative min-h-screen">
                                <img
                                    src={_?.img}
                                    className="absolute inset-0 object-cover w-full h-full z-[0]"
                                    alt="Customer Story"
                                />
                                <div className="absolute bg-black inset-0 opacity-40"></div>

                                <div className="absolute top-[30%] left-[20%]  z-[20] w-[60%] md:w-[500px] h-[380px] rounded-2xl backdrop-blur-xl border-2 border-[#C6C6C6] p-3 flex flex-col justify-between">
                                    <div className="absolute top-[-80px] left-8 text-white text-[200px]">"</div>
                                    <div className="text-[15px] text-white p-5 pt-10">"{_?.text}"</div>
                                    <div className="flex items-center justify-end pb-3 pr-3">
                                        <div className="flex flex-col">
                                            <span className="text-white font-semibold">{_?.by}</span>
                                            <span className="text-white text-[12px]">{_?.address}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <button
                    className={`absolute top-1/2 left-[10%] z-10 p-3 rounded-full transition bg-black/30 cursor-pointer`}
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    <ChevronLeft size={32} color="#C0A07A" />
                </button>

                <button
                    className={`absolute top-1/2 right-[10%] z-10 p-3 rounded-full transition bg-black/30 cursor-pointer`}
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    <ChevronRight size={32} color="#C0A07A" />
                </button>
            </div>
        </div>
    );
};

export default PageOneSectionFour;
