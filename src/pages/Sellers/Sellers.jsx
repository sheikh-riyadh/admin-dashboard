import Button from "../../components/Common/Button";
import Input from "../../components/Common/Input";
import SellerTable from "../../components/Pages/Seller/SellerTable/SellerTable";

const Sellers = () => {
  return (
    <div className="p-5 flex flex-col gap-5">
      <div className="grid grid-cols-2">
        <span className="font-bold text-xl">All seller overview</span>
        <div className="flex items-center gap-3 justify-end">
          <Input placeholder="Search..." className="border bg-white w-full" />
          <Button className="w-32">Find Seller</Button>
        </div>
      </div>
      <div>
        <SellerTable />
      </div>
    </div>
  );
};

export default Sellers;
