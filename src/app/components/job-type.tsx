"use client";

import React, { useState } from "react";
import { Briefcase, ChevronDown } from "lucide-react";

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
  const dispatch = useDispatch();

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedJobType, setSelectedJobType] = useState<JobType | null>(null);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleJobTypeSelect = (jobType: JobType) => {
    setSelectedJobType(jobType);
    setShowDropdown(false);
    dispatch(setJobType(jobType));
  };

  return (
    <div className="px-5 relative flex items-center justify-between w-1/4 gap-2 pr-4 border-r-[2px] border-[#EAEAEA] h-[48px]">
      <div className="flex items-center gap-2">
        <Briefcase className="text-[#636363]" size={24} />
        <span className="text-[16px] text-[#686868]">
          {selectedJobType || "Job Type"}
        </span>
      </div>
      <button onClick={toggleDropdown} className="flex items-center">
        <ChevronDown className="text-[#636363]" size={20} />
      </button>

      {/* Dropdown */}
      {showDropdown && (
        <div className="absolute top-full left-0 w-full mt-1 bg-white shadow-lg border border-gray-300 rounded-md z-50">
          {jobTypes.map((jobType, index) => (
            <button
              key={index}
              onClick={() => handleJobTypeSelect(jobType as JobType)}
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
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
