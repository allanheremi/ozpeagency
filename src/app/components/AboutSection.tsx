"use client";
import React from "react";
import About from "./About";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const AboutSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 560 });

  const aboutContentOne = {
    heading: "PRODUCTION",
    breadTextOne: "photography",
    breadTextTwo: "film",
    breadTextThree: "graphic design",
    breadTextFour: "music & sound",
  };

  const aboutContentTwo = {
    heading: "BUILDING",
    breadTextOne: "web development",
    breadTextTwo: "ux/ui design",
    breadTextThree: "",
    breadTextFour: "",
  };

  const aboutContentThree = {
    heading: "BRANDING",
    breadTextOne: "creative direction",
    breadTextTwo: "brand identity",
    breadTextThree: "brand messaging",
    breadTextFour: "logo design",
  };

  const aboutContentFour = {
    heading: "MANAGEMENT",
    breadTextOne: "social media",
    breadTextTwo: "community",
    breadTextThree: "",
    breadTextFour: "",
  };

  return (
    <>
      {!isMobile && (
        <>
          <section className="flex h-screen flex-col items-center justify-around gap-y-24 px-8 py-24">
            <h1 className="text-6xl lg:text-7xl">WHAT WE DO</h1>
            <div className="max-w-screen flex flex-row justify-between sm:gap-0 gap-8 lg:gap-x-24 text-center">
              <About content={aboutContentOne} />
              <About content={aboutContentThree} />
              <About content={aboutContentFour} />
              <About content={aboutContentTwo} />
            </div>
          </section>
        </>
      )}

      {isMobile && (
        <>
          <section className="h-screen">
            <div className="max-w-screen flex h-[80vh] flex-col justify-center gap-y-32 text-center md:items-center">
              <h1 className="pt-24 text-6xl lg:text-7xl">WHAT WE DO</h1>

              <div className=" flex justify-center px-8 md:gap-x-24">
                <div className="flex w-1/2 flex-col">
                  <div className="grid-cols-2 grid-rows-2">
                    <About content={aboutContentOne} />
                    <About content={aboutContentTwo} />
                  </div>
                </div>
                <div className="flex w-1/2 flex-col">
                  <div className="grid-cols-2 grid-rows-2">
                    <About content={aboutContentThree} />
                    <About content={aboutContentFour} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default AboutSection;
