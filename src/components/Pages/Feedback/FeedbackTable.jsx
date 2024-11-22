import { ImSpinner9 } from "react-icons/im";
import Table from "../../Common/Table";
import FeedbackDelete from "./FeedbackDelete";
import FeedbackView from "./FeedbackView";
import { useFeedbackQuery } from "../../../store/service/feedback/feedbackApi";
import moment from "moment";

const FeedbackTable = () => {
  const { data, isLoading } = useFeedbackQuery();
  return (
    <div>
      <div className="border rounded-md shadow-md">
        {!isLoading ? (
          <Table
            className="font-normal"
            tableData={data}
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
                      <span>{item?.user?.fName + "" + item?.user?.lName}</span>
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
                      <span>{moment(item?.user?.createdAt).format("L")}</span>
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

export default FeedbackTable;
