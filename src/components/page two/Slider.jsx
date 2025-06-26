import { useRef } from "react";
import gsap from "gsap";
import { Carousel } from "antd";
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

const Slider = ({ sliderData }) => {
    const carouselRef = useRef(null);

    // Function to animate elements during slide transition
    const animateSlide = (current, next) => {
        const incomingSlide = document.querySelectorAll(".slick-slide")[next];

        if (!incomingSlide) return;

        gsap.fromTo(
            incomingSlide.querySelectorAll(".fade-up"),
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.2 }
        );

        gsap.fromTo(
            incomingSlide.querySelectorAll(".fade-left"),
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 1, ease: "power3.out", stagger: 0.2 }
        );

        gsap.fromTo(
            incomingSlide.querySelectorAll(".fade-right"),
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 1, ease: "power3.out", stagger: 0.2 }
        );

        gsap.fromTo(
            incomingSlide.querySelectorAll(".fade-down"),
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.2 }
        );
    };

    return (
        <div className="relative min-h-screen">
            <Carousel
                ref={carouselRef}
                beforeChange={animateSlide} // Trigger animation *before* slide transition
                dots={false}
                infinite
                speed={500}
                effect="fade"
                className="w-full min-h-screen"
            >
                {sliderData.map((slide, index) => (
                    <div key={index}>
                        <div className="grid grid-cols-12 h-screen">
                            {/* Left Section */}
                            <div className="col-span-8 hidden md:flex flex-col">
                                <div className="flex items-center justify-center h-[50vh]">
                                    <img className="object-cover w-full h-full fade-down" src={slide.images.row_one.first} />
                                </div>
                                <div className="grid grid-cols-2 h-[50vh]">
                                    <img className="object-cover w-full h-full fade-right" src={slide.images.row_two.first} />
                                    <img className="object-cover w-full h-full fade-up" src={slide.images.row_two.second} />
                                </div>
                            </div>

                            {/* Right Section */}
                            <div className="col-span-12 md:col-span-4 flex flex-col justify-center gap-3">
                                <div className="flex flex-col gap-2 pl-20">
                                    <div className="text-[#515151] text-[11px] uppercase relative">
                                        <div className="absolute -top-5 right-0 w-full h-[1.5px] bg-[#707070]" />
                                        {slide?.tag}
                                    </div>
                                    <div className="text-[#515151] text-[35px] md:text-[45px] nigelina leading-12 w-[60%]">
                                        {slide?.main_heading}
                                    </div>
                                    <div className="text-[#515151] text-[13px] w-[60%]">
                                        {slide?.description}
                                    </div>
                                    <div className='p-2' />
                                    <Link to={slide?.url} target="_top" className=' max-w-fit'>
                                        <button className="flex items-center justify-center gap-2 px-3 py-2 max-w-fit bg-black text-white rounded-md transition duration-300 cursor-pointer">
                                            <span className="text-[10px] font-medium">View More</span>
                                            <ArrowRight size={13} />
                                        </button>
                                    </Link>

                                    {/* Navigation Buttons */}
                                    <div className="flex items-center pt-5 gap-5">
                                        <button
                                            className="z-10 p-3 rounded-full transition-all border cursor-pointer group hover:shadow-md hover:bg-black"
                                            onClick={() => carouselRef.current?.prev()}
                                        >
                                            <ChevronLeft size={15} className="group-hover:text-white text-black transition-all" />
                                        </button>

                                        <button
                                            className="z-10 p-3 rounded-full transition border cursor-pointer group hover:shadow-md hover:bg-black"
                                            onClick={() => carouselRef.current?.next()}
                                        >
                                            <ChevronRight size={15} className="group-hover:text-white text-black transition-all" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Slider;
