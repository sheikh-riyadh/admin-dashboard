import PropTypes from "prop-types";
import CommonComponent from "../../../Common/CommonComponent";
import moment from "moment";

const BusinessInfo = ({ data }) => {
  const seller = data;
  return (
    <div className="shadow-md rounded-md overflow-hidden border">
      <div className="flex justify-between bg-white p-5 border-b">
        <div>
          <h2 className="capitalize text-2xl font-semibold text-gray-800 ">
            Business Info
          </h2>
        </div>
      </div>
      <div className="p-5 bg-white">
        <div className="flex flex-col gap-5">
          <div className="w-full rounded-md grid grid-cols-3 gap-5 items-center">
            <CommonComponent name={"Business Name"} value={seller?.businessName} />
            <CommonComponent name={"Email"} value={seller?.businessEmail} />
            <CommonComponent name={"Number"} value={seller?.businessNumber} />
          </div>
          <div className="w-full rounded-md grid grid-cols-3 gap-5 items-center">
            <CommonComponent
              name={"Country"}
              value={seller?.country}
            />
            <CommonComponent
              name={"State"}
              value={seller?.state}
            />

            <CommonComponent name={"City"} value={seller?.city} />
          </div>
          <div className="w-full rounded-md grid grid-cols-3 gap-5 items-center overflow-hidden">
            <CommonComponent
              name={"Zipcode"}
              value={seller?.zipCode}
            />
            <CommonComponent
              name={"Address (Full)"}
              value={seller?.fullAddress}
            />

            <CommonComponent name={"City"} value={seller?.city} />
          </div>
          <div className="w-full rounded-md grid grid-cols-3 gap-5 items-center">
            <CommonComponent
              name={"Phone Verified"}
              value={seller?.phoneNumberVerified ? "Verified" : "Not Verified"}
            />
            <CommonComponent
              name={"Email Verified"}
              value={seller?.emailVerified ? "Verified" : "Not Verified"}
            />

            <CommonComponent name={"CreatedAt"} value={moment(data?.createdAt).format('lll')} />
          </div>
        </div>
      </div>
    </div>
  );
};

BusinessInfo.propTypes = {
  data: PropTypes.object,
};
export default BusinessInfo;
