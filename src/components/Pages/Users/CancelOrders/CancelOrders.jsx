import PropTypes from "prop-types";
import UserCancelOrderTable from "./UserCancelOrderTable";
const CancelOrders = ({ userId }) => {
  return (
    <div className="bg-widget flex flex-col shadow-md rounded-md overflow-hidden">
      <div className="p-5 border-b border-[#171f12] text-white">
        <h2 className="capitalize font-medium text-2xl text-end ">
          Cancel Orders information
        </h2>
      </div>
      <div>
        <UserCancelOrderTable userId={userId} />
      </div>
    </div>
  );
};
CancelOrders.propTypes = {
  userId: PropTypes.string,
};
export default CancelOrders;
