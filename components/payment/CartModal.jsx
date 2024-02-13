import React from "react";
import { FaTimes } from "react-icons/fa";
import { CiCircleRemove } from "react-icons/ci";
import Link from "next/link";

const CartModal = () => {
  return (
    <div
      className="inner fixed inset-0 z-50 flex h-screen w-full justify-center bg-black bg-opacity-50 p-4 px-6 pb-10 pt-10 backdrop-blur-sm md:px-0"
      id="target"
    >
      <div className="relative h-fit max-h-[550px] w-[400px] overflow-y-auto rounded-md bg-white px-4 py-3 shadow">
        <FaTimes
          color="#FF9901"
          className="absolute right-3 top-3 cursor-pointer text-[20px]"
        />
        <h2 className="mb-4 text-[16px] font-semibold text-black">Cart</h2>
        <hr />
        <div className="w-full cursor-pointer">
          <div className="mb-4 mt-4 flex w-full justify-between">
            <div className="flex gap-3">
              <img
                src="gameTwo.jpg"
                className="h-[100px] w-[120px] object-cover"
                alt="ads"
              />
              <div className="flex flex-col gap-1">
                <h2 className="text-[15px] font-medium text-gray-800">
                  product title
                </h2>
                <h2 className="text-[15px] font-medium text-gray-800">
                  Product size
                </h2>
                <h2 className="text-[15px] font-normal text-gray-400">
                  Product category
                </h2>
                <h2 className="text-[16px] font-semibold text-accent">
                  Product price
                </h2>
              </div>
            </div>
            <CiCircleRemove color="#FF9901" size={20} />
          </div>
          <hr />
          <Link href="/cart">
            <button className="bg-blue-500 text-white py-2 px-2 w-full">
              View My Cart
            </button>
          </Link>
          <p className="text-center underline mt-2">Continue shopping</p>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
