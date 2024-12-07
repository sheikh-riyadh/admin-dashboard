import { useNavigate } from "react-router-dom";
import { FaFutbol, FaStreetView } from "react-icons/fa";
import Table from "../../../Common/Table";
import toast from "react-hot-toast";
import PropTypes from "prop-types";
import { useGetUserQuery } from "../../../../store/service/users/userApi";
import UpdateUserStatus from "./UpdateUserStatus";
import { useState } from "react";
import Pagination from "../../../Common/Pagination";
import { useGetAdmin } from "../../../../hooks/useGetAdmin";

const UsersTable = ({ status, search }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(10);

  const { admin } = useGetAdmin();
  const navigate = useNavigate();
  const query = new URLSearchParams({
    status,
    search,
    limit,
    page: currentPage,
    email: admin?.email,
  }).toString();

  const { data, isLoading } = useGetUserQuery(query);
  const pages = Math.ceil(Math.abs(data?.total ?? 0) / parseInt(limit));

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
        <div>
          <Table
            className="font-normal"
            tableData={data?.data}
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
                        className="text-chart_2 cursor-pointer border border-chart_2 text-center p-2 rounded-full"
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
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setLimit={setLimit}
            pages={pages}
            key={"user_pagination"}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-1 items-center justify-center h-screen bg-widget">
          <FaFutbol className="animate-spin text-6xl text-white" />
          <span className="text-accent">Loading...</span>
        </div>
      )}
    </div>
  );
};

UsersTable.propTypes = {
  status: PropTypes.string,
  search: PropTypes.string,
};

export default UsersTable;
