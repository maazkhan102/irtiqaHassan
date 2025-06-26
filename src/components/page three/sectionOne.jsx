import React from 'react'
import { Image } from 'antd';

const PageThreeSectionOne = ({imageGridData}) => {
    return (
      <div className="flex flex-col">
        {/* Top Row */}
        <div className="grid grid-cols-2 h-1/2">
          {imageGridData.topRow.map((img, index) => (
            <Image
              key={index}
              height={"100%"}
              width={"100%"}
              className="max-w-full object-cover"
              src={img}
            />
          ))}
        </div>
  
        {/* Bottom Row */}
        <div className="grid grid-cols-12 h-1/2">
          <div className="col-span-8 flex flex-col">
            <div className="grid grid-cols-2 h-1/2">
              {imageGridData.bottomRow.leftGrid.slice(0, 2).map((img, index) => (
                <Image
                  key={index}
                  height={"100%"}
                  width={"100%"}
                  className="max-w-full object-cover"
                  src={img}
                />
              ))}
            </div>
            <div className="h-1/2">
              <Image
                height={"100%"}
                width={"100%"}
                className="max-w-full object-cover"
                src={imageGridData.bottomRow.leftGrid[2]}
              />
            </div>
          </div>
          <div className="col-span-4">
            <Image
              height={"100%"}
              width={"100%"}
              className="max-w-full object-cover"
              src={imageGridData.bottomRow.rightImage}
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default PageThreeSectionOne;
