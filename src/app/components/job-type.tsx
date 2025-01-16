"use client";

import React, { useState } from "react";
import { Briefcase, ChevronDown } from "lucide-react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import qs from "query-string";
import { useDispatch } from "react-redux";
import { setJobType } from "../store/slices/filter-slice";

const jobTypes = [
  "Remote",
  "Full-time",
  "Part-time",
  "Contract",
  "Internship",
] as const;

type JobType = typeof jobTypes[number];

const JobTypeDropdown: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();

  const currentJobType = searchParams.get('jobType') as JobType | null;
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleJobTypeSelect = (jobType: JobType) => {
    // Get current search params
    const current = qs.parse(searchParams.toString());
    
    // Create new URL with jobType parameter
    const url = qs.stringifyUrl({
      url: pathname,
      query: {
        ...current, // Preserve other search params
        jobType: jobType,
      },
    });

    // Update URL and Redux state
    router.push(url);
    dispatch(setJobType(jobType));
    setShowDropdown(false);
  };

  return (
    <div className="px-5 relative flex items-center justify-between w-1/4 gap-2 pr-4 border-r-[2px] border-[#EAEAEA] h-[48px]">
      <div className="flex items-center gap-2">
        <Briefcase className="text-[#636363]" size={24} />
        <span className="text-[16px] text-[#686868]">
          {currentJobType || "Job Type"}
        </span>
      </div>
      <button 
        onClick={toggleDropdown} 
        className="flex items-center"
        aria-label="Toggle job type dropdown"
      >
        <ChevronDown className="text-[#636363]" size={20} />
      </button>

      {/* Dropdown */}
      {showDropdown && (
        <div className="absolute top-full left-0 w-full mt-1 bg-white shadow-lg border border-gray-300 rounded-md z-50">
          {jobTypes.map((jobType, index) => (
            <button
              key={index}
              onClick={() => handleJobTypeSelect(jobType)}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors
                ${currentJobType === jobType ? 'bg-gray-50 text-blue-600' : ''}
              `}
            >
              {jobType}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobTypeDropdown;