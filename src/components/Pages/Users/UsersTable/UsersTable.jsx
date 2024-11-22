import { useNavigate } from "react-router-dom";
import { FaFutbol, FaStreetView, FaTrash } from "react-icons/fa";
import Table from "../../../Common/Table";
import toast from "react-hot-toast";
import PropTypes from "prop-types";
import { useGetUserQuery } from "../../../../store/service/users/userApi";
import UpdateUserStatus from "./UpdateUserStatus";

const UsersTable = ({ status }) => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetUserQuery(status);

  const redirectUserDetailsHandler = (items) => {
    if (items) {
      navigate("/user-details", {
        state: {
          payload: { ...items },
        },
      });
    } else {
      toast.error("Data missing!. Please try again!");
    }
  };

  return (
    <div className="overflow-hidden">
      {!isLoading ? (
        <Table
          className="font-normal"
          tableData={data}
          columns={[
            {
              name: "Name",
              render: ({ item }) => {
                return (
                  <div>
                    <span>{item?.fName + "" + item?.lName}</span>
                  </div>
                );
              },
            },
            {
              name: "Phone",
              dataIndex: "phone",
              key: "phone",
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
                return <UpdateUserStatus item={item} />;
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
                    {/* <span
                      className="text-danger cursor-pointer border border-danger text-center p-2 rounded-full hover:bg-red-300 hover:text-white duration-300"
                      title="Delete"
                    >
                      <FaTrash />
                    </span> */}
                  </div>
                );
              },
            },
          ]}
        />
      ) : (
        <div className="flex flex-col gap-1 items-center justify-center h-44 bg-white">
          <FaFutbol className="animate-spin text-6xl" />
          <span>Loading...</span>
        </div>
      )}
    </div>
  );
};

UsersTable.propTypes = {
  status: PropTypes.string,
};

export default UsersTable;
