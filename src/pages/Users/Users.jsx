import Button from "../../components/Common/Button";
import Input from "../../components/Common/Input";
import UsersTable from "../../components/Pages/Users/UsersTable/UsersTable";

const Users = () => {
  return (
    <div>
      <div className="h-44 w-full bg-primary flex flex-col justify-center items-center"></div>
      <div className="p-5 flex flex-col gap-5 -mt-36">
        <div className="grid grid-cols-2">
          <span className="font-bold text-xl text-white">All Users</span>
          <div className="flex items-center gap-3 justify-end">
            <Input placeholder="Search..." className="border bg-white w-full" />
            <Button className="w-36">Find user</Button>
          </div>
        </div>
        <div className="shadow-md border rounded-md overflow-hidden">
          <UsersTable />
        </div>
      </div>
    </div>
  );
};

export default Users;
