import { useState } from "react";
import UsersTable from "../../components/Pages/Users/UsersTable/UsersTable";
import Modal from "../../components/Modal/Modal";
import MessageForm from "../../components/Pages/Message/MessageForm";
import Button from "../../components/Common/Button";

const Message = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="h-44 w-full bg-primary flex flex-col justify-center items-center"></div>
      <div className="p-5 flex flex-col gap-5 -mt-36">
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
        <div className="shadow-md border rounded-md overflow-hidden">
          <UsersTable />
        </div>
      </div>
      {isModalOpen && (
        <Modal
          title={"Message"}
          className="w-[500px]"
          onClose={setIsModalOpen}
          isOpen={isModalOpen}
        >
          <MessageForm />
        </Modal>
      )}
    </div>
  );
};

export default Message;
