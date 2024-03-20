"use client";
import { client, urlFor } from "../../app/lib/sanity";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiCategory } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useStripeCheckout from "../hooks/useStripeCheckout";

const GamesCollection = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [Games, setGames] = useState([]);
  const handleCheckout = useStripeCheckout();
  const { user } = useUser();

  useEffect(() => {
    client
      .fetch(
        `*[_type == "product" && references(*[_type == "category" && name == "Games"]._id)] | order(name asc) {
          _id,
          name,
          "imageUrl": images[0].asset->url,
          description,
          slug,
          price
        }[0...10]`
      )
      .then((products) => setGames(products))
      .catch(console.error);
  }, []);

  const handleBuyNowClick = (game) => {
    if (!user) {
      router.push("/sign-in");
    } else {
      // Add quantity to the game object before checkout
      const productWithQuantity = { ...game, quantity: 1 };
      handleCheckout(productWithQuantity);
    }
  };

  const handleAddToCart = (product) => {
    if (!user) {
      router.push("/sign-in");
    } else {
      dispatch(addToCart(product));
      toast.success("product added to cart!");
    }
  };
  return (
    <section className="bg-[#f6f6f6]">
      <ToastContainer />
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="w-full flex justify-between mb-8">
          <h2 className="hidden md:block text-2xl font-bold text-gray-900 sm:text-3xl">
            Best Selling Games
          </h2>
          <h2 className="md:hidden block text-2xl font-bold text-gray-900 sm:text-3xl">
            Best Selling<br></br> Games
          </h2>

          <Link
            href="/games"
            className="max-w-md py-2 h-fit px-4 rounded-md flex items-center gap-1 text-white bg-blue-600"
          >
            View all collections
            <FaArrowRight />
          </Link>
        </div>

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Games?.map((game, index) => (
            <div key={index}>
              <Link href={`product-details/${game?._id}`}>
                <img
                  src={urlFor(game?.imageUrl).url()}
                  alt="product image"
                  className="h-64 w-full object-cover transition rounded-t-md overflow-hidden duration-500 group-hover:scale-105 sm:h-72"
                />
              </Link>
              <div className="relative bg-white shadow pt-6 pb-4 px-3 flex flex-col gap-2 rounded-b-md">
                <Link
                  href={`product-details/${game?._id}`}
                  className="flex justify-between gap-4 w-full"
                >
                  <h3 className="text-lg font-medium text-gray-900 line-clamp-2">
                    {game?.name}
                  </h3>
                  <p className="text-lg text-blue-600 font-bold">
                    ${game?.price}
                  </p>
                </Link>
                <div className="flex justify-between mt-4 items-center">
                  <button
                    onClick={() => handleBuyNowClick(game)}
                    className="bg-purple-600 text-white rounded-md px-3 py-2"
                  >
                    Buy Now
                  </button>
                  <button
                    onClick={() => handleAddToCart(game)}
                    className="bg-blue-600 text-white rounded-md px-3 py-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GamesCollection;
