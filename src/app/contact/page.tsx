"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import React, { useRef, useState } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { toast, ToastOptions } from "react-hot-toast";

const page = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const form = useRef();

  const showToastFail = (message: string) => {
    toast.error(message);
  };
  const showToastSuccess = (message: string) => {
    return toast.success(message);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userName.length < 3 || userEmail.length < 3 || userMessage.length < 3) {
      showToastFail("You missed something");
      return;
    }

    emailjs
      .sendForm(
        "service_pk2c16a",
        "template_wb9azbg",
        form.current!,
        "WAqglW3eDzHnrK0xy",
      )
      .then(
        // eslint-disable-next-line
        (result: EmailJSResponseStatus) => {
          // eslint-disable-next-line
          console.log(result.text as string);
          showToastSuccess("Message sent");
        },
        // eslint-disable-next-line
        (error: EmailJSResponseStatus) => {
          // eslint-disable-next-line
          console.log(error.text as string);
        },
      );
  };

  return (
    <>
      <div className="max-w-screen max-h-screen">
        <Header />
        <section className="flex h-[68vh] flex-col items-center justify-center gap-2 sm:h-[150vh] md:h-[100vh]">
          {/* <h1 className=" text-left text-2xl">CONTACT US</h1> */}
          {/* <div className="text-left">
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
            </address>
          </div> */}

          <form
            // eslint-disable-next-line
            ref={form as any}
            onSubmit={sendEmail}
            className=" flex h-full w-2/3 flex-col justify-center gap-6  bg-black text-white"
          >
            <div className="flex flex-col">
              <label className="text-2xl md:text-4xl lg:text-5xl">NAME</label>
              <input
                type="text"
                name="user_name"
                className=" border-b border-white bg-black  text-xl  text-white/80 focus:outline-none active:bg-black "
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div>
              <div className="flex flex-col">
                <label className="text-2xl md:text-4xl lg:text-5xl">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="user_email"
                  className=" border-b border-t-white bg-black  text-xl  text-white/80 focus:outline-none "
                  onChange={(e) => setUserEmail(e.target.value)}
                  autoComplete="off"
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-4">
                <label className="text-2xl md:text-4xl lg:text-5xl">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  className="rounded-md border border-white bg-black p-1 text-xl  text-white/80 focus:outline-none"
                  cols={28}
                  rows={5}
                  onChange={(e) => setUserMessage(e.target.value)}
                  autoComplete="off"
                />
                <div className="flex w-full justify-center">
                  <input
                    type="submit"
                    value="SUBMIT"
                    className="w-fit rounded-md border border-white bg-black px-2 py-1 text-2xl hover:cursor-pointer active:bg-white/20 md:text-4xl lg:text-5xl "
                  />
                </div>
              </div>
            </div>
          </form>
        </section>
        <Footer />
      </div>
    </>
  );
};
// MuZ-viu3oq_WqWq0tzdtU API private
export default page;
