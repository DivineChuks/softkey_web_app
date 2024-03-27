"use client";
import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Hero = () => {
  const images = ["/banner.jpg", "/gameOne.jpg"];
  return (
    <section className="bg-white w-full h-[350px] md:h-screen">
      <div className="mx-auto max-w-screen-xl px-4 py-8 md:py-16 h-full gap-4 grid grid-cols-1 md:grid-cols-4">
        <div className="col-span-1 md:col-span-3 cursor-pointer h-full">
          <Fade duration={3000} transitionDuration={1000} arrows={false}>
            {images.map((each, index) => (
              <img
                key={index}
                src={each}
                className="h-full md:h-[450px] w-full"
              />
            ))}
          </Fade>
        </div>
        <div className="col-span-1 h-full hidden md:flex cursor-pointer">
          <img src="/hero.jpg" className="h-full w-full object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
