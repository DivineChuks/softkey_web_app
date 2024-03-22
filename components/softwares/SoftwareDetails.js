"use client";
import { client, urlFor } from "../../app/lib/sanity";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import SkeletonLoader from "../layout/SkeletonLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "@clerk/nextjs";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import useStripeCheckout from "../hooks/useStripeCheckout";

const SoftwareDetails = ({ categoryName }) => {
  const [softwareProducts, setSoftwareProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const handleCheckout = useStripeCheckout();
  const dispatch = useDispatch();
  const { user } = useUser();
  const productsPerPage = 12;

  console.log("count", softwareProducts.length);

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
        setSoftwareProducts(data);
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

  const handleBuyNowClick = (software) => {
    if (!user) {
      router.push("/sign-in");
    } else {
      // Add quantity to the game object before checkout
      const productWithQuantity = { ...software, quantity: 1 };
      handleCheckout(productWithQuantity);
    }
  };

  if (softwareProducts.length === 0) {
    return <SkeletonLoader />;
  }

  return (
    <section className="bg-[#f6f6f6] w-full h-full">
      <ToastContainer />
      <div className="mx-auto max-w-screen-xl px-4 pt-8 pb-20 sm:px-6 sm:py-12 lg:px-8">
        <ul className="mt-8 grid gap-3 md:gap-6 grid-cols-2 lg:grid-cols-5">
          {softwareProducts?.map((item, index) => (
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
        <ReactPaginate
          breakLabel={<span className="mr-3">...</span>}
          nextLabel={
            <span className="ml-4 flex h-7 w-7 items-center justify-center rounded-md bg-black text-white">
              <BsChevronRight />
            </span>
          }
          pageCount={pageCount}
          onPageChange={handlePageClick}
          previousLabel={
            <span className="mr-4 flex h-7 w-7 items-center justify-center rounded-md bg-black text-white">
              <BsChevronLeft />
            </span>
          }
          pageClassName="border border-blue-500 hover:bg-blue-500 hover:text-white w-7 h-7 flex justify-center items-center rounded-md mr-3"
          containerClassName="flex items-center justify-center mt-8"
          activeClassName="bg-blue-500 text-white"
        />
      </div>
    </section>
  );
};

export default SoftwareDetails;
