import PropTypes from "prop-types";
import { FaUserCircle } from "react-icons/fa";
const UserImage = ({ data }) => {
  return (
    <div>
      <div className="p-7 w-full h-full bg-white border shadow-md rounded-md flex items-center justify-center">
        {data ? (
          <img
            className="h-72 w-72 ring rounded-full object-contain mx-auto border"
            src=""
            alt="user_photo"
          />
        ) : (
          <FaUserCircle className="w-44 h-44 rounded-full border p-5 border-stech" />
        )}
      </div>
    </div>
  );
};

UserImage.propTypes = {
  data: PropTypes.object,
};
export default UserImage;
