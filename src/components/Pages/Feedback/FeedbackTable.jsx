import { ImSpinner9 } from "react-icons/im";
import Table from "../../Common/Table";
import FeedbackDelete from "./FeedbackDelete";
import FeedbackView from "./FeedbackView";

const FeedbackTable = () => {
  const isLoading = "",
    data = [...Array(4).keys()];


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
                      <FeedbackView item={item} />
                      <FeedbackDelete deleteId={item?._id} />
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
