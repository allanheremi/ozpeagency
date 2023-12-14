"use client";
import React from "react";
import Image from "next/image";

const Clients = () => {
  return (
    <>
      <div className="flex h-[66vh] grow grid-cols-2 flex-col justify-between bg-white p-8 text-black md:h-[100vh]">
        <h1 className="flex justify-center py-8 text-5xl md:py-8 md:text-6xl lg:text-7xl">
          CLIENTS
        </h1>
        <div className="flex grow items-center justify-center">
          <div className="grid grid-cols-2 gap-x-24 gap-y-24 bg-white text-center text-black sm:grid-cols-4 md:mb-4 md:gap-x-48 lg:grid-cols-4">
            <div className="flex items-center">
              <Image
                src={"/BK_Black_Logo.png"}
                width={112}
                height={112}
                alt="logo bored kitchen"
              />
            </div>
            <div className="flex items-center">
              <Image
                src={"/dokteralogo.png"}
                width={112}
                height={112}
                alt="logo doktera"
              />
            </div>
            <div className="flex items-center">
              <Image
                src={"/Hairbyem2.png"}
                width={112}
                height={112}
                alt="logo bored kitchen"
              />
            </div>

            <div className="flex items-center">
              <Image
                src={"/ozercompany.png"}
                width={112}
                height={112}
                alt="logo bored kitchen"
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
