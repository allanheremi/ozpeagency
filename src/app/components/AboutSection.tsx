"use client";
import React from "react";
import About from "./About";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const AboutSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
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
          <section className="flex h-screen flex-col items-center justify-around py-24">
            <h1 className="text-8xl">WHAT WE DO</h1>
            <div className="max-w-screen flex flex-row justify-between gap-8 text-center">
              <About content={aboutContentOne} />
              <About content={aboutContentThree} />
              <About content={aboutContentTwo} />
              <About content={aboutContentFour} />
            </div>
            <div className="flex justify-center text-3xl">
              <p>
                is what you are looking for not on the list?{" "}
                <Link
                  href={"/contact"}
                  className="underline active:text-white/60"
                >
                  ask us anyway,
                </Link>{" "}
                we basically do everything.
              </p>
            </div>{" "}
          </section>
        </>
      )}

      {isMobile && (
        <>
          <section className="h-screen">
            <div className="max-w-screen flex h-[80vh] flex-col justify-center gap-y-12 py-24 text-center">
              <h1 className="text-5xl">WHAT WE DO</h1>

              <div className=" flex justify-center h-full px-8">
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

            <div className="flex justify-center px-8 text-center text-sm">
              <p>
                is what you are looking for not on the list?{" "}
                <Link href={"/contact"} className="underline">
                  ask us anyway,
                </Link>{" "}
                we basically do everything.
              </p>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default AboutSection;
