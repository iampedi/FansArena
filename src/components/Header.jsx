import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="py-5 border-b border-gray-200">
      <div className="container max-w-[92%] mx-auto">
        <div className="_wrapper flex items-center justify-between gap-5">
          <div className="_logo flex items-center gap-2">
            <h1 className="text-xl font-bold text-blue-800">Fans Arena</h1>
          </div>
          <nav>
            <Navbar />
          </nav>

          <div className="_tools">
            <button>Admin</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
