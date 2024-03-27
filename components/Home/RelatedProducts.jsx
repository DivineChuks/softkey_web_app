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
    dispatch(addToCart(product));
    toast.success("product added to cart!");
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
    <section className="bg-[#f6f6f6]">
      <ToastContainer />
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 sm:py-12 lg:px-8">
        <div className="w-full flex justify-between">
          <h2 className="text-xl mb-8 font-bold text-gray-900 sm:text-3xl">
            Related Products
          </h2>
        </div>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products?.map((item, index) => (
            <div
              key={index}
              className="col-span-1 bg-white shadow rounded-md w-full"
            >
              <Link href={`product-details/${item?._id}`}>
                <div className="h-[180px] md:h-[236px] w-full px-4 overflow-hidden flex items-center justify-center">
                  <img
                    src={urlFor(item?.imageUrl).url()}
                    alt="product image"
                    className="w-full object-contain rounded-md overflow-hidden h-[140px] md:h-[200px]"
                  />
                </div>
              </Link>
              <div className="relative bg-[#f6f6f6] shadow pt-6 pb-4 px-3 flex flex-col gap-2 rounded-b-md">
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
                <div className="flex flex-col md:flex-row gap-2 md:gap-0 justify-between mt-4 items-center">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-blue-600 text-white w-full rounded-md md:w-max p-2 text-sm transition duration-300 ease-in-out hover:bg-black"
                  >
                    Add To Cart
                  </button>
                  <button
                    onClick={() => handleBuyNowClick(item)}
                    className="bg-purple-600 text-white w-full md:w-max rounded-md text-sm p-2 transition duration-300 ease-in-out hover:bg-black"
                  >
                    Buy Now
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
