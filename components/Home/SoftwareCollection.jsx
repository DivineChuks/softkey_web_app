"use client";
import { client, urlFor } from "@/app/lib/sanity";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const SoftwareCollection = () => {
  const [Softwares, setSoftwares] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "product" && references(*[_type == "category" && name == "Softwares"]._id)] | order(name asc) {
          _id,
          name,
          "imageUrl": images[0].asset->url,
          description,
          slug,
          price
        }[0...15]`
      )
      .then((products) => setSoftwares(products))
      .catch(console.error);
  }, []);

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="w-full flex justify-between mb-8">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Best Selling Softwares
          </h2>

          <Link
            href="/softwares"
            className="mt-4 max-w-md py-2 px-4 flex items-center gap-1 text-white bg-blue-600"
          >
            View all collections
            <FaArrowRight />
          </Link>
        </div>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Softwares?.map((item) => (
            <Link href={`product-details/${item?._id}`}>
              <img
                src={urlFor(item?.imageUrl).url()}
                alt="product image"
                className="h-64 w-full object-cover rounded-t-md overflow-hidden transition duration-500 group-hover:scale-105 sm:h-72"
              />

              <div className="relative border border-gray-100 bg-gray-100 py-6 px-3 flex flex-col gap-2 rounded-b-md">
                <div className="flex justify-between gap-4 w-full">
                  <h3 className="text-lg font-medium text-gray-900 line-clamp-2">
                    {item?.name}
                  </h3>
                  <p className="text-lg text-blue-600 font-bold">
                    ${item?.price}
                  </p>
                </div>
                <div className="flex justify-between mt-4 items-center">
                  <button className="bg-red-600 text-white rounded-sm px-2 py-1">
                    Buy Now
                  </button>
                  <button className="bg-blue-600 text-white rounded-sm px-2 py-1">
                    Add To Cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SoftwareCollection;
