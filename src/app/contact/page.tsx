import React from "react";
import Header from "../components/Header";
import Image from "next/image";

const page = () => {
  return (
    <>
      <Header />

      <section className="flex h-[calc(50vh)] flex-col items-center justify-center p-8">
        <h1 className="p-4 text-xl">CONTACT</h1>
        <div>
          <address className="flex flex-col">
            <a href="mailto:webmaster@example.com" className="not-italic">
              ozpeagency@gmail.com
            </a>
            <a href="tel:+46 76 29 89 752" className="font-style: normal-case">
              +46 76 29 89 752{" "}
            </a>
          </address>

          <div className="absolute bottom-0 left-0 flex w-screen flex-row justify-around gap-16 p-8">
            <a href="https://www.instagram.com/ozpeagency/" target="_blank">
              <Image
                src={"/instagramicon.png"}
                height={42}
                width={42}
                alt="instagram"
                className="hover:cursor-pointer"
              />
            </a>

            <a href="https://twitter.com/al3xc00p3r" target="_blank">
              <Image
                src={"/X.png"}
                height={42}
                width={42}
                alt="X"
                className="hover:cursor-pointer"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/petrus-%C3%B6zer-315644269/"
              target="_blank"
            >
              <Image
                src={"/linkedin.png"}
                height={42}
                width={42}
                alt="linkedin"
                className="hover:cursor-pointer"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
