import React from "react";

const text =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore optio corrupti soluta voluptatibus. Aperiam eaque suscipit necessitatibus, ";

const Subheading = () => {
  return (
    <div>
      <h1 className=" p-4 px-8 py-32 text-2xl bg-white text-black">
        {text.toUpperCase()}
      </h1>
    </div>
  );
};

export default Subheading;
