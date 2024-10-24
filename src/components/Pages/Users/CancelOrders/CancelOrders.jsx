import UsersTable from "../UsersTable/UsersTable";

const CancelOrders = () => {
  return (
    <div className="bg-white flex flex-col shadow-md border rounded-md overflow-hidden">
      <div className="p-5 border-b">
        <h2 className="capitalize font-medium text-2xl text-end ">
          Cancel Orders information
        </h2>
      </div>
      <div>
        <UsersTable />
      </div>
    </div>
  );
};

export default CancelOrders;
