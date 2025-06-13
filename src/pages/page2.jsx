import React from 'react'
import PageTwoSectionOne from '../components/page two/sectionOne'
import PageTwoSectionTwo from '../components/page two/sectionTwo'
import PageTwoSectionThree from '../components/page two/sectionThree'
import Banner from '../components/page one/Banner'

const Page1 = () => {
  return (
    <>
        <Banner />
        <PageTwoSectionOne/>
        <PageTwoSectionTwo/>
        <PageTwoSectionThree/>
    </>
  )
}

export default Page1