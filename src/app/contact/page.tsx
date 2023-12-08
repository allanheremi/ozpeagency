"use client";
import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const page = () => {
  const form = useRef();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pk2c16a",
        "template_wb9azbg",
        form.current!,
        "WAqglW3eDzHnrK0xy",
      )
      .then(
        (result: any) => {
          console.log(result.text);
        },
        (error: any) => {
          console.log(error.text);
        },
      );
  };

  return (
    <>
      <div className="max-w-screen max-h-screen overflow-hidden">
        <Header />
        <section className="flex h-[66vh] flex-col items-center justify-center gap-2 md:h-[76vh]">
          <h1 className=" text-left text-2xl">CONTACT US</h1>
          <div className="text-left">
            <address className="flex flex-col">
              <div className="flex flex-col justify-around gap-2">
                <a
                  href="mailto:webmaster@example.com"
                  className="not-italic active:text-white/60"
                >
                  <MailOutlineIcon fontSize="medium" className="mx-1" />{" "}
                  ozpeagency@gmail.com
                </a>
                <a
                  href="tel:+46 76 29 89 752"
                  className="not-italic active:text-white/60"
                >
                  <LocalPhoneOutlinedIcon fontSize="medium" className="mx-1" />{" "}
                  +46 [Coming soon]{" "}
                </a>
              </div>
              <form
                ref={form as any}
                onSubmit={sendEmail}
                className="flex flex-col gap-1 py-2 text-white"
              >
                <label>Name</label>
                <input
                  type="text"
                  name="user_name"
                  className="rounded-sm border-2 text-black border-black/40"
                />
                <label>Email</label>
                <input
                  type="email"
                  name="user_email"
                  className="rounded-sm border-2 text-black border-black/40"
                />
                <label className="rounded-sm">Message</label>
                <textarea
                  name="message"
                  className="rounded-sm border-2 border-black/40 text-black "
                  cols={28}
                  rows={3}
                />
                <input
                  type="submit"
                  value="Send"
                  className="rounded-sm bg-white/40 hover:cursor-pointer active:bg-white/20"
                />
              </form>
            </address>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};
// MuZ-viu3oq_WqWq0tzdtU API private
export default page;
