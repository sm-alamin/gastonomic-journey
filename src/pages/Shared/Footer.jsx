import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaStaylinked,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mx-auto w-full">
      <footer className="footer w-full mx-auto p-16 border-b bg-neutral text-neutral-content">
        <div className="flex justify-center items-center py-5 gap-10">
          <div className="flex flex-col">
            <span className="footer-title underline">Our Facilities</span>
            <a className="link link-hover">Menu Item</a>
            <a className="link link-hover">Private Event</a>
            <a className="link link-hover">Best Offer</a>
            <a className="link link-hover">Traditional Menu</a>
          </div>
          <div className="flex flex-col">
            <span className="footer-title pt-5"></span>
            <a className="link link-hover">Popular Item</a>
            <a className="link link-hover">Regular Menu</a>
            <a className="link link-hover">New Food</a>
            <a className="link link-hover">Special Offer</a>
          </div>
        </div>
        <div className="border p-10 rounded-full text-center">
          <div>
            <p className="text-2xl font-bold">
              Gasto<span className="text-purple-400">nomic </span>Jour
              <span className="text-purple-400">ney</span>
            </p>
            <p className="font-bold">Established- 1995</p>
          </div>
          <div className="flex mx-auto">
            <div>---------</div>
            <span className="mt-1 mx-3">
              <FaStaylinked />
            </span>
            <div>----------</div>
          </div>
          <div className="flex gap-3 mt-3 mx-auto">
            <a
              className="border rounded-full p-2 hover:border-indigo-500"
              href=""
            >
              <FaFacebookF />
            </a>
            <a
              className="border rounded-full hover:border-indigo-500 p-2"
              href=""
            >
              <FaInstagram />
            </a>
            <a
              className="border rounded-full hover:border-indigo-500 p-2"
              href=""
            >
              <FaTwitter />
            </a>
            <a
              className="border rounded-full hover:border-indigo-500 p-2"
              href=""
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className="text-white font-bold py-5">
          <span className="footer-title underline">Address Info</span>
          <a className="link link-hover">
            <span className="text-orange-300">Phone: </span>
            +917428730894
          </a>
          <a className="link link-hover">
            <span className="text-orange-300">Email: </span>
            gastonomic.journey@gmail.com
          </a>
          <a className="link link-hover">
            <span className="text-orange-300">Fax Id: </span>
            +025789613
          </a>
          <a className="link link-hover">
            <span className="text-orange-300">Location: </span>
            Park Street, Kolkata, India
          </a>
        </div>
      </footer>

      <footer className="footer px-10 py-4  bg-neutral text-neutral-content">
        <div className="items-center grid-flow-col">
          <p>&copy; Copyright by Gastonomic Journey, All Right Reserved.</p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <p>
              <a href="">Privacy & Policy</a> |{" "}
              <a href="">Terms and Conditions</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
