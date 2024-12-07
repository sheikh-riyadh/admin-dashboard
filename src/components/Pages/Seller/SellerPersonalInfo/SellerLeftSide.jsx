import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import CommonComponent from "../../../Common/CommonComponent";
import Button from "../../../Common/Button";
import SelectInput from "../../../Common/SelectInput";
import { useUpdateSellerMutation } from "../../../../store/service/seller/sellerApi";
import toast from "react-hot-toast";
import { useGetAdmin } from "../../../../hooks/useGetAdmin";

const SellerLeftSide = ({ data, isReport }) => {
  const navigate = useNavigate();
  const { admin } = useGetAdmin();

  const [updateSeller, { isLoading }] = useUpdateSellerMutation();

  const handleTakeAction = async (updatedData) => {
    try {
      const {
        data: { acknowledged, modifiedCount },
      } = await updateSeller(updatedData);
      if (acknowledged && modifiedCount > 0) {
        toast.success("Status updated successfully", { id: "status_update" });
      }
    } catch (error) {
      toast.error("Something went wrong 😓", { id: `${error}` });
    }
  };
  return (
    <div className="shadow-md rounded-md overflow-hidden">
      {!isReport ? (
        <div className="flex justify-between bg-widget p-5 border-b border-[#171f12]">
          <div>
            <h2 className="capitalize text-2xl font-semibold text-white ">
              Personal Info
            </h2>
          </div>
          <div>
            <Button onClick={() => navigate(-1)} className="px-10">
              Back
            </Button>
          </div>
        </div>
      ) : (
        <div className="bg-widget p-5 border-b flex gap-x-4 items-center justify-between text-white">
          <div>
            <p className="font-bold">
              Against To : <span className="font-medium">{data?.fullName}</span>
            </p>
          </div>
          <SelectInput
            onChange={(e) =>
              handleTakeAction({
                _id: data._id,
                data: {
                  status: e.target.value,
                },
                email: admin?.email,
              })
            }
            className="bg-[#1C2822] text-white rounded-full px-10 border-danger border"
            disabled={isLoading}
          >
            <option value="" selected disabled>
              Take action
            </option>
            <option selected={data?.status === "pending"} value="pending">
              Pending
            </option>
            <option selected={data?.status === "blocked"} value="blocked">
              Block
            </option>
          </SelectInput>
        </div>
      )}
      <div className="p-5 bg-widget">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="w-full rounded-md">
            <CommonComponent name={"Full Name"} value={data?.fullName} />
            <CommonComponent name={"Phone"} value={data?.phoneNumber} />
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

            <CommonComponent name={"seller Status"} value={data?.status} />
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
