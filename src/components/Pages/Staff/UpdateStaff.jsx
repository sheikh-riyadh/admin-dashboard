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
        className="text-stech cursor-pointer border border-stech text-center p-2 rounded-full"
        title="Update"
      >
        <FaEdit />
      </span>
      <div>
        {isModalOpen && (
          <Modal
            title={"Add staff"}
            className="w-[500px]"
            onClose={setIsModalOpen}
            isOpen={isModalOpen}
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
