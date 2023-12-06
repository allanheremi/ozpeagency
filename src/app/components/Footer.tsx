import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="p-4">
      <div className="flex justify-around p-4">
        <a href="https://www.instagram.com/ozpeagency/" target="_blank">
          <Image
            src={"/instagramicon.png"}
            height={42}
            width={42}
            alt="instagram"
            className="hover:cursor-pointer"
          />{" "}
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
    </footer>
  );
};

export default Footer;
