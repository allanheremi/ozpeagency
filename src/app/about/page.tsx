import React from "react";
import Header from "../components/Header";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-[calc(70vh)] p-8 md:p-18 ">
        <div>
          <h1 className="text-3xl py-4">ABOUT US</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            maxime numquam neque quia sunt. Culpa ducimus illo excepturi autem?
            Minima temporibus odit dolore aut ratione non fugiat facere numquam
            nobis.
          </p>
        </div>
      </div>

      
    </>
  );
};

export default page;
