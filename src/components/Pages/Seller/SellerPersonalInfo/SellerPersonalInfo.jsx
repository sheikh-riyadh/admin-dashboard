import PropTypes from "prop-types";
import SellerLeftSide from "./SellerLeftSide";
import SellerImage from "./SellerImage";
import BannerInfo from "../SellerBannerInfo/BannerInfo";
import BusinessInfo from "../BusinessInfo/BusinessInfo";
import SellerOrders from "../SellerOrders/SellerOrders";
import SellerIdentity from "../SellerIdentity/SellerIdentity";
import SellerProducts from "../SellerProducts/SellerProducts";
import SellerReview from "../SellerReviewInfo/SellerReview";
import SellerLocation from "../SellerLocation/SellerLocation";
const SellerPersonalInfo = ({ data }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-9">
          <SellerLeftSide data={data} />
        </div>
        <div className="col-span-3 h-full">
          <SellerImage data={data} />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <BusinessInfo/>
        <BannerInfo/>
        <SellerOrders/>
        <SellerIdentity/>
        <SellerProducts/>
        <SellerReview/>
        <SellerLocation/>
      </div>
    </div>
  );
};

SellerPersonalInfo.propTypes = {
  data: PropTypes.object,
};

export default SellerPersonalInfo;
