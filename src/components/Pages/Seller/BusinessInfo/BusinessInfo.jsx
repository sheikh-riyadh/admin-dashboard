import UsersTable from "../../Users/UsersTable/UsersTable";

const BusinessInfo = () => {
  return (
    <div className="bg-white flex flex-col shadow-md border rounded-md overflow-hidden">
      <div className="p-5">
        <h2 className="capitalize font-medium text-2xl text-end ">
          Business Information
        </h2>
      </div>
      <div>
        <UsersTable />
      </div>
    </div>
  );
};

export default BusinessInfo;
