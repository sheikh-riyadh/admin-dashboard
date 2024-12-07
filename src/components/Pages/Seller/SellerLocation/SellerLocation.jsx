import PropTypes from "prop-types";
import { useGetSellerLocationQuery } from "../../../../store/service/location/locationApi";
import { FaFutbol } from "react-icons/fa";
import { useGetAdmin } from "../../../../hooks/useGetAdmin";

const SellerLocation = ({ sellerId }) => {
  const { admin } = useGetAdmin();
  const query = new URLSearchParams({
    sellerId,
    email: admin?.email,
  }).toString();

  const { data, isLoading } = useGetSellerLocationQuery(query);
  return (
    <div className="bg-widget flex flex-col shadow-md rounded-md overflow-hidden p-5">
      <div className="p-5">
        <h2 className="capitalize font-medium text-2xl text-end text-white">
          Location Info
        </h2>
      </div>
      {!isLoading ? (
        <div className="w-full h-screen">
          <img
            src={data?.locationImage}
            className="w-full h-full rounded-md"
            alt="location"
          />
        </div>
      ) : (
        <div className="flex flex-col gap-1 items-center justify-center h-44 bg-widget">
          <FaFutbol className="animate-spin text-6xl text-white" />
          <span className="text-accent">Loading...</span>
        </div>
      )}
    </div>
  );
};

SellerLocation.propTypes = {
  sellerId: PropTypes.string,
};
export default SellerLocation;
