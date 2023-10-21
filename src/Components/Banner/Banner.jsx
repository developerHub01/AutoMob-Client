import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Banner.css";
// import required modules
import { Autoplay, Navigation, Pagination, Keyboard } from "swiper/modules";
import BannerSlide from "./BannerSlide";
import { bannersContent } from "../../Constants/data";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      keyboard={true}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      navigation={true}
      modules={[Pagination, Autoplay, Navigation, Keyboard]}
      className="mySwiper"
    >
      {bannersContent.map((bannerContent) => (
        <SwiperSlide key={bannerContent.id}>
          <BannerSlide {...bannerContent} />
        </SwiperSlide>
      ))}

      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  );
};

export default Banner;
