import React from 'react'
// import PageThreeSectionOne from '../page three/sectionOne'
// import Banner from '../page one/Banner'
// image imports
import s1 from "../../assets/finalImages/salon/s1.png";
import s2 from "../../assets/finalImages/salon/s2.png";
import s3 from "../../assets/finalImages/salon/s3.png";
import s4 from "../../assets/finalImages/salon/s4.png";
import s5 from "../../assets/finalImages/salon/s5.png";
import s6 from "../../assets/finalImages/salon/s6.png";
import s7 from "../../assets/finalImages/salon/s7.png";
import s8 from "../../assets/finalImages/salon/s8.png";
import s9 from "../../assets/finalImages/salon/s9.png";
import s10 from "../../assets/finalImages/salon/s10.png";
import s11 from "../../assets/finalImages/salon/s11.png";
import s12 from "../../assets/finalImages/salon/s12.png";
import Banner from '../page one/Banner';
import PageThreeSectionOne from '../page three/sectionOne';


const Salon = () => {
  const imageGridSections = [
    {
      topRow: [s7, s8],
      bottomRow: {
        leftGrid: [s9, s10, s11],
        rightImage: s12
      }
    },
    {
      topRow: [s1, s2],
      bottomRow: {
        leftGrid: [s3, s4, s5],
        rightImage: s6
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

export default Salon;