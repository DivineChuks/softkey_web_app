import React from "react";

const Banner = () => {
  return (
    <section className="relative bg-cover bg-banner bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black bg-opacity-50 sm:bg-gradient-to-r"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
            Softkeys
            <strong className="block font-extrabold text-white">Hub</strong>
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            Your favorite home for all Games and Softwares!
          </p>

          <div className="mt-8 text-center md:text-left">
            <a
              href="#"
              className="w-fit rounded bg-white text-black px-12 py-3 text-sm font-medium shadow hover:bg-black hover:text-white focus:outline-none focus:ring"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
