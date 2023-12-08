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
    heading: "BRANDING",
    breadTextOne: "creative direction",
    breadTextTwo: "brand identity",
    breadTextThree: "brand messaging",
    breadTextFour: "logo design",
  };

  const aboutContentThree = {
    heading: "BUILDING",
    breadTextOne: "web development",
    breadTextTwo: "ux/ui design",
    breadTextThree: "",
    breadTextFour: "",
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
          <section className="h-screen flex items-center flex-col justify-around">
            <h1 className="text-2xl">WHAT WE PROVIDE</h1>
            <div className="max-w-screen flex flex-row justify-between text-center gap-8">
              <About content={aboutContentOne} />
              <About content={aboutContentTwo} />
              <About content={aboutContentThree} />
              <About content={aboutContentFour} />
            </div>
            <div className="flex justify-center text-sm">
              <p>
                is what you are looking for not on the list?{" "}
                <Link href={"/contact"} className="underline">
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
            <div className="max-w-screen flex h-[80vh] flex-col justify-center gap-y-12 text-center">
              <div className="flex justify-around">
                <About content={aboutContentOne} />
                <About content={aboutContentTwo} />
              </div>
              <div className="flex justify-around">
                <About content={aboutContentThree} />
                <About content={aboutContentFour} />
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
