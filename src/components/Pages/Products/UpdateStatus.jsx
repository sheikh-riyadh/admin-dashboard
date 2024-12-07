import PropTypes from "prop-types";
import toast from "react-hot-toast";
import SelectInput from "../../Common/SelectInput";
import { useUpdateProductStatusMutation } from "../../../store/service/product/productApi";
import { useGetAdmin } from "../../../hooks/useGetAdmin";

const UpdateStatus = ({ item }) => {
  const [updateProduct, { isLoading }] = useUpdateProductStatusMutation();
  const { admin } = useGetAdmin();
  const handleUpdateStatus = async (event) => {
    const data = {
      _id: item?._id,
      data: { status: event.target.value },
      email: admin?.email,
    };
    try {
      const res = await updateProduct(data);
      if (!res?.error) {
        toast.success("Update status successfully", { id: "status_success" });
      } else {
        toast.error("Something went wrong 😓", { id: "error" });
      }
    } catch (error) {
      toast.error("Something went wrong 😓", { id: error });
    }
  };
  return (
    <div>
      <SelectInput
        onChange={handleUpdateStatus}
        className="bg-[#1C2822] text-white rounded-full"
        disabled={isLoading}
      >
        <option selected={item?.status === "active"} value="active">
          active
        </option>
        <option selected={item?.status === "blocked"} value="blocked">
          blocked
        </option>
      </SelectInput>
    </div>
  );
};

UpdateStatus.propTypes = {
  item: PropTypes.object,
};

export default UpdateStatus;
