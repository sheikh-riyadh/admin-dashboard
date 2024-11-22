import PropTypes from "prop-types";
import { FaClipboard, FaFutbol } from "react-icons/fa";
import { useProductReviewQuery } from "../../../store/service/review/reviewApi";
import ReviewCard from "./ReviewCard";
const Reviews = ({ data }) => {
  const { data: reviewData, isLoading } = useProductReviewQuery(data?._id);

  return (
    <>
      {!isLoading ? (
        <div className="bg-white border rounded-md overflow-hidden shadow-md">
          {reviewData?.length ? (
            <div>
              {reviewData?.map((review) => (
                <ReviewCard key={review?._id} data={review} />
              ))}
            </div>
          ) : (
            <div className="flex gap-5 flex-col items-center justify-center w-full h-80 bg-white">
              <FaClipboard className="text-8xl text-slate" />
              <span className="font-medium text-xl text-danger capitalize">
                No data found
              </span>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-1 items-center justify-center h-screen bg-white">
          <FaFutbol className="animate-spin text-6xl" />
          <span>Loading...</span>
        </div>
      )}
    </>
  );
};

Reviews.propTypes = {
  data: PropTypes.object,
};

export default Reviews;
