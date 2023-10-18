import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Banner.css";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import BannerSlide from "./BannerSlide";

const bannersContent = [
  {
    id: 1,
    title: "Honda: Reliable and Efficient",
    description:
      "Experience reliable and efficient vehicles with Honda. Honda has a longstanding reputation for producing dependable cars that deliver impressive fuel efficiency. From the popular Honda Civic to the versatile Honda CR-V, each model reflects Honda's dedication to practicality and performance.",
    bgLink: "https://i.ibb.co/g6DZ7BD/car6.jpg",
    redirectPath: "/",
  },
  {
    id: 2,
    title: "Explore Toyota's New Models",
    description:
      "Explore the latest innovations from Toyota. Toyota has been a pioneer in the automotive industry, consistently delivering reliable and efficient vehicles. With a strong commitment to quality and innovation, Toyota offers a diverse range of .",
    bgLink: "https://i.ibb.co/mhPY8T8/car1.jpg",
    redirectPath: "/",
  },
  {
    id: 3,
    title: "Ford: A Legacy of Excellence",
    description:
      "Experience the enduring legacy of Ford. Ford has a rich history of producing high-quality vehicles that have stood the test of time. From the iconic Ford Mustang to the rugged Ford F-Series trucks, Ford's commitment to excellence is evident in every model.",
    bgLink: "https://i.ibb.co/NThrT6m/car2.jpg",
    redirectPath: "/",
  },
  {
    id: 4,
    title: "Luxury Redefined with BMW",
    description:
      "Experience a new level of luxury with BMW. BMW is synonymous with precision engineering, top-tier performance, and unparalleled luxury. From the sleek BMW 3 Series to the opulent BMW 7 Series, each model embodies the brand's commitment to sophistication and driving pleasure.",
    bgLink: "https://i.ibb.co/9NJ3xvV/car3.jpg",
    redirectPath: "/",
  },
  {
    id: 5,
    title: "Mercedes-Benz: Elegance in Motion",
    description:
      "Discover elegance in motion with Mercedes-Benz. Mercedes-Benz has a long-standing reputation for luxury, performance, and innovation. From the iconic Mercedes-Benz C-Class to the opulent S-Class, each vehicle reflects the brand's dedication to craftsmanship and sophistication.",
    bgLink: "https://i.ibb.co/68RjwgW/car4.jpg",
    redirectPath: "/",
  },
  {
    id: 6,
    title: "Embrace the Future with Tesla",
    description:
      "Embrace the future of transportation with Tesla. Tesla is a game-changer in the automotive industry, leading the way in electric vehicle technology and sustainable transportation. With a lineup that includes the groundbreaking Model 3, the versatile Model Y.",
    bgLink: "https://i.ibb.co/PznCsjZ/car5.jpg",
    redirectPath: "/",
  },
];

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
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      navigation={true}
      modules={[Pagination, Autoplay, Navigation]}
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
