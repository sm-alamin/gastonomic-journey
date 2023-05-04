import React from "react";
import { FaSkyatlas, FaStaylinked } from "react-icons/fa";

const SearchRecipe = () => {
  return (
    <div className="w-full lg:w-11/12 mx-auto bg-gray-100 p-10">
      {/* Section Intro */}
      <div className="flex justify-center items-center">
        <FaSkyatlas />
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 mx-2">
          Need More Recipe?
        </h2>
        <FaSkyatlas />
      </div>
      <div className="mx-auto pb-10">
        <p className="mt-2 text-lg text-gray-600 text-center">
          You can search recipe from below
        </p>
        <div className="flex justify-center items-center">
          <div>------------------------</div>
          <span className="mt-1 mx-3">
            <FaStaylinked />
          </span>
          <div>-------------------------</div>
        </div>
      </div>

      {/* SearchBar */}
      <div className="form-control pb-10">
        <div className="input-group flex justify-center items-center">
          <input
            type="text"
            placeholder="Type your recipe name here"
            className="input input-bordered w-3/6"
          />
          <button className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchRecipe;
