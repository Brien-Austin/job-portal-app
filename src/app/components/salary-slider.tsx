"use client"
import { Slider } from "@mantine/core";
import React, { useEffect, useState } from "react";


import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from 'query-string';

const SalarySlider = () => {
  
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // Initialize value from URL or default to 0
  const initialValue = parseInt(searchParams.get('salary') || '0');
  const [value, setValue] = useState(initialValue);

  // Update slider value when URL changes
  useEffect(() => {
    const urlValue = parseInt(searchParams.get('salary') || '0');
    setValue(urlValue);
  }, [searchParams]);

  const handleChange = (newValue: number) => {
    setValue(newValue);
    
    // Debounce the URL update and dispatch to prevent too many updates
    const timeoutId = setTimeout(() => {
      // Get current search parameters
      const current = Object.fromEntries(searchParams.entries());
      
      // Create new URL with updated salary
      const url = qs.stringifyUrl({
        url: pathname,
        query: {
          ...current,
          salary: newValue.toString(),
        },
      });

      router.push(url);
    
    }, 100); // Small delay to prevent rapid updates

    return () => clearTimeout(timeoutId);
  };

  return (
    <div className="flex flex-col px-5 pr-4 border-[#EAEAEA] h-[48px] w-full max-w-[400px]">
      <div className="flex gap-5 items-start justify-between">
        <h1 className="text-[16px] text-[#686868]">Salary Per Month</h1>
        <h1 className="text-[16px] text-[#686868]">{`₹${value}k - ₹${value + 20}k`}</h1>
      </div>
      <Slider
        color="black"
        style={{ width: "235px" }}
        className="mt-2"
        value={value}
        max={100}
        onChange={handleChange}
        marks={[{ value: 0 }]}
        label={`₹${value}k`}
        
      />
    </div>
  );
};

export default SalarySlider;