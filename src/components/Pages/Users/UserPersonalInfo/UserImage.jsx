import PropTypes from "prop-types";
import { FaUserCircle } from "react-icons/fa";
const UserImage = ({ data }) => {
  return (
    <div className="p-7 w-full h-full bg-widget shadow-md rounded-md flex items-center justify-center">
      {data ? (
        <div className="h-44 w-44">
          <img
            className="w-full h-full rounded-full border border-accent"
            src={data}
            alt="user_photo"
          />
        </div>
      ) : (
        <div className="h-full w-full flex flex-col justify-center items-center">
          <FaUserCircle className="w-44 h-44 rounded-full border p-5 border-accent text-white" />
        </div>
      )}
    </div>
  );
};

UserImage.propTypes = {
  data: PropTypes.string,
};
export default UserImage;
