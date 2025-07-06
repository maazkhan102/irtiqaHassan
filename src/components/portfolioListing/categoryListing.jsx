import React from 'react'
import PageOneSectionOne from '../page one/sectionOne'
import PageOneSectionTwo from '../page one/sectionTwo'
import PageOneSectionFour from '../page one/sectionFour'
import PageTwoSectionTwo from '../page two/Slider'
import Banner from '../page one/Banner';
import SmoothScroll from '../../components/page one/sectionThree'
// Image Imports
import hs1 from "../../assets/hs-1.png";
import test2 from "../../assets/test-2.jpg";
import test3 from "../../assets/test-3.jpg";
import test4 from "../../assets/test-4.jpg";

const CategoryListing = () => {
  const slides = [
              {
                  images: {
                      row_one: {
                          first: hs1,
                      },
                      row_two: {
                          first: hs1,
                          second: hs1,
                      }
                  },
                  tag: "privacy & space",
                  main_heading: "EXPLORE OUR HOME",
                  description: "From the moment you step into the expansive living area, you’ll be immersed in the awe-inspiring sea views that define every room. The beautifully appointed sitting areas, elegant dining spaces, and inviting bedrooms create a refined and welcoming ambiance.",
                  url: "https://67443c.myshopify.com/pages/gallery"
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
                  url: "https://67443c.myshopify.com/pages/gallery"
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
                  url: "https://67443c.myshopify.com/pages/gallery"
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
                  url: "https://67443c.myshopify.com/pages/gallery"
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
        <PageOneSectionOne/>
        <PageOneSectionTwo/>
        <SmoothScroll />
        <PageTwoSectionTwo
            sliderData = {slides}
        />
        {/* <PageOneSectionThree/> */}
        <PageOneSectionFour/>
    </>
  )
}

export default CategoryListing;