import React from 'react'
import PageTwoSectionOne from '../page two/sectionOne'
import PageTwoSectionTwo from '../page two/Slider'
import PageTwoSectionThree from '../page two/sectionThree'
import Banner from '../page one/Banner'
import SmoothScroll from '../../components/page one/sectionThree';
// Image Imports
import ml1 from "../../assets/demoImages/d-bgImg.png";
import ml2 from "../../assets/demoImages/ml2.jpg";
import testml2 from "../../assets/demoImages/testml2.png";
import testml3 from "../../assets/demoImages/testml3.png";
import hs1 from "../../assets/hs-1.png";
import test2 from "../../assets/test-2.jpg";
import test3 from "../../assets/test-3.jpg";
import test4 from "../../assets/test-4.jpg";
import s1 from "../../assets/finalImages/salon/s4.png";
import s2 from "../../assets/finalImages/salon/s3.png";
import s3 from "../../assets/finalImages/salon/s6.png";
import s4 from "../../assets/finalImages/salon/s7.png";
import SmoothScrollMobile from '../smoothScrollMobile'


const Commercial = () => {
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
                    tag: "commercial",
                    main_heading: "SALON",
                    description: "Designed to be both luxurious and functional, our salon interiors elevate the client experience—merging aesthetics, comfort, and seamless flow for beauty spaces that feel indulgent and efficient.",
                    url: "/commercial/salon",
                    img1: s1,
                    img2: s2,
                },
                {
                    // images: {
                    //     row_one: {
                    //         first: test2,
                    //     },
                    //     row_two: {
                    //         first: test2,
                    //         second: test2,
                    //     }
                    // },
                    tag: "commercial",
                    main_heading: "SHOWROOM",
                    description: "Rooted in the now, our Contemporary style embraces fluid layouts, bold forms, and a neutral palette—evolving with trends while remaining timeless in function and feel.",
                    url: "/commercial/showroom",
                    img1: s3,
                    img2: s4
                }
            ];

  return (
    <>
        <Banner
            className="bannerMaincommercial"
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
            title="Commercial"
            description="We craft dynamic commercial environments that blend functionality with striking aesthetics. Whether it's a boutique, office, or hospitality space, our designs aim to enhance brand identity, inspire productivity, and elevate the user experience"
        />
         <div className='hidden sm:block'>
        <SmoothScroll 
                    sliderData = {slides}
                />
        </div>
        <div className='block sm:hidden'>
            <SmoothScrollMobile
                    sliderData = {slides}
                />
        </div>
        {/* <PageTwoSectionTwo
            sliderData = {slides}
        /> */}
        <PageTwoSectionThree/>
    </>
  )
}

export default Commercial;