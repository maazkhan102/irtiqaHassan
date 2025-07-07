import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import "react-nice-scroll/dist/styles.css";
// import hs1 from "../../assets/hs-1.png";
// import slider1 from "../../assets/slider-1.jpg";

gsap.registerPlugin(ScrollTrigger);


const SmoothScrollMobile = ({sliderData}) => {

  return (
    <main>
      {sliderData.map((section, index) => (
        <section key={index}>
          <div className="grid min-h-screen relative">
            <div className="flex items-center">
              <div className="flex flex-col gap-3 relative py-5">
                <div className="w-52 h-[1.5px] bg-[#707070]" />
                <div className="flex flex-col gap-2 pl-20 w-[70%]">
                  <div className="text-[#515151] text-[11px] uppercase">
                    {section.tag}
                  </div>
                  <div className="text-[#515151] text-[30px] sm:text-[45px] nigelina leading-12 w-[80%]">
                    {section.main_heading}
                  </div>
                  <div className="text-[#515151] text-[13px]">
                    {section.description}
                  </div>
                  <button className="cursor-pointer flex items-center justify-center gap-2 px-3 py-2 max-w-fit bg-black text-white rounded-md transition duration-300">
                    <a href={section.url} className="text-[10px] font-medium">View More</a>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
            <div className="pt-3 pb-5">
                <img
                src={section.img1}
                className="object-cover w-full h-full"
                />
            </div>
            
            {/* <div>
              <img src={section.img2} alt="" className="object-cover w-full h-full" />
            </div> */}
          </div>
        </section>
      ))}
    </main>
  );
};

export default SmoothScrollMobile;