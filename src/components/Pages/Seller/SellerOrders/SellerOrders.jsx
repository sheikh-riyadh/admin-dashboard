import PropTypes from "prop-types";
import SellerOrderTable from "./SellerOrderTable";
import Input from "../../../Common/Input";
import Button from "../../../Common/Button";
import { useSearchDelay } from "../../../../hooks/useSearchDelay";
const SellerOrders = ({ sellerId }) => {
  const { handleChange, searchValue } = useSearchDelay();

  return (
    <div className="bg-widget flex flex-col shadow-md rounded-md overflow-hidden">
      <div className="p-5 flex flex-wrap items-center justify-between">
        <h2 className="capitalize font-medium text-2xl text-end text-white ">
          Orders Information
        </h2>
        <div className="flex items-center gap-3 justify-end mt-5 xl:mt-0">
          <Input
            onChange={handleChange}
            placeholder="Search..."
            className="border bg-white w-full"
          />
          <Button className="w-36">Find Order</Button>
        </div>
      </div>
      <div>
        <SellerOrderTable sellerId={sellerId} search={searchValue} />
      </div>
    </div>
  );
};

SellerOrders.propTypes = {
  sellerId: PropTypes.string,
};
export default SellerOrders;
