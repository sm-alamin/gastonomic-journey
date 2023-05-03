import React from "react";

const BannerLeft = () => {
  return (
    <div className="pt-10 lg:pt-0 w-full ">
      <h2 className="normal-case text-3xl"> Wel<span className="text-purple-500">come</span> to Gasto<span className="text-purple-400 mr-2">nomic </span>Jour
            <span className="text-purple-400">ney</span></h2>
      <p className="text-2xl text-purple-900 pt-5">Find Your Best <span className="text-purple-400">Healthy</span> && <span className="text-purple-400">Tasty Food</span></p>
      <p className=" text-grey-400 py-5">
        Discover a new world of flavors at Gastonomic Journey. Our chefs craft
        exceptional dishes using only the freshest ingredients, delivering an
        unparalleled dining experience. Join us today for a taste adventure.
      </p>
      <button className="btn btn-ghost outline-dotted mx-auto bg-slate-200">Discover More</button>
    </div>
  );
};

export default BannerLeft;
