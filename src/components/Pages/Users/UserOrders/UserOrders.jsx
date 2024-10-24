import UsersTable from "../UsersTable/UsersTable";

const UserOrders = () => {
  return (
    <div className="bg-white flex flex-col shadow-md border rounded-md overflow-hidden">
      <div className="p-5 border-b">
        <h2 className="capitalize font-medium text-2xl text-end ">
          Orders infomation
        </h2>
      </div>
      <div>
        <UsersTable />
      </div>
    </div>
  );
};

export default UserOrders;
