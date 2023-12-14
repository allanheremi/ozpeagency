import React from "react";
type ContentProps = {
  content: {
    heading: string;
    breadTextOne: string;
    breadTextTwo: string;
    breadTextThree: string;
    breadTextFour: string;
  };
};

const About = ({ content }: ContentProps) => {
  return (
    <div>
      <div className="flex w-fit flex-col whitespace-nowrap px-6 py-8 md:px-2">
        <h4 className="w-full text-left text-3xl md:text-4xl">
          {content.heading}
        </h4>
        <p className="w-full text-left text-2xl text-white/80 md:text-3xl lg:text-4xl">
          {content.breadTextOne}
        </p>
        <p className="w-full text-left text-2xl text-white/80 md:text-3xl lg:text-4xl">
          {content.breadTextTwo}
        </p>
        <p className="w-full text-left text-2xl text-white/80 md:text-3xl lg:text-4xl">
          {content.breadTextThree}
        </p>
        <p className="w-full text-left text-2xl text-white/80 md:text-3xl lg:text-4xl">
          {content.breadTextFour}
        </p>
      </div>
    </div>
  );
};

export default About;
