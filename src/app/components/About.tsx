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
    <div className="flex flex-col p-4 md:px-12 ">
      <h4 className="w-full pb-2 text-xl font-semibold text-left">{content.heading}</h4>
      <p className="w-full text-sm text-white/80 text-left">{content.breadTextOne}</p>
      <p className="w-full text-sm text-white/80 text-left">{content.breadTextTwo}</p>
      <p className="w-full text-sm text-white/80 text-left">{content.breadTextThree}</p>
      <p className="w-full text-sm text-white/80 text-left">{content.breadTextFour}</p>
    </div>
  );
};

export default About;
