import PropTypes from "prop-types";
import { FaQuestionCircle } from "react-icons/fa";
import { useDeleteSellerMutation } from "../../../../store/service/seller/sellerApi";
import Button from "../../../Common/Button";
import SubmitButton from "../../../Common/SubmitButton";
import toast from "react-hot-toast";

const DeleteSeller = ({ setIsModalOpen, sellerId }) => {
  const [deleteSeller, { isLoading: deleteLoading }] =
    useDeleteSellerMutation();

  const handleSellerDelete = async () => {
    try {
      const result = await deleteSeller(sellerId);
      if(!result?.error){
        setIsModalOpen((prev) => !prev);
      }
    } catch (error) {
      toast.error("Something went wrong 😓", { id: `${error}` });
    }
  };
  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full">
      <div className="flex flex-col gap-5 items-center justify-center">
        <FaQuestionCircle className="text-7xl text-orange-400" />
        <h1 className="text-lg text-center font-bold">
          Are your sure you want to delete?
        </h1>
      </div>

      <div className="flex items-center justify-center w-full gap-2">
        <Button
          className="bg-danger"
          onClick={() => setIsModalOpen((prev) => !prev)}
        >
          Cancel
        </Button>
        <SubmitButton
          onClick={handleSellerDelete}
          isLoading={deleteLoading}
          loadingText="Deleting..."
          className="bg-stech"
        >
          Sure
        </SubmitButton>
      </div>
    </div>
  );
};

DeleteSeller.propTypes = {
  setIsModalOpen: PropTypes.func,
  sellerId: PropTypes.string,
};

export default DeleteSeller;
