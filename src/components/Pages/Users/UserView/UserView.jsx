import { useState } from "react";
import { BiSolidUserAccount } from "react-icons/bi";
import { FaBookOpenReader } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import Button from "../../../Common/Button";
import UserPersonalInfo from "../UserPersonalInfo/UserPersonalInfo";
import { smoothScroll } from "../../../../utils/scrollToTop";

const UserView = () => {
  const [tab, setTab] = useState(1);
  const location = useLocation();
  const data = location?.state?.payload;
  smoothScroll();

  return (
    <div className="p-5 flex flex-col gap-5">
      <div>
        <div className="flex justify-between items-center bg-white shadow-md border rounded-md py-3 px-5">
          <h1 className="font-bold text-xl capitalize">{data?.role} Profile</h1>
          <div className="flex items-center gap-5">
            <Button
              onClick={() => setTab(1)}
              className={` p-1 text-gray-600 cursor-pointer duration-300 rounded-full ${
                tab == 1 ? "text-white" : ""
              }`}
            >
              <BiSolidUserAccount className="text-3xl p-1" />
            </Button>
            <Button
              onClick={() => setTab(2)}
              className={`p-1 text-gray-600 cursor-pointer duration-300 rounded-full ${
                tab == 2 ? "text-white" : ""
              }`}
            >
              <FaBookOpenReader className="text-3xl p-1" />
            </Button>
          </div>
        </div>
      </div>
      <div>
        <UserPersonalInfo data={data} />
      </div>
    </div>
  );
};

export default UserView;
