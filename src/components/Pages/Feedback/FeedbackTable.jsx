import { useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import Table from "../../Common/Table";
import FeedbackView from "./FeedbackView";
import { useFeedbackQuery } from "../../../store/service/feedback/feedbackApi";
import moment from "moment";
import { useGetAdmin } from "../../../hooks/useGetAdmin";
import Pagination from "../../Common/Pagination";

const FeedbackTable = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const { admin } = useGetAdmin();

  const query = new URLSearchParams({
    page: currentPage,
    limit,
    email: admin?.email,
  }).toString();

  const { data, isLoading } = useFeedbackQuery(query);
  const pages = Math.ceil(Math.abs(data?.total ?? 0) / parseInt(limit));

  return (
    <div>
      <div className=" rounded-md shadow-md">
        {!isLoading ? (
          <div>
            <Table
              className="font-normal"
              tableData={data?.data}
              columns={[
                {
                  name: "Photo",
                  render: ({ item }) => {
                    return (
                      <div className="w-10 h-10 rounded-full">
                        <img
                          className="rounded-full w-full h-full"
                          src={item?.user?.photo}
                          alt="user"
                        />
                      </div>
                    );
                  },
                },

                {
                  name: "Name",
                  render: ({ item }) => {
                    return (
                      <div>
                        <span>
                          {item?.user?.fName + "" + item?.user?.lName}
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
                        <span>{item?.user?.email}</span>
                      </div>
                    );
                  },
                },
                {
                  name: "Phone",
                  render: ({ item }) => {
                    return (
                      <div>
                        <span>{item?.user?.phone}</span>
                      </div>
                    );
                  },
                },
                {
                  name: "CreatedAt",
                  render: ({ item }) => {
                    return (
                      <div>
                        <span>{moment(item?.createdAt).format("L")}</span>
                      </div>
                    );
                  },
                },
                {
                  name: "Actions",
                  render: ({ item }) => {
                    return (
                      <div className="flex items-center gap-2">
                        <FeedbackView item={item} />
                        {/* <FeedbackDelete deleteId={item?._id} /> */}
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
              key={"feedback_pagination"}
            />
          </div>
        ) : (
          <div className="flex flex-col gap-5 items-center justify-center h-80 bg-widget">
            <ImSpinner9 className="text-6xl animate-spin text-white" />
            <span className="font-medium text-accent">Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackTable;
