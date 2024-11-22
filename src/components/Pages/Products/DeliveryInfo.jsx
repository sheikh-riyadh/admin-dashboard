import PropTypes from "prop-types";
import Input from "../../Common/Input";
const DeliveryInfo = ({ data }) => {
  return (
    <div className="bg-white border shadow-md rounded-b-md p-3">
      <div className="flex flex-col gap-5">
        <Input
          key="warranty"
          className="bg-white border rounded-full px-5"
          disabled
          label="Warranty"
          value={data?.warranty}
        />
        <div>
          <Input
            label="Cash on Delivery"
            disabled
            className="bg-white border rounded-full px-5"
            value={data?.cashOnDeliveryAvailable}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Input
            label="Cash on Delivery"
            disabled
            className="bg-white border rounded-full px-5"
            value={data?.returnProductAvailable}
          />

          {data?.returnProductAvailable === "yes" ? (
            <Input
              className="bg-white border rounded-full px-5"
              label="Return Product Within ( x ) Days"
              disabled
              value={data?.returnDays}
            />
          ) : null}
        </div>
        <div className="flex flex-col gap-3">
          <Input
            className="bg-white border rounded-full px-5"
            label="Free Delivery"
            disabled
            value={data?.freeDeliveryAvailable}
          />

          {data?.freeDeliveryAvailable === "no" ? (
            <Input
              className="bg-white border rounded-full px-5"
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
