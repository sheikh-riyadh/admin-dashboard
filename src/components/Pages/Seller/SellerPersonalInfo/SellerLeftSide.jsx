import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import CommonComponent from "../../../Common/CommonComponent";
import Button from "../../../Common/Button";

const SellerLeftSide = ({ data }) => {
  const navigate = useNavigate();
  const user = data?.[0];

  return (
    <div className="shadow-md rounded-md overflow-hidden border">
      <div className="flex justify-between bg-white p-5 border-b">
        <div>
          <h2 className="capitalize text-2xl font-semibold text-gray-800 ">
            Personal Info
          </h2>
        </div>
        <div>
          <Button
            onClick={() => navigate(-1)}
            className="px-5"
          >
            Back
          </Button>
        </div>
      </div>
      <div className="p-5 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="w-full rounded-md">
            <CommonComponent
              name={"Full Name"}
              value={user?.firstName + " " + user?.lastName}
            />
            <CommonComponent name={"Phone"} value={user?.phone} />
            <CommonComponent name={"Role"} value={user?.role} />
          </div>
          <div className="w-full rounded-md">
            <CommonComponent
              name={"Phone Verified"}
              value={user?.phoneNumberVerified ? "Verified" : "Not Verified"}
            />
            <CommonComponent
              name={"Email Verified"}
              value={user?.emailVerified ? "Verified" : "Not Verified"}
            />

            <CommonComponent name={"User Status"} value={user?.status} />
          </div>
        </div>
      </div>
    </div>
  );
};

SellerLeftSide.propTypes = {
  data: PropTypes.object,
};

export default SellerLeftSide;
