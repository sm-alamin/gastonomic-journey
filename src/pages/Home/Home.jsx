import React from "react";
import BannerRight from "./BannerRight";
import BannerLeft from "./BannerLeft";
import Chefs from "./Chefs";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-5 justify-center items-center w-11/12 mx-auto pt-5 pb-10">
      <BannerLeft />
      <BannerRight />
    </div>
    <section>
      <Chefs/>
    </section>
    </div>
  );
};

export default Home;
