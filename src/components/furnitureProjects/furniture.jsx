import React from 'react'
import PageThreeSectionOne from '../page three/sectionOne'
import Banner from '../page one/Banner'
// image imports
import f1 from "../../assets/finalImages/furniture/f1.jpg";
import f2 from "../../assets/finalImages/furniture/f2.jpg";
import f3 from "../../assets/finalImages/furniture/f3.jpg";
import f4 from "../../assets/finalImages/furniture/f4.jpg";
import f5 from "../../assets/finalImages/furniture/f5.jpg";
import f6 from "../../assets/finalImages/furniture/f6.jpg";
import f7 from "../../assets/finalImages/furniture/f7.jpg";
import f8 from "../../assets/finalImages/furniture/f8.jpg";
import f9 from "../../assets/finalImages/furniture/f9.jpg";
import f10 from "../../assets/finalImages/furniture/f10.png";
import f11 from "../../assets/finalImages/furniture/f11.jpg";
import f12 from "../../assets/finalImages/furniture/f12.jpg";
import f13 from "../../assets/finalImages/furniture/f13.png";
import f14 from "../../assets/finalImages/furniture/f14.jpg";
import f15 from "../../assets/finalImages/furniture/f15.png";
import f16 from "../../assets/finalImages/furniture/f16.jpg";
import f17 from "../../assets/finalImages/furniture/f17.jpg";
import f18 from "../../assets/finalImages/furniture/f18.jpg";
import f19 from "../../assets/finalImages/furniture/f19.jpg";
import f20 from "../../assets/finalImages/furniture/f20.png";
import f21 from "../../assets/finalImages/furniture/f21.jpg";
import f22 from "../../assets/finalImages/furniture/f22.jpg";
import f23 from "../../assets/finalImages/furniture/f23.jpg";
import f24 from "../../assets/finalImages/furniture/f24.jpg";
// import f25 from "../../assets/finalImages/furniture/f25.png";
// import f26 from "../../assets/finalImages/furniture/f26.jpg";
// import f27 from "../../assets/finalImages/furniture/f27.jpg";




const Furniture = () => {
  const imageGridSections = [
    {
      topRow: [f1, f2],
      bottomRow: {
        leftGrid: [f3, f4, f5],
        rightImage: f6
      }
    },
    {
      topRow: [f7, f8],
      bottomRow: {
        leftGrid: [f9, f10, f11],
        rightImage: f12
      }
    },
    {
      topRow: [f13, f14],
      bottomRow: {
        leftGrid: [f15, f16, f17],
        rightImage: f18
      }
    },
    {
      topRow: [f19, f20],
      bottomRow: {
        leftGrid: [f21, f22, f23],
        rightImage: f24
      }
    }
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
         <>
      {imageGridSections.map((section, index) => (
        <PageThreeSectionOne key={index} imageGridData={section} />
      ))}
    </>
    </>
  )
}

export default Furniture;