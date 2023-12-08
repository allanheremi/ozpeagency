import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
    <div className="overflow-hidden max-h-screen max-w-screen">

      <Header />
      <section className="flex h-[76vh] flex-col items-center justify-center gap-16 p-8">
        <h1 className=" text-2xl">CONTACT US</h1>
        <div className="text-center">
          <address className="flex flex-col">
            <a href="mailto:webmaster@example.com" className="not-italic">
              ozpeagency@gmail.com
            </a>
            {/* @DEV make phone not italic */}
            <a href="tel:+46 76 29 89 752" className="">
              +46 76 29 89 752{" "}
            </a>
          </address>
        </div>
      </section>
      <Footer />
    </div>

    </>
  );
};

export default page;
