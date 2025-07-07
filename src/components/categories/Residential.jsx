import React from 'react'
import PageTwoSectionOne from '../page two/sectionOne'
import PageTwoSectionTwo from '../page two/Slider'
import PageTwoSectionThree from '../page two/sectionThree'
import Banner from '../page one/Banner'
import SmoothScroll from '../../components/page one/sectionThree';
// Image Imports
// import ml1 from "../../assets/demoImages/d-bgImg.png";
import ml2 from "../../assets/demoImages/ml2.jpg";
import testml2 from "../../assets/demoImages/testml2.png";
import testml3 from "../../assets/demoImages/testml3.png";
import hs1 from "../../assets/hs-1.png";
import test2 from "../../assets/test-2.jpg";
import test3 from "../../assets/test-3.jpg";
import test4 from "../../assets/test-4.jpg";
import { sub } from 'framer-motion/client'
import mll1 from '../../assets/finalImages/modernLuxury/ml1.jpg';
import mll2 from '../../assets/finalImages/modernLuxury/ml4.jpg';
import c1 from '../../assets/finalImages/contemporary/c1.png';
import c2 from '../../assets/finalImages/contemporary/c2.png';
import j1 from '../../assets/finalImages/japandi/j1.jpg';
import j2 from '../../assets/finalImages/japandi/j2.jpg';
import p1 from '../../assets/finalImages/parisian/p3.png';
import p2 from '../../assets/finalImages/parisian/p12.png';


const Residential = () => {
    const slides = [
            {
                // images: {
                //     row_one: {
                //         first: ml1,
                //     },
                //     row_two: {
                //         first: testml2,
                //         second: testml3,
                //     }
                // },
                tag: "residential",
                main_heading: "MODERN LUXURY",
                description: "A refined balance of sophistication and comfort—Modern Luxury celebrates clean lines, high-end materials, and understated elegance to create spaces that feel both indulgent and livable.",
                url: "/residential/modern-luxury",
                img1: mll1,
                img2: mll2,
            },
            {
                images: {
                    row_one: {
                        first: test2,
                    },
                    row_two: {
                        first: test2,
                        second: test2,
                    }
                },
                tag: "residential",
                main_heading: "CONTEMPORARY",
                description: "Rooted in the now, our Contemporary style embraces fluid layouts, bold forms, and a neutral palette—evolving with trends while remaining timeless in function and feel.",
                url: "/residential/contemporary",
                img1: c1,
                img2: c2
            },
            {
                // images: {
                //     row_one: {
                //         first: test3,
                //     },
                //     row_two: {
                //         first: test3,
                //         second: test3,
                //     }
                // },
                tag: "residential",
                main_heading: "JAPANDI",
                description: "Minimalism meets warmth in this harmonious fusion of Japanese simplicity and Scandinavian coziness. Japandi spaces are intentional, calm, and grounded in natural materials and quiet beauty.",
                url: "/residential/japandi",
                img1: j1,
                img2: j2
            },
            {
                // images: {
                //     row_one: {
                //         first: test4,
                //     },
                //     row_two: {
                //         first: test4,
                //         second: test4,
                //     }
                // },
                tag: "residential",
                main_heading: "PARISIAN",
                description: "From the moment you step into the expansive living area, you’ll be immersed in the awe-inspiring sea views that define every room. The beautifully appointed sitting areas, elegant dining spaces, and inviting bedrooms create a refined and welcoming ambiance.",
                url: "/residential/parisian",
                img1: p1,
                img2: p2 
            },
        ];

  return (
    <>
        <Banner
            className="bannerMainresidential"
            title={
                <>
                Far From Ordinary,<br />Close To Perfect!
                </>
            }
            description={
                <>
                What matters to us is timeless design,  <br />
                sustainable quality and ecological awareness.
                </>
            }
            />

        <PageTwoSectionOne
            title="Residential"
            description="Transforming spaces into deeply personal sanctuaries, we design homes that reflect your lifestyle, values, and individuality. From concept to completion, every detail is thoughtfully curated to bring comfort, beauty, and timeless elegance into your everyday life."
        />
        <SmoothScroll 
            sliderData = {slides}
        />
        {/* <PageTwoSectionTwo
            sliderData = {slides}
        /> */}
        <PageTwoSectionThree/>
    </>
  )
}

export default Residential;