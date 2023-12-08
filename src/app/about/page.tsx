import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
      <div className="overflow-hidden max-h-screen max-w-screen">
        <Header />
        <div className="md:p-18 flex h-[76vh] items-center justify-center p-8 ">
          <div>

            <div className="flex flex-col gap-16 md:gap-4 px-4 md:px-12">

            <div>
              <h1 className=" text-2xl">ABOUT US</h1>
            </div>
            <div>
              <p className="text-white/80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                maxime numquam neque quia sunt. Culpa ducimus illo excepturi
                autem? Minima temporibus odit dolore aut ratione non fugiat
                facere numquam nobis.
              </p>
            </div>
          </div>
        </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default page;
