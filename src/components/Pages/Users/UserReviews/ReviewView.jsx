import PropTypes from "prop-types";
import { useState } from "react";
import { FaBinoculars } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import Modal from "../../../Modal/Modal";

const ReviewView = ({ item }) => {
  const [isView, setIsView] = useState(false);

  return (
    <>
      <div className="flex items-center gap-2">
        <span
          title="Review Overview"
          onClick={() => setIsView((prev) => !prev)}
          className="text-chart_2 cursor-pointer border border-chart_2 text-center p-2 rounded-full"
        >
          <FaBinoculars />
        </span>
      </div>

      {isView && (
        <Modal
          isOpen={isView}
          onClose={setIsView}
          title={"Review overview"}
          key={"order_manage"}
          className={"w-[350px] h-[300px] xl:w-[400px]"}
        >
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-1">
              {[...Array(item?.rating?.rating).keys()]?.map((rating) => (
                <FaStar key={rating} className="text-accent" />
              ))}
            </div>

            <div className="h-32 rounded-md p-3 bg-widget">
              <span>{item?.reviewMessage}</span>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

ReviewView.propTypes = {
  item: PropTypes.object,
};
export default ReviewView;
