import { countries } from '@/app/data/countries';
import { JobFormData } from '@/types/job';
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form';

interface LocationDropdownProps {
  label: string;
  placeholder: string;
  register: UseFormRegister<JobFormData>;
  errors: FieldErrors<JobFormData>;
  setValue: UseFormSetValue<JobFormData>;
}

const LocationDropdown: React.FC<LocationDropdownProps> = ({
  label,
  placeholder,
  register,
  errors,
  setValue,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelect = (country: string) => {
    setValue('location', country); // Update the form state
    setShowDropdown(false);
  };

  return (
    <div className="relative flex flex-col-reverse">
      <div className="relative">
        <input
          {...register('location')}
          placeholder={placeholder}
          className={`placeholder:font-[500] w-[376px] pl-3 pr-10 text-[18px] font-[600] h-[58px] border ${
            errors['location'] ? 'border-red-500' : 'border-[#BCBCBC]'
          } rounded-[10px] focus:outline-none focus:border-[#00AAFF]`}
          type="text"
          readOnly
        />
        <span
          className="absolute right-3 top-[50%] transform -translate-y-1/2 cursor-pointer"
          onClick={() => setShowDropdown((prev) => !prev)}
        >
          <ChevronDown />
        </span>
      </div>
      <label className="text-[20px] font-medium text-[#636363]">{label}</label>

      {showDropdown && (
        <div className="absolute top-[calc(100%)] left-0 w-full">
          <ul className="mt-[4px] z-10 bg-white border border-[#BCBCBC] rounded-[10px] max-h-40 overflow-y-auto w-[376px] shadow-sm">
            {countries.map((country, index) => (
              <li
                key={index}
                onClick={() => handleSelect(country.name)}
                className="px-3 py-2 hover:bg-[#f0f0f0] cursor-pointer text-[16px] font-medium"
              >
                {country.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LocationDropdown;
