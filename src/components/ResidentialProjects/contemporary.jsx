import React from 'react'
import PageThreeSectionOne from '../page three/sectionOne'
import Banner from '../page one/Banner'
// image imports
import c1 from "../../assets/finalImages/contemporary/c1.png";
import c2 from "../../assets/finalImages/contemporary/c2.png";
import c3 from "../../assets/finalImages/contemporary/c3.png";
import c4 from "../../assets/finalImages/contemporary/c4.png";
import c5 from "../../assets/finalImages/contemporary/c5.png";
import c6 from "../../assets/finalImages/contemporary/c6.png";
import c7 from "../../assets/finalImages/contemporary/c7.png";
import c8 from "../../assets/finalImages/contemporary/c8.png";
import c9 from "../../assets/finalImages/contemporary/c9.png";
import c10 from "../../assets/finalImages/contemporary/c10.png";
import c11 from "../../assets/finalImages/contemporary/c11.png";
import c12 from "../../assets/finalImages/contemporary/c12.png";
import c13 from "../../assets/finalImages/contemporary/c13.png";
import c14 from "../../assets/finalImages/contemporary/c14.png";
import c15 from "../../assets/finalImages/contemporary/c15.png";
import c16 from "../../assets/finalImages/contemporary/c16.png";
import c17 from "../../assets/finalImages/contemporary/c17.png";
import c18 from "../../assets/finalImages/contemporary/c18.png";
import c19 from "../../assets/finalImages/contemporary/c19.png";
import c20 from "../../assets/finalImages/contemporary/c20.png";
import c21 from "../../assets/finalImages/contemporary/c21.png";
import c22 from "../../assets/finalImages/contemporary/c22.png";
import c23 from "../../assets/finalImages/contemporary/c23.png";



const Contemporary = () => {
  const imageGridSections = [
    {
      topRow: [c1, c2],
      bottomRow: {
        leftGrid: [c3, c4, c5],
        rightImage: c6
      }
    },
    {
      topRow: [c7, c8],
      bottomRow: {
        leftGrid: [c9, c10, c11],
        rightImage: c12
      }
    },
    {
      topRow: [c13, c14],
      bottomRow: {
        leftGrid: [c15, c16, c17],
        rightImage: c18
      }
    },
    {
      topRow: [c19, c20],
      bottomRow: {
        leftGrid: [c21, c22, c23],
        rightImage: c5
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

export default Contemporary;