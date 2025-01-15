import useNavRoutes from "@/app/hooks/useNav";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CreateJob from "../create-job";

const Header = () => {
  const routes = useNavRoutes();
  return (
    <header className="w-full h-[214px] fixed bg-white shadow-header flex items-start justify-center z-50">
      <nav className="  w-[890px] h-[80px] mx-auto mt-[21px] rounded-[122px] border-[#FCFCFC] shadow-navbar flex items-center justify-evenly gap-6 px-[26px] py-[16px]">
        
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
       <CreateJob/>


       
      </nav>
    </header>
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
      className="font-medium text-[#303030] text-[16px] leading-[22px] "
    >
      {label}
    </Link>
  );
};

export default Header;
