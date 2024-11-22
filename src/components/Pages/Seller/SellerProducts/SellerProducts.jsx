import SellerProductTable from "./SellerProductTable";
import PropTypes from "prop-types";

const SellerProducts = ({ sellerId }) => {
  return (
    <div className="bg-white flex flex-col shadow-md border rounded-md overflow-hidden">
      <div className="p-5">
        <h2 className="capitalize font-medium text-2xl text-end ">
          Products Information
        </h2>
      </div>
      <div>
        <SellerProductTable sellerId={sellerId} />
      </div>
    </div>
  );
};

SellerProducts.propTypes = {
  sellerId: PropTypes.string,
};
export default SellerProducts;
