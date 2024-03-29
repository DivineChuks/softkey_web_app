import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 h-max lg:flex lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-gray-900 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Elevate Your Software Experience.
            <span className="sm:block">Discover, Engage, Convert. </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Revolutionize the way you explore and acquire software and games.
            Our platform is designed to provide a seamless user experience,
            ensuring you find, engage, and convert effortlessly!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded border transition duration-300 ease-in-out border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="/sign-up"
            >
              Get Started
            </Link>

            <Link
              className="block w-full rounded border transition duration-300 ease-in-out border-blue-600 px-12 py-3 text-sm hover:text-white font-medium text-blue-600 hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="/sign-in"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
