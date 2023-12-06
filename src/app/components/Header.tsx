import React from "react";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full md:px-8">
      <div className="flex items-center justify-between p-4">
      <Link href={'/'}>
        <Image src={"/ozpelogo.png"} height={36} width={36} alt="logo"></Image>
        </Link>
        
        <h1 className="text-2xl md:text-4xl">OZPE AGENCY</h1>
        

        <MenuIcon fontSize="large" className="hover:cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
