import PropTypes from "prop-types";
import CommonComponent from "../../../Common/CommonComponent";
import moment from "moment";

const BusinessInfo = ({ data }) => {
  return (
    <div className="shadow-md rounded-md overflow-hidden">
      <div className="flex justify-between bg-widget p-5 border-b border-[#171f12]">
        <div>
          <h2 className="capitalize text-2xl font-semibold text-white ">
            Business Info
          </h2>
        </div>
      </div>

      <div className="bg-widget p-10 border-b border-[#171f12]">
        <div className="rounded-full w-32 h-32 border flex flex-col border-stech">
          <img
            className="rounded-full w-32 h-32"
            src={data?.logo}
            alt="logo"
          />
          <span className="text-center font-medium text-white mt-1">Logo</span>
        </div>
      </div>

      <div className="p-5 bg-widget">
        <div className="flex flex-col gap-5">
          <div className="w-full rounded-md grid xl:grid-cols-3 gap-5 items-center">
            <CommonComponent
              name={"Business Name"}
              value={data?.businessName}
            />
            <CommonComponent name={"Email"} value={data?.businessEmail} />
            <CommonComponent name={"Number"} value={data?.businessNumber} />
          </div>
          <div className="w-full rounded-md grid xl:grid-cols-3 gap-5 items-center">
            <CommonComponent name={"Country"} value={data?.country} />
            <CommonComponent name={"State"} value={data?.state} />

            <CommonComponent name={"City"} value={data?.city} />
          </div>
          <div className="w-full rounded-md grid xl:grid-cols-3 gap-5 items-center overflow-hidden">
            <CommonComponent name={"Zipcode"} value={data?.zipCode} />
            <CommonComponent
              name={"Address (Full)"}
              value={data?.fullAddress}
            />

            <CommonComponent name={"City"} value={data?.city} />
          </div>
          <div className="w-full rounded-md grid xl:grid-cols-3 gap-5 items-center">
            <CommonComponent
              name={"Phone Verified"}
              value={data?.phoneNumberVerified ? "Verified" : "Not Verified"}
            />
            <CommonComponent
              name={"Email Verified"}
              value={data?.emailVerified ? "Verified" : "Not Verified"}
            />

            <CommonComponent
              name={"CreatedAt"}
              value={moment(data?.createdAt).format("lll")}
            />
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
