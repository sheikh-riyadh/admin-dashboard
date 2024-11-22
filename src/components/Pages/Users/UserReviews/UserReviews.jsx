import UserReviewTable from "./UserReviewTable";
import PropTypes from "prop-types";
const UserReviews = ({ userId }) => {
  return (
    <div className="bg-white flex flex-col shadow-md border rounded-md overflow-hidden">
      <div className="p-5 border-b">
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
