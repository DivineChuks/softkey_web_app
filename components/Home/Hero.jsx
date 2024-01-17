"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import gameOne from "../../public/gameOne.jpg"
import gameTwo from "../../public/gameTwo.jpg"
import gameThree from "../../public/gameThree.jpg"

const Hero = () => {
 const [activeIndex, setActiveIndex] = useState(0);
 const images = [gameOne, gameTwo, gameThree]; // replace with your image paths
 const titles = ['Title 1', 'Title 2', 'Title 3', 'Title 4']; // replace with your titles
 const subtitles = ['Subtitle 1', 'Subtitle 2', 'Subtitle 3', 'Subtitle 4']; // replace with your subtitles

 useEffect(() => {
   const timer = setInterval(() => {
     setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
   }, 10000); // Change every 10 seconds

   return () => clearInterval(timer); // Clear interval on unmount
 }, []);

 return (
   <div className="relative">
     <Carousel
       showArrows={false}
       showStatus={false}
       showThumbs={false}
       infiniteLoop={true}
       autoPlay={true}
       interval={10000}
       transitionTime={1000}
       selectedIndex={activeIndex}
       className='z-20'
     >
       {images.map((img, idx) => (
         <div key={idx} className="h-[calc(100vh-80px)] flex items-center justify-center">
           <Image fill={true} src={img} alt="" className="object-cover w-full h-full" />
         </div>
       ))}
     </Carousel>
     {/* <div className='bg-black bg-opacity-60 inset-0 absolute'></div> */}
     <div className="absolute top-0 left-0 z-20 p-10">
       <h1 className="text-4xl text-white font-bold">{titles[activeIndex]}</h1>
       <p className="text-xl text-white">{subtitles[activeIndex]}</p>
     </div>
   </div>
 );
};

export default Hero;
