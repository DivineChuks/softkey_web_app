"use client";
import React, { useEffect, useState } from "react";
import SkeletonLoader from "./SkeletonLoader";
import { client, urlFor } from "../../app/lib/sanity";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const Search = ({ term }) => {
  const [results, setResults] = useState([]);
  const dispatch = useDispatch();
  const { user } = useUser();
  useEffect(() => {
    if (term) {
      const query = `*[_type == "product" && name match '${term}*']`;
      client.fetch(query).then((data) => {
        setResults(data);
      });
    }
  }, [term]);

  console.log("results----->", results);

  const handleAddToCart = (item) => {
    if (!user) {
      router.push("/sign-in");
    } else {
      dispatch(addToCart(item));
      toast.success("product added to cart!");
    }
  };

  const handleBuyNowClick = (game) => {
    if (!user) {
      router.push("/sign-in");
    } else {
      // Add quantity to the game object before checkout
      const productWithQuantity = { ...game, quantity: 1 };
      handleCheckout(productWithQuantity);
    }
  };

  if (results?.length === 0) {
    return <SkeletonLoader />;
  }

  return (
    <section className="bg-[#f6f6f6]">
      <ToastContainer />
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:py-4 pb-16 lg:px-8">
        <ul className="mt-8 mb-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {results?.length > 0 ? (
            results?.map((item, index) => (
              <div key={index}>
                <Link href={`product-details/${item?._id}`}>
                  <img
                    src={urlFor(item?.images[0]?.asset?._ref)}
                    alt="product image"
                    className="h-64 w-full object-cover rounded-t-md overflow-hidden transition duration-500 group-hover:scale-105 sm:h-72"
                  />
                </Link>
                <div className="relative bg-white shadow pt-6 pb-4 px-3 flex flex-col gap-2 rounded-b-md">
                  <Link
                    href={`product-details/${item?._id}`}
                    className="flex justify-between gap-4 w-full"
                  >
                    <h3 className="text-lg font-medium text-gray-900 line-clamp-2">
                      {item?.name}
                    </h3>
                    <p className="text-lg text-blue-600 font-bold">
                      ${item?.price}
                    </p>
                  </Link>
                  <div className="flex justify-between mt-4 items-center">
                    <button
                      onClick={() => handleBuyNowClick(item)}
                      className="bg-purple-600 text-white rounded-md px-3 py-2"
                    >
                      Buy Now
                    </button>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="bg-blue-600 text-white rounded-md px-3 py-2"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h2>No result found</h2>
          )}
        </ul>
      </div>
    </section>
  );
};

export default Search;
