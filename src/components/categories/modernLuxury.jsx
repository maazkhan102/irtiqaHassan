import React from 'react'
import PageTwoSectionOne from '../../components/page two/sectionOne'
import PageTwoSectionTwo from '../page two/Slider'
import PageTwoSectionThree from '../../components/page two/sectionThree'
import Banner from '../../components/page one/Banner'
// Image Imports
import ml1 from "../../assets/demoImages/d-bgImg.png";
import ml2 from "../../assets/demoImages/ml2.jpg";
import testml2 from "../../assets/demoImages/testml2.png";
import testml3 from "../../assets/demoImages/testml3.png";
import hs1 from "../../assets/hs-1.png";
import test2 from "../../assets/test-2.jpg";
import test3 from "../../assets/test-3.jpg";
import test4 from "../../assets/test-4.jpg";

const ModernLuxury = () => {
    const slides = [
            {
                images: {
                    row_one: {
                        first: ml1,
                    },
                    row_two: {
                        first: testml2,
                        second: testml3,
                    }
                },
                tag: "privacy & space",
                main_heading: "MODERN LUXURY",
                description: "Experience modern luxury redefined in a space thoughtfully designed by IHI. With a perfect blend of clean lines, rich textures, and elegant details, the design offers a serene yet sophisticated environment that reflects contemporary taste and timeless style.",
                url: "/project-detail"
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
                tag: "privacy & space",
                main_heading: "EXPLORE OUR OFFICE",
                description: "From the moment you step into the expansive living area, you’ll be immersed in the awe-inspiring sea views that define every room. The beautifully appointed sitting areas, elegant dining spaces, and inviting bedrooms create a refined and welcoming ambiance.",
                url: "/project-detail"
            },
            {
                images: {
                    row_one: {
                        first: test3,
                    },
                    row_two: {
                        first: test3,
                        second: test3,
                    }
                },
                tag: "privacy & space",
                main_heading: "EXPLORE OUR HOME",
                description: "From the moment you step into the expansive living area, you’ll be immersed in the awe-inspiring sea views that define every room. The beautifully appointed sitting areas, elegant dining spaces, and inviting bedrooms create a refined and welcoming ambiance.",
                url: "/project-detail"
            },
            {
                images: {
                    row_one: {
                        first: test4,
                    },
                    row_two: {
                        first: test4,
                        second: test4,
                    }
                },
                tag: "privacy & space",
                main_heading: "EXPLORE OUR OFFICE",
                description: "From the moment you step into the expansive living area, you’ll be immersed in the awe-inspiring sea views that define every room. The beautifully appointed sitting areas, elegant dining spaces, and inviting bedrooms create a refined and welcoming ambiance.",
                url: "/project-detail"
            },
        ];

  return (
    <>
        <Banner 
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
            title="What matters to us is a timeless design, sustainable, quality and ecological awareness."
            description="IHI is a high-end Architecture, Interior Design and Furniture studio driven by exquisite taste, unparalleled service and unmatched quality. From planning spaces with utmost precision, creating unique styles from Modern Luxury to French Parisian and executing designs with high-end furniture and finishes. Be it residential, commercial or retail, at IHI, we don't just design interiors, we design a lifestyle."
        />
        <PageTwoSectionTwo
            sliderData = {slides}
        />
        <PageTwoSectionThree/>
    </>
  )
}

export default ModernLuxury;