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
        <h1 className="md:texth1xl w-full text-left text-3xl">
          <strong className="font-normal">{content.heading}</strong>
        </h1>
        <h2 className="w-full text-left text-2xl text-white/80 md:text-3xl lg:text-4xl">
          {content.breadTextOne}
        </h2>
        <h2 className="w-full text-left text-2xl text-white/80 md:text-3xl lg:text-4xl">
          {content.breadTextTwo}
        </h2>
        <h2 className="w-full text-left text-2xl text-white/80 md:text-3xl lg:text-4xl">
          {content.breadTextThree}
        </h2>
        <h2 className="w-full text-left text-2xl text-white/80 md:text-3xl lg:text-4xl">
          {content.breadTextFour}
        </h2>
      </div>
    </div>
  );
};

export default About;
