import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { FaSkyatlas, FaStaylinked } from "react-icons/fa";
const PopularRecipe = () => {
    return (
        <div className="w-3/4 mx-auto">
             <div className="flex justify-center items-center">
            <FaSkyatlas />
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Popular Recipe
            </h2>
            <FaSkyatlas />
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
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <div className="relative">
                <img src="https://assets.epicurious.com/photos/6423291e3a47f7515556c384/2:1/w_1004,h_502,c_limit/FennelOrangeSalad_RECIPE_032323_49640.jpg" className="w-full h-full" alt="" />
                <div>
                    <div className="h-96 w-96 bg-white p-10 absolute top-14 right-10 rounded-lg">
                        <h3 className="text-purple-900 font-bold text-3xl text-center">Fennel Orange <br /> Salad</h3>
                        <p> The salad is typically made by slicing the fennel bulb thinly and combining it with segmented oranges, chopped red onion, and a simple dressing made with olive oil, lemon juice, salt, and pepper.</p>
                        <button className="btn outline mt-5">view recipe</button>
                        <div className="text-white text-center p-3 font-bold bg-red-700 absolute -top-5 right-32
                        ">Cook this now</div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
                <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-full" alt="" />
                <div>
                    <div className="h-96 w-96 bg-white p-10 absolute top-14 right-10 rounded-lg">
                        <h3 className="text-purple-900 font-bold text-3xl text-center">Chicken Tanduri</h3>
                        <p>Chicken Tandoori is believed to have originated in the Punjab region of India and Pakistan, where it was traditionally served at special occasions such as weddings and festivals. Today, it is enjoyed all over the world and is a popular item on Indian restaurant menus.</p>
                        <button className="btn outline mt-5">view recipe</button>
                        <div className="text-white text-center p-3 font-bold bg-red-700 absolute -top-5 right-32
                        ">Cook this now</div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
                <img src="https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-full" alt="" />
                <div>
                    <div className="h-96 w-96 bg-white p-10 absolute top-14 right-10 rounded-lg">
                        <h3 className="text-purple-900 font-bold text-3xl text-center">Meat Kabab</h3>
                        <p>Meat Kabab is often served with a variety of accompaniments, such as rice, bread, salad, and chutney or yogurt dip. It can be enjoyed as a snack, appetizer, or main course, and is a popular street food in many parts of the world.</p>
                        <button className="btn outline mt-5">view recipe</button>
                        <div className="text-white text-center p-3 font-bold bg-red-700 absolute -top-5 right-32
                        ">Cook this now</div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
    );
};

export default PopularRecipe;