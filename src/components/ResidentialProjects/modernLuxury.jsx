import React from 'react'
import PageThreeSectionOne from '../page three/sectionOne'
import Banner from '../page one/Banner'
// image imports
import m1 from "../../assets/finalImages/modernLuxury/ml1.jpg";
import m2 from "../../assets/finalImages/modernLuxury/ml2.jpg";
import m3 from "../../assets/finalImages/modernLuxury/ml3.jpg";
import m4 from "../../assets/finalImages/modernLuxury/ml4.jpg";
import m5 from "../../assets/finalImages/modernLuxury/ml5.jpg";
import m6 from "../../assets/finalImages/modernLuxury/ml6.jpg";
import m7 from "../../assets/finalImages/modernLuxury/ml7.jpg";
import m8 from "../../assets/finalImages/modernLuxury/ml8.jpg";
import m9 from "../../assets/finalImages/modernLuxury/ml9.jpg";
import m10 from "../../assets/finalImages/modernLuxury/ml10.jpg";
import m11 from "../../assets/finalImages/modernLuxury/ml11.jpg";
import m12 from "../../assets/finalImages/modernLuxury/ml12.jpg";
import m13 from "../../assets/finalImages/modernLuxury/ml13.jpg";
import m14 from "../../assets/finalImages/modernLuxury/ml14.jpg";
import m15 from "../../assets/finalImages/modernLuxury/ml15.jpg";
import m16 from "../../assets/finalImages/modernLuxury/ml16.jpg";
import m17 from "../../assets/finalImages/modernLuxury/ml17.jpg";
import m18 from "../../assets/finalImages/modernLuxury/ml18.jpg";
import m19 from "../../assets/finalImages/modernLuxury/ml19.jpg";
import m20 from "../../assets/finalImages/modernLuxury/ml20.jpg";
import m21 from "../../assets/finalImages/modernLuxury/ml21.jpg";
import m22 from "../../assets/finalImages/modernLuxury/ml22.jpg";


const ModernLuxury = () => {
  const imageGridSections = [
    {
      topRow: [m7, m11],
      bottomRow: {
        leftGrid: [m9, m10, m8],
        rightImage: m12
      }
    },
    {
      topRow: [m1, m5],
      bottomRow: {
        leftGrid: [m2, m4, m6],
        rightImage: m3
      }
    },
    {
      topRow: [m13, m14],
      bottomRow: {
        leftGrid: [m15, m16, m17],
        rightImage: m18
      }
    },
    {
      topRow: [m19, m20],
      bottomRow: {
        leftGrid: [m21, m22, m5],
        rightImage: m11
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

export default ModernLuxury