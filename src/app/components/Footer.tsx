import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="p-4 h-[12vh] flex items-center justify-around min-w-screen">
      <div className="flex justify-around p-4 grow">
        {/* <a href="https://www.instagram.com/ozpeagency/" target="_blank"> */}
          <Image
            src={"/instagramicon.png"}
            height={52}
            width={52}
            alt="instagram"
          />{" "}
        {/* </a> */}
        {/* <a href="https://twitter.com/al3xc00p3r" target="_blank"> */}
          <Image
            src={"/X.png"}
            height={52}
            width={52}
            alt="X"
          />
        {/* </a> */}

        {/* <a
          href="https://www.linkedin.com/in/petrus-%C3%B6zer-315644269/"
          target="_blank"
        > */}
          <Image
            src={"/linkedin.png"}
            height={52}
            width={52}
            alt="linkedin"
          />
        {/* </a> */}
      </div>
    </footer>
  );
};

export default Footer;
