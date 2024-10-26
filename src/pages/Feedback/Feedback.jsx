import UsersTable from "../../components/Pages/Users/UsersTable/UsersTable";

const Feedback = () => {
  return (
    <div>
      <div className="h-44 w-full bg-primary flex flex-col justify-center items-center"></div>
      <div className="p-5 flex flex-col gap-5 -mt-36">
        <div className="grid grid-cols-2">
          <span className="font-bold text-xl text-white">Feedback</span>
        </div>
        <div className="shadow-md border rounded-md overflow-hidden">
          <UsersTable />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
