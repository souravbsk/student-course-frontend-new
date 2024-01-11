import Image from "next/image";
import React from "react";
import contactImage from "@/assets/contact/contact.jpg";
const ContactForm = () => {
  return (
    <section className="mt-16 sm:mt-32">
      <div className="container">
        <div className="text-center">
          <p className="text-[#FB7818] mb-5">Sent Us a Message</p>
          <h1 className=" text-transparent text-center text-xl md:text-4xl  font-bold bg-clip-text bg-gradient-to-r from-[#502048] to-[#471950]">
            Contact With Us
          </h1>
        </div>
        <div className="flex flex-col md:flex-row mt-12 items-center justify-between gap-8">
          <div className="flex-1 w-full">
            <Image
              src={contactImage}
              placeholder="blur"
              className="w-full h-fit"
              alt=""
            ></Image>
          </div>
          <div className="flex-1 w-full">
            <form className=" ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-primary">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="flex items-center justify-between gap-3 flex-col md:flex-row">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-primary">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-primary">Phone</span>
                  </label>
                  <input
                  name="phone"
                    type="tel"
                    placeholder="Phone"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-primary">Message</span>
                </label>
                <textarea
                  placeholder="Message"
                  className="input p-5 h-40 input-bordered"
                  defaultValue={""}
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn border-0 hover:bg-[#471850] bg-[#471850] btn-primary">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
