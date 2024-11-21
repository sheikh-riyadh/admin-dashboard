import { useLocation } from "react-router-dom";
import BusinessInfo from "../Seller/BusinessInfo/BusinessInfo";
import SellerImage from "../Seller/SellerPersonalInfo/SellerImage";
import SellerLeftSide from "../Seller/SellerPersonalInfo/SellerLeftSide";
import UserDetailsRight from "../Users/UserPersonalInfo/UserDetailsRight";
import UserImage from "../Users/UserPersonalInfo/UserImage";
import { useGetSellerByIdQuery } from "../../../store/service/seller/sellerApi";
import { FaFutbol } from "react-icons/fa6";

const ReportedView = () => {
  const location = useLocation();
  const data = location?.state?.payload;

  const { data: sellerData, isLoading } = useGetSellerByIdQuery(
    data?.againstTo
  );

  const newData = {
    fullName: sellerData?.fullName,
    phone: sellerData?.phoneNumber,
    photo: sellerData?.photo,
    role: sellerData?.role,
    status: sellerData?.status,
  };

  return (
    <>
      {!isLoading ? (
        <div className="p-5 flex flex-col gap-5">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-3">
              <UserImage data={data?.from?.photo} />
            </div>
            <div className="col-span-9">
              <UserDetailsRight isReport={true} data={newData} />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-9">
              <SellerLeftSide isReport={true} data={sellerData} />
            </div>
            <div className="col-span-3 h-full">
              <SellerImage data={sellerData?.photo} />
            </div>
          </div>
          <div>
            <BusinessInfo data={sellerData} />
          </div>
          <div className="shadow-md rounded-md border bg-white p-5 flex flex-col gap-5">
            <span className="font-bold">Report info</span>
            <div className="border p-5 rounded-md text-lg flex flex-col gap-5">
              <p className="font-bold">
                Title:{" "}
                <span className="font-medium ">{data?.report?.title}</span>{" "}
              </p>
              <p className="font-bold">
                Message:{" "}
                <span className="font-normal">
                  {data?.report?.reportMessage}
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-1 items-center justify-center h-screen bg-white">
          <FaFutbol className="animate-spin text-6xl" />
          <span>Loading...</span>
        </div>
      )}
    </>
  );
};

export default ReportedView;
