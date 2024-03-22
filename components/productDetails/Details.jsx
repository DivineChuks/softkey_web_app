"use client";
import { MdOutlineShoppingCart } from "react-icons/md";
import React, { useEffect, useState } from "react";
import RelatedProducts from "../Home/RelatedProducts";
import { client, urlFor } from "../../app/lib/sanity";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "@clerk/nextjs";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import useStripeCheckout from "../hooks/useStripeCheckout";

const Details = ({ productId }) => {
  const dispatch = useDispatch();
  const { user } = useUser();
  const [productDetails, setProductDetails] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const handleCheckout = useStripeCheckout();

  const handleAddToCart = (product) => {
    if (!user) {
      router.push("/sign-in");
    } else {
      dispatch(addToCart(product));
      toast.success("product added to cart!");
    }
  };

  useEffect(() => {
    // Ensure that the parameter names match exactly
    client
      .fetch(
        `*[_type == "product" && _id == "${productId}"] {
        name,
        "imageUrl": images[0].asset->url,
        description,
        slug,
        price,
        _id,
        category {
          _ref
        }
      }`,
        { $productId: productId } // Make sure this matches the variable in the query
      )
      .then((products) => {
        const product = products[0];
        if (!product) {
          console.error("Product not found");
          return;
        }
        setProductDetails(product);

        // Check for category reference
        const categoryRef = product.category?._ref;

        if (!categoryRef) {
          console.error("Category reference not found for the product");
          return;
        }

        // Fetch related products using the category reference and excluding the current product
        return client.fetch(
          `*[_type == "product" && category._ref == "${categoryRef}" && _id != "${productId}"][0...4] {
          name,
          "imageUrl": images[0].asset->url,
          description,
          slug,
          price,
          _id
        }`,
          { $categoryRef: categoryRef, $productId: productId } // Correctly provide all parameters
        );
      })
      .then((relatedProducts) => {
        if (relatedProducts) {
          setRelatedProducts(relatedProducts);
        }
      })
      .catch(console.error);
  }, [productId]); // Dependency array to re-run the effect if productId changes
  console.log("relatedProducts--->", relatedProducts);

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
    <div className="flex flex-col w-full py-10 md:py-20">
      <ToastContainer />
      <div className="mx-auto max-w-screen-xl w-full">
        <div className="p-4 grid grid-cols md:grid-cols-2 gap-4 items-center">
          <div className="col-span-2 md:col-span-1">
            {productDetails.imageUrl && (
              <img
                src={urlFor(productDetails.imageUrl).url()}
                className="w-full h-[450px] object-fill rounded-md"
              />
            )}
          </div>
          <div className="col-span-2 md:col-span-1 px-2 md:px-8">
            <h2 className="text-3xl font-semibold">{productDetails?.name}</h2>
            <hr className=" my-3" />
            <p className="text-base line-clamp-6 text-gray-500 tracking-wide">
              {productDetails?.description}
            </p>
            <p className="text-xl text-blue-600 font-bold my-5">
              ${productDetails?.price?.toFixed(2)}
            </p>
            <div className="flex flex-col md:flex-row gap-2">
              <button
                onClick={() => handleAddToCart(productDetails)}
                className="flex gap-1 bg-blue-500 px-4 rounded-md text-white py-2 items-center text-lg transition duration-300 ease-in-out hover:bg-black"
              >
                <MdOutlineShoppingCart /> Add To Cart
              </button>
              <button
                onClick={() => handleBuyNowClick(productDetails)}
                className="px-4 py-2 bg-purple-500 border text-lg rounded-md text-white transition duration-300 ease-in-out hover:bg-black"
              >
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 bg-[#f6f6f6]">
        <RelatedProducts products={relatedProducts} />
      </div>
    </div>
  );
};

export default Details;
