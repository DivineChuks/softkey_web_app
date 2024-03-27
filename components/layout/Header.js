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
import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
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
  const [productCategories, setProductCategories] = useState(null);
  const [showSoftwareCategories, setShowSoftwareCategories] = useState(false);
  const [showGamesCategories, setShowGamesCategories] = useState(false);
  const softwareId = "7782e52e-9147-41b8-8010-c40e18e4a91f";
  const gameId = "d1671e23-9a37-4253-99cf-9ff805153fb1";

  const { user } = useUser();

  console.log("categories--->", productCategories);

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

  const handleSoftware = () => {
    router.push("/softwares");
    setShowSoftwareCategories(false);
  };

  const handleCategoryClick = (id) => {
    router.push(`/softwares`);
    setShowSoftwareCategories(false);
  };

  const handleGame = () => {
    router.push("/games");
    setShowGamesCategories(false);
  };

  const handleGameClick = (id) => {
    router.push(`/games`);
    setShowGamesCategories(false);
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) return; // Ignore empty searches
    router.push(`/search?term=${encodeURIComponent(searchTerm)}`);
    setTimeout(() => {
      setSearch(false);
    }, 300);
  };

  useEffect(() => {
    fetchSoftwareCat();
  }, [softwareId]);

  useEffect(() => {
    fetchGameCat();
  }, [gameId]);

  const fetchSoftwareCat = () => {
    const query = `
    *[_type == "category" && parentCategory._ref == "${softwareId}"] {
      _id,
      name
      // ... any other fields you need
    }
  `;
    client
      .fetch(query, { softwareId })
      .then((data) => {
        setProductCategories(data);
      })
      .catch(console.error);
  };

  const fetchGameCat = () => {
    const query = `
    *[_type == "category" && parentCategory._ref == "${gameId}"] {
      _id,
      name
      // ... any other fields you need
    }
  `;
    client
      .fetch(query, { gameId })
      .then((data) => {
        setProductCategories(data);
      })
      .catch(console.error);
  };

  return (
    <div className="w-full">
      <div
        className={`h-[110px] p-4 flex items-center bg-white text-black shadow-md`}
      >
        <div className="relative container mx-auto flex justify-between items-center">
          <Link href="/">
            <img
              src="/logoblack.png"
              alt="Logo"
              className="w-28 h-[80px] mt-3 object-cover"
            />
          </Link>
          <div className="hidden md:flex flex-row items-center w-[40%]">
            <input
              type="text"
              placeholder="Search products..."
              className="input-search flex-1 rounded-l-full bg-transparent focus:outline-none border py-2 px-4 border-gray-200"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className={`bg-gray-900 rounded-r-full text-white px-3 py-[9px]`}
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          <div className="hidden md:flex items-center text-lg gap-8">
            <div
              className="cursor-pointer relative"
              onClick={() => setShowCart(!showCart)}
            >
              <IoCart size={25} />
              <div className="absolute top-[-8px] z-50 right-[-8px] text-[12px] flex justify-center items-center rounded-full bg-blue-500 text-white w-[18px] h-[18px] p-2">
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
                  className="bg-gray-900 px-3 py-1 rounded-md text-white"
                  href="/sign-up"
                >
                  Register
                </Link>
                <Link
                  className="bg-transparent border border-gray-900 rounded-md px-3 py-1 hover:bg-gray-900 hover:text-white text-gray-900"
                  href="/sign-in"
                >
                  Login
                </Link>
              </div>
            )}
          </div>
          <div className="flex md:hidden">
            <button className="cursor-pointer" onClick={() => setIsOpen(true)}>
              <FiMenu color="black" size={30} />
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
                    <div className="flex flex-col gap-4 w-full">
                      <Link
                        className="bg-blue-600 px-3 py-1 rounded-md w-full text-white"
                        href="/sign-up"
                        onClick={() => setIsOpen(false)}
                      >
                        Register
                      </Link>
                      <Link
                        className="bg-transparent w-full border border-blue-600 rounded-md px-3 py-1 hover:bg-blue-600 hover:text-white text-blue-600"
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
          {showCart && (
            <CartModal showCart={showCart} setShowCart={setShowCart} />
          )}
        </div>
      </div>
      <div
        onMouseLeave={() => {
          setShowGamesCategories(false);
          setShowSoftwareCategories(false);
        }}
        className="hidden sticky z-50 top-10 w-full h-14 bg-gray-900 justify-center text-white text-lg md:flex items-center gap-6 "
      >
        <Link href="/">Home</Link>
        <div
          className="flex items-center gap-1"
          onMouseEnter={() => {
            setShowSoftwareCategories(true);
            fetchSoftwareCat();
          }}
        >
          <p className="cursor-pointer">Softwares</p>
          {showSoftwareCategories ? (
            <FaChevronUp size="13" />
          ) : (
            <FaChevronDown size="13" />
          )}
          {showSoftwareCategories && (
            <div
              className="absolute left-0 w-full z-50 px-2 right-0 grid grid-cols-4 mx-auto top-[50px] bg-white text-gray-900 h-max  mt-2 py-6 rounded shadow"
              // onMouseEnter={() => setShowSoftwareCategories(true)}
              onMouseLeave={() => setShowSoftwareCategories(false)}
            >
              {productCategories?.slice(0, 15)?.map((category, index) => (
                <>
                  <div
                    key={index}
                    onClick={() => handleCategoryClick(category?._id)}
                    className="px-4 py-2 uppercase cursor-pointer text-sm hover:text-blue-600"
                  >
                    {category.name}
                  </div>
                </>
              ))}
              <div
                className="text-blue-500 text-base  flex justify-start cursor-pointer mt-3 pl-3"
                onClick={handleSoftware}
              >
                VIEW ALL
              </div>
            </div>
          )}
        </div>
        <div
          className="flex items-center gap-1"
          onMouseEnter={() => {
            setShowGamesCategories(true);
            fetchGameCat();
          }}
        >
          <p className="cursor-pointer">Games</p>
          {showGamesCategories ? (
            <FaChevronUp size="13" />
          ) : (
            <FaChevronDown size="13" />
          )}
          {showGamesCategories && (
            <div
              className="absolute left-0 w-full px-2 right-0 grid grid-cols-4 mx-auto bg-white text-gray-900 h-max top-[50px] mt-2 py-6 rounded shadow"
              onMouseEnter={() => {
                setShowGamesCategories(true);
              }}
              onMouseLeave={() => {
                setShowGamesCategories(false);
              }}
            >
              {productCategories?.slice(0, 15)?.map((category, index) => (
                <>
                  <div
                    key={index}
                    onClick={() => handleGameClick(category?._id)}
                    className="px-4 py-2 uppercase cursor-pointer text-sm hover:text-blue-600"
                  >
                    {category.name}
                  </div>
                </>
              ))}
              <div
                className="text-blue-500 flex justify-start uppercase cursor-pointer mt-3 pl-3"
                onClick={handleGame}
              >
                View all
              </div>
            </div>
          )}
        </div>
        <Link href="/blogs">Blogs</Link>
      </div>
    </div>
  );
};

export default Header;
