import AboutCountUp from "@/PageSpecificComponents/About/AboutCountUp";
import AboutUs from "@/PageSpecificComponents/About/AboutUs";
import OurInstructors from "@/PageSpecificComponents/About/OurInstructors";
import OurStory from "@/PageSpecificComponents/About/OurStory";
import React from "react";

const About = () => {
  return (
    <section>
      <AboutUs></AboutUs>
      <AboutCountUp></AboutCountUp>
      <OurStory></OurStory>
      <OurInstructors></OurInstructors>
    </section>
  );
};

export default About;
