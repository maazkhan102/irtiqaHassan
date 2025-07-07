import React from 'react'
import PageThreeSectionOne from '../page three/sectionOne'
import Banner from '../page one/Banner'
// image imports
import p1 from "../../assets/finalImages/parisian/p1.png";
import p2 from "../../assets/finalImages/parisian/p2.png";
import p3 from "../../assets/finalImages/parisian/p3.png";
import p4 from "../../assets/finalImages/parisian/p4.png";
import p5 from "../../assets/finalImages/parisian/p5.png";
import p6 from "../../assets/finalImages/parisian/p6.png";
import p7 from "../../assets/finalImages/parisian/p7.png";
import p8 from "../../assets/finalImages/parisian/p8.png";
import p9 from "../../assets/finalImages/parisian/p9.png";
import p10 from "../../assets/finalImages/parisian/p10.png";
import p11 from "../../assets/finalImages/parisian/p11.png";
import p12 from "../../assets/finalImages/parisian/p12.png";
import p13 from "../../assets/finalImages/parisian/p13.png";
import p14 from "../../assets/finalImages/parisian/p14.png";
import p15 from "../../assets/finalImages/parisian/p15.png";
import p16 from "../../assets/finalImages/parisian/p16.png";
import p17 from "../../assets/finalImages/parisian/p17.png";
import p18 from "../../assets/finalImages/parisian/p18.png";
import p19 from "../../assets/finalImages/parisian/p19.png";
import p20 from "../../assets/finalImages/parisian/p20.png";
import p21 from "../../assets/finalImages/parisian/p21.png";
import p22 from "../../assets/finalImages/parisian/p22.png";
import p23 from "../../assets/finalImages/parisian/p23.png";
import p24 from "../../assets/finalImages/parisian/p24.png";
// import p25 from "../../assets/finalImages/parisian/p25.png";
// import p26 from "../../assets/finalImages/parisian/p26.png";
// import p27 from "../../assets/finalImages/parisian/p27.png";

const Parisian = () => {
  const imageGridSections = [
    {
      topRow: [p1, p2],
      bottomRow: {
        leftGrid: [p3, p4, p5],
        rightImage: p6
      }
    },
    {
      topRow: [p7, p8],
      bottomRow: {
        leftGrid: [p9, p10, p11],
        rightImage: p12
      }
    },
    {
      topRow: [p13, p14],
      bottomRow: {
        leftGrid: [p15, p16, p17],
        rightImage: p18
      }
    },
    {
      topRow: [p19, p20],
      bottomRow: {
        leftGrid: [p21, p22, p23],
        rightImage: p24
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

export default Parisian;