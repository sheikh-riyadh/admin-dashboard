import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import CommonComponent from "../../../Common/CommonComponent";
import Button from "../../../Common/Button";

const UserDetailsRight = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="shadow-md rounded-md border overflow-hidden">
      <div className="flex justify-between border bg-white p-4">
        <div>
          <h2 className="capitalize text-2xl font-semibold text-gray-800 ">
            Personal Info
          </h2>
        </div>
        <div>
          <Button
            onClick={() => navigate(-1)}
            type="button"
            className="px-5"
          >
            Back
          </Button>
        </div>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="w-full rounded-md">
            <CommonComponent
              name={"Full Name"}
              value={data?.firstName + " " + data?.lastName}
            />
            <CommonComponent name={"Phone"} value={data?.phone} />
            <CommonComponent name={"Role"} value={data?.role} />
          </div>
          <div className="w-full rounded-md">
            <CommonComponent
              name={"Phone Verified"}
              value={data?.phoneNumberVerified ? "Verified" : "Not Verified"}
            />
            <CommonComponent
              name={"Email Verified"}
              value={data?.emailVerified ? "Verified" : "Not Verified"}
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
};

export default UserDetailsRight;
