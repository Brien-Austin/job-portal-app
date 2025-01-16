
import { JobFormData } from "@/types/job";
import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface FormInputProps {
  label: string;
  register: UseFormRegister<JobFormData>;
  name: "jobTitle" | "jobDescription" | "companyName" | "location" | "jobType" | "minSalary" | "maxSalary" | "applicationDeadLine";
  type?: string;
  placeholder?: string;
  errors: FieldErrors<JobFormData>;
  min?: string;
  className?: string;
}

const FormInput = ({
  label,
  register,
  name,
  type = "text",
  placeholder,
  errors,
  min,
  className = ""
}: FormInputProps) => (
  <div className="flex flex-col-reverse">
    <input
      {...register(name)}
      type={type}
      placeholder={placeholder}
      min={min}
      className={`placeholder:font-[500] w-[376px] pl-3 text-[18px] font-[600] h-[58px] border ${
        errors[name] ? 'border-red-500' : 'border-[#BCBCBC]'
      } rounded-[10px] focus:outline-none focus:border-[#00AAFF] ${className}`}
    />
    <label className="text-[20px] font-medium text-[#636363] peer-focus:text-[#222222]">
      {label}
    </label>
    {errors[name] && (
      <span className="text-red-500 text-sm">{errors[name].message}</span>
    )}
  </div>
);

export default FormInput;