import FeedbackTable from "../../components/Pages/Feedback/FeedbackTable";

const Feedback = () => {
  return (
    <div>
      <div className="p-5 flex flex-col gap-5">
        <div className="grid grid-cols-2">
          <span className="font-bold text-xl text-white">Feedback</span>
        </div>
        <div className="shadow-md rounded-md overflow-hidden">
          <FeedbackTable />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
