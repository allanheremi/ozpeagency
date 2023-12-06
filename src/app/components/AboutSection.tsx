import React from "react";
import About from "./About";
import Link from "next/link";

const AboutSection = () => {
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
      <div className="max-w-screen text-center md:flex md:flex-row md:justify-around md:py-20">
        <About content={aboutContentOne} />
        <About content={aboutContentTwo} />
        <About content={aboutContentThree} />
        <About content={aboutContentFour} />
  
      </div>
      <div className="flex justify-center p-12 text-sm">
        <p>is what you are looking for not on the list? <Link href={'/contact'} className="underline">ask us anyway,</Link> we basically do everything.</p>
        </div>
    </>
  );
};

export default AboutSection;
