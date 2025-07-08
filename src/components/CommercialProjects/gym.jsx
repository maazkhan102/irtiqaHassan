import React from 'react'
// import PageThreeSectionOne from '../page three/sectionOne'
// import Banner from '../page one/Banner'
// image imports
import g1 from "../../assets/finalImages/gym/g1.jpg";
import g2 from "../../assets/finalImages/gym/g2.jpg";
import g3 from "../../assets/finalImages/gym/g3.jpg";
import g4 from "../../assets/finalImages/gym/g4.jpg";
import g5 from "../../assets/finalImages/gym/g5.jpg";
import g13 from "../../assets/finalImages/gym/g13.jpg";
import g7 from "../../assets/finalImages/gym/g7.jpg";
import g8 from "../../assets/finalImages/gym/g8.jpg";
import g9 from "../../assets/finalImages/gym/g9.jpg";
import g10 from "../../assets/finalImages/gym/g10.jpg";
import g11 from "../../assets/finalImages/gym/g11.jpg";
import g12 from "../../assets/finalImages/gym/g12.jpg";

import Banner from '../page one/Banner';
import PageThreeSectionOne from '../page three/sectionOne';


const Gym = () => {
  const imageGridSections = [
    {
      topRow: [g1, g2],
      bottomRow: {
        leftGrid: [g3, g4, g5],
        rightImage: g13
      }
    },
    {
        topRow: [g7, g8],
        bottomRow: {
          leftGrid: [g9, g10, g11],
          rightImage: g12
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

export default Gym;