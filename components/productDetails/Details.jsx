"use client";
import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";
import React, { useEffect, useState } from "react";
import RelatedProducts from "../Home/RelatedProducts";
import { client, urlFor } from "@/app/lib/sanity";

const Details = ({ productId }) => {
  const [productDetails, setProductDetails] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

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

  return (
    <div className="flex bg-white flex-col w-full py-20">
      <div className="mx-auto max-w-screen-xl w-full">
        <div className="p-4 grid grid-cols md:grid-cols-2 gap-4 items-center">
          <div className="col-span-1">
            {productDetails.imageUrl && (
              <img
                src={urlFor(productDetails.imageUrl).url()}
                className="w-full h-[450px] object-cover"
              />
            )}
          </div>
          <div className="col-span-1 px-8">
            <h2 className="text-3xl">{productDetails?.name}</h2>
            <hr className=" my-3" />
            <p className="text-base line-clamp-6">
              {productDetails?.description}
            </p>
            <p className="text-xl text-blue-600 font-bold my-5">
              ${productDetails?.price}
            </p>
            <div className="flex gap-2">
              <button className="flex gap-1 bg-blue-500 px-4 rounded-md text-white py-2 items-center text-lg">
                <MdOutlineShoppingCart /> Add To Cart
              </button>
              <button className="px-4 py-2 bg-red-500 border text-lg rounded-md text-white ">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <RelatedProducts products={relatedProducts} />
      </div>
    </div>
  );
};

export default Details;
