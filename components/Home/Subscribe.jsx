"use client";
import React, { useState } from "react";
import { client } from "../../app/lib/sanity";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Subscribe = () => {
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
    <section className="bg-white">
      <ToastContainer />
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Subscribe to Our Newsletter
          </h2>

          <p className="hidden text-gray-500 sm:mt-4 sm:block">
            Subscribe to stay at the forefront of gaming and software
            innovations. Receive the latest news, exclusive tips, and early
            access to new releases. Elevate your experience and join our
            community of enthusiasts today.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <form onSubmit={handleSubmit} className="sm:flex sm:gap-4">
            <div className="sm:flex-1">
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full rounded-md border border-gray-300 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-white transition focus:outline-none sm:mt-0 sm:w-auto"
            >
              <span className="text-sm font-medium"> Subscribe </span>

              <svg
                className="h-5 w-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
