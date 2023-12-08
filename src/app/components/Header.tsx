"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { Close } from "@mui/icons-material";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 640 });

  // Function to toggle the mobile menu and update body overflow
  const toggleMobileMenu = () => {
    setShowMenu(!showMenu);
    document.body.style.overflow = showMenu ? 'auto' : 'hidden';
  };

  // Clean up body overflow style when the component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      {!isMobile && (
        <header className="relative h-[12vh] w-full px-8">
          <div className="flex items-center justify-between p-4">
            <Link href={"/"}>
              <Image
                src={"/ozpelogo.png"}
                height={36}
                width={36}
                alt="logo"
                className="scale-100 transform active:scale-110"
              />
            </Link>
            <h1 className="text-2xl md:text-3xl">OZPE AGENCY</h1>
            <div className="relative">
              {!showDropDown ? (
                <MenuIcon
                  fontSize="large"
                  className="hover:cursor-pointer"
                  onClick={() => setShowDropDown(!showDropDown)}
                />
              ) : (
                <Close
                  fontSize="large"
                  className="hover:cursor-pointer"
                  onClick={() => setShowDropDown(!showDropDown)}
                />
              )}
              {showDropDown && (
                <div className="animate-fadeInUpShort absolute right-0 top-full flex flex-col justify-center text-center text-black">
                  <div className="text-xl">
                    <div className=" border-black bg-white p-2 px-4 hover:bg-white/90 active:bg-white/60">
                      <Link href={"/"}>
                        <p>HOME</p>
                      </Link>
                    </div>
         
                    <div className="border-t border-black/50 bg-white p-2 px-4 hover:bg-white/90 active:bg-white/60">
                      <Link href={"/about"}>
                        <p>ABOUT</p>
                      </Link>
                    </div>
                    <div className="bg-white border-t border-black/50 p-2 px-4 hover:bg-white/90 active:bg-white/60 ">
                      <Link href={"/contact"}>
                        <p className="w-full">CONTACT</p>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>
      )}

      {isMobile && (
        <header className="w-full">
          <div className="flex items-center justify-between p-4">
            <Link href={"/"}>
              <Image
                src={"/ozpelogo.png"}
                height={36}
                width={36}
                alt="logo"
              ></Image>
            </Link>
            <h1 className="text-2xl ">OZPE AGENCY</h1>
            <MenuIcon
              fontSize="large"
              className="hover:cursor-pointer"
              onClick={toggleMobileMenu}
            />
            {showMenu && (
              <div className="animate-fadeInUp fixed left-0 top-0 z-10 h-screen w-screen overflow-hidden bg-white">
                <div className="absolute right-4 top-4">
                  <Close
                    onClick={toggleMobileMenu}
                    className="text-black"
                    fontSize="large"
                  />
                </div>
                <div className="flex h-screen w-screen items-center justify-center ">
                  <div className="flex items-center justify-center flex-col gap-y-8">
                    <div className="w-[40vw]  text-center ">
                      <Link href={"/"}>
                        <p className="text-2xl text-black  animate-slide-left slide-left">HOME</p>
                      </Link>
                    </div>
                    <div className="w-[40vw] text-center ">
                      <Link href={"/about"}>
                        <p className="text-2xl text-black animate-slide-right slide-right ">ABOUT</p>
                      </Link>
                    </div>
                    <div className="w-[40vw]  text-center ">
                      <Link href={"/contact"}>
                        <p className="text-2xl text-black  animate-slide-left slide-left">CONTACT</p>
                      </Link>
                    </div>
                  </div>
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
