import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

const page = () => {
  return (
    <>
      <div className="max-w-screen max-h-screen overflow-hidden">
        <Header />
        <section className="flex h-[66vh] flex-col items-center justify-center gap-16 p-8 md:h-[76vh]">
          <h1 className=" text-left text-2xl">CONTACT US</h1>
          <div className="text-left">
            <address className="flex flex-col">
              <div className="flex flex-col justify-around gap-4">
                <a
                  href="mailto:webmaster@example.com"
                  className="not-italic active:text-white/60"
                >
                  <MailOutlineIcon fontSize="medium" className="mx-1"/> ozpeagency@gmail.com
                </a>
                {/* @DEV make phone not italic */}
                <a
                  href="tel:+46 76 29 89 752"
                  className="not-italic active:text-white/60"
                >
                  <LocalPhoneOutlinedIcon fontSize="medium" className="mx-1"/> +46 76 29 89 752{" "}
                </a>
              </div>
            </address>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default page;
