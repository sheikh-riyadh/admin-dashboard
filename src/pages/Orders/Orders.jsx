import Button from "../../components/Common/Button";
import Input from "../../components/Common/Input";
import OrdersTable from "../../components/Pages/Orders/OrdersTable";
import { useSearchDelay } from "../../hooks/useSearchDelay";

const Orders = () => {
  const { handleChange, searchValue } = useSearchDelay();

  return (
    <div>
      <div className="p-5 flex flex-col gap-5">
        <div className="grid xl:grid-cols-2">
          <span className="font-bold text-xl text-white">Orders Overview</span>
          <div className="flex items-center gap-3 justify-end mt-5 xl:mt-0">
            <Input
              onChange={handleChange}
              placeholder="Search..."
              className="bg-white w-full"
            />
            <Button className="w-36">Find order</Button>
          </div>
        </div>
        <div className="shadow-md rounded-md overflow-hidden">
          <OrdersTable search={searchValue}/>
        </div>
      </div>
    </div>
  );
};

export default Orders;
