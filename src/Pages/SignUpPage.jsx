import React, { useContext, useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";
import auth from "../firebase/firebase.config";
import { updateProfile } from "firebase/auth";
import usePasswordVarification from "../CustomHook/usePasswordVarification";
import * as EmailValidator from "email-validator";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({
    displayName: "",
    email: "",
    password: "",
    photoURL: "",
  });

  const { googleSignIn, setUser, singUpUser } = useContext(AuthContext);

  const handleInputChange = (e) => {
    setSignUpData((prev) => ({
      ...signUpData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signUpData);
    const { displayName, photoURL, email, password } = signUpData;

    if (!EmailValidator.validate(email)) {
      return toast("Email is not valid");
    }

    if (!usePasswordVarification(password)) {
      return toast(
        "Password must contain a uppercase and one special character and minimum length 6"
      );
    }

    console.log(signUpData);
    singUpUser(email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName,
          photoURL,
        })
          .then(() => {
            toast("Signup successful");
            setUser((prev) => signUpData);
            navigate("/");
          })
          .catch((error) => {
            toast(error.message);
          });
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  const handleSignInGoogle = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        setUser((prev) => result.user);
        toast("Signup successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        toast(error.message);
      });
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
              name="displayName"
              placeholder="Full name"
              className="inputField"
              value={signUpData.displayName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="photoURL"
              placeholder="PhotoURL"
              className="inputField"
              value={signUpData.photoURL}
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
          <button className="button2 w-full" onClick={handleSignInGoogle}>
            <BsGoogle /> Signup With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
