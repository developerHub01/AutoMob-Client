import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiBars3BottomLeft, HiMiniXMark } from "react-icons/hi2";

import "./Header.css";
import Logo from "../Logo";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";
import { LoadingContext } from "../../Context/LoadingProvider";

const Header = () => {
  const [sideBarState, setSideBarState] = useState(false);

  const { user, setUser, logOut } = useContext(AuthContext);
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  const profileImg =
    "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const handleHideSideBar = () => {
    setSideBarState((prev) => false);
  };
  const handleShowSideBar = () => {
    setSideBarState((prev) => true);
  };
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast("Logout successful");
        setUser((prev) => null);
      })
      .catch((error) => toast(error.message));
  };

  return (
    <div className="bg-white fixed top-0 z-30 w-full flex justify-center items-center shadow-2xl">
      <div className="container py-2 min-h-[80px] flex flex-row justify-between items-center">
        <div className="text-gray-900 font-bold text-lg sm:text-2xl md:text-4xl flex justify-center items-center gap-2">
          <HiBars3BottomLeft
            className="cursor-pointer text-4xl block md:hidden"
            onClick={handleShowSideBar}
          />
          <Logo />
        </div>
        <nav
          className={`fixed w-52 bg-white flex flex-col justify-center items-center gap-y-5 h-screen top-0 left-0 z-20 shadow-2xl md:shadow-none md:static md:w-auto md:bg-auto md:h-auto ${
            sideBarState ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition-all duration-75 ease-in-out`}
        >
          <HiMiniXMark
            className="absolute inline-block md:static md:hidden top-5 right-5 text-gray-900 text-4xl cursor-pointer"
            onClick={handleHideSideBar}
          />
          <div className="block md:hidden pb-4">
            <Logo />
          </div>
          <ul className="navBar flex flex-col gap-8 md:flex-row justify-center items-center md:gap-0 select-none">
            <li>
              <NavLink
                to="/"
                className="text-gray-600 py-3 px-5 text-center text-sm md:text-base"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addproduct"
                className="text-gray-600 py-3 px-5 text-center text-sm md:text-base"
              >
                Add Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mycart"
                className="text-gray-600 py-3 px-5 text-center text-sm md:text-base"
              >
                My Cart
              </NavLink>
            </li>
          </ul>
        </nav>
        <div>
          {user ? (
            <div className="flex justify-center items-center gap-2">
              <div className="relative">
                <figure
                  className="w-9 h-9 aspect-square cursor-pointer group overflow-hidden rounded-full"
                  style={{
                    background: `url('${profileImg}')`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <img
                    src={user.photoURL}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <figcaption className="hidden group-hover:block absolute bg-gray-900 text-white p-1 rounded-md text-sm left-1/2 -translate-x-1/2 -bottom-1 translate-y-full">
                    {user.email}
                  </figcaption>
                </figure>
              </div>
              <button className="button2" onClick={handleLogOut}>
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="button2">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
