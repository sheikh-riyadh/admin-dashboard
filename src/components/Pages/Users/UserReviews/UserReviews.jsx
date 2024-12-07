import UserReviewTable from "./UserReviewTable";
import PropTypes from "prop-types";
const UserReviews = ({ userId }) => {
  return (
    <div className="bg-widget flex flex-col shadow-md rounded-md overflow-hidden">
      <div className="p-5 border-b border-[#171f12] text-white">
        <h2 className="capitalize font-medium text-2xl text-end ">
          Review information
        </h2>
      </div>
      <div>
        <UserReviewTable userId={userId} />
      </div>
    </div>
  );
};

UserReviews.propTypes = {
  userId: PropTypes.string,
};
export default UserReviews;
