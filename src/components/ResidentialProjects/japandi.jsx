import React from 'react'
import PageThreeSectionOne from '../page three/sectionOne'
import Banner from '../page one/Banner'
// image imports
import j1 from "../../assets/finalImages/japandi/j1.jpg";
import j2 from "../../assets/finalImages/japandi/j2.jpg";
import j3 from "../../assets/finalImages/japandi/j3.jpg";
import j4 from "../../assets/finalImages/japandi/j4.jpg";
import j5 from "../../assets/finalImages/japandi/j5.jpg";
import j6 from "../../assets/finalImages/japandi/j6.jpg";
import j7 from "../../assets/finalImages/japandi/j7.jpg";
import j8 from "../../assets/finalImages/japandi/j8.jpg";
import j9 from "../../assets/finalImages/japandi/j9.png";
import j10 from "../../assets/finalImages/japandi/j10.png";
import j11 from "../../assets/finalImages/japandi/j11.png";
import j12 from "../../assets/finalImages/japandi/j12.png";
import j13 from "../../assets/finalImages/japandi/j13.png";
import j14 from "../../assets/finalImages/japandi/j14.png";
import j15 from "../../assets/finalImages/japandi/j15.png";
import j16 from "../../assets/finalImages/japandi/j16.png";
import j17 from "../../assets/finalImages/japandi/j17.png";



const Japandi = () => {
  const imageGridSections = [
    {
      topRow: [j1, j2],
      bottomRow: {
        leftGrid: [j3, j4, j5],
        rightImage: j6
      }
    },
    {
      topRow: [j7, j8],
      bottomRow: {
        leftGrid: [j9, j10, j11],
        rightImage: j12
      }
    },
    {
      topRow: [j13, j14],
      bottomRow: {
        leftGrid: [j15, j16, j17],
        rightImage: j9
      }
    }
  ];
  return (
    <>
        <Banner
  className="bannerMainresidential"
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

export default Japandi;