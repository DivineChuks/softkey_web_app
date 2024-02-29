import { urlFor } from "../../app/lib/sanity";
import Link from "next/link";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "@clerk/nextjs";
import { addToCart } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import useStripeCheckout from "../hooks/useStripeCheckout";

const RelatedProducts = ({ products }) => {
  const dispatch = useDispatch();
  const handleCheckout = useStripeCheckout();
  const { user } = useUser();
  const handleAddToCart = (product) => {
    if (!user) {
      router.push("/sign-in");
    } else {
      dispatch(addToCart(product));
      toast.success("product added to cart!");
    }
  };

  const handleBuyNowClick = (item) => {
    if (!user) {
      router.push("/sign-in");
    } else {
      // Add quantity to the game object before checkout
      const productWithQuantity = { ...item, quantity: 1 };
      handleCheckout(productWithQuantity);
    }
  };

  return (
    <section>
      <ToastContainer />
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 sm:py-12 lg:px-8">
        <div className="w-full flex justify-between">
          <h2 className="text-xl mb-8 font-bold text-gray-900 sm:text-3xl">
            Related Products
          </h2>
        </div>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products?.map((item) => (
            <div>
              <Link href={`/product-details/${item?._id}`}>
                <img
                  src={urlFor(item?.imageUrl).url()}
                  alt="product image"
                  className="h-64 w-full object-cover rounded-t-md overflow-hidden transition duration-500 group-hover:scale-105 sm:h-72"
                />
              </Link>
              <div className="relative border border-gray-100 bg-gray-100 py-6 px-3 flex flex-col gap-2 rounded-b-md">
                <Link
                  Link
                  href={`/product-details/${item?._id}`}
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
                    className="bg-red-600 text-white rounded-md px-2 py-1"
                  >
                    Buy Now
                  </button>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-blue-600 text-white rounded-md px-2 py-1"
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

export default RelatedProducts;
