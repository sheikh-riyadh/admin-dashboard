import { useState } from "react";
import Button from "../../components/Common/Button";
import Input from "../../components/Common/Input";
import SellerTable from "../../components/Pages/Seller/SellerTable/SellerTable";
import { useSearchDelay } from "../../hooks/useSearchDelay";

const Sellers = () => {
  const [status, setStatus] = useState("active");
  const {handleChange, searchValue} = useSearchDelay();

  return (
    <div>
      <div className="p-5 flex flex-col gap-5">
        <div className="grid xl:grid-cols-2">
          <div className="grid grid-cols-4 items-center gap-5">
            <span className="font-bold text-xl text-white">All Seller</span>
            {["active", "pending", "blocked"].map((statusItem) => (
              <Button
                onClick={() => setStatus(statusItem)}
                key={statusItem}
                className={`bg-transparent rounded-full text-xs border ${
                  status == statusItem ? "bg-white text-black" : ""
                }`}
              >
                {statusItem}
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-3 justify-end mt-5 xl:mt-0">
            <Input
            onChange={handleChange}
              placeholder="Search..."
              className="bg-white w-full"
            />
            <Button className="w-40">Find seller</Button>
          </div>
        </div>
        <div className="shadow-md rounded-md overflow-hidden">
          <SellerTable status={status} search={searchValue}/>
        </div>
      </div>
    </div>
  );
};

export default Sellers;
