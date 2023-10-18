import React, { useEffect, useState } from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const tabContent = [
  {
    id: 1,
    imgLink: "https://i.ibb.co/ngNfTrn/toyotaBg.jpg",
    title: "Toyota",
    description:
      "The Toyota Camry XLE, a midsize sedan, combines a 2.5-liter 4-cylinder engine with 203 HP, advanced safety features, premium leather seats, and wood-grain trim. It achieves impressive fuel efficiency at 28/39 mpg. With a 3-year/36,000-mile basic warranty, it's a reliable and comfortable choice for discerning drivers.",
    categoryLink: "/",
  },
  {
    id: 2,
    imgLink: "https://i.ibb.co/vjktwpy/mercedes-Bg.jpg",
    title: "Mercedes",
    description:
      "The Mercedes-Benz E-Class, a paragon of luxury and innovation, offers a range of potent engine options to suit diverse preferences. It blends elegant design with advanced technology, boasting a spacious, opulent interior. Safety is paramount, with features like adaptive cruise control and automatic emergency braking. It stands as a symbol of refinement and performance in the automotive world.",
    categoryLink: "/",
  },
  {
    id: 3,
    imgLink: "https://i.ibb.co/DkL2sLc/teslaBg.jpg",
    title: "Tesla",
    description:
      "The Tesla Model 3, an emblem of electric innovation, offers exceptional performance with instant acceleration and impressive range. Its minimalist design exudes modernity and elegance, while the interior showcases cutting-edge technology through a minimalist dashboard with a large touchscreen. With Autopilot capabilities and continuous software updates, the Model 3 redefines the future of sustainable and intelligent transportation.",
    categoryLink: "/",
  },
  {
    id: 4,
    imgLink: "https://i.ibb.co/GVCTcqh/bmwBg.jpg",
    title: "BMW",
    description:
      "The BMW 5 Series, a blend of sportiness and luxury, offers a range of powerful engines, from efficient to high-performance variants. Its sleek design combines elegance with a touch of aggression, while the interior is opulently appointed with top-quality materials and advanced technology. This executive sedan delivers a balance of dynamic driving and comfort, embodying BMW's tradition of 'the ultimate driving machine.'",
    categoryLink: "/",
  },
  {
    id: 5,
    imgLink: "https://i.ibb.co/x3KTcW9/hondaBg.jpg",
    title: "Honda",
    description:
      "The Honda Civic, a symbol of reliability and efficiency, offers various engine options and excellent fuel economy. Its exterior design is contemporary and aerodynamic, while the interior is functional and comfortable with user-friendly technology. Known for its safety features and resale value, the Civic has been a consistent favorite among compact car enthusiasts for decades.",
    categoryLink: "/",
  },
  {
    id: 6,
    imgLink: "https://i.ibb.co/gW3L3C1/fordBg.jpg",
    title: "Ford",
    description:
      "The Ford F-150, an American icon, is a full-size pickup truck renowned for its rugged capability and versatility. It features a range of powerful engine choices and advanced towing technology. With its robust exterior and practical interior, it's a workhorse that also offers modern convenience and infotainment features, making it a popular choice for both work and leisure.",
    categoryLink: "/",
  },
];

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
        className="w-full grid md:grid-cols-2 gap-20"
        onMouseEnter={handleHoverIn}
        onMouseLeave={handleHoverOut}
      >
        <div className="w-full h-full flex justify-center items-center relative before:content[''] before:absolute before:-z-10 before:top-4 before:left-4 before:w-full before:h-full before:bg-gray-900">
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
          <Link to={categoryLink}>
            <button className="button2">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShortInfoTab;
