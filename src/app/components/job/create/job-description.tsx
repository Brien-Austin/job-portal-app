
import { JobFormData } from "@/types/job";
import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface JobDescriptionProps {
  register: UseFormRegister<JobFormData>;
  errors: FieldErrors<JobFormData>;
}

const JobDescription = ({ register, errors }: JobDescriptionProps) => (
  <div className="col-span-2 flex flex-col-reverse w-full">
    <textarea
      {...register("jobDescription")}
      placeholder="Please share a description to let the candidate know more about the job role"
      className={`peer text-[16px] py-3 px-2 placeholder:font-[500] placeholder:text-[16px] placeholder:py placeholder:px-2 w-full pl-3  font-[600] h-[150px] border ${
        errors.jobDescription ? 'border-red-500' : 'border-[#BCBCBC]'
      } rounded-[10px] focus:outline-none focus:border-[#00AAFF] resize-none`}
    />
    <label className="text-[20px] font-medium text-[#636363] peer-focus:text-[#222222]">
      Job Description
    </label>
    {errors.jobDescription && (
      <span className="text-red-500 text-sm">{errors.jobDescription.message}</span>
    )}
  </div>
);

export default JobDescription;