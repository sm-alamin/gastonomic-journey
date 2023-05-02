import React from "react";
import BannerRight from "./BannerRight";
import BannerLeft from "./BannerLeft";

const Home = () => {
  return (
    <div className="flex gap-5 justify-center items-center w-11/12 mx-auto pt-5">
      <BannerLeft />
      <BannerRight />
    </div>
  );
};

export default Home;
