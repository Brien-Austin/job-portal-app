"use client";
import useNavRoutes from "@/app/hooks/useNav";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

import { Search } from "lucide-react";
import qs from "query-string";

import LocationDropdown from "../location-dropdown";
import JobType from "../job-type";
import SalarySlider from "../salary-slider";
import CreateJob from "../job/create/create-job";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleJobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = qs.stringifyUrl({
      url: pathname,
      query: {
        jobTitle: e.target.value,
      },
    });

    router.push(url);
  };

  const routes = useNavRoutes();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <header className="px-16 w-full h-[214px] fixed bg-white shadow-header flex flex-col z-50">
        <nav className="w-[890px] h-[80px] mx-auto mt-[21px] rounded-[122px] border-[#FCFCFC] shadow-navbar flex items-center justify-evenly gap-6 px-[26px] py-[16px]">
          {/* Logo */}
          <Image
            unoptimized={true}
            src={"/logo.png"}
            alt="logo"
            width={44}
            height={44}
          />

          {/* Nav Menus */}
          {routes.map((r, i) => (
            <NavItems
              key={i}
              route={r.route}
              label={r.label}
              isActive={r.isActive}
            />
          ))}

          {/* Create Job */}
          <CreateJob />
        </nav>
        <section className="pt-10 flex w-full justify-evenly">
          <div className="flex items-center justify-center w-1/4 gap-2 pr-4 border-r-[2px] border-[#EAEAEA] h-[48px]">
            <Search className="text-[#636363]" size={24} />
            <input
              onChange={(e) => handleJobChange(e)}
              type="text"
              placeholder="Search job by title, role"
              className="outline-none text-[16px] text-[#686868]"
            />
          </div>

          <LocationDropdown />

          <JobType />

          <SalarySlider />
        </section>
      </header>
    </Suspense>
  );
};

interface NavItemsProps {
  route: string;
  isActive: boolean;
  label: string;
}

const NavItems: React.FC<NavItemsProps> = ({ route, label }) => {
  return (
    <Link
      href={route}
      className="font-medium text-[#303030] text-[16px] leading-[22px]"
    >
      {label}
    </Link>
  );
};

export default Header;
