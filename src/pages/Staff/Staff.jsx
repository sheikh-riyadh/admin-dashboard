import { useState } from "react";
import Button from "../../components/Common/Button";
import Modal from "../../components/Modal/Modal";
import StaffForm from "../../components/Pages/Staff/StaffForm";
import StaffTable from "../../components/Pages/Staff/StaffTable";

const Staff = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="h-44 w-full bg-primary flex flex-col justify-center items-center"></div>
      <div className="p-5 flex flex-col gap-5 -mt-36">
        <div className="grid grid-cols-2">
          <span className="font-bold text-xl text-white">All staffs</span>
          <div className="flex items-center gap-3 justify-end">
            <Button
              onClick={() => setIsModalOpen((prev) => !prev)}
              className="w-36"
            >
              Add Staff
            </Button>
          </div>
        </div>
        <div className="shadow-md border rounded-md overflow-hidden">
          <StaffTable />
        </div>
      </div>
      {isModalOpen && (
        <Modal
          title={"Add staff"}
          className="w-[500px]"
          onClose={setIsModalOpen}
          isOpen={isModalOpen}
        >
          <StaffForm setIsModalOpen={setIsModalOpen} />
        </Modal>
      )}
    </div>
  );
};

export default Staff;
