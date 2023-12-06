"use client";
import React from "react";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { Close } from "@mui/icons-material";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 640 });
  return (
    <>
      {!isMobile && (
        <header className="relative w-full md:px-8">
          <div className="flex items-center justify-between p-4">
            <Link href={"/"}>
              <Image src={"/ozpelogo.png"} height={36} width={36} alt="logo" />
            </Link>
            <h1 className="text-2xl md:text-4xl">OZPE AGENCY</h1>
            <div className="relative">
              <MenuIcon
                fontSize="large"
                className="hover:cursor-pointer"
                onClick={() => setShowDropDown(!showDropDown)}
              />
              {showDropDown && (
                <div className="absolute right-0 top-full gap-4 bg-white p-2 text-2xl text-black flex flex-col items-center rounded-sm">
                  <Link href={"/contact"}>
                    <p>Contact</p>
                  </Link>
                  <Link href={"/about"}>
                    <p>About</p>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </header>
      )}

      {isMobile && (
        <header className="w-full md:px-8">
          <div className="flex items-center justify-between p-4">
            <Link href={"/"}>
              <Image
                src={"/ozpelogo.png"}
                height={36}
                width={36}
                alt="logo"
              ></Image>
            </Link>
            <h1 className="text-2xl md:text-4xl">OZPE AGENCY</h1>
            <MenuIcon
              fontSize="large"
              className="hover:cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            />
            {showMenu && (
              <div className="fixed left-0 top-0 h-full w-full bg-white">
                <div className="absolute right-4 top-4">
                  <Close
                    onClick={() => setShowMenu(false)}
                    className="text-black"
                    fontSize="large"
                  />
                </div>
                <div className="flex h-full w-full flex-col items-center justify-center gap-16">
                  {/* Your content here */}
                  <Link href={"/about"}>
                    <p className="text-2xl text-black">ABOUT</p>
                  </Link>

                  <Link href={"/contact"}>
                    <p className="text-2xl text-black">CONTACT</p>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
