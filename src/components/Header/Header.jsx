import { FaBars, FaHome, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGetAdmin } from "../../hooks/useGetAdmin";
import { useState } from "react";
import MobileSidebar from "../Mobile/MobileSidebar";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { admin } = useGetAdmin();
  return (
    <header className="w-full sticky top-0 bg-widget z-50 p-3">
      <nav className="flex items-center justify-between px-8">
        <div>
          <FaBars
            onClick={() => setIsModalOpen((prev) => !prev)}
            className="block lg:hidden  text-2xl text-white"
          />
        </div>
        <div>
          <div className="flex items-center gap-3">
            <Link to={"/"}>
              <FaHome className="text-4xl bg-gray-100 p-2 rounded-full" />
            </Link>
            {admin?.photo ? (
              <div className="w-9 h-9 rounded-full">
                <img
                  className="w-full h-full rounded-full border"
                  src={admin?.photo}
                  alt=""
                />
              </div>
            ) : (
              <FaUserCircle className="text-4xl bg-gray-100 p-2 rounded-full" />
            )}
          </div>
        </div>
      </nav>

      {isModalOpen && (
        <MobileSidebar
          isOpen={isModalOpen}
          onClose={setIsModalOpen}
          key={"mobleSidebar"}
          className={"h-screen"}
        />
      )}
    </header>
  );
};

export default Header;
