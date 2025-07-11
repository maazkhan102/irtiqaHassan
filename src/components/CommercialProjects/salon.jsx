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
import s13 from "../../assets/finalImages/salon/s13.jpg";
import s14 from "../../assets/finalImages/salon/s14.jpg";
import s15 from "../../assets/finalImages/salon/s15.jpg";
import s16 from "../../assets/finalImages/salon/s16.jpg";
import s17 from "../../assets/finalImages/salon/s17.jpg";
// import s18 from "../../assets/finalImages/salon/s18.jpg";
import s19 from "../../assets/finalImages/salon/s19.jpg";
import s20 from "../../assets/finalImages/salon/s20.jpg";
import s21 from "../../assets/finalImages/salon/s21.jpg";
import s22 from "../../assets/finalImages/salon/s22.jpg";
import s23 from "../../assets/finalImages/salon/s23.jpg";
import s24 from "../../assets/finalImages/salon/s24.jpg";
import s25 from "../../assets/finalImages/salon/s25.jpg";
import s26 from "../../assets/finalImages/salon/s26.jpg";
import s27 from "../../assets/finalImages/salon/s27.jpg";
import s28 from "../../assets/finalImages/salon/s28.jpg";
import s29 from "../../assets/finalImages/salon/s29.jpg";
import s30 from "../../assets/finalImages/salon/s30.jpg";
import s31 from "../../assets/finalImages/salon/s31.jpg";

import Banner from '../page one/Banner';
import PageThreeSectionOne from '../page three/sectionOne';


const Salon = () => {
  const imageGridSections = [
    {
      topRow: [s26, s27],
      bottomRow: {
        leftGrid: [s28, s29, s30],
        rightImage: s31
      }
    },
    {
      topRow: [s13, s14],
      bottomRow: {
        leftGrid: [s15, s16, s17],
        rightImage: s25
      }
    },
    {
      topRow: [s19, s20],
      bottomRow: {
        leftGrid: [s21, s22, s23],
        rightImage: s24
      }
    }
  ];
  return (
    <>
        <Banner
  className="bannerMainsalon"
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

export default Salon;