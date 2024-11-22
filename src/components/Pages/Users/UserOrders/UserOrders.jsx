import PropTypes from "prop-types"
import UserOrderTable from "./UserOrderTable";
const UserOrders = ({userId}) => {
  return (
    <div className="bg-white flex flex-col shadow-md border rounded-md overflow-hidden">
      <div className="p-5 border-b">
        <h2 className="capitalize font-medium text-2xl text-end ">
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
