import React from 'react'
// import PageThreeSectionOne from '../page three/sectionOne'
// import Banner from '../page one/Banner'
// image imports
import r1 from "../../assets/finalImages/retail/1.jpg";
import r2 from "../../assets/finalImages/retail/2.jpg";
import r3 from "../../assets/finalImages/retail/3.jpg";
import r4 from "../../assets/finalImages/retail/4.jpg";
import r5 from "../../assets/finalImages/retail/5.jpg";
import r6 from "../../assets/finalImages/retail/6.jpg";
import r7 from "../../assets/finalImages/retail/7.jpg";
import r8 from "../../assets/finalImages/retail/8.jpg";
import r9 from "../../assets/finalImages/retail/9.jpg";
import r10 from "../../assets/finalImages/retail/10.jpg";


import Banner from '../page one/Banner';
import PageThreeSectionOne from '../page three/sectionOne';


const Retail = () => {
  const imageGridSections = [
    {
      topRow: [r1, r2],
      bottomRow: {
        leftGrid: [r3, r4, r5],
        rightImage: r5
      }
    },
    {
        topRow: [r6, r7],
        bottomRow: {
          leftGrid: [r8, r9, r10],
        //   rightImage: h11
        }
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

         <>
      {imageGridSections.map((section, index) => (
        <PageThreeSectionOne key={index} imageGridData={section} />
      ))}
    </>
    </>
  )
}

export default Retail;