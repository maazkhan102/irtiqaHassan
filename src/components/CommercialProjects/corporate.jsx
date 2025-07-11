import React from 'react'
// import PageThreeSectionOne from '../page three/sectionOne'
// import Banner from '../page one/Banner'
// image imports
import co1 from '../../assets/finalImages/corporate/co1.jpg';
import co2 from '../../assets/finalImages/corporate/co2.jpg';
import co3 from '../../assets/finalImages/corporate/co3.jpg';
import co4 from '../../assets/finalImages/corporate/co4.jpg';
import co5 from '../../assets/finalImages/corporate/co5.jpg';
import co6 from '../../assets/finalImages/corporate/co6.jpg';
import co7 from '../../assets/finalImages/corporate/co7.jpg';
import co8 from '../../assets/finalImages/corporate/co8.jpg';
import co9 from '../../assets/finalImages/corporate/co9.jpg';
import co10 from '../../assets/finalImages/corporate/co10.jpg';
import co11 from '../../assets/finalImages/corporate/co11.jpg';
import co12 from '../../assets/finalImages/corporate/co12.jpg';
import co13 from '../../assets/finalImages/corporate/co13.jpg';
import co14 from '../../assets/finalImages/corporate/co14.jpg';

import Banner from '../page one/Banner';
import PageThreeSectionOne from '../page three/sectionOne';


const Corporate = () => {
  const imageGridSections = [
    {
      topRow: [co1, co2],
      bottomRow: {
        leftGrid: [co3, co4, co5],
        rightImage: co6
      }
    },
    {
        topRow: [co7, co8],
        bottomRow: {
          leftGrid: [co9, co10, co11],
          rightImage: co12
        }
    }

  ];
  return (
    <>
        <Banner
  className="bannerMaincorporate"
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

export default Corporate;