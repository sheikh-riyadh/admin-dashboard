import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import Modal from "../../Modal/Modal";
import MessageForm from "./MessageForm";
import PropTypes from "prop-types";
const UpdateMessage = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <span
        onClick={() => {
          setIsModalOpen((prev) => !prev);
        }}
        className="text-stech cursor-pointer border border-stech text-center p-2 rounded-full"
        title="Update"
      >
        <FaEdit />
      </span>
      <div>
        {isModalOpen && (
          <Modal
            title={"Update message"}
            className="w-[500px]"
            onClose={setIsModalOpen}
            isOpen={isModalOpen}
          >
            <MessageForm setIsModalOpen={setIsModalOpen} updateMessage={item} />
          </Modal>
        )}
      </div>
    </>
  );
};

UpdateMessage.propTypes = {
  item: PropTypes.object,
};

export default UpdateMessage;
