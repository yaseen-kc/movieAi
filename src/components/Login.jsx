/* eslint-disable no-unused-vars */
import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/Validate";
import { auth } from "../utils/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true); // Toggle between Sign In and Sign Up forms
  const [errorMessage, setErrorMessage] = useState(null); // Store error messages

  const name = useRef(null); // Reference for name input (Sign Up only)
  const email = useRef(null); // Reference for email input
  const password = useRef(null); // Reference for password input

  // Handle form submission for Sign In / Sign Up
  const handleButtonClick = () => {
    const nameValue = isSignInForm ? "" : name.current?.value;
    const message = checkValidData(
      nameValue,
      email.current?.value,
      password.current?.value
    );

    setErrorMessage(message); // Display validation error if any
    if (message) return;

    if (!isSignInForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          setErrorMessage(`${error.code}-${error.message}`); // Show error message on failure
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          setErrorMessage(
            error.code === "auth/invalid-credential" &&
              error.message.includes("auth/invalid-credential")
              ? "Invalid Credentials"
              : `${error.code}-${error.message}`
          );
        });
    }
  };

  // Toggle between Sign In and Sign Up forms
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null); // Clear previous error messages
  };

  return (
    <>
      <div>
        <Header />
        <div className="absolute">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="logo" // Background image
          />
        </div>

        <form
          onSubmit={(e) => e.preventDefault()} // Prevent default form submission
          className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg"
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"} {/* Dynamic form title */}
          </h1>

          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700"
          />

          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

          <button
            className="p-4 my-4 w-full font-bold bg-red-700 rounded-lg cursor-pointer"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"} {/* Dynamic button label */}
          </button>

          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to MovieAi? Sign Up Now"
              : "Already Registered? Sign In Now"}{" "}
            {/* Toggle Sign In/Sign Up */}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
