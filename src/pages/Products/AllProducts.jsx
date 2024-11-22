import Button from "../../components/Common/Button";
import Input from "../../components/Common/Input";
import ProductTable from "../../components/Pages/Products/ProductTable";

const AllProducts = () => {
  return (
    <div>
      <div className="h-44 w-full bg-primary flex flex-col justify-center items-center"></div>
      <div className="p-5 flex flex-col gap-5 -mt-36">
        <div className="grid grid-cols-2">
          <span className="font-bold text-xl text-white">All Products overview</span>
          <div className="flex items-center gap-3 justify-end">
            <Input placeholder="Search not available" className="border bg-white w-full" />
            <Button className="w-36">Find product</Button>
          </div>
        </div>
        <div className="shadow-md border rounded-md overflow-hidden">
          <ProductTable />
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
