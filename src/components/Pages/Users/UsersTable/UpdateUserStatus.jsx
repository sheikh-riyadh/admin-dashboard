import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { useUpdateUserStatusMutation } from "../../../../store/service/users/userApi";
import SelectInput from "../../../Common/SelectInput";
import { useGetAdmin } from "../../../../hooks/useGetAdmin";

const UpdateUserStatus = ({ item }) => {
  const { admin } = useGetAdmin();
  const [updateUserStatus, { isLoading }] = useUpdateUserStatusMutation();

  const handleUpdateSeller = async (updatedData) => {
    try {
      const {
        data: { acknowledged, modifiedCount },
      } = await updateUserStatus(updatedData);
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
          email: admin?.email,
        })
      }
      disabled={isLoading}
      value={item?.status}
      className="bg-[#1C2822] text-white rounded-full"
    >
      <option value="active">Active</option>
      <option value="pending">Pending</option>
      <option value="blocked">Block</option>
    </SelectInput>
  );
};

UpdateUserStatus.propTypes = {
  item: PropTypes.object,
};

export default UpdateUserStatus;
