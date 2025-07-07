import React from 'react';

const Banner = ({ title , description , className = '' }) => {
  return (
    <div
      className={`${className} min-h-[100vh] bg-cover bg-center flex items-center justify-center text-white text-center px-4`}
    >
      <div className="max-w-2xl">
        <h1 className="text-[30px] md:text-[45px] nigelina text-white leading-7 md:leading-13">
          {title}
        </h1>
        <p className="text-[16px] md:text-[18px] nigelina text-white leading-6 mt-[10px]">
            {description}
        </p>
      </div>
    </div>
  );
};

export default Banner;
