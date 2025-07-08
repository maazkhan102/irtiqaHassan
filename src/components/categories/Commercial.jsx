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
import s1 from "../../assets/finalImages/salon/s16.jpg";
import s2 from "../../assets/finalImages/salon/s13.jpg";
import s3 from "../../assets/finalImages/salon/s6.png";
import s4 from "../../assets/finalImages/salon/s7.png";
import g1 from "../../assets/finalImages/gym/g1.jpg";
import g2 from "../../assets/finalImages/gym/g2.jpg";
import r1 from "../../assets/finalImages/retail/1.jpg";
import r2 from "../../assets/finalImages/retail/2.jpg";
import h1 from "../../assets/finalImages/hospitality/1.jpg";
import h2 from "../../assets/finalImages/hospitality/2.jpg";
import co1 from '../../assets/finalImages/corporate/co1.jpg';
import co2 from '../../assets/finalImages/corporate/co2.jpg';
import SmoothScrollMobile from '../smoothScrollMobile'


const Commercial = () => {
     const slides = [
                {
                    tag: "commercial",
                    main_heading: "SALON",
                    description: "Designed to be both luxurious and functional, our salon interiors elevate the client experience—merging aesthetics, comfort, and seamless flow for beauty spaces that feel indulgent and efficient.",
                    url: "/commercial/salon",
                    img1: s1,
                    img2: s2,
                },
                {
                    tag: "commercial",
                    main_heading: "GYM",
                    description: "We design wellness environments that inspire movement and motivation. With smart zoning, clean lines, and natural textures, our gyms balance energy with calm for a holistic fitness experience.",
                    url: "/commercial/gym",
                    img1: g1,
                    img2: g2
                },
                {
                    tag: "commercial",
                    main_heading: "RETAIL",
                    description: "From layout to lighting, every detail in our retail spaces is crafted to enhance brand storytelling, customer engagement, and product visibility—where design becomes a silent salesperson",
                    url: "/commercial/retail",
                    img1: r1,
                    img2: r2
                },
                {
                    tag: "commercial",
                    main_heading: "HOSPITALITY",
                    description: "Our hospitality interiors invite guests to linger, offering sensorial experiences through material richness, spatial rhythm, and mood-driven design. It's where atmosphere and identity meet.",
                    url: "/commercial/hospitality",
                    img1: h1,
                    img2: h2
                },
                {
                    tag: "commercial",
                    main_heading: "CORPORATE",
                    description: "Productivity meets personality in our corporate office designs. We create workspaces that foster focus, collaboration, and culture—blending modern ergonomics with an elevated design language.",
                    url: "/commercial/corporate",
                    img1: co1,
                    img2: co2
                }
            ];

  return (
    <>
        <Banner
            className="bannerMaincommercial"
            title={
                <>
                Bespoke Design. Impeccable Detail. Timeless Luxury
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