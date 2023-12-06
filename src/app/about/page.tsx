import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
      <Header />
      <div className="md:p-18 flex h-[calc(50vh)] items-center justify-center p-8 ">
        <div>
          <h1 className="py-4 text-3xl">ABOUT US</h1>
          <p className="text-white/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            maxime numquam neque quia sunt. Culpa ducimus illo excepturi autem?
            Minima temporibus odit dolore aut ratione non fugiat facere numquam
            nobis.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
