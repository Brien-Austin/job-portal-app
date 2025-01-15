import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
   <header className='w-full h-[214px] fixed bg-white shadow-header flex items-start justify-center z-50'>
    <nav className='  w-[890px] h-[80px] mx-auto mt-[21px] rounded-[122px] border-[#FCFCFC] shadow-navbar flex items-center justify-evenly gap-6 px-[26px] py-[16px]'>
    <Image unoptimized={true} src={"/logo.png"} alt='logo' width={44} height={44}/>
    <h1 className='  font-medium text-[#303030] text-[16px] leading-[22px] '>Home</h1>
    <h1 className=' font-medium  text-[#303030] text-[16px] leading-[22px] ' >Find Jobs</h1>
    <h1 className=' font-medium  text-[#303030] text-[16px] leading-[22px] '>Find Talents</h1>
    <h1 className=' font-medium  text-[#303030] text-[16px] leading-[22px] '>About us </h1>
    <h1 className=' font-medium  text-[#303030] text-[16px] leading-[22px] '>Testimonials</h1>
    <button className='w-[123px] h-[38px] bg-gradient-to-b from-[#A128FF] to-[#6100AD] text-white rounded-[30px]'>Create Jobs</button>
    </nav>


   </header>
  )
}

export default Header