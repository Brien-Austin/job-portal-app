import React from "react";
import { JobFormData } from "@/types/job";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Calendar } from "lucide-react";

interface DateInputProps {
  label: string;
  register: UseFormRegister<JobFormData>;
  name: "applicationDeadLine";
  errors: FieldErrors<JobFormData>;
  min?: string;
  className?: string;
}

const DateInput = ({
  label,
  register,
  name,
  errors,
  min,
  className = ""
}: DateInputProps) => {
  // Reference to the input element
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Function to handle calendar icon click
  const handleCalendarClick = () => {
    if (inputRef.current) {
      inputRef.current.showPicker();
    }
  };

  return (
    <div className="flex flex-col-reverse">
      <div className="relative">
        <input
          {...register(name)}
          type="date"
          min={min}
          ref={inputRef}
          className={`placeholder:font-[500] w-[376px] pl-3 pr-10 text-[18px] font-[600] h-[58px] border ${
            errors[name] ? 'border-red-500' : 'border-[#BCBCBC]'
          } rounded-[10px] focus:outline-none focus:border-[#00AAFF] ${className}`}
        />
        <Calendar 
          className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 cursor-pointer hover:text-[#00AAFF] transition-colors" 
          onClick={handleCalendarClick}
        />
      </div>
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