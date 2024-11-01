import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Table from "../../../Common/Table";
import SelectInput from "../../../Common/SelectInput";
import { FaStreetView, FaTrash } from "react-icons/fa";
import {
  useGetAllSellerQuery,
  useUpdateSellerMutation,
} from "../../../../store/service/seller/sellerApi";
import { ImSpinner9 } from "react-icons/im";
import { useState } from "react";

const SellerTable = () => {
  const [statusValue, setStatusValue] = useState();

  const { data, isLoading } = useGetAllSellerQuery();
  const [updateSeller, { isLoading: updateLoading }] =
    useUpdateSellerMutation();

  const navigate = useNavigate();

  const redirectUserDetailsHandler = (items) => {
    if (items) {
      navigate("/seller-details", {
        state: {
          payload: { ...items },
        },
      });
    } else {
      toast.error("Data missing!. Please try again!");
    }
  };

  const handleUpdateSeller = async (updatedData) => {
    try {
      const {
        data: { acknowledged, modifiedCount },
      } = await updateSeller(updatedData);
      if (acknowledged && modifiedCount > 0) {
        toast.success("Status updated successfully", { id: "status_update" });
        setStatusValue(updatedData.data.status);
      }
    } catch (error) {
      toast.error("Something went wrong 😔", { id: `${error}` });
    }
  };

  return (
    <div className="border rounded-md shadow-md">
      {!isLoading ? (
        <Table
          className="font-normal"
          tableData={data}
          columns={[
            {
              name: "Name",
              dataIndex: "fullName",
              key: "fullName",
            },
            {
              name: "Phone",
              dataIndex: "phoneNumber",
              key: "phoneNumber",
            },
            {
              name: "Email",
              dataIndex: "email",
              key: "email",
            },
            {
              name: "Role",
              dataIndex: "role",
              key: "role",
            },
            {
              name: "Status",
              render: ({ item }) => {
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
                    value={statusValue || item?.status}
                    className="border bg-transparent rounded-full p-1 px-2 capitalize"
                  >
                    <option value="active">Active</option>
                    <option value="pending">Pending</option>
                    <option value="blocked">Block</option>
                  </SelectInput>
                );
              },
            },
            {
              name: "Actions",
              render: ({ item }) => {
                return (
                  <div className="flex items-center gap-2">
                    <span
                      onClick={() => redirectUserDetailsHandler(item)}
                      className="text-stech cursor-pointer border border-stech text-center p-2 rounded-full"
                      title="View"
                    >
                      <FaStreetView />
                    </span>
                    <span
                      className="text-danger cursor-pointer border border-danger text-center p-2 rounded-full hover:bg-red-300 hover:text-white duration-300"
                      title="Delete"
                    >
                      <FaTrash />
                    </span>
                  </div>
                );
              },
            },
          ]}
        />
      ) : (
        <div className="flex flex-col gap-5 items-center justify-center h-80 bg-white">
          <ImSpinner9 className="text-6xl animate-spin" />
          <span className="font-medium">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default SellerTable;
