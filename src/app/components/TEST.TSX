"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 640 });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Effect to toggle body scroll based on isMenuOpen state
  useEffect(() => {
    const body = document.body;

    // Toggle body scroll
    body.style.overflowY = isMenuOpen ? "hidden" : "auto";

    // Cleanup: Re-enable scrolling when the component unmounts or if isMenuOpen becomes false
    return () => {
      body.style.overflowY = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header className="w-full md:px-8">
      <div className="flex items-center justify-between p-4">
        <Link href={"/"}>
          <Image src={"/ozpelogo.png"} height={36} width={36} alt="logo" />
        </Link>

        <h1 className="text-2xl md:text-4xl">OZPE AGENCY</h1>

        {isMenuOpen ? (
          <CloseIcon
            fontSize="large"
            className="hover:cursor-pointer"
            onClick={toggleMenu}
          />
        ) : (
          <MenuIcon
            fontSize="large"
            className="hover:cursor-pointer"
            onClick={toggleMenu}
          />
        )}
      </div>

      {(isMenuOpen && isMobile) && (
        <div>

        <div className="absolute flex h-screen w-screen list-none flex-col items-center justify-center gap-24 bg-white text-black md:hidden">
          <li className="text-4xl">
            <Link href="/about">About</Link>
          </li>
          <li className="text-4xl">
            <Link href="/about">Contact</Link>
          </li>
        </div>
        </div>

      )}
    </header>
  );
};

export default Header;
