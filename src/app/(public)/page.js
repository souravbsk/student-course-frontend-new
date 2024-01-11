"use client";
import Banner from "@/PageSpecificComponents/Home/Banner";
import Courses from "@/PageSpecificComponents/Home/Courses";
import CreateAccountStep from "@/PageSpecificComponents/Home/CreateAccountStep";
import InstructorAvailable from "@/PageSpecificComponents/Home/InstructorAvailable";
import OurFeature from "@/PageSpecificComponents/Home/OurFeature";
import Reviews from "@/PageSpecificComponents/Home/Reviews";
import SpecialBox from "@/PageSpecificComponents/Home/SpecialBox";
import TopCourse from "@/PageSpecificComponents/Home/TopCourse";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <SpecialBox></SpecialBox>
      <Courses></Courses>
      <OurFeature></OurFeature>
      <InstructorAvailable></InstructorAvailable>
      <CreateAccountStep></CreateAccountStep>
      <Reviews></Reviews>
    </main>
  );
}
