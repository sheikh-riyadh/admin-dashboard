import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import MessageForm from "../../components/Pages/Message/MessageForm";
import Button from "../../components/Common/Button";
import MessageTable from "../../components/Pages/Message/MessageTable";

const Message = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="p-5 flex flex-col gap-5">
        <div className="grid grid-cols-2">
          <span className="font-bold text-xl text-white">Message</span>
          <div className="flex items-center gap-3 justify-end">
            <Button
              onClick={() => setIsModalOpen((prev) => !prev)}
              className="w-36"
            >
              Send Message
            </Button>
          </div>
        </div>
        <div className="shadow-md rounded-md overflow-hidden">
          <MessageTable />
        </div>
      </div>
      {isModalOpen && (
        <Modal
          title={"Message"}
          className="w-[350px] xl:w-[500px]"
          onClose={setIsModalOpen}
          isOpen={isModalOpen}
        >
          <MessageForm setIsModalOpen={setIsModalOpen} />
        </Modal>
      )}
    </div>
  );
};

export default Message;
