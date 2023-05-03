import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPlusCircle,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Chef = ({ chef }) => {
  const {
    id,
    picture_url,
    name,
    years_of_experience,
    number_of_recipes,
    likes,
    department
  } = chef;
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
    className="bg-white overflow-hidden shadow rounded-lg"
    onMouseLeave={() => setIsHovering(false)}
  >
    <div className="aspect-w-3 aspect-h-2 relative">
      <img
        className="object-cover h-80 w-full relative hover:scale-105"
        src={picture_url}
        alt="Chef 2"
      />
      <span
        className="absolute top-10 right-10 bg-slate-200 font-bold border rounded-full text-3xl hover:border-red-200"
        onMouseEnter={() => setIsHovering(true)}
      >
        <FaPlusCircle />
      </span>
      <div
        className="flex flex-col gap-3 mt-3 mx-auto absolute top-16 right-10"
        style={{
          opacity: isHovering ? 1 : 0,
          pointerEvents: isHovering ? "auto" : "none",
        }}
      >
        <a
          className="border-2 rounded-full p-2 bg-white hover:border-indigo-500"
          href=""
        >
          <FaFacebookF />
        </a>
        <a
          className="border-2 rounded-full bg-white hover:border-indigo-500 p-2"
          href=""
        >
          <FaInstagram />
        </a>
        <a
          className="border-2 rounded-full bg-white hover:border-indigo-500 p-2"
          href=""
        >
          <FaTwitter />
        </a>
      </div>
    </div>
    <div className="p-4">
      <div className="relative bg-white w-72 text-center mx-auto py-2 border shadow -top-12 rounded-md">
        <h3 className="font-medium text-gray-900">{name}</h3>
        <p>{department}</p>
      </div>
      <div className=" flex items-center text-sm text-gray-500">
        <span className="flex-shrink-0">
          <svg
            className="h-5 w-5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <span className="ml-1">
          {years_of_experience} years of experience
        </span>
      </div>
      <div className="mt-2 flex items-center text-sm text-gray-500">
        <span className="flex-shrink-0">
          <svg
            className="h-5 w-5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <span className="ml-1">{number_of_recipes} recipes</span>
      </div>
      <div className="mt-2 flex items-center text-sm text-gray-500">
        <span className="flex-shrink-0">
          <svg
            className="h-5 w-5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <span className="ml-1">{likes} likes</span>
      </div>
      <div className="mt-3 flex justify-end">
        <Link
          to={`/view-details/${id}`}
          className="text-sm font-medium btn btn-ghost outline-dotted text-slate-600 hover:text-indigo-500 hover:bg-base-200"
        >
          View Recipes
        </Link>
      </div>
    </div>
  </div>
  );
};

export default Chef;
