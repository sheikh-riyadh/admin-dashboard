import Button from "../../components/Common/Button";
import Input from "../../components/Common/Input";
import UsersTable from "../../components/Pages/Users/UsersTable/UsersTable";

const Users = () => {
  return (
    <div className="p-5 flex flex-col gap-5">
      <div className="grid grid-cols-2">
        <span className="font-bold text-xl">All users overview</span>
        <div className="flex items-center gap-3 justify-end">
          <Input 
          placeholder="Search..."
          className="border bg-white w-full"
          />
          <Button
          className="w-24"
          >Find user</Button>
        </div>
      </div>
      <div>
        <UsersTable/>
      </div>
    </div>
  );
};

export default Users;
