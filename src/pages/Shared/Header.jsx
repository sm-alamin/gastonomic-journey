import React from "react";
import { FaMailBulk, FaMapMarkerAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex flex-col lg:flex-row justify-between py-3 text-center">
      <div>
        <p className="text-white text-center">
          <span className="text-green-400">Opening Hour:</span> 9.00 am to 10.00
          pm
        </p>
      </div>
      <div className="flex flex-col lg:flex-row  justify-between gap-5 mx-auto">
        <div className="flex">
          <FaMailBulk className="mt-1 mr-2 text-green-400"/>
          <p className="text-white">gastonomic.journey@gmail.com</p>
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
