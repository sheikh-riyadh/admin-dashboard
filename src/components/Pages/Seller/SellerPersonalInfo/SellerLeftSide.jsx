import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import CommonComponent from "../../../Common/CommonComponent";
import Button from "../../../Common/Button";
import SelectInput from "../../../Common/SelectInput";

const SellerLeftSide = ({ data, isReport }) => {
  const navigate = useNavigate();
  const seller = {data};

  const handleTakeAction = (event) => {
    console.log(event.target.value)
  };

  return (
    <div className="shadow-md rounded-md overflow-hidden border">
      {!isReport ? (
        <div className="flex justify-between bg-white p-5 border-b">
          <div>
            <h2 className="capitalize text-2xl font-semibold text-gray-800 ">
              Personal Info
            </h2>
          </div>
          <div>
            <Button onClick={() => navigate(-1)} className="px-5">
              Back
            </Button>
          </div>
        </div>
      ) : (
        <div className="bg-white p-5 border-b flex gap-x-4 items-center justify-between">
          <div>
            <p className="font-bold">
              Against To : <span>{seller?.fullName}</span>
            </p>
          </div>
          <SelectInput
          onChange={handleTakeAction}
          className="rounded-full border border-danger text-sm p-0 px-5 py-1 uppercase bg-transparent font-bold">
            <option value="" selected disabled>
              Take action
            </option>
            <option value="pending">Pending</option>
            <option value="blocked">Block</option>
          </SelectInput>
        </div>
      )}
      <div className="p-5 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="w-full rounded-md">
            <CommonComponent name={"Full Name"} value={seller?.fullName} />
            <CommonComponent name={"Phone"} value={seller?.phoneNumber} />
            <CommonComponent name={"Role"} value={seller?.role} />
          </div>
          <div className="w-full rounded-md">
            <CommonComponent
              name={"Phone Verified"}
              value={seller?.phoneNumberVerified ? "Verified" : "Not Verified"}
            />
            <CommonComponent
              name={"Email Verified"}
              value={seller?.emailVerified ? "Verified" : "Not Verified"}
            />

            <CommonComponent name={"seller Status"} value={seller?.status} />
          </div>
        </div>
      </div>
    </div>
  );
};

SellerLeftSide.propTypes = {
  data: PropTypes.object,
  isReport: PropTypes.bool,
};

export default SellerLeftSide;
