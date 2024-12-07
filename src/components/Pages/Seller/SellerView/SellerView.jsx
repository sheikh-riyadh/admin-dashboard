import { useLocation } from "react-router-dom";
import Button from "../../../Common/Button";
import { FaBookOpenReader } from "react-icons/fa6";
import SellerPersonalInfo from "../SellerPersonalInfo/SellerPersonalInfo";
import { smoothScroll } from "../../../../utils/scrollToTop";

const SellerView = () => {
  const location = useLocation();
  const data = location?.state?.payload;
  smoothScroll();

  return (
    <div className="p-5 flex flex-col gap-5">
      <div>
        <div className="flex justify-between items-center bg-widget shadow-md rounded-md py-3 px-5 text-white">
          <h1 className="font-bold text-xl capitalize">{data?.role} Profile</h1>
          <div className="flex items-center gap-5">
            <Button
              className={`p-1 text-white cursor-pointer duration-300 rounded-full`}
            >
              <FaBookOpenReader className="text-3xl p-1" />
            </Button>
          </div>
        </div>
      </div>
      <div>
        <SellerPersonalInfo data={data} />
      </div>
    </div>
  );
};

export default SellerView;
