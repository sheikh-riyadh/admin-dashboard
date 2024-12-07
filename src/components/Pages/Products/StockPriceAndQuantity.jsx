import PropTypes from "prop-types";
import Input from "../../Common/Input";

const StockPriceAndQuantity = ({ data }) => {
  return (
    <div className="bg-widget shadow-md rounded-b-md p-3">
      <div className="grid xl:grid-cols-4 gap-5">
        <Input
          className={"bg-[#1C2822] text-white rounded-sm"}
          label={"Price"}
          disabled
          value={data?.price}
        />
        <Input
          className={"bg-[#1C2822] text-white rounded-sm"}
          label={"Special Price"}
          disabled
          value={data?.specialPrice ? data?.specialPrice : "N/A"}
        />
        <Input
          className={"bg-[#1C2822] text-white rounded-sm"}
          label={"Stock"}
          disabled
          value={data?.stock}
        />
        <Input
          className={"bg-[#1C2822] text-white rounded-sm"}
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
