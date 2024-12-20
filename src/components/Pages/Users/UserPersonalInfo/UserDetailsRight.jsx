import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import CommonComponent from "../../../Common/CommonComponent";
import Button from "../../../Common/Button";

const UserDetailsRight = ({ data,isReport }) => {
  const navigate = useNavigate();
  return (
    <div className="shadow-md rounded-md overflow-hidden">
      <div className="flex justify-between border-b border-[#171f12] bg-widget p-4">
        <div>
          {!isReport?<h2 className="capitalize text-2xl font-semibold text-white">
            Personal Info
          </h2>:<p className="font-bold text-white">
              From : <span>{data?.fullName}</span>
            </p>}
        </div>
        <div>
          <Button
            onClick={() => navigate(-1)}
            type="button"
            className="px-10"
          >
            Back
          </Button>
        </div>
      </div>
      <div className="p-5 bg-widget">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="w-full rounded-md">
            <CommonComponent
              name={"Full Name"}
              value={data?.fullName}
            />
            <CommonComponent name={"Phone"} value={data?.phone} />
            <CommonComponent name={"Role"} value={data?.role} />
          </div>
          <div className="w-full rounded-md">
            <CommonComponent
              name={"Email"}
              value={data?.email ? data?.email : "N/A"}
            />
            <CommonComponent
              name={"Email Verified"}
              value={!data?.emailVerified ? "Verified" : "Not Verified"}
            />

            <CommonComponent name={"Status"} value={data?.status} />
          </div>
        </div>
      </div>
    </div>
  );
};

UserDetailsRight.propTypes = {
  data: PropTypes.object,
  isReport: PropTypes.bool,
};

export default UserDetailsRight;
