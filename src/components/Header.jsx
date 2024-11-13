import { useNavigate } from "react-router-dom";
import Logo from "../assets/header-logo.png";
import UserLogo from "../assets/user-logo.png";
import { auth } from "../utils/Firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
        console.log(error);
      });
  };

  return (
    <>
      <div className="absolute w-screen px-8 py-2 z-10 justify-between bg-gradient-to-b from-black flex">
        <img className="w-48 mt-6 ml-6" src={Logo} alt="Logo" />
        {user && (
          <div className="flex mt-6 ml-6">
            <img
              alt="userIcon"
              className="w-12 h-12 rounded-md"
              src={UserLogo}
            />
            <button
              onClick={handleSignOut}
              className="font-bold text-white ml-4"
            >
              (Sign Out)
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
