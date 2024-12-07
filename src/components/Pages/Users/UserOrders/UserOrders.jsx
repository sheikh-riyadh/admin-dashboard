import PropTypes from "prop-types"
import UserOrderTable from "./UserOrderTable";
const UserOrders = ({userId}) => {
  return (
    <div className="bg-widget flex flex-col shadow-md rounded-md overflow-hidden">
      <div className="p-5 border-b border-[#171f12]">
        <h2 className="capitalize font-medium text-2xl text-end text-white ">
          Orders infomation
        </h2>
      </div>
      <div>
        <UserOrderTable userId={userId} />
      </div>
    </div>
  );
};


UserOrders.propTypes={
  userId:PropTypes.string
}
export default UserOrders;
