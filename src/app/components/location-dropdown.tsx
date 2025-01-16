"use client";

import React, { useState } from "react";
import { MapPin, ChevronDown } from "lucide-react";
import { countries } from "@/app/data/countries";

import { useDispatch } from "react-redux";
import { setLocation } from "../store/slices/filter-slice";

const LocationDropdown: React.FC = () => {
  const dispatch = useDispatch()

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleLocationSelect = (country: string) => {
    setSelectedLocation(country);
    setShowDropdown(false);
    dispatch(setLocation(country))

    

   
  };

  return (
    <div className=" px-5 relative flex items-center justify-between w-1/4 gap-2 pr-4 border-r-[2px] border-[#EAEAEA] h-[48px]">
      <div className="flex items-center gap-2">
        <MapPin className="text-[#636363]" size={24} />
        <span className="text-[16px] text-[#686868]">
          {selectedLocation || "Preferred Location"}
        </span>
      </div>
      <button onClick={toggleDropdown} className="flex items-center">
        <ChevronDown className="text-[#636363]" size={20} />
      </button>

      {/* Dropdown */}
      {showDropdown && (
        <div className="absolute top-full left-0 w-full mt-1 bg-white shadow-lg border border-gray-300 rounded-md z-50">
          {countries.map((country, index) => (
            <button
              key={index}
              onClick={() => handleLocationSelect(country.name)}
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              {country.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationDropdown;
