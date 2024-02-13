import React from "react";
import { BiCategory } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";

const SoftwareCollection = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="w-full flex justify-between mb-8">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Best Selling Softwares
          </h2>

          <button className="mt-4 max-w-md py-2 px-4 flex items-center gap-1 text-white bg-blue-600">
            View all collections
            <FaArrowRight />
          </button>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <li>
            <a
              href="#"
              className="group relative block overflow-hidden rounded-md shadow"
            >
              <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                <span className="sr-only">Wishlist</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>

              <img
                src="/winOne.webp"
                alt=""
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />

              <div className="relative border border-gray-100 bg-gray-100 py-6 px-3">
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-lg font-medium text-gray-900 line-clamp-2">
                    Microsoft Windows 10 Pro Retail Key
                  </h3>
                  <p className="text-lg text-blue-600 font-bold">$34.99</p>
                </div>
                <div className="flex justify-between mt-4 items-center">
                  <div className="flex gap-1 items-center">
                    <BiCategory />
                    <p>Software</p>
                  </div>
                  <button className="bg-blue-600 text-white rounded-sm px-2 py-1">
                    Add To Cart
                  </button>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="group relative block overflow-hidden rounded-md shadow"
            >
              <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                <span className="sr-only">Wishlist</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>

              <img
                src="/softTwo.jpg"
                alt=""
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />

              <div className="relative border border-gray-100 bg-gray-100 py-6 px-3">
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-lg font-medium text-gray-900 line-clamp-2">
                    Windows 11 Pro Retail Key
                  </h3>
                  <p className="text-lg text-blue-600 font-bold">$16.99</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex gap-1 items-center">
                    <BiCategory />
                    <p>Software</p>
                  </div>
                  <button className="bg-blue-600 text-white rounded-sm px-2 py-1">
                    Add To Cart
                  </button>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="group relative block overflow-hidden rounded-md shadow"
            >
              <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                <span className="sr-only">Wishlist</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>

              <img
                src="/winThree.jpg"
                alt=""
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />

              <div className="relative border border-gray-100 bg-gray-100 py-6 px-3">
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-lg font-medium text-gray-900 line-clamp-2">
                    Microsoft Windows 10 Home Retail KEY
                  </h3>
                  <p className="text-lg text-blue-600 font-bold">$14.99</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex gap-1 items-center">
                    <BiCategory />
                    <p>Softwares</p>
                  </div>
                  <button className="bg-blue-600 text-white rounded-sm px-2 py-1">
                    Add To Cart
                  </button>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="group relative block overflow-hidden rounded-md shadow"
            >
              <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                <span className="sr-only">Wishlist</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>

              <img
                src="/winTwo.jpg"
                alt=""
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />

              <div className="relative border border-gray-100 bg-gray-100 py-6 px-3">
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-lg font-medium text-gray-900 line-clamp-2">
                    Windows 11 Home OEM Key
                  </h3>
                  <p className="text-lg text-blue-600 font-bold">$14.99</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex gap-1 items-center">
                    <BiCategory />
                    <p>Softwares</p>
                  </div>
                  <button className="bg-blue-600 text-white rounded-sm px-2 py-1">
                    Add To Cart
                  </button>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SoftwareCollection;
