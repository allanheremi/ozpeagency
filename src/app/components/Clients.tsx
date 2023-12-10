"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const Clients = () => {
  const isLandscape = useMediaQuery({ query: "(orientation: landscape)" });

  useEffect(() => {
    const handleOrientationChange = () => {
      if (window.scrollY > 2) {
        window.scroll(0, window.scrollY - 5);
      }
    };

    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  return (
    <>
      {!isLandscape && (
        <div className="flex h-[66vh] grow grid-cols-2 flex-col justify-between bg-white p-8 text-black md:h-[50vh]">
          <h1 className="flex justify-center py-8 text-5xl md:py-8 md:text-6xl lg:text-7xl">
            CLIENTS
          </h1>
          <div className="flex grow items-center justify-center">
            <div className="grid grid-cols-2 gap-x-24 gap-y-24 bg-white text-center text-black md:mb-4 md:grid-cols-2 md:gap-x-48 md:gap-y-12 lg:grid-cols-4">
              <div>
                <Image
                  src={"/BK_Black_Logo.png"}
                  width={94}
                  height={94}
                  alt="logo bored kitchen"
                />
              </div>
              <div>
                <Image
                  src={"/Hairbyem2.png"}
                  width={94}
                  height={94}
                  alt="logo bored kitchen"
                />
              </div>
              <div>
                <Image
                  src={"/BK_Black_Logo.png"}
                  width={94}
                  height={94}
                  alt="logo bored kitchen"
                />
              </div>
              <div>
                <Image
                  src={"/Hairbyem2.png"}
                  width={94}
                  height={94}
                  alt="logo bored kitchen"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {isLandscape && (
        <div className="flex h-[88vh] grow grid-cols-2 flex-col justify-between bg-white p-8 text-black md:h-[50vh]">
          <h1 className="flex justify-center py-8 text-5xl md:py-8 md:text-6xl lg:text-7xl">
            CLIENTS
          </h1>
          <div className="flex grow items-center justify-center">
            <div className="grid grid-cols-4 gap-x-24 gap-y-24 bg-white text-center text-black md:mb-4 md:gap-x-48 md:gap-y-12 lg:grid-cols-4">
              <div>
                <Image
                  src={"/BK_Black_Logo.png"}
                  width={94}
                  height={94}
                  alt="logo bored kitchen"
                />
              </div>
              <div>
                <Image
                  src={"/Hairbyem2.png"}
                  width={94}
                  height={94}
                  alt="logo bored kitchen"
                />
              </div>
              <div>
                <Image
                  src={"/BK_Black_Logo.png"}
                  width={94}
                  height={94}
                  alt="logo bored kitchen"
                />
              </div>
              <div>
                <Image
                  src={"/Hairbyem2.png"}
                  width={94}
                  height={94}
                  alt="logo bored kitchen"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Clients;
