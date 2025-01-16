import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { JobFormData } from "@/types/job";

interface DateInputProps {
  label: string;
  register: UseFormRegister<JobFormData>;
  name: "applicationDeadLine";
  errors: FieldErrors<JobFormData>;
}

const DateInput = ({ label, register, name, errors }: DateInputProps) => {
    {/* Setting today date as default */}
  const today = new Date().toISOString().split("T")[0]; 

  return (
    <div className="flex flex-col-reverse">
      <input
        {...register(name)}
        type="date"
        placeholder="Select a deadline"
        min={today} 
        className={`placeholder:font-[500] w-[376px] pl-3 text-[18px] font-[600] h-[58px] border ${
          errors[name] ? "border-red-500" : "border-[#BCBCBC]"
        } rounded-[10px] focus:outline-none focus:border-[#00AAFF]`}
      />
      <label className="text-[20px] font-medium text-[#636363] peer-focus:text-[#222222]">
        {label}
      </label>
      {errors[name] && (
        <span className="text-red-500 text-sm">{errors[name].message}</span>
      )}
    </div>
  );
};

export default DateInput;
