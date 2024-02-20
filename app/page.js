// import Hero from "@/components/Home/Hero";
import SoftwareCollection from "@/components/Home/SoftwareCollection";
import GamesCollection from "@/components/Home/GamesCollection";
import React from "react";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Subscribe from "@/components/Home/Subscribe";
import Banner from "@/components/Home/Banner";

const page = () => {
  return (
    <>
      <Banner />
      <GamesCollection />
      <SoftwareCollection />
      {/* <WhyChooseUs /> */}
      <Subscribe />
    </>
  );
};

export default page;
