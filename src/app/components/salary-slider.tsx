import { Slider } from "@mantine/core";

import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { setMaxSalary } from "../store/slices/filter-slice";

const SalarySlider = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState(0);

  const handleChange = (newValue: number) => {
    setValue(newValue);
    dispatch(setMaxSalary(value))
  };

  return (
    <div className="flex flex-col px-5  pr-4 border-[#EAEAEA] h-[48px] w-full max-w-[400px]">
      <div className="flex  gap-5 items-start">
        <h1 className="text-[16px]">Salary Per Month</h1>
        <h1>{`₹${value}k - ₹${value + 20}k`}</h1>
      </div>
      <Slider
        color="black"
        style={{ width: "235px" }}
        className="mt-2"
        value={value}
        max={500}
        onChange={handleChange}
        marks={[{ value: 0 }]}
      />
    </div>
  );
};

export default SalarySlider;
