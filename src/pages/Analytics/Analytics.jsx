import { FaUsers, FaShoppingBag, FaDollarSign } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import AnalyticeCard from "../../components/Pages/Analytics/AnalyticeCard";
import AnalyticGraph from "../../components/Pages/Analytics/AnalyticGraph";
import CircleProgressbar from "../../components/Common/CircleProgressbar";
import { useGetUserQuery } from "../../store/service/users/userApi";
import { useGetAllSellerQuery } from "../../store/service/seller/sellerApi";
import { useSellerProductQuery } from "../../store/service/product/productApi";
import { numberWithCommas } from "../../utils/numberWithComma";
import moment from "moment";
import { useGetAdmin } from "../../hooks/useGetAdmin";
import AnalyticsSkeleton from "../../components/Skeleton/Analytics/AnalyticsSkeleton";

const Analytics = () => {
  const { admin } = useGetAdmin();
  const query = new URLSearchParams({
    status: "active",
    search: "",
    limit: 2,
    page: 0,
    email: admin?.email,
  }).toString();

  const { data: userData, isLoading: userLoading } = useGetUserQuery(query);
  const { data: sellerData, isLoading: sellerLoading } =
    useGetAllSellerQuery(query);
  const { data: productData, isLoading: productLoading } =
    useSellerProductQuery(query);

  const data = [
    {
      title: numberWithCommas(userData?.total && userData?.total),
      subtitle: "Total User",
      icon: <FaUsers className="text-4xl border rounded-full p-1" />,
      percentage: 0.33,
    },
    {
      title: numberWithCommas(sellerData?.total && sellerData.total),
      subtitle: "Total Seller",
      icon: <FaShop className="text-4xl border rounded-full p-1" />,
      percentage: 0.24,
    },
    {
      title: numberWithCommas(productData?.total && productData.total),
      subtitle: "Total Products",
      icon: <FaShoppingBag className="text-4xl border rounded-full p-1" />,
      percentage: 0.9,
    },
    {
      title: "30k",
      subtitle: "Total Profit",
      icon: <FaDollarSign className="text-4xl border rounded-full p-1" />,
      percentage: 0.44,
    },
  ];

  const newUser = userData?.data?.reduce((total, item) => {
    if (item?.date === moment().format("D")) {
      return total + 1;
    }
    return total;
  }, 0);

  const newSeller = sellerData?.data?.reduce((total, item) => {
    if (item?.date === moment().format("D")) {
      return total + 1;
    }
    return total;
  }, 0);

  return (
    <>
      {!userLoading && !sellerLoading && !productLoading ? (
        <div className="p-5 flex flex-col gap-5">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {data.map(({ title, subtitle, icon, percentage }) => (
              <AnalyticeCard
                key={subtitle}
                icon={icon}
                title={title}
                subtitle={subtitle}
                percentage={percentage}
              />
            ))}
          </div>
          <div className="mb-10 gap-5 h-full">
            <div className="grid xl:grid-cols-12 gap-5">
              <div className="xl:col-span-9">
                <AnalyticGraph
                  seller={sellerData?.data}
                  user={userData?.data}
                />
              </div>
              <div className="xl:col-span-3 grid md:grid-cols-2 xl:grid-cols-1 gap-5">
                <div className={`bg-widget rounded-md shadow-md flex flex-col items-center justify-center p-5`}>
                  <CircleProgressbar
                    title={"New seller"}
                    data={newSeller ? newSeller : 0}
                    color="#047857"
                  />
                </div>
                <div className="bg-widget rounded-md shadow-md flex flex-col items-center justify-center p-5">
                  <CircleProgressbar
                    title={"New user"}
                    data={newUser ? newUser : 0}
                    color="#fcff66"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <AnalyticsSkeleton />
      )}
    </>
  );
};

export default Analytics;
