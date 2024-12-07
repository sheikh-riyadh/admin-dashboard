import { BiSolidUserAccount } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import Button from "../../../Common/Button";
import UserPersonalInfo from "../UserPersonalInfo/UserPersonalInfo";
import { smoothScroll } from "../../../../utils/scrollToTop";

const UserView = () => {
  const location = useLocation();
  const data = location?.state?.payload;
  smoothScroll();

  return (
    <div className="p-5 flex flex-col gap-5">
      <div>
        <div className="flex justify-between items-center bg-widget shadow-md rounded-md py-3 px-5">
          <h1 className="font-bold text-xl capitalize text-white">{data?.role} Profile</h1>
          <div className="flex items-center gap-5">
            <Button
              className={` p-1 cursor-pointer duration-300 rounded-full text-white`}
            >
              <BiSolidUserAccount className="text-3xl p-1" />
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
