import ReportedTable from "../../components/Pages/Reported/ReportedTable";

const Reported = () => {
  return (
    <div>
     
      <div className="p-5 flex flex-col gap-5">
        <div className="grid grid-cols-2">
          <span className="font-bold text-xl text-white">Reported</span>
        </div>
        <div className="shadow-md rounded-md overflow-hidden">
          <ReportedTable />
        </div>
      </div>
    </div>
  );
};

export default Reported;
