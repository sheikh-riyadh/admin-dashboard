import PropTypes from "prop-types";
const SellerIdentity = ({ identityData }) => {
  return (
    <div className="bg-widget flex flex-col shadow-md rounded-md overflow-hidden p-5">
      <div className="p-5">
        <h2 className="capitalize font-medium text-2xl text-end text-white">
          Seller Identity Information
        </h2>
      </div>
      <div className="grid xl:grid-cols-2 gap-5">
        <div className="border p-5 rounded-md flex items-center gap-3 font-medium text-white">
          <span>Type : </span>
          <span>{identityData?.type}</span>
        </div>
        <div className="border p-5 rounded-md">
          <img
            className="w-44 h-44"
            src={identityData?.identity}
            alt="identity"
          />
        </div>
      </div>
    </div>
  );
};

SellerIdentity.propTypes = {
  identityData: PropTypes.shape({
    type: PropTypes.string,
    identity: PropTypes.string,
  }),
};

export default SellerIdentity;
