import { FaHome, FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full sticky top-0 bg-white border-b border-gray-200 z-50 p-3">
      <nav className="flex items-center justify-end px-8">
        <div>
          <div className="flex items-center gap-3">
            <FaHome className="text-4xl bg-gray-100 p-2 rounded-full" />
            <FaUserCircle className="text-4xl bg-gray-100 p-2 rounded-full" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
