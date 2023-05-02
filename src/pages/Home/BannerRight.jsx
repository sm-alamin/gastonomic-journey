import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
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
        <SwiperSlide><img src="https://img.freepik.com/free-photo/family-having-indian-food_53876-20449.jpg?w=740&t=st=1682966767~exp=1682967367~hmac=39badf1bba82b7e811b8ed3fcd8f72fc7b6646200cb5639824128fc526ad0c48" className="w-full" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.freepik.com/free-photo/pretty-confectioner_1098-16815.jpg?w=740&t=st=1682967168~exp=1682967768~hmac=769566aff63596de251505b180284277b7f567bd79543db94b35cc9f1f4dc910" className="w-full" alt="" /></SwiperSlide>
       
      </Swiper>
  );
};

export default BannerRight;
