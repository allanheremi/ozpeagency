"use client";
import React from "react";
import Image from "next/image";

const Clients = () => {
  return (
    <>
      <div className="bg-white text-black p-8 h-[50vh] md:h-[70vh] flex justify-center flex-col">
        <h1 className="flex justify-center text-2xl">CLIENTS</h1>
        <div className="flex justify-center">
          <div className="grid h-40 grid-cols-3 gap-x-24 md:gap-x-48  bg-white text-center text-black">
            <div>
              <Image
                src={"/BK_Black_Logo.png"}
                width={72}
                height={72}
                alt="logo bored kitchen"
              />
            </div>
            <div>
              <Image
                src={"/Hairbyem2.png"}
                width={72}
                height={72}
                alt="logo bored kitchen"
              />
            </div>
            <div>
              <Image
                src={"/BK_Black_Logo.png"}
                width={72}
                height={72}
                alt="logo bored kitchen"
              />
            </div>
            <div>
              <Image
                src={"/Hairbyem2.png"}
                width={72}
                height={72}
                alt="logo bored kitchen"
              />
            </div>
            <div>
              <Image
                src={"/BK_Black_Logo.png"}
                width={72}
                height={72}
                alt="logo bored kitchen"
              />
            </div>
            <div>
              <Image
                src={"/Hairbyem2.png"}
                width={72}
                height={72}
                alt="logo bored kitchen"
              />
            </div>
          </div>
        </div>
      </div>

      {/* {!isDesktopOrLaptop && (
        <div className="bg-white text-black">
          <div className="p-4 py-4">
            <h1 className="p-4 pb-8 text-4xl">OUR PARTNERS</h1>

            <div className="object-full w-full p-4 pb-4">
              <Image
                src={"/boredkitchen2.png"}
                width={300}
                height={300}
                alt="boredkitchen"
                className="h-48 w-full object-cover"
              />
              <h3 className="py-2 text-xl">BORED KITCHEN</h3>
            </div>
          </div>

          <div className="gap-y-4 p-4 py-4">
            <div className="object-full w-full p-4 pb-4 pt-0">
              <Image
                src={"/boredkitchen3.png"}
                width={300}
                height={300}
                alt="boredkitchen"
                className="h-48 w-full object-cover"
              />
              <h3 className="py-2 text-xl">BORED KITCHEN</h3>
            </div>
          </div>

          <div className="gap-y-4 p-4 pb-4">
            <div className="object-full w-full p-4 pb-4">
              <Image
                src={"/boredkitchen1.png"}
                width={300}
                height={400}
                alt="boredkitchen"
                className="h-48 w-full object-cover"
              />
              <h3 className="py-2 text-xl">BORED KITCHEN</h3>
            </div>
          </div>
        </div>
      )}

      {isDesktopOrLaptop &&
              <div className="bg-white text-black">
                <h1 className="p-4 pb-8 text-4xl">OUR PARTNERS</h1>
              <div className="p-4 py-4 flex flex-row">
                <div className="object-full w-full p-4 pb-4 flex items-center p-8">
                  <Image
                    src={"/boredkitchen2.png"}
                    width={200}
                    height={200}
                    alt="boredkitchen"
                    className="h-48 w-1/2 object-cover"
                  />
                  <h3 className="py-2 w-1/2 text-xl justify-center text-center underline">BORED KITCHEN</h3>
                </div>
              </div>
    
              <div className="p-4 py-4 flex flex-row">
                <div className="object-cover w-full p-4 pb-4 flex items-center">
                <h3 className="py-2 w-1/2 text-xl justify-center text-center underline">BORED KITCHEN</h3>
                  <Image
                    src={"/boredkitchen2.png"}
                    width={200}
                    height={200}
                    alt="boredkitchen"
                    className="h-48 w-1/2 object-cover"
                  />
                 
                </div>
              </div>
    
              <div className="p-4 py-4 flex flex-row">
                <div className="object-full w-full p-4 pb-4 flex items-center">
                  <Image
                    src={"/boredkitchen2.png"}
                    width={200}
                    height={200}
                    alt="boredkitchen"
                    className="h-48 w-1/2 object-cover"
                  />
                  <h3 className="py-2 w-1/2 text-xl justify-center text-center underline">BORED KITCHEN</h3>
                </div>
              </div>
            </div> */}
    </>
  );
};

export default Clients;
