import PropTypes from "prop-types";
import SellerReviewTable from "./SellerReviewTable";

const SellerReview = ({ sellerId }) => {
  return (
    <div className="bg-white flex flex-col shadow-md border rounded-md overflow-hidden">
      <div className="p-5">
        <h2 className="capitalize font-medium text-2xl text-end ">
          Review Info
        </h2>
      </div>
      <div>
        <SellerReviewTable sellerId={sellerId} />
      </div>
    </div>
  );
};

SellerReview.propTypes = {
  sellerId: PropTypes.string,
};

export default SellerReview;
