import { useState } from "react";
import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";
import { useDeleteStaffMutation } from "../../../store/service/staff/staffApi";
import DeleteModal from "../../Modal/DeleteModal";
import { useGetAdmin } from "../../../hooks/useGetAdmin";

const DeleteStaff = ({ deleteId }) => {
  const { admin } = useGetAdmin();
  const query = new URLSearchParams({
    id: deleteId,
    email: admin?.email,
  }).toString();

  const [deleteStaff, { isLoading }] = useDeleteStaffMutation();
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
          deleteId={query}
          handleDeleteFunction={deleteStaff}
          isLoading={isLoading}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </>
  );
};

DeleteStaff.propTypes = {
  deleteId: PropTypes.string,
};

export default DeleteStaff;
