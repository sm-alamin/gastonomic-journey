import React, { useEffect, useState } from "react";
import { FaSkyatlas, FaStaylinked } from "react-icons/fa";
import Chef from "./chef";
import { ClipLoader } from "react-spinners";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  const [loading, setLoading] = useState(true);

  // get chef info data from server
  useEffect(() => {
    fetch("https://chef-recipe-hunter-server-blush.vercel.app/chef-info")
      .then((response) => response.json())
      .then((data) => setChefs(data));
    setLoading(false);
  }, []);
  return (
    <div>
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center h-screen z-50">
          <ClipLoader color="#36d7b7" />
        </div>
      )}
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
            <p className="mt-2 text-lg text-gray-600">
              Meet our talented chefs
            </p>
            <div className="flex justify-center items-center">
              <div>------------------------</div>
              <span className="mt-1 mx-3">
                <FaStaylinked />
              </span>
              <div>-------------------------</div>
            </div>
            {/* map data from server */}
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {chefs?.map((chef) => (
                <Chef key={chef.id} chef={chef} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
