import Link from "next/link";
import { AiOutlineArrowUp } from "react-icons/ai";
// import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="flex flex-col bg-gray-900 text-white px-[2rem] md:px-0 w-full pt-16 pb-6">
      <div className="grid grid-cols-2 place-items-center md:place-items-start md:grid-cols-4 w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-4 pl-14 md:pl-[6rem]">
          <img src="" alt="footer" className="w-[15rem] mb-4" />
          <p className="text-[1.7rem] font-rubik text-gray-100 font-light">
            softkeys.com
          </p>
          {/* <p className="text-[1.7rem] font-rubik text-gray-100 font-light">+234 7012 345 6789</p> */}
          <div className="flex gap-3 items-center">
            {/* <img src={Facebook} alt="facebook" /> */}
            <a href="#" target="_blank" rel="noreferrer">
              <img src="" alt="twitter" className="cursor-pointer" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <img className="cursor-pointer" src="" alt="instagram" />
            </a>
            {/* <img src={Linkedin} alt="linkedin" />        */}
          </div>
        </div>
        <div className="flex flex-col gap-6 pt-8 md:pt-0 pl-0 md:pl-12">
          <h2 className="font-semibold leading-[20.15px] mt-8 md:mt-0 text-xl">
            LINKS
          </h2>
          <Link
            href="/"
            smooth
            className="cursor-pointer text-base text-gray-100 font-light"
          >
            Home
          </Link>
          <Link
            href="/software"
            smooth
            className="cursor-pointer text-base font-rubik text-gray-100 font-light"
          >
            Softwares
          </Link>
          <Link
            href="/games"
            smooth
            className="text-base cursor-pointer font-rubik text-gray-100 font-light"
          >
            Games
          </Link>
        </div>
        <div className="flex flex-col gap-6 pt-8 md:pt-0">
          <h2 className="font-semibold leading-[20.15px] text-xl">
            LEGAL
          </h2>
          <Link
            href="/terms"
            className="text-base font-rubik text-gray-100 font-light"
          >
            Terms & Conditions
          </Link>
          <Link
            href="/privacy"
            className="text-base font-rubik text-gray-100 font-light"
          >
            Privacy Policy
          </Link>
          <Link
            href="/cookie-policy"
            className="text-base font-rubik text-gray-100 font-light"
          >
            Cookie Policy
          </Link>
        </div>
        <div className="flex flex-col gap-6 pl-[5rem] md:pl-0  pt-8 md:pt-0">
          <h2 className="font-semibold leading-[20.15px] text-xl">
            PRODUCT
          </h2>
          <p className="text-base font-rubik text-gray-100 font-light">
            On Demand Delivery
          </p>
          <p className="text-base font-rubik text-gray-100 font-light">
            Courier Delivery
          </p>
          <p className="text-base font-rubik text-gray-100 font-light">
            Food Delivery
          </p>
        </div>
      </div>
      <hr className="border-1 h-px bg-gray-100 w-full  mx-auto mt-14 mb-7" />
      <div className="flex justify-center gap-3 md:gap-0 md:justify-between max-w-screen-xl w-full mx-auto">
        <p className="text-base text-white font-light md:pl-[6rem]">
          Privacy & terms. | Contact us
        </p>
        <p className="text-base text-gray-100 font-light underline md:pr-4">
          Copyright © 2024 Softkeys.
        </p>
      </div>
    </div>
  );
};

export default Footer;
