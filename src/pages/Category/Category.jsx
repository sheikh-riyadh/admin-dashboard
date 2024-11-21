import { useState } from "react";
import Button from "../../components/Common/Button";
import Modal from "../../components/Modal/Modal";
import CategoryForm from "../../components/Pages/Category/CategoryForm";
import CategoriesTable from "../../components/Pages/Category/CategoriesTable";

const Category = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="h-44 w-full bg-primary flex flex-col justify-center items-center"></div>
      <div className="p-5 flex flex-col gap-5 -mt-36">
        <div className="grid grid-cols-2">
          <span className="font-bold text-xl text-white">{`Categories`}</span>
          <div className="flex items-center gap-3 justify-end">
            <Button
              onClick={() => setIsModalOpen((prev) => !prev)}
              className="w-36"
            >
              Add Category
            </Button>
          </div>
        </div>
        <div className="shadow-md border rounded-md overflow-hidden">
          <CategoriesTable />
        </div>
      </div>
      {isModalOpen && (
        <Modal
          title={"Add Category"}
          className="w-[500px]"
          onClose={setIsModalOpen}
          isOpen={isModalOpen}
        >
          <CategoryForm setIsModalOpen={setIsModalOpen} />
        </Modal>
      )}
    </div>
  );
};

export default Category;
