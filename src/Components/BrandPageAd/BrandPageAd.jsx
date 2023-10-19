import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./BrandPageAd.css";
import { Link } from "react-router-dom";

import { Autoplay, Keyboard } from "swiper/modules";

const tempSlider = [
  {
    id: 1,
    imgLink: "https://i.ibb.co/D9cmTRj/erik-mclean-ZRns2-R5azu0-unsplash.jpg",
    title: "Title 1",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam inventore accusamus nulla! Quia neque, nulla non unde error, maxime debitis alias reiciendis, ducimus doloribus quod.",
    link: "/",
  },
  {
    id: 2,
    imgLink: "https://i.ibb.co/NNK19F8/goh-rhy-yan-f-SDCASisgs-unsplash.jpg",
    title: "Title 2",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam inventore accusamus nulla! Quia neque, nulla non unde error, maxime debitis alias reiciendis, ducimus doloribus quod.",
    link: "/",
  },
  {
    id: 3,
    imgLink: "https://i.ibb.co/PznCsjZ/car5.jpg",
    title: "Title 3",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam inventore accusamus nulla! Quia neque, nulla non unde error, maxime debitis alias reiciendis, ducimus doloribus quod.",
    link: "/",
  },
];

const BrandPageAd = () => {
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      keyboard={true}
      modules={[Autoplay, Keyboard]}
      className="mySwiper"
    >
      {tempSlider.map((slideData) => (
        <SwiperSlide
          key={slideData.id}
          style={{
            background: `url('${slideData.imgLink}')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="bannerSlide min-h-[60vh] text-center"
        >
          <div className="z-10 w-[90%] max-w-xl flex flex-col justify-center items-center gap-4">
            <h2 className="heading1 text-white">{slideData.title}</h2>
            <p>{slideData.description.slice(0, 150) + "..."}</p>
            <Link to={`/category/${slideData.id}`} className="button1">
              View Details
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BrandPageAd;
