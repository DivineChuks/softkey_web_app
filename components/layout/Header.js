"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoCart } from "react-icons/io5";
import { useUser, UserButton } from "@clerk/nextjs";
import CartModal from "../payment/CartModal";
import { useSelector } from "react-redux";
import { client } from "../../app/lib/sanity";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [active, setActive] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [showCart, setShowCart] = useState(false);

  const { user } = useUser();

  console.log("user--->", user);

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

  const handleSearch = async () => {
    if (!searchTerm.trim()) return; // Ignore empty searches
    router.push(`/search?term=${encodeURIComponent(searchTerm)}`);
    setTimeout(() => {
      setSearch(false);
    }, 300);
  };

  return (
    <div
      className={`${navStyle} sticky h-[70px] z-50 top-0 p-4 flex items-center`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <img
            src={active ? "logoblack.png" : "logowhite.png"}
            alt="Logo"
            className="w-28 h-[80px] mt-3 object-cover"
          />
        </Link>
        {search ? (
          <div className="flex flex-row items-center w-[40%]">
            <input
              type="text"
              placeholder="Search products..."
              className="input-search flex-1 rounded-l-full bg-transparent focus:outline-none border py-2 px-4 border-gray-200"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className={`bg-blue-500 rounded-r-full ${
                active ? "text-black" : "text-white"
              } px-3 py-[9px]`}
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        ) : (
          <div className="hidden text-lg md:flex items-center gap-6">
            <Link href="/">Home</Link>
            <Link href="/softwares">Softwares</Link>
            <Link href="/games">Games</Link>
            <Link href="/blogs">Blogs</Link>
            <CiSearch
              className="cursor-pointer"
              onClick={() => setSearch((prev) => !prev)}
            />
          </div>
        )}
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
          <div
            className="cursor-pointer relative"
            onClick={() => setShowCart(!showCart)}
          >
            <IoCart size={25} />
            <div className="absolute top-[-8px] right-[-8px] text-[12px] flex justify-center items-center rounded-full bg-blue-500 text-white w-[18px] h-[18px] p-2">
              {cartItems?.length}
            </div>
          </div>
          {user ? (
            <div className="flex gap-2 items-center">
              <UserButton afterSignOutUrl="/" />
              <h3>{user?.firstName}</h3>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                className="bg-blue-500 px-3 py-1 rounded-md text-white"
                href="/sign-up"
              >
                Register
              </Link>
              <Link
                className="bg-transparent border border-blue-500 rounded-md px-3 py-1 hover:bg-blue-500 hover:text-white text-blue-500"
                href="/sign-in"
              >
                Login
              </Link>
            </div>
          )}
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
                  <img
                    src="/logowhite.png"
                    className="w-16 h-16 object-cover"
                    alt="site logo"
                  />
                </div>
                <div
                  className="p-4 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <FaTimes size={30} />
                </div>
              </div>
              <div className="flex flex-col text-white gap-6 h-full">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <Link href="/softwares" onClick={() => setIsOpen(false)}>
                  Software
                </Link>
                <Link href="/games" onClick={() => setIsOpen(false)}>
                  Games
                </Link>
                <Link href="/blogs" onClick={() => setIsOpen(false)}>
                  Blogs
                </Link>
                <div
                  className="cursor-pointer relative w-8"
                  onClick={() => setShowCart(!showCart)}
                >
                  <IoCart size={25} />
                  <div className="absolute top-0 right-[-10px] md:top-[-8px] md:right-[-8px] text-[12px] flex justify-center items-center rounded-full bg-blue-500 text-white w-[18px] h-[18px] p-2">
                    {cartItems?.length}
                  </div>
                </div>
                {user ? (
                  <UserButton afterSignOutUrl="/" />
                ) : (
                  <div className="flex items-center gap-3">
                    <Link
                      className="bg-blue-500 px-3 py-1 rounded-md text-white"
                      href="/sign-up"
                      onClick={() => setIsOpen(false)}
                    >
                      Register
                    </Link>
                    <Link
                      className="bg-transparent border border-blue-500 rounded-md px-3 py-1 hover:bg-blue-500 hover:text-white text-blue-500"
                      href="/sign-in"
                      onClick={() => setIsOpen(false)}
                    >
                      Login
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showCart && <CartModal showCart={showCart} setShowCart={setShowCart} />}
    </div>
  );
};

export default Header;
