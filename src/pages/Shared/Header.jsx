import React from "react";
import { FaMailBulk, FaMapMarkerAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-between bg-slate-800 py-3">
      <div>
        <p className="text-white">
          <span className="text-green-400">Opening Hour:</span> 9.00 am to 10.00
          pm
        </p>
      </div>
      <div className="flex justify-between gap-5">
        <div className="flex">
          <FaMailBulk className="mt-1 mr-2 text-green-400"/>
          <p className="text-white">info@example.com</p>
        </div>
        <div className="flex">
          <FaMapMarkerAlt className="mt-1 mr-2 text-green-400"/>
          <p className="text-white">Balurmath, Chasara, Narayanganj</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
