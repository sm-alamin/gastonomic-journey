import React from "react";
import BannerRight from "./BannerRight";
import BannerLeft from "./BannerLeft";
import Chefs from "./Chefs";
import LatestRecipe from "./LatestRecipe";
import PopularRecipe from "./PopularRecipe";
import SearchRecipe from "./SearchRecipe";
import Contact from "./Contact";

// Home component
const Home = () => {
  return (
    <div>
      {/* Banner section */}
      <div className="flex flex-col lg:flex-row gap-5 justify-center items-center w-11/12 mx-auto pt-5 pb-10">
        <BannerLeft />
        <BannerRight />
      </div>

      {/* Chefs section */}
      <section>
        <Chefs />
      </section>

      {/* Latest Recipe section */}
      <section className="py-10">
        <LatestRecipe />
      </section>

      {/* Popular Recipe section */}
      <section className="py-10">
        <PopularRecipe />
      </section>

      {/* Search Recipe section */}
      <section className="py-10">
        <SearchRecipe />
      </section>

      {/* Contact section */}
      <section className="py-10">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
