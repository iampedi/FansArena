import logo from "../assets/images/logo.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="py-5 shadow shadow-gray-100">
      <div className="container max-w-5xl mx-auto">
        <div className="_wrapper flex flex-col justify-center items-center gap-5">
          <div className="_logo">
            <img src={logo} />
          </div>
          <nav>
            <Navbar />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
