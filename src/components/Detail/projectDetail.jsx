import React from 'react'
import PageThreeSectionOne from '../../components/page three/sectionOne'
import Banner from '../../components/page one/Banner'
// image imports
import m1 from "../../assets/demoImages/m1.png";
import m2 from "../../assets/demoImages/m2.png";
import m3 from "../../assets/demoImages/m3.png";
import m4 from "../../assets/demoImages/m4.png";
import m5 from "../../assets/demoImages/m5.png";
import m6 from "../../assets/demoImages/m6.png";
import m7 from "../../assets/demoImages/m7.png";
import m8 from "../../assets/demoImages/m8.png";
import m9 from "../../assets/demoImages/m9.png";
import m10 from "../../assets/demoImages/m10.png";
import m11 from "../../assets/demoImages/m11.png";
import m12 from "../../assets/demoImages/m12.png";

const ProjectDetail = () => {
  const imageGridSections = [
    {
      topRow: [m7, m11],
      bottomRow: {
        leftGrid: [m9, m10, m8],
        rightImage: m12
      }
    },
    {
      topRow: [m1, m5],
      bottomRow: {
        leftGrid: [m2, m4, m6],
        rightImage: m3
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

export default ProjectDetail