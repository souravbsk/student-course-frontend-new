'use client'
import ContactForm from "@/PageSpecificComponents/Contact/ContactForm";
import TouchWithUs from "@/PageSpecificComponents/Contact/TouchWithUs";
import React from "react";

const Contact = () => {
  return (
    <section className="pt-32">
      <TouchWithUs></TouchWithUs>
      <ContactForm></ContactForm>
    </section>
  );
};

export default Contact;
