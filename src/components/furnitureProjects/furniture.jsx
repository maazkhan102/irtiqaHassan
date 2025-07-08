import React from 'react'
import PageThreeSectionOne from '../page three/sectionOne'
import Banner from '../page one/Banner'
// image imports
import f1 from "../../assets/finalImages/furniture/f1.jpg";
import f2 from "../../assets/finalImages/furniture/f2.jpg";
import f3 from "../../assets/finalImages/furniture/f3.jpg";
import f4 from "../../assets/finalImages/furniture/f4.jpg";
import f5 from "../../assets/finalImages/furniture/f5.jpg";
// import f6 from "../../assets/finalImages/furniture/f6.jpg";
import f7 from "../../assets/finalImages/furniture/f7.jpg";
import f8 from "../../assets/finalImages/furniture/f8.jpg";
import f9 from "../../assets/finalImages/furniture/f9.jpg";
import f10 from "../../assets/finalImages/furniture/f10.png";
import f11 from "../../assets/finalImages/furniture/f11.jpg";
import f12 from "../../assets/finalImages/furniture/f12.jpg";
import f13 from "../../assets/finalImages/furniture/f13.png";
import f14 from "../../assets/finalImages/furniture/f14.jpg";
import f15 from "../../assets/finalImages/furniture/f15.png";
import f16 from "../../assets/finalImages/furniture/f16.jpg";
import f17 from "../../assets/finalImages/furniture/f17.jpg";
import f18 from "../../assets/finalImages/furniture/f18.jpg";
import f19 from "../../assets/finalImages/furniture/f19.jpg";
import f20 from "../../assets/finalImages/furniture/f20.png";
import f21 from "../../assets/finalImages/furniture/f21.jpg";
import f22 from "../../assets/finalImages/furniture/f22.jpg";
import f23 from "../../assets/finalImages/furniture/f23.jpg";
import f24 from "../../assets/finalImages/furniture/f24.jpg";
import f25 from "../../assets/finalImages/furniture/f25.png";
import f26 from "../../assets/finalImages/furniture/f26.jpg";
import f27 from "../../assets/finalImages/furniture/f27.jpg";
import f28 from "../../assets/finalImages/furniture/f28.jpg";
import f29 from "../../assets/finalImages/furniture/f29.jpg";
import f30 from "../../assets/finalImages/furniture/f30.jpg";
import f31 from "../../assets/finalImages/furniture/f31.jpg";
import f32 from "../../assets/finalImages/furniture/f32.jpg";
import f33 from "../../assets/finalImages/furniture/f33.jpg";
import f34 from "../../assets/finalImages/furniture/f34.jpg";
import f35 from "../../assets/finalImages/furniture/f35.jpg";
import f36 from "../../assets/finalImages/furniture/f36.jpg";
import f37 from "../../assets/finalImages/furniture/f37.jpg";
import f38 from "../../assets/finalImages/furniture/f38.jpg";
import f39 from "../../assets/finalImages/furniture/f39.jpg";
import f40 from "../../assets/finalImages/furniture/f40.jpg";
import f41 from "../../assets/finalImages/furniture/f41.jpg";
import f42 from "../../assets/finalImages/furniture/f42.jpg";
import f43 from "../../assets/finalImages/furniture/f43.jpg";
import f44 from "../../assets/finalImages/furniture/f44.jpg";
import f45 from "../../assets/finalImages/furniture/f45.jpg";
import f46 from "../../assets/finalImages/furniture/f46.jpg";
import f47 from "../../assets/finalImages/furniture/f47.jpg";
import f48 from "../../assets/finalImages/furniture/f48.jpeg";
// import f49 from "../../assets/finalImages/furniture/f49.JPG";
// import f50 from "../../assets/finalImages/furniture/f50.JPG";
// import f51 from "../../assets/finalImages/furniture/f51.JPG";
import f52 from "../../assets/finalImages/furniture/f52.jpg";
// import f53 from "../../assets/finalImages/furniture/f53.JPG";
import f54 from "../../assets/finalImages/furniture/f54.png";
import f55 from "../../assets/finalImages/furniture/f55.jpeg";
import f56 from "../../assets/finalImages/furniture/f56.jpg";
import f57 from "../../assets/finalImages/furniture/f57.jpg";
// import f58 from "../../assets/finalImages/furniture/f58.JPG";
// import f59 from "../../assets/finalImages/furniture/f59.JPG";
// import f60 from "../../assets/finalImages/furniture/f60.JPG";
// import f61 from "../../assets/finalImages/furniture/f61.JPG";
// import f62 from "../../assets/finalImages/furniture/f62.JPG";
import f63 from "../../assets/finalImages/furniture/f63.jpg";
import f64 from "../../assets/finalImages/furniture/f64.jpg";
import f65 from "../../assets/finalImages/furniture/f65.jpg";
import f66 from "../../assets/finalImages/furniture/f66.jpg";
import f67 from "../../assets/finalImages/furniture/f67.jpg";
import f68 from "../../assets/finalImages/furniture/f68.jpg";

// f6, 37 , 32, 38
const Furniture = () => {
  const imageGridSections = [
    {
      topRow: [f1, f2],
      bottomRow: {
        leftGrid: [f3, f4, f5],
        rightImage: f5
      }
    },
    {
      topRow: [f7, f8],
      bottomRow: {
        leftGrid: [f9, f10, f11],
        rightImage: f12
      }
    },
    {
      topRow: [f13, f14],
      bottomRow: {
        leftGrid: [f15, f16, f17],
        rightImage: f18
      }
    },
    {
      topRow: [f19, f20],
      bottomRow: {
        leftGrid: [f21, f22, f23],
        rightImage: f24
      }
    },
    {
      topRow: [f25, f26],
      bottomRow: {
        leftGrid: [f27, f28, f29],
        rightImage: f30
      }
    },
    {
        topRow: [f31, f31],
        bottomRow: {
          leftGrid: [f33, f34, f35],
          rightImage: f36
        }
      },
      {
          topRow: [f36, f33],
          bottomRow: {
            leftGrid: [f33, f34, f35],
            rightImage: f36
          }
    },
    {
      topRow: [f39, f39],
      bottomRow: {
        leftGrid: [f39, f40, f41],
        rightImage: f42
      }
    },
    {
      topRow: [f43, f44],
      bottomRow: {
        leftGrid: [f45, f46, f47],
        rightImage: f47
      }
    },
    // {
    //   topRow: [f48, f49],
    //   bottomRow: {
    //     leftGrid: [f50, f51, f52],
    //     rightImage: f53
    //   }
    // },
    // {
    //   topRow: [f54, f55],
    //   bottomRow: {
    //     leftGrid: [f56, f57, f58],
    //     rightImage: f59
    //   }
    // },
    // {
    //   topRow: [f60, f61],
    //   bottomRow: {
    //     leftGrid: [f62, f63, f64],
    //     rightImage: f65
    //   }
    // },
    {
      topRow: [f66, f67],
      bottomRow: {
        leftGrid: [f68, f21, f2],
        rightImage: f46
      }
    },
  ];
  return (
    <>
        <Banner
  className="bannerMainfurniture"
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

export default Furniture;