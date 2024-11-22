import { useState } from "react";
import Button from "../../components/Common/Button";
import Input from "../../components/Common/Input";
import SellerTable from "../../components/Pages/Seller/SellerTable/SellerTable";

const Sellers = () => {
  const [status, setStatus] = useState("active");

  return (
    <div>
      <div className="h-44 w-full bg-primary flex flex-col justify-center items-center"></div>
      <div className="p-5 flex flex-col gap-5 -mt-36">
        <div className="grid grid-cols-2">
          <div className="grid grid-cols-4 items-center gap-5">
            <span className="font-bold text-xl text-white">All Seller</span>
            {["active", "pending", "blocked"].map((statusItem) => (
              <Button
                onClick={() => setStatus(statusItem)}
                key={statusItem}
                className={`bg-transparent rounded-full text-xs ${
                  status == statusItem ? "bg-white text-stech" : ""
                }`}
              >
                {statusItem}
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-3 justify-end">
            <Input placeholder="Search not available" className="border bg-white w-full" />
            <Button className="w-36">Find seller</Button>
          </div>
        </div>
        <div className="shadow-md border rounded-md overflow-hidden">
          <SellerTable status={status} />
        </div>
      </div>
    </div>
  );
};

export default Sellers;
