import React from "react";

// Define a BannerLeft component to display a welcome message
const BannerLeft = () => {
  return (
    <div className="pt-10 lg:pt-0 w-full ">
      <h2 className="normal-case text-3xl">
        {" "}
        Wel<span className="text-primary">come</span> to Gasto
        <span className="text-primary mr-2">nomic </span>Jour
        <span className="text-primary">ney</span>
      </h2>
      <p className="text-2xl text-black pt-5">
        Find Your Best <span className="text-primary">Healthy</span> &&{" "}
        <span className="text-primary">Tasty Food</span>
      </p>
      <p className=" text-grey-400 py-5">
        Discover a new world of flavors at Gastonomic Journey. Our chefs craft
        exceptional dishes using only the freshest ingredients, delivering an
        unparalleled dining experience. Join us today for a taste adventure.
      </p>
      <button className="btn btn-ghost outline-dotted mx-auto active text-white">
        Discover More
      </button>
    </div>
  );
};

export default BannerLeft;
