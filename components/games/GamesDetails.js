"use client";
import { client, urlFor } from "../../app/lib/sanity";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import SkeletonLoader from "../layout/SkeletonLoader";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import useStripeCheckout from "../hooks/useStripeCheckout";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "@clerk/nextjs";

const GameDetails = ({ categoryName }) => {
  const dispatch = useDispatch();
  const [gameProducts, setGameProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const handleCheckout = useStripeCheckout();
  const { user } = useUser();
  const productsPerPage = 8;

  useEffect(() => {
    const query = `
      *[_type == "product" && category->name == "${categoryName}"] {
        name,
        "imageUrl": images[0].asset->url,
        description,
        slug,
        price,
        _id,
        category->{
          name
        }
      }
    `;

    // Fetch the total count of products in the category
    client.fetch(`count(${query})`).then((count) => {
      setPageCount(Math.ceil(count / productsPerPage));
    });

    // Fetch products for the current page
    const paginatedQuery = `${query} | order(_createdAt desc) [${
      currentPage * productsPerPage
    }...${(currentPage + 1) * productsPerPage}]`;
    client
      .fetch(paginatedQuery)
      .then((data) => {
        setGameProducts(data);
      })
      .catch(console.error);
  }, [categoryName, currentPage]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

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

  if (gameProducts.length === 0) {
    return <SkeletonLoader />;
  }

  return (
    <section className="bg-[#f6f6f6]">
      <ToastContainer />
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:py-4 pb-16 lg:px-8">
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gameProducts?.map((item, index) => (
            <div key={index}>
              <Link href={`product-details/${item?._id}`}>
                <img
                  src={urlFor(item?.imageUrl).url()}
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
          ))}
        </ul>
        <ReactPaginate
          breakLabel={<span className="mr-3">...</span>}
          nextLabel={
            <span className="ml-4 flex h-7 w-7 items-center justify-center rounded-md bg-black text-white">
              <BsChevronRight />
            </span>
          }
          pageCount={pageCount}
          //   marginPagesDisplayed={2}
          //   pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          previousLabel={
            <span className="mr-4 flex h-7 w-7 items-center justify-center rounded-md bg-black text-white">
              <BsChevronLeft />
            </span>
          }
          pageClassName="border border-blue-500 hover:bg-blue-500 hover:text-white w-7 h-7 flex justify-center items-center rounded-md mr-3"
          containerClassName="flex items-center justify-center mt-8 mb-4"
          activeClassName="bg-blue-500 text-white"
        />
      </div>
    </section>
  );
};

export default GameDetails;
