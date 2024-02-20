"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import { BiSolidChevronDown } from "react-icons/bi";
import { IoCart } from "react-icons/io5";
import CartModal from "../payment/CartModal";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  const navStyle = active
    ? "bg-white text-black shadow shadow-md"
    : "bg-gray-900 text-white";

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <div
      className={`${navStyle} sticky h-[70px] z-50 top-0 p-4 flex items-center`}
    >
      {showCart && <CartModal />}
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <img
            src={active ? "logoblack.png" : "logowhite.png"}
            alt="Logo"
            className="w-28 h-[80px] mt-3 object-cover"
          />
        </Link>
        <div className="hidden text-lg md:flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/softwares">Softwares</Link>
          <Link href="/games">Games</Link>
        </div>
        <div className="hidden md:flex items-center text-lg gap-6">
          {/* <div className="relative">
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
          </div> */}
          <div className="cursor-pointer" onClick={() => setShowCart(true)}>
            <IoCart size={25} />
          </div>
          <Link
            className="bg-blue-500 px-3 py-1 rounded-md text-white"
            href="/register"
          >
            Register
          </Link>
          <Link
            className="bg-transparent border border-blue-500 rounded-md px-3 py-1 hover:bg-blue-500 hover:text-white text-blue-500"
            href="/login"
          >
            Login
          </Link>
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
                <Link
                  className="bg-blue-500 px-3 py-1 rounded-md text-white"
                  href="/register"
                >
                  Register
                </Link>
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
