import React from 'react'
import PageThreeSectionOne from '../page three/sectionOne'
import Banner from '../page one/Banner'
// image imports
import sr1 from "../../assets/finalImages/showroom/sr1.png";
import sr2 from "../../assets/finalImages/showroom/sr2.png";
import sr3 from "../../assets/finalImages/showroom/sr3.png";
import sr4 from "../../assets/finalImages/showroom/sr4.png";
import sr5 from "../../assets/finalImages/showroom/sr5.png";
import sr6 from "../../assets/finalImages/showroom/sr6.png";
import sr7 from "../../assets/finalImages/showroom/sr1.png";


const Showroom = () => {
  const imageGridSections = [
    {
      topRow: [sr1, sr2],
      bottomRow: {
        leftGrid: [sr6, sr4, sr5],
        rightImage: sr3
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

export default Showroom;