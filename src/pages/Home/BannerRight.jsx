import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// Sweper slider to show some recipe
const BannerRight = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper w-full"
    >
      <SwiperSlide>
        <img
          src="https://img.freepik.com/free-photo/top-view-fast-food-plate-bowls-black-pepper-sauces-french-fries-plate-chicken-legs-cream-notebook_140725-117508.jpg?w=740&t=st=1683084490~exp=1683085090~hmac=ab6cc9f0421f0dfc83177c093d703df3cb1cec15c5b812e2b4e019e3e3bf0a83"
          className="w-full rounded-2xl"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://img.freepik.com/free-photo/grilled-beef-steak-dark-wooden-surface_1150-44344.jpg?w=740&t=st=1683084340~exp=1683084940~hmac=b1002832e61aafdcfc5e8c577cbaba2f6149185d54b1e8fcee54a2d7b79764e8"
          className="w-full rounded-2xl"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=740&t=st=1683084410~exp=1683085010~hmac=9ae276d1f6e27451ae505cd368c1c7d7dd41e79997935e1bda94a7f2fcda846b"
          className="w-full rounded-2xl"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://img.freepik.com/free-photo/baked-chicken-wings-asian-style-tomatoes-sauce-plate_2829-10654.jpg?w=740&t=st=1683084612~exp=1683085212~hmac=2cc449bcca072f5db172ca1a9bbe101093a0088721b156b94a5b0d8015ed8461"
          className="w-full rounded-2xl"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default BannerRight;
