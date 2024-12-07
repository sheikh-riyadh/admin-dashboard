import { useState } from "react";
import PropTypes from "prop-types";
import { FaBinoculars } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import Modal from "../../../Modal/Modal";
import UserImage from "../../Users/UserPersonalInfo/UserImage";
import UserDetailsRight from "../../Users/UserPersonalInfo/UserDetailsRight";

const ViewReview = ({ item }) => {
  const [isView, setIsView] = useState(false);

  const newData = {
    fullName: item?.userInfo?.fName + "" + item?.userInfo?.lName,
    phone: item?.userInfo?.phone,
    status:item?.userInfo?.status,
    role:item?.userInfo?.role,
    email:item?.userInfo?.email
  };

  return (
    <>
      <div className="flex items-center gap-2">
        <span
          title="Review Overview"
          onClick={() => setIsView((prev) => !prev)}
          className="text-chart_2 cursor-pointer border border-chart_2 text-center p-2 rounded-full"
        >
          <FaBinoculars />
        </span>
      </div>

      {isView && (
        <Modal
          isOpen={isView}
          onClose={setIsView}
          title={"Review overview"}
          key={"order_manage"}
          className={"xl:w-[900px] h-[550px]"}
        >
          
          <div className="flex flex-col gap-5">
          <div className="grid xl:grid-cols-12 gap-5">
            <div className="xl:col-span-3">
              <UserImage data={item?.userInfo?.photo} />
            </div>
            <div className="xl:col-span-9">
              <UserDetailsRight data={newData} />
            </div>
          </div>
            <div className="flex items-center gap-1">
              {[...Array(item?.rating?.rating).keys()]?.map((rating) => (
                <FaStar key={rating} className="text-accent" />
              ))}
            </div>

            <div className="h-32 rounded-md p-3 font-bold shadow-md bg-widget">
              <span>{item?.reviewMessage}</span>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

ViewReview.propTypes = {
  item: PropTypes.object,
};
export default ViewReview;
