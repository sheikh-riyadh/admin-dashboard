import BusinessInfo from "../Seller/BusinessInfo/BusinessInfo";
import SellerImage from "../Seller/SellerPersonalInfo/SellerImage";
import SellerLeftSide from "../Seller/SellerPersonalInfo/SellerLeftSide";
import UserDetailsRight from "../Users/UserPersonalInfo/UserDetailsRight";
import UserImage from "../Users/UserPersonalInfo/UserImage";

const ReportedView = () => {
  const data = "";
  return (
    <div className="p-5 flex flex-col gap-5">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-3">
          <UserImage />
        </div>
        <div className="col-span-9">
          <UserDetailsRight isReport={true} />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-9">
          <SellerLeftSide isReport={true} data={data} />
        </div>
        <div className="col-span-3 h-full">
          <SellerImage data={data} />
        </div>
      </div>
      <div>
        <BusinessInfo />
      </div>
      <div className="shadow-md rounded-md border bg-white p-5 flex flex-col gap-5">
        <span className="font-bold">Report info</span>
        <div className="border p-5 rounded-md text-lg flex flex-col gap-5">
          <p className="font-bold">
            Title:{" "}
            <span className="font-medium ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis, deleniti!
            </span>{" "}
          </p>
          <p className="font-bold">
            Message:{" "}
            <span className="font-normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
              dolores commodi quaerat dignissimos perspiciatis optio nemo
              tempora eius inventore doloribus iure perferendis harum
              reprehenderit hic ratione deleniti quia id quo temporibus, sit et
              fuga velit! Doloribus similique, est ad omnis praesentium quia
              mollitia molestiae voluptate fugit tempore officiis consequatur
              modi!
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReportedView;
