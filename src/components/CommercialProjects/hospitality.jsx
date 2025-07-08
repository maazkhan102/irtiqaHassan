import React from 'react'
// import PageThreeSectionOne from '../page three/sectionOne'
// import Banner from '../page one/Banner'
// image imports
import h1 from "../../assets/finalImages/hospitality/1.jpg";
import h2 from "../../assets/finalImages/hospitality/2.jpg";
import h3 from "../../assets/finalImages/hospitality/3.jpg";
import h4 from "../../assets/finalImages/hospitality/4.jpg";
import h5 from "../../assets/finalImages/hospitality/5.jpg";
import h6 from "../../assets/finalImages/hospitality/6.jpg";
import h7 from "../../assets/finalImages/hospitality/7.jpg";
import h8 from "../../assets/finalImages/hospitality/8.jpg";
import h9 from "../../assets/finalImages/hospitality/9.jpg";
import h10 from "../../assets/finalImages/hospitality/10.jpg";
import h11 from "../../assets/finalImages/hospitality/11.jpg";
import h12 from "../../assets/finalImages/hospitality/12.jpg";
import h13 from "../../assets/finalImages/hospitality/13.jpg";
import h14 from "../../assets/finalImages/hospitality/14.jpg";
import h15 from "../../assets/finalImages/hospitality/15.jpg";
import h16 from "../../assets/finalImages/hospitality/16.jpg";
import h17 from "../../assets/finalImages/hospitality/17.jpg";
import h18 from "../../assets/finalImages/hospitality/18.jpg";
import h19 from "../../assets/finalImages/hospitality/19.jpg";
import h20 from "../../assets/finalImages/hospitality/20.jpg";
import h21 from "../../assets/finalImages/hospitality/21.jpg";
import h22 from "../../assets/finalImages/hospitality/22.jpg";
import h23 from "../../assets/finalImages/hospitality/23.jpg";
import h24 from "../../assets/finalImages/hospitality/24.jpg";
import h25 from "../../assets/finalImages/hospitality/25.jpg";
import h26 from "../../assets/finalImages/hospitality/26.jpg";


import Banner from '../page one/Banner';
import PageThreeSectionOne from '../page three/sectionOne';


const Hospitality = () => {
  const imageGridSections = [
    {
      topRow: [h1, h2],
      bottomRow: {
        leftGrid: [h3, h4, h5],
        rightImage: h5
      }
    },
    {
        topRow: [h6, h7],
        bottomRow: {
          leftGrid: [h8, h9, h10],
          rightImage: h11
        }
    },
    {
        topRow: [h12, h13],
        bottomRow: {
          leftGrid: [h14, h15, h16],
          rightImage: h17
        }
    },
    {
        topRow: [h18, h19],
        bottomRow: {
          leftGrid: [h20, h21, h22],
          rightImage: h23
        }
    },
    {
        topRow: [h24, h25],
        // bottomRow: {
        //   leftGrid: [h20, h21, h22],
        //   rightImage: h23
        // }
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

export default Hospitality;