import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="w-full h-screen grid place-items-center"
      style={{
        background:
          'url("https://i.ibb.co/NNK19F8/goh-rhy-yan-f-SDCASisgs-unsplash.jpg")',
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="relative z-10 flex flex-col justify-center items-center p-5 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white/80 before:blur-3xl before:-z-10 text-center select-none">
        <h1 className="text-[8vmax] sm:text-[18vmax] font-extrabold leading-tight">
          404
        </h1>
        <p className="text-gray-900 pb-4">404 Page Not Found</p>
        <Link to="/" className="button2">
          Move To Home Page
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
