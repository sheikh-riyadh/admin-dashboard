import PropTypes from "prop-types";
import toast from "react-hot-toast";
import SelectInput from "../../Common/SelectInput";
import { useUpdateProductStatusMutation } from "../../../store/service/product/productApi";

const UpdateStatus = ({item }) => {
  const [updateProduct, { isLoading }] = useUpdateProductStatusMutation();

  const handleUpdateStatus = async (event) => {
    const data = {
      _id: item?._id,
      data: { status: event.target.value },
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
        className="border bg-transparent rounded-full p-0 px-2 capitalize"
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
