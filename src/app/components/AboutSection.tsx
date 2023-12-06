import React from "react";
import About from "./About";

const AboutSection = () => {
  const aboutContentOne = {
    heading: "PRODUCTION",
    breadTextOne: "Photography",
    breadTextTwo: "Film",
    breadTextThree: "Graphic design",
    breadTextFour: "Music & sound",
  };

  const aboutContentTwo = {
    heading: "BRANDING",
    breadTextOne: "Logo design",
    breadTextTwo: "Brand messaging",
    breadTextThree: "Brand identity",
    breadTextFour: "",
  };

  const aboutContentThree = {
    heading: "BUILDING",
    breadTextOne: "Web development",
    breadTextTwo: "UX/UI design",
    breadTextThree: "",
    breadTextFour: "",
  };

  const aboutContentFour = {
    heading: "MANAGEMENT",
    breadTextOne: "Social media management",
    breadTextTwo: "",
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
    </>
  );
};

export default AboutSection;
