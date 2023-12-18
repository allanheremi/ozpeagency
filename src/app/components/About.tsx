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
        <h5 className="md:texth5xl w-full text-left text-3xl">
          <strong className="font-normal">{content.heading}</strong>
        </h5>
        <h5 className="w-full text-left text-2xl text-white/80 md:text-3xl lg:text-4xl">
          {content.breadTextOne}
        </h5>
        <h5 className="w-full text-left text-2xl text-white/80 md:text-3xl lg:text-4xl">
          {content.breadTextTwo}
        </h5>
        <h5 className="w-full text-left text-2xl text-white/80 md:text-3xl lg:text-4xl">
          {content.breadTextThree}
        </h5>
        <h5 className="w-full text-left text-2xl text-white/80 md:text-3xl lg:text-4xl">
          {content.breadTextFour}
        </h5>
      </div>
    </div>
  );
};

export default About;
