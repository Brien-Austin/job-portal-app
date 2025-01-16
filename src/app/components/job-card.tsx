"use client"
import React from 'react';
import Image from 'next/image';
import { UserRoundPlus, Building2, Layers } from 'lucide-react';
import { postedAt } from '../utils/posted-time';
import { JobListing } from '@/types/job';
import { convertToLakhs } from '../utils/convert-to-l';
import DescriptionPoints from './ui/description';

const JobCard:React.FC<JobListing> = ({ 
  imageUrl, 
  companyName, 
  jobTitle, 
  createdAt, 
  jobType, 
  maxSalary, 
  jobDescription,
  
}) => {
  return (
    <section className='w-[316px] h-[360px] shadow-navbar rounded-[12px] p-4 flex flex-col'>
      {/* Company Logo and Job Posted*/}
      <div className="flex justify-between">
        {/* Logo */}
        <div className='w-[84px] h-[82px] shadow-header rounded-[18px] flex justify-center items-center'>
          <div className="relative w-10 h-10 p-2">
            <Image src={imageUrl} fill alt={companyName} className='object-cover absolute' />
          </div>
        </div>

        {/* Posted Time */}
        <h1 className='bg-[#B0D9FF] text-black font-[500] px-2 py-1 rounded-[10px] text-[14px] h-fit'>
          {postedAt(createdAt)} 
        </h1>
      </div>

      {/* Content Container */}
      <div className="flex-1 flex flex-col">
        {/* Company Name */}
        <h1 className="mt-5 text-[20px] font-[700]">{jobTitle}</h1>

        {/* Job Requirements */}
        <div className="flex items-center justify-evenly">
          <div className='text-[#5A5A5A] flex items-center text-[14px] mt-3 gap-1'>
            <UserRoundPlus size={15}/>
            <h1 className='text-[16px]'>1-3 yr Exp</h1>
          </div>
          <div className='text-[#5A5A5A] flex items-center text-[14px] mt-3 gap-1'>
            <Building2 size={15}/>
            <h1 className='text-[16px]'>{jobType}</h1>
          </div>
          <div className='text-[#5A5A5A] flex items-center text-[14px] mt-3 gap-1'>
            <Layers size={15}/>
            <h1 className='text-[16px]'>{convertToLakhs(maxSalary)}</h1>
          </div>
        </div>

        {/* Job Description */}

       <DescriptionPoints text={jobDescription}/>

      
      </div>

      {/* Apply Button */}
      <button className='text-white bg-[#00AAFF] rounded-[10px] h-[46px] w-full mt-auto'>
        Apply now
      </button>
    </section>
  );
};

export default JobCard;