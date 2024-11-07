import { useState } from "react";
import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";
import DeleteModal from "../../Modal/DeleteModal";
import { useDeleteAdminMessageMutation } from "../../../store/service/adminMessage/adminMessageApi";

const DeleteMessage = ({ deleteId }) => {
  const [deleteMessage, { isLoading }] = useDeleteAdminMessageMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <span
        onClick={() => setIsModalOpen((prev) => !prev)}
        className="text-danger cursor-pointer border border-danger text-center p-2 rounded-full hover:bg-red-300 hover:text-white duration-300"
        title="Delete"
      >
        <FaTrash />
      </span>
      <div>
        <DeleteModal
          deleteId={deleteId}
          handleDeleteFunction={deleteMessage}
          isLoading={isLoading}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </>
  );
};

DeleteMessage.propTypes = {
  deleteId: PropTypes.string,
};

export default DeleteMessage;
