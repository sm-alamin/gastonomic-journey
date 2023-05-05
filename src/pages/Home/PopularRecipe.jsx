import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { FaSkyatlas, FaStaylinked } from "react-icons/fa";
const PopularRecipe = () => {
  return (
    <div className="w-3/4 mx-auto">
      {/* Section Intro */}
      <div className="flex justify-center items-center">
        <FaSkyatlas className="mr-3"/>
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Popular Recipe
        </h2>
        <FaSkyatlas className="ms-3"/>
      </div>
      <div className="mx-auto pb-10">
        <p className="mt-2 text-lg text-gray-600 text-center">
          People love it very much
        </p>
        <div className="flex justify-center items-center">
          <div>------------------------</div>
          <span className="mt-1 mx-3">
            <FaStaylinked />
          </span>
          <div>-------------------------</div>
        </div>
      </div>
      {/* 
          Slider */}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {/* Slide-1 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://img.freepik.com/free-photo/top-view-delicious-salad-decorated-with-chopped-cucumber-greens-stained-white-surface_179666-34147.jpg?w=740&t=st=1683221256~exp=1683221856~hmac=89d5ac139f7a655fc0a2c32fdc7825d45f37ea1c161d6ba0ea141012e8975027"
              className="w-full h-[300px] lg:h-[550px]"
              alt=""
            />
            <div>
              <div className="w-full h-full lg:h-96 lg:w-96  bg-white p-10 lg:absolute lg:top-14 lg:right-10 rounded-lg">
                <h3 className="text-primary font-bold text-3xl text-center">
                  Cucumber spicy <br /> Salad
                </h3>
                <p>
                  {" "}
                  Cucumber salad might not sound like a lively dish, but when
                  you toss it with chili pepper, pepper flakes, chopped peanuts,
                  coconut oil, lime juice, sugar, and salt, it’s a winner. Plus,
                  this cucumber salad is actually served warm.
                </p>
                <button className="btn outline bg-primary mt-5 active">view recipe</button>
                <div
                  className="text-white text-center p-3 font-bold bg-primary absolute -top-3 right-24 lg:-top-5 lg:right-32
                        "
                >
                  Cook this now
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Slide-2 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w-full h-[300px] lg:h-[550px]"
              alt=""
            />
            <div>
              <div className="w-full h-full lg:h-96 lg:w-96  bg-white p-10 lg:absolute lg:top-14 lg:right-10 rounded-lg">
                <h3 className="text-primary font-bold text-3xl text-center">
                  Chicken Tanduri
                </h3>
                <p>
                  Chicken Tandoori is believed to have originated in the Punjab
                  region of India and Pakistan, where it was traditionally
                  served at special occasions such as weddings and festivals.
                  Today, it is enjoyed all over the world and is a popular item
                  on Indian restaurant menus.
                </p>
                <button className="btn outline bg-primary mt-5">view recipe</button>
                <div
                  className="text-white text-center p-3 font-bold bg-primary absolute -top-3 right-24 lg:-top-5 lg:right-32
                        "
                >
                  Cook this now
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide-3 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w-full h-[300px] lg:h-[550px]"
              alt=""
            />
            <div>
              <div className="w-full h-full lg:h-96 lg:w-96  bg-white p-10 lg:absolute lg:top-14 lg:right-10 rounded-lg">
                <h3 className="text-primary font-bold text-3xl text-center">
                  Meat Kabab
                </h3>
                <p>
                  Meat Kabab is often served with a variety of accompaniments,
                  such as rice, bread, salad, and chutney or yogurt dip. It can
                  be enjoyed as a snack, appetizer, or main course, and is a
                  popular street food in many parts of the world.
                </p>
                <button className="btn outline bg-primary mt-5">view recipe</button>
                <div
                  className="text-white text-center p-3 font-bold bg-primary absolute -top-3 right-24 lg:-top-5 lg:right-32
                        "
                >
                  Cook this now
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PopularRecipe;
