"use client";
import { client, urlFor } from "@/app/lib/sanity";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import SkeletonLoader from "../layout/SkeletonLoader";

const GameDetails = ({ categoryName }) => {
  const [gameProducts, setGameProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
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

  if (gameProducts.length === 0) {
    return <SkeletonLoader />;
  }

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 pt-8 pb-20 sm:px-6 sm:py-12 lg:px-8">
        <ul className="mt-8 mb-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {gameProducts?.map((item) => (
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
        <ReactPaginate
          breakLabel={<span className="mr-4">...</span>}
          nextLabel={
            <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-md bg-black text-white">
              <BsChevronRight />
            </span>
          }
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          previousLabel={
            <span className="mr-4 flex h-8 w-8 items-center justify-center rounded-md bg-black text-white">
              <BsChevronLeft />
            </span>
          }
          pageClassName="border border-blue-500 hover:bg-blue-500 hover:text-white w-8 h-8 flex justify-center items-center rounded-md mr-4"
          containerClassName="flex items-center justify-center mt-8 mb-4"
          activeClassName="bg-blue-500 text-white"
        />
      </div>
    </section>
  );
};

export default GameDetails;
