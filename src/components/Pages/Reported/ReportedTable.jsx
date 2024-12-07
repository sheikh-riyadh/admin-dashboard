import { FaStreetView} from "react-icons/fa";
import Table from "../../Common/Table";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import { useUserReportsQuery } from "../../../store/service/report/reportApi";
import { useGetAdmin } from "../../../hooks/useGetAdmin";
import { useState } from "react";
import Pagination from "../../Common/Pagination";

const ReportedTable = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const { admin } = useGetAdmin();

  const query = new URLSearchParams({
    page: currentPage,
    limit,
    email: admin?.email,
  }).toString();

  const { data, isLoading } = useUserReportsQuery(query);
  const pages = Math.ceil(Math.abs(data?.total ?? 0) / parseInt(limit));

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
      <div className="rounded-md shadow-md">
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
                        <span>
                          {item?.from?.fName + "" + item?.from?.lName}
                        </span>
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
              key={"specific_user_order_pagination"}
            />
          </div>
        ) : (
          <div className="flex flex-col gap-5 items-center justify-center h-screen bg-widget">
            <ImSpinner9 className="text-6xl animate-spin text-white" />
            <span className="font-medium text-accent">Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportedTable;
