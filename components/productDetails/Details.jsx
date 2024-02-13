"use client";
import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";
import React, { useState } from "react";
import RelatedProducts from "../Home/RelatedProducts";

const Details = () => {
  return (
    <div className="flex flex-col w-full py-20">
      <div className="mx-auto max-w-screen-lg w-full">
        <div className="p-4 grid grid-cols md:grid-cols-2 gap-8">
          <div className="col-span-1">
            <Image src="/gameTwo.jpg" width={500} height={500} />
          </div>
          <div className="col-span-1 px-8">
            <h2 className="text-3xl">Turnip Boy Robs a Bank</h2>
            <hr className=" my-3" />
            <p className="text-base line-clamp-6">
              Buy Turnip Boy Robs a Bank now! You will receive the key for the
              game by Graffiti Games via eMail within the stated delivery time.
              Turnip Boy is back! This time he's teaming up with the fearsome
              Pickled Gang to plan and execute the weirdest heist of all time.
              Download Turnip Boy Robs a Bank for free via the Steam network.
              Steam can be found here. This is an EU key that can only be used /
              activated within Europe.
            </p>
            <p className="text-xl text-blue-600 font-bold my-5">$14.99</p>
            <button className="flex gap-1 bg-blue-400 px-6 rounded-md text-white py-2 items-center text-[18px]">
              <MdOutlineShoppingCart /> Add To Cart
            </button>
          </div>
        </div>
        {/* <div className="bg-gray-300 ">
          <div className="py-4 flex justify-between max-w-[900px] mx-auto w-full">
            <div className="grid grid-cols-2 gap-2">
              <p>Delivery time:</p>
              <p>5-10 minutes</p>
              <p>Stock:</p>
              <p>Available</p>
              <p>Region</p>
              <p>EU</p>
            </div>
            <div className="w-px bg-gray-400 h-20"></div>
            <div className="flex flex-col items-center gap-4">
              <div className="grid grid-cols-2 gap-2 items-center">
                <p className="text-3xl font-bold">$ 54,83</p>
                <button className="flex gap-1 bg-blue-400 px-8 rounded-sm text-white py-1 items-center text-[18px]">
                  <MdOutlineShoppingCart /> Add To Cart
                </button>
              </div>
              <span className="flex items-center">
                <span className="h-px flex-1 bg-black"></span>
                <span className="shrink-0 px-6">OR</span>
                <span className="h-px flex-1 bg-black"></span>
              </span>
              <button className="bg-black w-fit px-8 rounded-sm text-white py-1 items-center text-[18px]">
                Checkout with Stripe
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="flex justify-between border border-b border-b-gray-300 gap-12 items-center">
            <div
              className={`${
                selectedTab === "overview" ? "text-blue-500 " : ""
              } flex cursor-pointer text-center justify-center items-center gap-2 text-[16px] font-semibold text-[#363636]`}
              onClick={() => setSelectedTab("overview")}
            >
              Product Description
            </div>
            <div className="w-px bg-gray-400 h-10"></div>
            <div
              className={`${
                selectedTab === "requirement" ? "text-blue-500" : ""
              } flex cursor-pointer text-center justify-center items-center gap-2 text-[16px] font-semibold text-[#363636]`}
              onClick={() => setSelectedTab("requirement")}
            >
              System Requirement
            </div>
          </div>
          <div>{renderContent()}</div>
        </div> */}
        <div>
          <RelatedProducts />
        </div>
      </div>
    </div>
  );
};

export default Details;
