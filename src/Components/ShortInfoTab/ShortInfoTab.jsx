import React, { useEffect, useState } from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { tabContent } from "../../Constants/data";

const ShortInfoTab = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { imgLink, title, description, categoryLink } =
    tabContent[currentIndex];

  let interval;

  useEffect(() => {
    interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tabContent.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleHoverIn = () => {
    clearInterval(interval);
  };

  const handleHoverOut = () => {
    interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tabContent.length);
    }, 1500);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (tabContent.length + prev - 1) % tabContent.length
    );
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % tabContent.length);
  };

  return (
    <div className="container">
      <div
        className="w-full grid md:grid-cols-2 grid-rows-1 gap-20"
        onMouseEnter={handleHoverIn}
        onMouseLeave={handleHoverOut}
      >
        <div className="w-full h-full flex justify-center items-center relative before:content[''] before:absolute before:-z-10 before:top-5 before:left-5 before:w-full before:h-full before:bg-gray-900 dark:before:bg-white">
          <img src={imgLink} alt="" className="w-full h-full object-cover" />
          <div className="absolute w-[95%] flex justify-between items-center text-3xl text-white">
            <IoIosArrowBack
              className="bg-gray-900 aspect-square rounded-full w-10 h-10 p-1 cursor-pointer"
              onClick={handlePrev}
            />
            <IoIosArrowForward
              className="bg-gray-900 aspect-square rounded-full w-10 h-10 p-1 cursor-pointer"
              onClick={handleNext}
            />
          </div>
        </div>
        <div
          className="flex flex-col gap-3 justify-center items-start"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <h3 className="heading1">{title}</h3>
          <p className="leading-relaxed text-gray-600">{description}</p>
          <Link to={`/category/${tabContent[currentIndex].id}`}>
            <button className="button2">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShortInfoTab;
