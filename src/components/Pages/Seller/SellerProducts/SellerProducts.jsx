import { useSearchDelay } from "../../../../hooks/useSearchDelay";
import Button from "../../../Common/Button";
import Input from "../../../Common/Input";
import SellerProductTable from "./SellerProductTable";
import PropTypes from "prop-types";

const SellerProducts = ({ sellerId }) => {
  const { handleChange, searchValue } = useSearchDelay();

  return (
    <div className="bg-widget flex flex-col shadow-md rounded-md overflow-hidden">
      <div className="p-5 flex flex-wrap items-center justify-between">
        <h2 className="capitalize font-medium text-2xl text-end text-white ">
          Products Information
        </h2>
        <div className="flex items-center gap-3 justify-end mt-5 xl:mt-0">
          <Input
            onChange={handleChange}
            placeholder="Search..."
            className="border bg-white w-full"
          />
          <Button className="w-36">Find Product</Button>
        </div>
      </div>
      <div>
        <SellerProductTable sellerId={sellerId} search={searchValue} />
      </div>
    </div>
  );
};

SellerProducts.propTypes = {
  sellerId: PropTypes.string,
};
export default SellerProducts;
