import { ImSpinner9 } from "react-icons/im";
import Table from "../../Common/Table";
import { useGetAdminMessageQuery } from "../../../store/service/adminMessage/adminMessageApi";
import UpdateMessage from "./UpdateMessage";
import DeleteMessage from "./DeleteMessage";
import { useGetAdmin } from "../../../hooks/useGetAdmin";

const MessageTable = () => {
  const { admin } = useGetAdmin();
  const query = new URLSearchParams({
    email: admin?.email,
  }).toString();

  const { data, isLoading } = useGetAdminMessageQuery(query);
  return (
    <div>
      <div className="rounded-md shadow-md">
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
                name: "To",
                dataIndex: "to",
                key: "to",
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
          <div className="flex flex-col gap-5 items-center justify-center h-screen bg-widget">
            <ImSpinner9 className="text-6xl animate-spin text-white" />
            <span className="font-medium text-accent">Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageTable;
