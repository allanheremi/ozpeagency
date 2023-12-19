"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import type { EmailJSResponseStatus } from "@emailjs/browser";
import { toast } from "react-hot-toast";

const page = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const showToastFail = (message: string) => {
    toast.error(message);
  };
  const showToastSuccess = (message: string) => {
    return toast.success(message);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      form.from_name.length < 3 ||
      form.from_email.length < 3 ||
      form.message.length < 3
    ) {
      showToastFail("You missed something");
      return;
    }

    emailjs
      .sendForm(
        "service_pk2c16a",
        "template_dlxj3uv",
        formRef.current!,
        "WAqglW3eDzHnrK0xy",
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text as string);
          showToastSuccess("Message sent");
        },
        (error: EmailJSResponseStatus) => {
          console.log(error.text as string);
        },
      );
  };

  return (
    <>
      <div className="max-w-screen max-h-screen">
        <Header />
        <section className="flex h-[68vh] flex-col items-center justify-center gap-2 sm:h-[150vh] md:h-[100vh]">
          <form
            // eslint-disable-next-line
            ref={formRef as any}
            onSubmit={sendEmail}
            className=" flex h-full w-2/3 flex-col justify-center gap-6  bg-black text-white"
          >
            <div className="flex flex-col">
              <label className="text-2xl md:text-4xl lg:text-5xl">NAME</label>
              <input
                type="text"
                name="from_name"
                className=" border-b border-white bg-black  text-xl  text-white/80 focus:outline-none active:bg-black "
                onChange={handleChange}
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
                  name="from_email"
                  value={form.from_email}
                  onChange={handleChange}
                  className="border-b border-t-white bg-black text-xl text-white/80 focus:outline-none"
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
                  onChange={handleChange}
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
