import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { BsGoogle } from "react-icons/bs";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  }); 

  const { googleSignIn, setUser, signInUser } = useContext(AuthContext);

  const handleInputChange = (e) => {
    setLoginData((prev) => ({
      ...loginData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignInGoogle = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        setUser((prev) => result.user);
        toast("Login successful");

        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        toast(error.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
    signInUser(loginData.email, loginData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast("Login successful");
        navigate("/");
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  return (
    <div className="fullContainer p-0 grid md:grid-cols-2">
      <div
        className="w-full h-full grid place-items-center"
        style={{
          background:
            'url("https://i.ibb.co/D9cmTRj/erik-mclean-ZRns2-R5azu0-unsplash.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="w-full p-5">
        <div className="container w-full max-w-md text-center">
          <h2 className="heading1">Login</h2>
          <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="inputField"
              value={loginData.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="inputField"
              value={loginData.password}
              onChange={handleInputChange}
            />
            <button className="button2">Login</button>
          </form>
          <p className="text-gray-500">
            Don't Have an account
            <Link
              to="/signup"
              className="text-gray-900 underline font-bold pl-2"
            >
              Create Account
            </Link>
          </p>
          <button className="button2 w-full" onClick={handleSignInGoogle}>
            <BsGoogle /> Login With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
