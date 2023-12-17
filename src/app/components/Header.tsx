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
    document.body.style.overflow = showMenu ? "auto" : "hidden";
  };

  // Clean up body overflow style when the component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      {!isMobile && (
        <header className="relative h-[12vh] w-full px-8">
          <div className="flex items-center justify-between p-4">
            <Link href={"/"}>
              <Image src={"/ozpelogo.png"} height={48} width={48} alt="logo" />
            </Link>
            <h1 className="fontHelvetica text-2xl md:text-3xl">
              <strong className="font-normal">OZPE AGENCY</strong>
            </h1>
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
                    <Link href={"/"}>
                      <div className=" border-black bg-white p-2 px-4 hover:bg-white/90 active:bg-white/60">
                        <p className="text-4xl lg:text-3xl">HOME</p>
                      </div>
                    </Link>

                    <Link href={"/about"}>
                      <div className="border-t border-black/50 bg-white p-2 px-4 hover:bg-white/90 active:bg-white/60">
                        <p className="text-4xl lg:text-3xl">ABOUT</p>
                      </div>
                    </Link>

                    <Link href={"/contact"}>
                      <div className="border-t border-black/50 bg-white p-2 px-4 hover:bg-white/90 active:bg-white/60 ">
                        <p className="text-4xl lg:text-3xl">CONTACT</p>
                      </div>
                    </Link>
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
                height={40}
                width={40}
                alt="logo"
              ></Image>
            </Link>
            <h1 className="fontHelvetica text-2xl">
              <strong className="font-normal">OZPE AGENCY</strong>
            </h1>
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
                  <div className="flex flex-col items-center justify-center gap-y-8">
                    <div className="w-[40vw]  text-center ">
                      <Link href={"/"}>
                        <p className="animate-slide-left  slide-left  text-6xl text-black">
                          HOME
                        </p>
                      </Link>
                    </div>
                    <div className="w-[40vw] text-center ">
                      <Link href={"/about"}>
                        <p className="animate-slide-right slide-right text-6xl text-black ">
                          ABOUT
                        </p>
                      </Link>
                    </div>
                    <div className="w-[40vw]  text-center ">
                      <Link href={"/contact"}>
                        <p className="animate-slide-left slide-left  text-6xl text-black">
                          CONTACT
                        </p>
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
