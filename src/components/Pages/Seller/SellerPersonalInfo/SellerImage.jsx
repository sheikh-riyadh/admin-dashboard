import PropTypes from "prop-types";
import { FaUserCircle } from "react-icons/fa";
const SellerImage = ({ data }) => {
  return (
    <div className="p-7 w-full h-full bg-white border shadow-md rounded-md flex items-center justify-center">
      {data ? (
        <img
          className="h-44 w-44 border rounded-full"
          src={data}
          alt="user_photo"
        />
      ) : (
        <div className="h-full w-full flex flex-col items-center justify-center">
          <FaUserCircle className="w-44 h-44 rounded-full border p-5 border-stech" />
        </div>
      )}
    </div>
  );
};

SellerImage.propTypes = {
  data: PropTypes.string,
};
export default SellerImage;
