import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { JobFormData } from "@/types/job";

interface JobTypeSelectProps {
  register: UseFormRegister<JobFormData>;
  errors: FieldErrors<JobFormData>;
}

const JobTypeSelect = ({ register, errors }: JobTypeSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Full-time");

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div className="relative flex flex-col-reverse">
      <div className="relative">
        <input
          {...register("jobType")}
          value={selectedValue}
          className={`peer placeholder:font-[500] w-[376px] pl-3 pr-10 text-[18px] font-[600] h-[58px] border ${
            errors.jobType ? "border-red-500" : "border-[#BCBCBC]"
          } rounded-[10px] focus:outline-none focus:border-[#00AAFF]`}
          type="text"
          readOnly
          onClick={toggleDropdown}
        />
        <span
          className={`absolute right-3 top-[50%] transform -translate-y-1/2 cursor-pointer ${
            isOpen ? "rotate-180" : ""
          }`}
          onClick={toggleDropdown}
        >
          <ChevronDown />
        </span>
      </div>
      <label className="text-[20px] font-medium text-[#636363] peer-focus:text-[#222222]">
        Job Type
      </label>
      {errors.jobType && (
        <span className="text-red-500 text-sm">{errors.jobType.message}</span>
      )}
      {isOpen && (
        <ul className="absolute top-[calc(100%)] left-0 w-full z-10 bg-white border border-[#BCBCBC] rounded-[10px] mt-1 max-h-40 overflow-y-auto w-[376px]">
          {["Full-time", "Part-time", "Remote", "Contract", "Internship"].map(
            (jobType, index) => (
              <li
                key={index}
                onClick={() => handleSelect(jobType)}
                className="px-3 py-2 hover:bg-[#f0f0f0] cursor-pointer"
              >
                {jobType}
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default JobTypeSelect;
