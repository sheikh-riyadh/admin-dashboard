import { useState } from "react";
import PropTypes from "prop-types";
import { FaClipboard, FaFutbol } from "react-icons/fa";
import { useProductReviewQuery } from "../../../store/service/review/reviewApi";
import ReviewCard from "./ReviewCard";
import { useGetAdmin } from "../../../hooks/useGetAdmin";
import { useSearchDelay } from "../../../hooks/useSearchDelay";
import Input from "../../Common/Input";
import Button from "../../Common/Button";
import Pagination from "../../Common/Pagination";
const Reviews = ({ productId }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(10);

  const { handleChange, searchValue } = useSearchDelay();
  const { admin } = useGetAdmin();

  const query = new URLSearchParams({
    productId,
    email: admin?.email,
    page: currentPage,
    limit,
    search: searchValue,
  }).toString();

  const { data: reviewData, isLoading } = useProductReviewQuery(query);
  const pages = Math.ceil(Math.abs(reviewData?.total ?? 0) / parseInt(limit));

  return (
    <>
      {!isLoading ? (
        <div className="overflow-hidden bg-widget shadow-md rounded-b-md">
          {reviewData?.data?.length ? (
            <div className="flex flex-col gap-5 p-5">
              <div className="flex items-center gap-3 justify-end">
                <Input
                  onChange={handleChange}
                  placeholder="Search..."
                  className="bg-[#1c2822] w-full text-white"
                />
                <Button className="w-36">Find Review</Button>
              </div>
              {reviewData?.data?.map((review) => (
                <ReviewCard key={review?._id} data={review} />
              ))}
              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                setLimit={setLimit}
                pages={pages}
                key={"product_review_pagination"}
              />
            </div>
          ) : (
            <div className="flex gap-5 flex-col items-center justify-center w-full h-80 bg-widget">
              <FaClipboard className="text-8xl text-white" />
              <span className="font-medium text-xl text-accent capitalize">
                No data found
              </span>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-1 items-center justify-center h-screen bg-widget">
          <FaFutbol className="animate-spin text-6xl text-white" />
          <span className="text-accent">Loading...</span>
        </div>
      )}
    </>
  );
};

Reviews.propTypes = {
  productId: PropTypes.string,
};

export default Reviews;
