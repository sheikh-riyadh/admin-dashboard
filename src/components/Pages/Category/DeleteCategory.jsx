import { useState } from "react";
import { useDeleteCategoryMutation } from "../../../store/service/category/categoryApi";
import { FaTrash } from "react-icons/fa";
import DeleteModal from "../../Modal/DeleteModal";
import PropTypes from "prop-types";
import { useGetAdmin } from "../../../hooks/useGetAdmin";

const DeleteCategory = ({ deleteId }) => {
  const { admin } = useGetAdmin();

  const query = new URLSearchParams({
    id: deleteId,
    email: admin?.email,
  }).toString();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteCategory, { isLoading }] = useDeleteCategoryMutation();

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
          handleDeleteFunction={deleteCategory}
          isLoading={isLoading}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </>
  );
};

DeleteCategory.propTypes = {
  deleteId: PropTypes.string,
};

export default DeleteCategory;
