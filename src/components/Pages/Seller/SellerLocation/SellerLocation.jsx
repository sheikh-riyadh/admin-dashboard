import PropTypes from "prop-types";
import { useGetSellerLocationQuery } from "../../../../store/service/location/locationApi";
import { FaFutbol } from "react-icons/fa";

const SellerLocation = ({ sellerId }) => {
  const { data, isLoading } = useGetSellerLocationQuery(sellerId);
  return (
    <div className="bg-white flex flex-col shadow-md border rounded-md overflow-hidden">
      <div className="p-5">
        <h2 className="capitalize font-medium text-2xl text-end ">
          Location Info
        </h2>
      </div>
      {!isLoading ? (
        <div className="w-full h-screen">
          <img src={data?.locationImage} className="w-full h-full" alt="location" />
        </div>
      ) : (
        <div className="flex flex-col gap-1 items-center justify-center h-44 bg-white">
          <FaFutbol className="animate-spin text-6xl" />
          <span>Loading...</span>
        </div>
      )}
    </div>
  );
};

SellerLocation.propTypes = {
  sellerId: PropTypes.string,
};
export default SellerLocation;
