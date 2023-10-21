import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./BrandPageAd.css";
import { Link } from "react-router-dom";

import { Autoplay, Keyboard } from "swiper/modules";

const BrandPageAd = ({ brandDataList }) => {
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
      {brandDataList.map(
        ({
          _id,
          name,
          brandName,
          price,
          productImg,
          productCategory,
          shortDescription,
          rating,
        }) => (
          <SwiperSlide
            key={_id}
            style={{
              background: `url('${productImg}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="bannerSlide min-h-[70vh] text-center"
          >
            <div className="z-10 w-[90%] max-w-xl flex flex-col justify-center items-center gap-4">
              <h2 className="heading1 text-white">{name}</h2>
              <p>{shortDescription.slice(0, 150) + "..."}</p>
              <Link
                to={`/product/details/${_id}`}
                className="button1"
              >
                View Details
              </Link>
            </div>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};

export default BrandPageAd;
