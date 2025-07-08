import React from 'react'
import PageThreeSectionOne from '../page three/sectionOne'
import Banner from '../page one/Banner'
// image imports
import a1 from "../../assets/finalImages/architectural/a1.png";
import a2 from "../../assets/finalImages/architectural/a2.png";
import a3 from "../../assets/finalImages/architectural/a3.png";
import a4 from "../../assets/finalImages/architectural/a4.png";
import a5 from "../../assets/finalImages/architectural/a5.png";
import a6 from "../../assets/finalImages/architectural/a6.png";
import a7 from "../../assets/finalImages/architectural/a7.png";
import a8 from "../../assets/finalImages/architectural/a8.png";
import a9 from "../../assets/finalImages/architectural/a9.png";
import a10 from "../../assets/finalImages/architectural/a10.png";
import a11 from "../../assets/finalImages/architectural/a11.png";
import a12 from "../../assets/finalImages/architectural/a12.png";
import a13 from "../../assets/finalImages/architectural/a13.png";
import a14 from "../../assets/finalImages/architectural/a14.png";
import a15 from "../../assets/finalImages/architectural/a15.png";
import a16 from "../../assets/finalImages/architectural/a16.png";
import a17 from "../../assets/finalImages/architectural/a17.png";
import a18 from "../../assets/finalImages/architectural/a18.png";
import a19 from "../../assets/finalImages/architectural/a19.png";
import a20 from "../../assets/finalImages/architectural/a20.png";
import a21 from "../../assets/finalImages/architectural/a21.png";
import a22 from "../../assets/finalImages/architectural/a22.jpg";
import a23 from "../../assets/finalImages/architectural/a23.jpg";
import a24 from "../../assets/finalImages/architectural/a24.jpg";
import a25 from "../../assets/finalImages/architectural/a25.jpg";
import a26 from "../../assets/finalImages/architectural/a26.jpg";
import a27 from "../../assets/finalImages/architectural/a27.jpg";
import a28 from "../../assets/finalImages/architectural/a28.jpg";
import a29 from "../../assets/finalImages/architectural/a29.png";
import a30 from "../../assets/finalImages/architectural/a30.png";
import a31 from "../../assets/finalImages/architectural/a31.png";
import a32 from "../../assets/finalImages/architectural/a32.png";






const Architecture = () => {
  const imageGridSections = [
    {
      topRow: [a22, a23],
      bottomRow: {
        leftGrid: [a31, a25, a26],
        rightImage: a27
      }
    },
    {
      topRow: [a28, a19],
      bottomRow: {
        leftGrid: [a30, a31, a32],
        rightImage: a8
      }
    },
    // {
    //   topRow: [a1, a2],
    //   bottomRow: {
    //     leftGrid: [a3, a4, a5],
    //     rightImage: a6
    //   }
    // },
    {
      topRow: [a7, a8],
      bottomRow: {
        leftGrid: [a9, a10, a11],
        rightImage: a12
      }
    },
    {
      topRow: [a27, a14],
      bottomRow: {
        leftGrid: [a15, a16, a17],
        rightImage: a18
      }
    },
    {
      topRow: [a19, a20],
      bottomRow: {
        leftGrid: [a21, a3, a11],
        rightImage: a14
      }
    }
  ];
  return (
    <>
        <Banner
  className="bannerMainarchitecture"
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

export default Architecture;