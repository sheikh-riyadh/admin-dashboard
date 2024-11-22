import PropTypes from "prop-types"
import SellerOrderTable from "./SellerOrderTable";
const SellerOrders = ({sellerId}) => {
  return (
    <div className="bg-white flex flex-col shadow-md border rounded-md overflow-hidden">
      <div className="p-5">
        <h2 className="capitalize font-medium text-2xl text-end ">
          Orders Information
        </h2>
      </div>
      <div>
        <SellerOrderTable sellerId={sellerId} />
      </div>
    </div>
  );
};


SellerOrders.propTypes={
  sellerId:PropTypes.string
}
export default SellerOrders;
