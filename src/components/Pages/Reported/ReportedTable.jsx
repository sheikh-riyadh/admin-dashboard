import { FaStreetView, FaTrash } from "react-icons/fa";
import Table from "../../Common/Table";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";

const ReportedTable = () => {
  const isLoading = "",
    data = [...Array(4).keys()];

  const navigate = useNavigate();

  const redirectReportDetailsHandler = (items) => {
    if (items) {
      navigate("/reported-details", {
        state: {
          payload: { ...items },
        },
      });
    } else {
      toast.error("Data missing!. Please try again!");
    }
  };

  return (
    <div>
      <div className="border rounded-md shadow-md">
        {!isLoading ? (
          <Table
            className="font-normal"
            tableData={data}
            columns={[
              {
                name: "Name",
                dataIndex: "name",
                key: "name",
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
                name: "Message",
                dataIndex: "message",
                key: "message",
              },

              {
                name: "Actions",
                render: ({ item }) => {
                  return (
                    <div className="flex items-center gap-2">
                      <span
                        onClick={() => redirectReportDetailsHandler(item)}
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
    </div>
  );
};

export default ReportedTable;
