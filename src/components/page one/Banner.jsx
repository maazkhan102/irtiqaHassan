import React from 'react';

const Banner = () => {
  return (
    <div
      className="min-h-[730px] bg-cover bg-center flex items-center justify-center text-white text-center px-4"
      style={{
        backgroundImage: "url('https://www.bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2023/09/50-luxury-center-tables-featured-image.png')",
      }}
    >
      <div className="max-w-2xl">
        <h1 className="text-[30px] md:text-[45px] nigelina text-white leading-7 md:leading-13">
        Far From Ordinary,<br />
        Close To Perfect!
        </h1>
        <p className="text-[16px] md:text-[18px] nigelina text-white leading-6 mt-[10px]">
            What matters to us is timeless design, 
            <br />
            sustainable quality and ecological awareness.
        </p>
      </div>
    </div>
  );
};

export default Banner;
