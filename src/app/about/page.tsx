import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
      <div className="max-w-screen max-h-screen overflow-hidden">
        <Header />
        <div className="md:p-18 flex h-[66vh]  items-center justify-center p-8 md:h-[76vh] ">
          <div>
            <div className="flex flex-col gap-16 sm:gap-4 px-4 md:gap-4 md:p-12">
              <div>
                <h1 className=" text-6xl lg:text-7xl sm:text-4xl">ABOUT US</h1>
              </div>
              <div>
                <p className="text-4xl text-white/80 md:text-5xl lg:text-6xl  sm:text-2xl">
                  FOUNDED IN 2023 BECAUSE COULDN'T GET A JOB AND SAID F**K IT.
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
