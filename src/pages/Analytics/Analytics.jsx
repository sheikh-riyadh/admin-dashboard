import { FaUsers, FaShoppingBag, FaDollarSign } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import AnalyticeCard from "../../components/Pages/Analytics/AnalyticeCard";
import AnalyticGraph from "../../components/Pages/Analytics/AnalyticGraph";

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
        <div>
          <AnalyticGraph />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
