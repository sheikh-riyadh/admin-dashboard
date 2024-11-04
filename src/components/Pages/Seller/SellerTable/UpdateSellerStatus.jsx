import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { useUpdateSellerMutation } from "../../../../store/service/seller/sellerApi";
import SelectInput from "../../../Common/SelectInput";

const UpdateSellerStatus = ({ item }) => {
  const [updateSeller, { isLoading: updateLoading }] =
    useUpdateSellerMutation();

  const handleUpdateSeller = async (updatedData) => {
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
    <SelectInput
      onChange={(e) =>
        handleUpdateSeller({
          _id: item._id,
          data: {
            status: e.target.value,
          },
        })
      }
      disabled={updateLoading}
      value={item?.status}
      className="border bg-transparent rounded-full p-1 px-2 capitalize"
    >
      <option value="active">Active</option>
      <option value="pending">Pending</option>
      <option value="blocked">Block</option>
    </SelectInput>
  );
};

UpdateSellerStatus.propTypes = {
  item: PropTypes.object,
};

export default UpdateSellerStatus;
