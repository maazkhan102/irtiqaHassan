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
                  description: "From the moment you step into the expansive living area, you’ll be immersed in the awe-inspiring views that define every room. The beautifully appointed sitting areas, elegant dining spaces, and inviting bedrooms create a refined and welcoming ambiance",
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
                  description: "From the moment you step into the expansive living area, you’ll be immersed in the awe-inspiring views that define every room. The beautifully appointed sitting areas, elegant dining spaces, and inviting bedrooms create a refined and welcoming ambiance",
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
                  description: "From the moment you step into the expansive living area, you’ll be immersed in the awe-inspiring views that define every room. The beautifully appointed sitting areas, elegant dining spaces, and inviting bedrooms create a refined and welcoming ambiance",
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
                  description: "From the moment you step into the expansive living area, you’ll be immersed in the awe-inspiring views that define every room. The beautifully appointed sitting areas, elegant dining spaces, and inviting bedrooms create a refined and welcoming ambiance",
                  url: "https://67443c.myshopify.com/pages/gallery"
              },
          ];

  return (
    <>  
        <Banner
  className="listingBanner"
  title={
    <>
      Design. Detail. Luxury
    </>
  }
  description={
    <>
      A timeless design is built on intangible factors such as dreams and inspirations
    </>
  }
/>

        <PageOneSectionOne
            title="Our Portfolio"
            description="IHI is a high-end Architecture, Interior Design and Furniture studio driven by exquisite taste, unparalleled service and unmatched quality. From planning spaces with utmost precision, creating unique styles from Modern Luxury to French Parisian and executing designs with high-end furniture and finishes. Be it residential, commercial or retail, at IHI, we don't just design interiors, we design a lifestyle."
        />
        <PageOneSectionTwo/>
        <PageOneSectionOne
            title="DESIGN PHILOSOPHY"
            description="A timeless design is built on intangible factors such as dreams and inspiration. Truly great Architecture and Interior is not controlled by catchphrases of the times. It transcends time and space. It is about design that is modern and classic, it is about design that is exclusive and comfortable. It is about design that lasts, where function meets art in a space that is both timeless and memorable."
        />
        {/* <SmoothScroll />
        <PageTwoSectionTwo
            sliderData = {slides}
        /> */}
        {/* <PageOneSectionThree/> */}
        <PageOneSectionFour/>
    </>
  )
}

export default CategoryListing;