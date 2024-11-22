import CancelOrders from "../CancelOrders/CancelOrders";
import UserOrders from "../UserOrders/UserOrders";
import UserReviews from "../UserReviews/UserReviews";
import UserDetailsRight from "./UserDetailsRight";
import UserImage from "./UserImage";
import PropTypes from "prop-types";

const UserPersonalInfo = ({ data }) => {
  const newData = {
    fullName: data?.fName + "" + data?.lName,
    phone: data?.phone,
    status: data?.status,
    role: data?.role,
  };

  const userId = data?._id;

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-3">
          <UserImage data={data?.photo} />
        </div>
        <div className="col-span-9">
          <UserDetailsRight data={newData} />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <UserOrders userId={userId} />
        <CancelOrders userId={userId} />
        <UserReviews userId={userId} />
      </div>
    </div>
  );
};

UserPersonalInfo.propTypes = {
  data: PropTypes.object,
};

export default UserPersonalInfo;
