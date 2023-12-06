import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="p-4">



      <div className="flex justify-around p-4">
        <Image
          src={"/instagramicon.png"}
          height={42}
          width={42}
          alt="instagram" 
          className="hover:cursor-pointer"
        />
        <Image src={"/X.png"} height={42} width={42} alt="X" className="hover:cursor-pointer"/>
        <Image src={"/linkedin.png"} height={42} width={42} alt="linkedin" className="hover:cursor-pointer"/>
        
      </div>
    </footer>
  );
};

export default Footer;
