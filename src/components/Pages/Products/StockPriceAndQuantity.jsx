import PropTypes from "prop-types";
import Input from "../../Common/Input";

const StockPriceAndQuantity = ({ data }) => {
  return (
    <div className="bg-white shadow-md border rounded-b-md p-3">
      <div className="grid grid-cols-4 gap-5">
        <Input
          className={"bg-white border"}
          label={"Price"}
          disabled
          value={data?.price}
        />
        <Input
          className={"bg-white border"}
          label={"Special Price"}
          disabled
          value={data?.specialPrice ? data?.specialPrice : "N/A"}
        />
        <Input
          className={"bg-white border"}
          label={"Stock"}
          disabled
          value={data?.stock}
        />
        <Input
          className={"bg-white border"}
          label={"Discount"}
          disabled
          value={data?.discount ? data?.discount : "0"}
        />
      </div>
    </div>
  );
};

StockPriceAndQuantity.propTypes = {
  data: PropTypes.object,
};

export default StockPriceAndQuantity;
