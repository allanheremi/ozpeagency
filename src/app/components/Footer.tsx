import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="p-4 py-8">
      <div className="py-1">
        <p className="text-xl">CONTACT</p>
      </div>

      <div className="flex flex-col">
        <p>ozpeagency@gmail.com</p>
        {/* <p>PHONE NUMBER</p> */}
      </div>

      <div className="flex justify-around py-8">
        <Image
          src={"/instagramicon.png"}
          height={48}
          width={48}
          alt="instagram" 
          className="hover:cursor-pointer"
        />
        <Image src={"/X.png"} height={48} width={48} alt="X" className="hover:cursor-pointer"/>
        <Image src={"/linkedin.png"} height={48} width={48} alt="linkedin" className="hover:cursor-pointer"/>
        

        {/* <p>Instagram</p>
        <p>Facebook</p>
        <p>LinkedIn</p> */}
      </div>
    </footer>
  );
};

export default Footer;
