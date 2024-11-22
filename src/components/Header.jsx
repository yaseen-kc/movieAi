import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../assets/header-logo.png";
import UserLogo from "../assets/user-logo.png";
import { auth } from "../utils/Firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user); // Get user data from Redux store

  // Handle user sign-out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error"); // Redirect to error page on failure
      });
  };

  // Set up Firebase authentication listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If user is authenticated, add user info to Redux store
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // If no user is authenticated, remove user info from Redux store
        dispatch(removeUser());
        navigate("/");
      }

      return () => unsubscribe();
    });
  }, []);

  return (
    <>
      <div className="absolute w-screen px-8 py-2 z-10 justify-between bg-gradient-to-b from-black flex">
        <img className="w-48 mt-6 ml-6" src={Logo} alt="Logo" />{" "}
        {/* Display the app logo */}
        {user && ( // Show user section if a user is logged in
          <div className="flex mt-6 ml-6">
            {/* <img
              alt="userIcon"
              className="w-12 h-12 rounded-md"
              src={UserLogo} // Display user's avatar icon
            /> */}
            <button
              onClick={handleSignOut}
              className="font-bold text-white ml-4"
            >
              Sign Out {/* Button to sign out */}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
