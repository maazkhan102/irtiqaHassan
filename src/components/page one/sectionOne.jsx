import React from 'react'

const PageOneSectionOne = ({title , description}) => {
    return (
        <div className='flex flex-col gap-6 items-center justify-center md:h-[400px]'>
            <div className="text-[22px] md:text-[30px] nigelina text-[#C0A07A] leading-9 relative w-[50%] text-center pt-[30px] md:pt-0">
                <span className="absolute top-[25%] -left-10 w-[30px] h-[2px] bg-[#C0A07A]" />
                <span className="absolute top-[25%] -right-10 w-[30px] h-[2px] bg-[#C0A07A]" />
                {title}
            </div>
            <div className='text-[14px] md:text-[22px] flex items-center justify-center text-[#515151] text-center w-[70%] pb-[30px] md:pb-0'>{description}</div>
        </div>
    )
}

export default PageOneSectionOne
