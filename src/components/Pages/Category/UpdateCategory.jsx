import PropTypes from "prop-types";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import Modal from "../../Modal/Modal";
import CategoryForm from "./CategoryForm";
const UpdateCategory = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState();
  return (
    <>
      <span
        onClick={() => {
          setIsModalOpen((prev) => !prev);
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
            <CategoryForm setIsModalOpen={setIsModalOpen} updateData={item} />
          </Modal>
        )}
      </div>
    </>
  );
};

UpdateCategory.propTypes = {
  item: PropTypes.object,
};
export default UpdateCategory;
