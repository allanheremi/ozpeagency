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
    <div className="h-[30vh] flex items-center gap-8">
      <div className="flex flex-col whitespace-nowrap p-4">
        <h4 className="w-full pb-2 text-left text-lg">{content.heading}</h4>
        <p className="w-1/4 text-left text-sm text-white/80">
          {content.breadTextOne}
        </p>
        <p className="w-1/4  text-left text-sm text-white/80">
          {content.breadTextTwo}
        </p>
        <p className="w-1/4  text-left text-sm text-white/80">
          {content.breadTextThree}
        </p>
        <p className="w-1/4  text-left text-sm text-white/80">
          {content.breadTextFour}
        </p>
      </div>
    </div>
  );
};

export default About;
