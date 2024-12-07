import { FaCircle } from "react-icons/fa";
import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import moment from "moment";

const AnalyticGraph = ({ user, seller }) => {
  const analytice = [
    { name: "Jan", uv: 0, pv: 0 },
    { name: "Feb", uv: 0, pv: 0 },
    { name: "Mar", uv: 0, pv: 0 },
    { name: "Apr", uv: 0, pv: 0 },
    { name: "May", uv: 0, pv: 0 },
    { name: "Jun", uv: 0, pv: 0 },
    { name: "Jul", uv: 0, pv: 0 },
    { name: "Aug", uv: 0, pv: 0 },
    { name: "Sep", uv: 0, pv: 0 },
    { name: "Oct", uv: 0, pv: 0 },
    { name: "Nov", uv: 0, pv: 0 },
    { name: "Dec", uv: 0, pv: 0 },
  ];


  seller?.forEach((slr) => {
    const monthData = analytice.find(
      (month) =>
        month.name === slr.month && slr?.year === moment().format("YYYY")
    );
    if (monthData) {
      monthData.uv += 1;
    }
  });

  user?.forEach((usr) => {
    const monthData = analytice.find(
      (month) =>
        month.name === usr.month && usr?.year === moment().format("YYYY")
    );
    if (monthData) {
      monthData.pv += 1;
    }
  });

  return (
    <div className="w-full md:h-[450px] xl:h-[400px] col-span-9 gap-5 shadow-md md:pb-28 rounded-md bg-widget text-white">
      <div className="flex gap-5 p-5 justify-between">
        <div className="flex flex-col gap-2">
          <span className="font-bold text-2xl">
            Welcome back my honorable admin
          </span>
          <span className="">Take a look at the updated overview</span>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <FaCircle className="text-md rounded-full text-chart_1" />
            <span className=" text-white">User</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCircle className="text-md rounded-full text-chart_2" />
            <h1 className=" text-white">Seller</h1>
          </div>
        </div>
      </div>

      <ResponsiveContainer>
        <BarChart width={799} height={600} data={analytice}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" axisLine={false} />
          <YAxis axisLine={false} />
          <Tooltip
            contentStyle={{
              background: "var(--widget)",
              borderRadius: "10px",
            }}
          />
          <Bar name="User" dataKey="pv" fill="#fcff66" barSize={13} />
          <Bar name="Seller" dataKey="uv" fill="#047857" barSize={13} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

AnalyticGraph.propTypes = {
  user: PropTypes.array,
  seller: PropTypes.array,
};

export default AnalyticGraph;
