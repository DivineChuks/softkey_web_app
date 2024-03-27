import React from "react";
import Hero from "../components/Home/Hero";
import GamesCollection from "../components/Home/GamesCollection";
import SoftwareCollection from "../components/Home/SoftwareCollection";
import ShowCase from "../components/Home/ShowCase";
import LogoCarousel from "../components/Home/LogoCarousel";

const page = () => {
  return (
    <>
      <Hero />
      <SoftwareCollection />
      <GamesCollection />
      <ShowCase />
      <LogoCarousel />
    </>
  );
};

export default page;
