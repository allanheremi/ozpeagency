import React from "react";

const text =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore optio corrupti soluta voluptatibus. Aperiam eaque suscipit necessitatibus, ";

const Subheading = () => {
  return (
    <div>
      <h1 className="p-4 px-8 h-[100vh] text-3xl bg-white text-black flex items-center">
        {text.toUpperCase()}
      </h1>
    </div>
  );
};

export default Subheading;
