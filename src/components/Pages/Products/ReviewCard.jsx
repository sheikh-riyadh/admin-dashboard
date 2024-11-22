import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import moment from "moment";

const ReviewCard = ({ data }) => {
  return (
    <div className="flex flex-col bg-white p-5 rounded-md border">
      <div>
        <div className="flex items-center gap-5">
          <img
            className="w-12 h-12 rounded-full"
            src={data?.userInfo?.photo}
            alt="user_image"
          />
          <span className="font-bold">
            {data?.userInfo?.fName + "" + data?.userInfo?.lName}{" "}
          </span>
        </div>
        <div className="flex flex-col gap-4 mt-3">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1 font-bold">
              {[...Array(data?.rating?.rating).keys()].map((key) => (
                <FaStar className="text-primary" key={key} />
              ))}
              <span>{data?.rating?.rating}</span>
            </div>
            <span className="text-sm font-medium">
              {`| ${moment(data?.createdAt).fromNow()}`}
            </span>
          </div>
          <hr />
          <div className="flex flex-col gap-3">
            <p className="text font-medium">{data?.reviewMessage}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  data: PropTypes.object,
};
export default ReviewCard;
