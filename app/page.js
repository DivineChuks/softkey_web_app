import React from "react";
import Banner from "../components/Home/Banner";
import GamesCollection from "../components/Home/GamesCollection";
import SoftwareCollection from "../components/Home/SoftwareCollection";
import Subscribe from "../components/Home/Subscribe";
// import Subscribe from "@/components/Home/Subscribe";
// import Banner from "@/components/Home/Banner";

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
