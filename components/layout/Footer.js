"use client";
import Link from "next/link";
import React, { useState } from "react";
import { client } from "../../app/lib/sanity";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page

    try {
      const result = await client.create({
        _type: "subscriber",
        email: email,
      });
      console.log("Subscriber added", result);
      setEmail("");
      toast.success("Thank you for subscribing!");
    } catch (error) {
      console.error("Submission error", error);
      // Handle submission errors (e.g., display an error message)
    }
  };
  return (
    <div className="flex flex-col bg-gray-900 justify-center items-center text-white px-[2rem] md:px-0 w-full pt-16 pb-6">
      <ToastContainer />
      <div className="grid grid-cols-1 gap-3 justify-center md:grid-cols-5 w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-4 col-span-1 md:col-span-2 px-3">
          <img
            src="/logowhite.png"
            alt="footer"
            className="w-28 h-20 object-cover mb-4"
          />
          <h2 className="text-base text-gray-200 text-semibold mb-2">
            FECUND INTEGRATED LIMITED.
          </h2>
          <p className="text-base text-gray-500 font-light">
            Office 1439 182-184 High Street North, East Ham, London,
            United Kingdom, E6 2JA.
          </p>
        </div>
        <div className="flex flex-col gap-6 pt-8 md:pt-0 ">
          <h2 className="font-semibold leading-[20.15px] mt-8 md:mt-0 text-xl">
            Useful Links
          </h2>
          <Link
            href="/"
            smooth
            className="cursor-pointer text-base text-gray-100 font-light"
          >
            Home
          </Link>
          <Link
            href="/softwares"
            smooth
            className="cursor-pointer text-base text-gray-100 font-light"
          >
            Softwares
          </Link>
          <Link
            href="/games"
            smooth
            className="cursor-pointer text-base text-gray-100 font-light"
          >
            Games
          </Link>
          <Link
            href="/blogs"
            smooth
            className="cursor-pointer text-base text-gray-100 font-light"
          >
            Blogs
          </Link>
        </div>
        <div className="flex flex-col gap-6 pt-8 md:pt-0">
          <h2 className="font-semibold leading-[20.15px] mt-8 md:mt-0 text-xl">
            Information
          </h2>
          <Link href="/terms" className="text-base text-gray-100 font-light">
            Terms & Conditions.
          </Link>
          <Link
            href="delivery-terms"
            className="text-base text-gray-100 font-light"
          >
            Delivery Terms.
          </Link>
          <Link
            href="refund-policy"
            className="text-base text-gray-100 font-light"
          >
            Refund & Refund Policy.
          </Link>
          <Link
            href="payment-method"
            className="text-base text-gray-100 font-light"
          >
            Payment methods.
          </Link>
          <Link
            href="privacy-policy"
            className="text-base text-gray-100 font-light"
          >
            Privacy policy.
          </Link>
        </div>
        <div className="flex flex-col gap-6 pt-8 md:pt-0">
          <h2 className="font-semibold leading-[20.15px] mt-8 md:mt-0 text-xl">
            Be The First To Know
          </h2>
          <p className="text-gray-500 text-sm">
            Get all the latest information on Events, Sales and Offers. Sign up
            for newsletter today.
          </p>
          <form onSubmit={handleSubmit} className="sm:flex">
            <div className="sm:flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full rounded-l-md border border-gray-300 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="group mt-4 flex w-max items-center justify-center gap-2 rounded-r-md bg-blue-600 px-2 py-2 text-white transition focus:outline-none sm:mt-0 sm:w-auto"
            >
              <span className="text-sm font-medium"> Subscribe </span>
            </button>
          </form>
        </div>
      </div>
      <hr className="border-1 h-px bg-gray-100 w-full  mx-auto mt-14 mb-7" />
      <div className="flex justify-center gap-3 md:gap-0 md:justify-between max-w-screen-xl w-full mx-auto">
        <p className="text-base text-white font-light">
          Privacy & terms. | Contact us
        </p>
        <p className="text-base text-gray-100 font-light underline md:pr-4">
          Copyright © 2024 Cdkeyzone.
        </p>
      </div>
    </div>
  );
};

export default Footer;
