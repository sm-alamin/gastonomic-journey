import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaPlusCircle, FaSkyatlas, FaStaylinked, FaTwitter } from "react-icons/fa";

const Chefs = () => {
    const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center items-center">
            <FaSkyatlas />
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Our Chefs 
          </h2>
          <FaSkyatlas />
            </div>
          
          <div className="mx-auto">
          <p className="mt-2 text-lg text-gray-600">Meet our talented chefs</p>
          <div className="flex justify-center items-center">
            <div>------------------------</div>
         <span className="mt-1 mx-3"><FaStaylinked /></span>
         <div>-------------------------</div>
          </div>
         </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg" onMouseLeave={() => setIsHovering(false)}>
              <div className="aspect-w-3 aspect-h-2 relative">
                <img
                  className="object-cover relative"
                  src="https://img.freepik.com/free-photo/portrait-smiling-chef-uniform_329181-675.jpg?w=740&t=st=1682996916~exp=1682997516~hmac=d27e889587517e0dd12d49acae7786b1ec9c6e35cbc26d7b8d3a0e0d9cc8f88f"
                  alt="Chef 2"
                />
                <span className="absolute top-10 right-10 bg-slate-200 font-bold border rounded-full text-3xl hover:border-red-200"
                onMouseEnter={() => setIsHovering(true)}>
                  <FaPlusCircle />
                </span>
                <div className="flex flex-col gap-3 mt-3 mx-auto absolute top-16 right-10"style={{ opacity: isHovering ? 1 : 0, pointerEvents: isHovering ? 'auto' : 'none' }}>
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
                  <h3 className="font-medium text-gray-900">Rakibul Hasan</h3>
                  <p>Senior Chef</p>
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
                        fill-rule="evenodd"
                        d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="ml-1">7 years of experience</span>
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
                        fill-rule="evenodd"
                        d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="ml-1">30 recipes</span>
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
                        fill-rule="evenodd"
                        d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="ml-1">100 likes</span>
                </div>
                <div className="mt-3 flex justify-end">
                  <a
                    href="#"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    View Recipes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chefs;
