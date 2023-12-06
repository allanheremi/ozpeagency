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
            <a href="tel:+46 76 29 89 752" className="font-style: normal-case">+46 76 29 89 752 </a>
            </address>

            <div className="flex flex-row justify-around p-8 gap-16 w-screen left-0 bottom-0 absolute">
              <Image
                src={"/instagramicon.png"}
                height={42}
                width={42}
                alt="instagram"
                className="hover:cursor-pointer"
              />
              <Image
                src={"/X.png"}
                height={42}
                width={42}
                alt="X"
                className="hover:cursor-pointer"
              />
              <Image
                src={"/linkedin.png"}
                height={42}
                width={42}
                alt="linkedin"
                className="hover:cursor-pointer"
              />
            </div>
        </div>
      </section>
    </>
  );
};

export default page;
