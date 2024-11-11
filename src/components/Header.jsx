import Logo from "../assets/header-logo.png";

const Header = () => {
  return (
    <>
      <div className="absolute px-8 py-2 z-30">
        <img className="w-48 mt-6 ml-6" src={Logo} alt="Logo" />
      </div>
    </>
  );
};

export default Header;
