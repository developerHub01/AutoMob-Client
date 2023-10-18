import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const SocialBar = () => {
  return (
    <ul className="fixed z-10 top-1/2 right-0 -translate-y-1/2">
      <li>
        <Link
          to="https://www.facebook.com/"
          target="_blank"
          className="flex bg-[#1877f2] text-white p-3 hover:scale-110 origin-right transition-all duration-100"
        >
          <FaFacebookF className="text-2xl" />
        </Link>
      </li>

      <li>
        <Link
          to="https://www.facebook.com/"
          target="_blank"
          className="flex bg-[#c13584] text-white p-3 hover:scale-110 origin-right transition-all duration-100"
        >
          <FaInstagram className="text-2xl" />
        </Link>
      </li>
      <li>
        <Link
          to="https://www.facebook.com/"
          target="_blank"
          className="flex bg-[#1da1f2] text-white p-3 hover:scale-110 origin-right transition-all duration-100"
        >
          <FaTwitter className="text-2xl" />
        </Link>
      </li>
      <li>
        <Link
          to="https://www.facebook.com/"
          target="_blank"
          className="flex bg-[#0a66c2] text-white p-3 hover:scale-110 origin-right transition-all duration-100"
        >
          <FaLinkedinIn className="text-2xl" />
        </Link>
      </li>
      <li>
        <Link
          to="https://www.facebook.com/"
          target="_blank"
          className="flex bg-[#ff0000] text-white p-3 hover:scale-110 origin-right transition-all duration-100"
        >
          <FaYoutube className="text-2xl" />
        </Link>
      </li>
    </ul>
  );
};

export default SocialBar;
