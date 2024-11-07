import { ImSpinner9 } from "react-icons/im";
import Table from "../../Common/Table";
import { useGetAdminMessageQuery } from "../../../store/service/adminMessage/adminMessageApi";
import UpdateMessage from "./UpdateMessage";
import DeleteMessage from "./DeleteMessage";

const MessageTable = () => {
  const { data, isLoading } = useGetAdminMessageQuery();
  return (
    <div>
      <div className="border rounded-md shadow-md">
        {!isLoading ? (
          <Table
            className="font-normal"
            tableData={data}
            columns={[
              {
                name: "Message title",
                dataIndex: "title",
                key: "title",
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
                      <UpdateMessage item={item} />

                      <DeleteMessage deleteId={item?._id} />
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

export default MessageTable;
