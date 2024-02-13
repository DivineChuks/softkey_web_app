"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import { BiSolidChevronDown } from "react-icons/bi";
import { IoCart } from "react-icons/io5";
import CartModal from "../payment/CartModal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="bg-white text-black sticky h-20 z-50 top-0 p-4 flex items-center">
      {showCart && <CartModal />}
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="w-48 mt-3" />
        </Link>
        <input
          className="w-[400px] rounded-full border border-gray-400 focus:outline-none px-3 py-2"
          placeholder="Search Games or Softwares"
        />
        <div className="hidden md:flex text-black items-center text-base gap-6">
          <Link href="/">Home</Link>
          <div className="relative">
            <div
              className="cursor-pointer flex items-center"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            >
              Categories <BiSolidChevronDown />
            </div>
            {isCategoryOpen && (
              <div className="absolute top-[35px] rounded-md flex flex-col gap-3 bg-black text-white shadow px-6 py-4">
                <Link href="/softwares">Softwares</Link>
                <Link href="/games">Games</Link>
              </div>
            )}
          </div>
          <div className="cursor-pointer" onClick={() => setShowCart(true)}>
            <IoCart size={20} />
          </div>
          <Link href="/register">Register</Link>
          <Link href="/login" className="flex items-center gap-2">
            <CgProfile />
            Profile
          </Link>
        </div>
        <div className="md:hidden">
          <button className="cursor-pointer" onClick={() => setIsOpen(true)}>
            <FiMenu color="white" size={30} />
          </button>
          {/* Mobile Menu */}
          <div
            className={
              isOpen
                ? "w-full h-full z-50 fixed left-0 top-0 bg-gray-900/70 text-white md:hidden backdrop-blur"
                : null
            }
          >
            <div
              className={
                isOpen
                  ? "fixed w-4/5 bg-black left-0 top-0 text-white h-full p-10 pt-10 ease-in duration-500"
                  : "fixed p-5 top-0 left-[-100%] duration-500 h-full ease-in"
              }
            >
              <div className="w-full flex justify-between items-center mb-[1rem]">
                <div
                  className="cursor-pointer p-0"
                  onClick={() => setIsOpen(false)}
                >
                  <img src="logo" alt="site logo" />
                </div>
                <div
                  className="p-4 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <FaTimes size={30} />
                </div>
              </div>
              <div className="flex flex-col text-white gap-6 h-full">
                <Link href="/">Home</Link>
                <Link href="/softwares">Software</Link>
                <Link href="/games">Games</Link>
                <IoCart />
                <Link href="/register">Register</Link>
                <Link href="/login" className="flex items-center gap-2">
                  <CgProfile />
                  Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
