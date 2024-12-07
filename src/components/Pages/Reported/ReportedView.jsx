import { useLocation } from "react-router-dom";
import BusinessInfo from "../Seller/BusinessInfo/BusinessInfo";
import SellerImage from "../Seller/SellerPersonalInfo/SellerImage";
import SellerLeftSide from "../Seller/SellerPersonalInfo/SellerLeftSide";
import UserDetailsRight from "../Users/UserPersonalInfo/UserDetailsRight";
import UserImage from "../Users/UserPersonalInfo/UserImage";
import { useGetSellerByIdQuery } from "../../../store/service/seller/sellerApi";
import { FaFutbol } from "react-icons/fa6";
import { smoothScroll } from "../../../utils/scrollToTop";
import { useGetAdmin } from "../../../hooks/useGetAdmin";

const ReportedView = () => {
  const location = useLocation();
  const data = location?.state?.payload;
  const { admin } = useGetAdmin();
  smoothScroll();
  const query = new URLSearchParams({
    sellerId: data?.againstTo,
    email: admin?.email,
  }).toString();

  const { data: sellerData, isLoading } = useGetSellerByIdQuery(query);

  const userData = {
    fullName: data?.from?.fName + " " + data?.from?.lName,
    phone: data?.from?.phone,
    role: data?.from?.role,
    status: data?.from?.status,
    email: data?.from?.email,
  };

  return (
    <>
      {!isLoading ? (
        <div className="p-5 flex flex-col gap-5">
          <div className="grid xl:grid-cols-12 gap-5">
            <div className="xl:col-span-3">
              <UserImage data={data?.from?.photo} />
            </div>
            <div className="xl:col-span-9">
              <UserDetailsRight isReport={true} data={userData} />
            </div>
          </div>
          <div className="grid xl:grid-cols-12 gap-5">
            <div className="xl:col-span-9">
              <SellerLeftSide isReport={true} data={sellerData} />
            </div>
            <div className="xl:col-span-3 h-full">
              <SellerImage data={sellerData?.photo} />
            </div>
          </div>
          <div>
            <BusinessInfo data={sellerData} />
          </div>
          <div className="shadow-md rounded-md bg-widget text-white p-5 flex flex-col gap-5">
            <span className="font-bold">Report info</span>
            <div className="bg-[#1c2822] p-5 rounded-md text-lg flex flex-col gap-5">
              <p className="font-bold">
                Title:{" "}
                <span className="font-normal">{data?.report?.title}</span>{" "}
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
        <div className="flex flex-col gap-1 items-center justify-center h-screen bg-widget">
          <FaFutbol className="animate-spin text-6xl text-white" />
          <span className="text-accent">Loading...</span>
        </div>
      )}
    </>
  );
};

export default ReportedView;
