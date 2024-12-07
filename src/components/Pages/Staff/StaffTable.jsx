import { ImSpinner9 } from "react-icons/im";
import { useGetAllStaffQuery } from "../../../store/service/staff/staffApi";
import Table from "../../Common/Table";
import UpdateStaff from "./UpdateStaff";
import DeleteStaff from "./DeleteStaff";
import { useGetAdmin } from "../../../hooks/useGetAdmin";

const StaffTable = () => {
  const { admin } = useGetAdmin();
  const { data, isLoading } = useGetAllStaffQuery(admin?.email);

  return (
    <div>
      <div className="rounded-md shadow-md">
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
                dataIndex: "status",
                key: "status",
              },
              {
                name: "Actions",
                render: ({ item }) => {
                  return (
                    <div className="flex items-center gap-2">
                      <UpdateStaff item={item} />

                      <DeleteStaff deleteId={item?._id} />
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

export default StaffTable;
