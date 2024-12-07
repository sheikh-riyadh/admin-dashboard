import PropTypes from "prop-types";
import Input from "../../Common/Input";
const DeliveryInfo = ({ data }) => {
  return (
    <div className="bg-widget shadow-md rounded-b-md p-3">
      <div className="flex flex-col gap-5">
        <Input
          key="warranty"
          className="bg-[#1C2822] text-white rounded-sm"
          disabled
          label="Warranty"
          value={data?.warranty}
        />
        <div>
          <Input
            label="Cash on Delivery"
            disabled
            className="bg-[#1C2822] text-white rounded-sm"
            value={data?.cashOnDeliveryAvailable}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Input
            label="Cash on Delivery"
            disabled
            className="bg-[#1C2822] text-white rounded-sm"
            value={data?.returnProductAvailable}
          />

          {data?.returnProductAvailable === "yes" ? (
            <Input
              className="bg-[#1C2822] text-white rounded-sm"
              label="Return Product Within ( x ) Days"
              disabled
              value={data?.returnDays}
            />
          ) : null}
        </div>
        <div className="flex flex-col gap-3">
          <Input
            className="bg-[#1C2822] text-white rounded-sm"
            label="Free Delivery"
            disabled
            value={data?.freeDeliveryAvailable}
          />

          {data?.freeDeliveryAvailable === "no" ? (
            <Input
              className="bg-[#1C2822] text-white rounded-sm"
              label="Delivery Charge"
              disabled
              value={data?.deliveryCharge}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

DeliveryInfo.propTypes = {
  data: PropTypes.object,
};

export default DeliveryInfo;
