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
      <div className="flex flex-col whitespace-nowrap p-4 px-8 md:px-2">
        <h4 className="w-full pb-2 text-left text-3xl md:text-4xl">{content.heading}</h4>
        <p className="w-full text-left text-2xl md:text-3xl lg:text-4xl text-white/80">
          {content.breadTextOne}
        </p>
        <p className="w-full text-left text-2xl md:text-3xl lg:text-4xl text-white/80">
          {content.breadTextTwo}
        </p>
        <p className="w-full text-left text-2xl md:text-3xl lg:text-4xl text-white/80">
          {content.breadTextThree}
        </p>
        <p className="w-full text-left text-2xl md:text-3xl lg:text-4xl text-white/80">
          {content.breadTextFour}
        </p>
      </div>
    </div>
  );
};

export default About;
