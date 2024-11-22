import { FaHome, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGetUser } from "../../hooks/useGetUser";

const Header = () => {
  const { user } = useGetUser();
  return (
    <header className="w-full sticky top-0 bg-white border-b border-gray-200 z-50 p-3">
      <nav className="flex items-center justify-end px-8">
        <div>
          <div className="flex items-center gap-3">
            <Link to={"/"}>
              <FaHome className="text-4xl bg-gray-100 p-2 rounded-full" />
            </Link>
            {user?.photo ? (
              <div className="w-9 h-9 rounded-full">
                <img
                  className="w-full h-full rounded-full border"
                  src={user?.photo}
                  alt=""
                />
              </div>
            ) : (
              <FaUserCircle className="text-4xl bg-gray-100 p-2 rounded-full" />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
