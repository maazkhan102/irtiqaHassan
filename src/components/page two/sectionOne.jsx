import React from 'react'

const PageTwoSectionOne = ({title , description}) => {
    return (
        <div className='flex flex-col gap-6 items-center justify-center md:h-[400px] bg-[#0F0F0FE8] relative'>
            <div className='md:absolute inset-0 z-[0]' style={{ background: "transparent linear-gradient(180deg, #09030400 0%, #0A040519 69%, #0F0F0FE8 86%, #101010 100%) 0% 0% no-repeat padding-box" }} />
            <div className="mt-[30px] md:mt-[0px] text-[22px] md:text-[30px] nigelina text-[#C0A07A] leading-9 relative w-[50%] text-center z-[1]">
                <span className="md:absolute top-[25%] -left-10 w-[30px] h-[2px] bg-[#C0A07A]" />
                <span className="md:absolute top-[25%] -right-10 w-[30px] h-[2px] bg-[#C0A07A]" />
                {title}
            </div>
            <div className='text-[14px] md:text-[22px] pb-[30px] flex items-center justify-center text-center w-[70%] text-white z-[1]'>{description}</div>
        </div>
    )
}

export default PageTwoSectionOne
