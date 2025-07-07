import React, { useState, useEffect } from 'react';

const PageThreeSectionOne = ({ imageGridData }) => {
  const [previewSrc, setPreviewSrc] = useState(null);

  const handleImageClick = (src) => {
    setPreviewSrc(src);
  };

  const closeModal = () => {
    setPreviewSrc(null);
  };

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (previewSrc) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto'; // reset on unmount
    };
  }, [previewSrc]);

  const renderImage = (src, index) => (
    <img
      key={index}
      src={src}
      alt=""
      onClick={() => handleImageClick(src)}
      className="w-full h-full object-cover cursor-pointer"
    />
  );

  return (
    <>
      {/* Image Grid */}
      <div className={`flex flex-col transition-all duration-300 ${previewSrc ? 'blur-sm' : ''}`}>
        {/* Top Row */}
        <div className="grid grid-cols-2 h-1/2">
          {imageGridData.topRow.map((img, index) => renderImage(img, index))}
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-12 h-1/2">
          <div className="col-span-8 flex flex-col">
            <div className="grid grid-cols-2 h-1/2">
              {imageGridData.bottomRow.leftGrid.slice(0, 2).map((img, index) =>
                renderImage(img, index)
              )}
            </div>
            <div className="h-1/2">
              {renderImage(imageGridData.bottomRow.leftGrid[2], 2)}
            </div>
          </div>
          <div className="col-span-4">
            {renderImage(imageGridData.bottomRow.rightImage, 'right')}
          </div>
        </div>
      </div>

      {/* Image Preview Modal */}
      {previewSrc && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center"
    onClick={closeModal}
  >
    {/* Background blur + dark overlay */}
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300" />

    {/* Enlarged Image */}
    <img
      src={previewSrc}
      alt="Preview"
      className="relative z-10 w-[90%] max-w-[1000px] max-h-[90vh] rounded-xl shadow-2xl object-contain transition-transform duration-300"
      onClick={(e) => e.stopPropagation()}
    />
  </div>
)}

    </>
  );
};

export default PageThreeSectionOne;
