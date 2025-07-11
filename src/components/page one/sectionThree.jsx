import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./sectionThree.module.css";
import { ArrowRight } from "lucide-react";
import "react-nice-scroll/dist/styles.css";
import hs1 from "../../assets/hs-1.png";
import slider1 from "../../assets/slider-1.jpg";

gsap.registerPlugin(ScrollTrigger);


const HorizontalScroll = ({sliderData}) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(`.${styles.horizontalSection}`);

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: `#${styles.container}`,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + document.querySelector(`#${styles.container}`).offsetWidth,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main id={styles.container}>
      {sliderData.map((section, index) => (
        <section key={index} className={styles.horizontalSection}>
          <div className="grid grid-cols-2 min-h-screen relative">
            <img
              src={section.img1}
              className="absolute bottom-[9%] left-[37%] w-[400px] h-[300px] z-[10]"
            />
            <div className="flex items-center">
              <div className="flex flex-col gap-3 relative">
                <div className="w-52 h-[1.5px] bg-[#707070]" />
                <div className="flex flex-col gap-2 pl-20 w-[50%]">
                  <div className="text-[#515151] text-[11px] uppercase">
                    {section.tag}
                  </div>
                  <div className="text-[#515151] text-[45px] nigelina leading-12 w-[80%]">
                    {section.main_heading}
                  </div>
                  <div className="text-[#515151] text-[16px]">
                    {section.description}
                  </div>
                  <button className="cursor-pointer flex items-center justify-center gap-2 mt-3 px-8 py-3 max-w-fit bg-black text-white rounded-md transition duration-300">
                    <a href={section.url} className="text-[16px]">View More</a>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
            <div>
              <img src={section.img2} alt="" className="object-cover w-full h-full" />
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

export default HorizontalScroll;