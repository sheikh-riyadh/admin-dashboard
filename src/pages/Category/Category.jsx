import { useState } from "react";
import Button from "../../components/Common/Button";
import Modal from "../../components/Modal/Modal";
import CategoryForm from "../../components/Pages/Category/CategoryForm";
import CategoriesTable from "../../components/Pages/Category/CategoriesTable";
import Input from "../../components/Common/Input";
import { useSearchDelay } from "../../hooks/useSearchDelay";

const Category = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { handleChange, searchValue } = useSearchDelay();

  return (
    <div>
      <div className="p-5 flex flex-col gap-5">
        <div className="grid xl:grid-cols-2">
          <span className="font-bold text-xl text-white">{`Categories`}</span>
          <div className="flex items-center gap-3 justify-end mt-5 xl:mt-0">
            <Input placeholder="Search..." onChange={handleChange} />
            <Button
              onClick={() => setIsModalOpen((prev) => !prev)}
              className="w-36"
            >
              Add Category
            </Button>
          </div>
        </div>
        <div className="shadow-md rounded-md overflow-hidden">
          <CategoriesTable search={searchValue} />
        </div>
      </div>
      {isModalOpen && (
        <Modal
          title={"Add Category"}
          className="w-[350px] xl:w-[500px]"
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
