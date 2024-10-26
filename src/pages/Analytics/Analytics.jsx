import { FaUsers, FaShoppingBag, FaDollarSign } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import AnalyticeCard from "../../components/Pages/Analytics/AnalyticeCard";
import AnalyticGraph from "../../components/Pages/Analytics/AnalyticGraph";
import CircleProgressbar from "../../components/Common/CircleProgressbar";

const Analytics = () => {
  const data = [
    {
      title: "100k",
      subtitle: "Total Users",
      icon: <FaUsers className="text-4xl border rounded-full p-1" />,
      percentage: 0.33,
    },
    {
      title: "350k",
      subtitle: "Total Sellers",
      icon: <FaShop className="text-4xl border rounded-full p-1" />,
      percentage: 0.44,
    },
    {
      title: "30k",
      subtitle: "Total Products",
      icon: <FaShoppingBag className="text-4xl border rounded-full p-1" />,
      percentage: 0.44,
    },
    {
      title: "30k",
      subtitle: "Total Profit",
      icon: <FaDollarSign className="text-4xl border rounded-full p-1" />,
      percentage: 0.44,
    },
  ];

  return (
    <div className="p-5 flex flex-col gap-5">
      <div className="grid grid-cols-4 gap-5">
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
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-9">
            <AnalyticGraph />
          </div>
          <div className="col-span-3 grid grid-cols-1 gap-5">
            <div className="bg-white rounded-md shadow-md border flex flex-col items-center justify-center p-5">
              <CircleProgressbar title={"new visitor"} data={10}/>
            </div>
            <div className="bg-white rounded-md shadow-md border flex flex-col items-center justify-center p-5">
              <CircleProgressbar title={"new users"} data={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
