import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col bg-gray-900 justify-center items-center text-white px-[2rem] md:px-0 w-full pt-16 pb-6">
      <div className="grid grid-cols-1 gap-3 justify-center md:grid-cols-5 w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-4 col-span-1 md:col-span-2 px-3">
          <img
            src="/logowhite.png"
            alt="footer"
            className="w-28 h-20 object-cover mb-4"
          />
          <p className="text-base text-gray-100 font-light">
            FECUND INTEGRATED LIMITED. Office 1439 182-184 <br></br> High Street
            North, East Ham, London, United Kingdom, E6 2JA
          </p>
        </div>
        <div className="flex flex-col gap-6 pt-8 md:pt-0 ">
          <h2 className="font-semibold leading-[20.15px] mt-8 md:mt-0 text-xl">
            USEFUL LINKS
          </h2>
          <Link
            href="/"
            smooth
            className="cursor-pointer text-base text-gray-100 font-light"
          >
            Home
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
          <h2 className="font-semibold leading-[20.15px] text-xl">
            CATEGORIES
          </h2>
          <Link href="/games" className="text-base text-gray-100 font-light">
            Games
          </Link>
          <Link
            href="/antivirus"
            className="text-base text-gray-100 font-light"
          >
            Antivirus
          </Link>
          <Link
            href="/softwares"
            className="text-base text-gray-100 font-light"
          >
            Softwares
          </Link>
        </div>
        <div className="flex flex-col gap-6 pt-8 md:pt-0">
          <h2 className="font-semibold leading-[20.15px] mt-8 md:mt-0 text-xl">
            LEGAL
          </h2>
          <Link href="#" className="text-base text-gray-100 font-light">
            Terms & Conditions.
          </Link>
          <Link href="#" className="text-base text-gray-100 font-light">
            Delivery Terms.
          </Link>
          <Link href="#" className="text-base text-gray-100 font-light">
            Refund & Refund Policy.
          </Link>
          <Link href="#" className="text-base text-gray-100 font-light">
            Payment methods.
          </Link>
        </div>
      </div>
      <hr className="border-1 h-px bg-gray-100 w-full  mx-auto mt-14 mb-7" />
      <div className="flex justify-center gap-3 md:gap-0 md:justify-between max-w-screen-xl w-full mx-auto">
        <p className="text-base text-white font-light">
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
