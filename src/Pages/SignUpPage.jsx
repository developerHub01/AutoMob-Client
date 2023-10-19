import React, { useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    photoUrl: "",
  });

  const handleInputChange = (e) => {
    setSignUpData((prev) => ({
      ...signUpData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signUpData);
  };

  return (
    <div className="fullContainer p-0 grid md:grid-cols-2">
      <div
        className="w-full h-full grid place-items-center"
        style={{
          background: 'url("https://i.ibb.co/ngNfTrn/toyotaBg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="w-full p-5">
        <div className="container w-full max-w-md text-center">
          <h2 className="heading1">Signup</h2>
          <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="photoUrl"
              placeholder="PhotoURL"
              className="inputField"
              value={signUpData.photoUrl}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="inputField"
              value={signUpData.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="inputField"
              value={signUpData.password}
              onChange={handleInputChange}
            />
            <button className="button2">Singup</button>
          </form>
          <p className="text-gray-500">
            Already Have an account
            <Link
              to="/login"
              className="text-gray-900 underline font-bold pl-2"
            >
              {" "}
              Login
            </Link>
          </p>
          <button className="button2 w-full">
            <BsGoogle /> Signup With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
