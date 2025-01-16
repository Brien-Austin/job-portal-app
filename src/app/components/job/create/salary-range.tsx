// components/SalaryRange.tsx
import { JobFormData } from "@/types/job";
import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface SalaryRangeProps {
  register: UseFormRegister<JobFormData>;
  errors: FieldErrors<JobFormData>;
}

const SalaryRange = ({ register, errors }: SalaryRangeProps) => (
  <div className="flex flex-col w-full">
    <label className="text-[20px] font-medium text-[#636363] peer-focus:text-[#222222] w-full">
      Salary Range
    </label>
    <div className="flex w-full gap-4">
      <div className="flex flex-col w-1/2">
        <input
          {...register("minSalary", { 
            valueAsNumber: true,
            setValueAs: v => v === "" ? 0 : parseInt(v)
          })}
          type="number"
          placeholder="Min Salary"
          className={`peer placeholder:font-[500] w-full pl-3 text-[18px] font-[600] h-[58px] border ${
            errors.minSalary ? 'border-red-500' : 'border-[#BCBCBC]'
          } rounded-[10px] focus:outline-none focus:border-[#00AAFF]`}
        />
        {errors.minSalary && (
          <span className="text-red-500 text-sm">{errors.minSalary.message}</span>
        )}
      </div>
      <div className="flex flex-col w-1/2">
        <input
          {...register("maxSalary", { 
            valueAsNumber: true,
            setValueAs: v => v === "" ? 0 : parseInt(v)
          })}
          type="number"
          placeholder="Max Salary"
          className={`peer placeholder:font-[500] w-full pl-3 text-[18px] font-[600] h-[58px] border ${
            errors.maxSalary ? 'border-red-500' : 'border-[#BCBCBC]'
          } rounded-[10px] focus:outline-none focus:border-[#00AAFF]`}
        />
        {errors.maxSalary && (
          <span className="text-red-500 text-sm">{errors.maxSalary.message}</span>
        )}
      </div>
    </div>
  </div>
);

export default SalaryRange;