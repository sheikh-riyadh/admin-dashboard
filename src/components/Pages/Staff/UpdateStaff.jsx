import { useState } from "react";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";
import Modal from "../../Modal/Modal";
import StaffForm from "./StaffForm";

const UpdateStaff = ({ item }) => {
  const [updateData, setUpdateData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <span
        onClick={() => {
          setUpdateData(item), setIsModalOpen((prev) => !prev);
        }}
        className="text-chart_2 cursor-pointer border border-chart_2 text-center p-2 rounded-full"
        title="Update"
      >
        <FaEdit />
      </span>
      <div>
        {isModalOpen && (
          <Modal
            title={"Add staff"}
            className="w-[350px] xl:w-[500px]"
            onClose={setIsModalOpen}
            isOpen={isModalOpen}
            isOutsideClick={false}
          >
            <StaffForm
              setIsModalOpen={setIsModalOpen}
              updateData={updateData}
            />
          </Modal>
        )}
      </div>
    </>
  );
};

UpdateStaff.propTypes = {
  item: PropTypes.object,
};

export default UpdateStaff;
