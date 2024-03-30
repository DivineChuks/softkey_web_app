import React from "react";
import { FiShield, FiDownload } from "react-icons/fi";
import { BsStarFill } from "react-icons/bs";

const FeatureBar = () => {
  return (
    <div className="bg-purple-600 hidden md:flex text-white justify-between items-center py-2 px-10">
      {/* Safe & Secure Section */}
      <div className="flex items-center space-x-2 border border-gray-100 px-2 py-1 rounded-sm">
        <FiShield className="text-green-400" />
        <div>
          <p className="text-base uppercase">Safe & Secure</p>
          <p className="text-xs opacity-70">100% Secure and 24h Support</p>
        </div>
      </div>

      {/* Trustpilot Rating Section */}
      <div className="flex items-center space-x-1">
        <p className="text-base">Excellent</p>
        <div className="flex flex-row gap-1">
          <div className="bg-green-600 p-1 border border-green-600">
            <BsStarFill className="text-white" size={12} />
          </div>
          <div className="bg-green-600 p-1 border border-green-600">
            <BsStarFill className="text-white" size={12} />
          </div>
          <div className="bg-green-600 p-1 border border-green-600">
            <BsStarFill className="text-white" size={12} />
          </div>
          <div className="bg-green-600 p-1 border border-green-600">
            <BsStarFill className="text-white" size={12} />
          </div>
          <div className="bg-green-600 p-1 border border-green-600">
            <BsStarFill className="text-white" size={12} />
          </div>
        </div>
        <p className="text-xs">Trustpilot</p>
      </div>

      {/* Instant Digital Download Section */}
      <div className="flex items-center space-x-2">
        <FiDownload className="text-green-400" />
        <div>
          <p className="text-base uppercase">Super Fast</p>
          <p className="text-xs opacity-70">Instant Digital Download</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureBar;
