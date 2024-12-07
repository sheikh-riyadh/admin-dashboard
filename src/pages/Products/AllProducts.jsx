import Button from "../../components/Common/Button";
import Input from "../../components/Common/Input";
import ProductTable from "../../components/Pages/Products/ProductTable";
import { useSearchDelay } from "../../hooks/useSearchDelay";

const AllProducts = () => {
  const { handleChange, searchValue } = useSearchDelay();

  return (
    <div>
      <div className="p-5 flex flex-col gap-5">
        <div className="grid xl:grid-cols-2">
          <span className="font-bold text-xl text-white">
            All Products overview
          </span>
          <div className="flex items-center gap-3 justify-end mt-5 xl:mt-0">
            <Input
              onChange={handleChange}
              placeholder="Search..."
              className="border bg-white w-full"
            />
            <Button className="w-36">Find product</Button>
          </div>
        </div>
        <div className="shadow-md rounded-md overflow-hidden">
          <ProductTable search={searchValue} />
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
