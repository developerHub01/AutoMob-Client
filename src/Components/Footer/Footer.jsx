import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

import "./Footer.css";

const bgImg = "https://i.ibb.co/D9cmTRj/erik-mclean-ZRns2-R5azu0-unsplash.jpg";

const Footer = () => {
  return (
    <footer
      className="w-full relative before:content[''] before:absolute before:bg-gray-900/90 before:w-full before:h-full before:top-0 before:left-0 z-0"
      style={{
        background: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container min-h-[80vh] relative z-30 grid grid-cols-4 gap-10 items-start">
        <div className="w-full col-span-4 sm:col-span-2 flex flex-col justify-center items-start gap-5">
          <Link
            to="/"
            className="inline-block text-white font-bold select-none text-lg sm:text-xl md:text-2xl border-b-4 border-white border-l-4 p-2"
          >
            AutoMob
          </Link>
          <div className="w-full flex flex-col gap-3">
            <p>
              AutoMob Premier is your destination for exceptional automobiles.
              Explore our handpicked collection, embark on thrilling test
              drives, and experience excellence on the road. Your automob
              journey begins here.
            </p>
            <p>
              Stay updated on the latest arrivals, automob news, and exclusive
              offers by following us on social media. Be part of our passionate
              community of car enthusiasts. Your journey with AutoMob Premier
              continues online.
            </p>
          </div>
        </div>
        <div className="w-full col-span-2 sm:col-span-1 flex flex-col">
          <h4 className="text-white text-xl font-medium pb-4">
            Flollow us on:
          </h4>
          <ul id="footerNav" className="flex flex-col gap-2">
            <li>
              <NavLink to="/" className="transition-all delay-75">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="transition-all delay-75">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" className="transition-all delay-75">
                SignUp
              </NavLink>
            </li>
            <li>
              <NavLink to="/addproduct" className="transition-all delay-75">
                Add Product
              </NavLink>
            </li>
            <li>
              <NavLink to="/mycart" className="transition-all delay-75">
                My Cart List
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <div>
            <h4 className="text-white text-xl font-medium pb-4">
              Flollow us on:
            </h4>
            <ul className="flex flex-wrap justify-center md:justify-start items-center gap-5">
              <li>
                <Link to="/">
                  <button className="button1 p-3">
                    <FaFacebookF className="text-2xl" />
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <button className="button1 p-3">
                    <FaInstagram className="text-2xl" />
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <button className="button1 p-3">
                    <FaTwitter className="text-2xl" />
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <button className="button1 p-3">
                    <FaYoutube className="text-2xl" />
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
