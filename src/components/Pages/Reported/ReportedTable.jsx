import { FaStreetView, FaTrash } from "react-icons/fa";
import Table from "../../Common/Table";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import { useUserReportsQuery } from "../../../store/service/report/reportApi";

const ReportedTable = () => {
  const { data, isLoading } = useUserReportsQuery();

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
                render: ({ item }) => {
                  return (
                    <div>
                      <span>{item?.from?.fName + "" + item?.from?.lName}</span>
                    </div>
                  );
                },
              },
              {
                name: "Email",
                render: ({ item }) => {
                  return (
                    <div>
                      <span>{item?.from?.email}</span>
                    </div>
                  );
                },
              },
              {
                name: "Title",
                render: ({ item }) => {
                  return (
                    <div>
                      <span>{item?.report?.title}</span>
                    </div>
                  );
                },
              },
              {
                name: "Message",
                render: ({ item }) => {
                  return (
                    <div>
                      <span>{item?.report?.reportMessage}</span>
                    </div>
                  );
                },
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
