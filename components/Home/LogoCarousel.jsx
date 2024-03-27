"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
  "/express.png",
  "/stripe.png",
  "/visa.png",
  "/pay.png",
  "/paypaL.png",
  "/mastercard.png",
];

const LogoCarousel = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          //   dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="logo-carousel-container mx-auto max-w-screen-xl px-4 mb-20">
      <h2 className="font-semibold text-3xl mb-4">Payment Options</h2>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index}>
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="w-36 h-24 object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoCarousel;
