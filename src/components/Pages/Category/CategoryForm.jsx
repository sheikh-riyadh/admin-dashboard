import { useForm } from "react-hook-form";
import Input from "../../Common/Input";
import Button from "../../Common/Button";
import { ImSpinner10 } from "react-icons/im";
import { FaUpload } from "react-icons/fa";

const CategoryForm = () => {
  const isLoading = "";
  const { handleSubmit, register } = useForm();

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("");
    }
  };

  const handleStaff = () => {
    console.log("Hewll")
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleStaff)}>
        <Input
          {...register("categoyrName")}
          label={"Name"}
          placeholder={"Category Name"}
          required
        />
        <div
          className={`bg-sky-100 border border-dashed border-primary rounded-sm h-60 mt-5 flex justify-center items-center ${
            isLoading && "cursor-wait"
          }`}
        >
          {isLoading ? (
            <div className=" grid grid-cols-1 justify-center">
              {" "}
              <ImSpinner10 className="animate-spin text-3xl mx-auto" />
              <p className="mt-2">Uploading</p>
            </div>
          ) : (
            <label
              htmlFor="upload_image_input"
              className="flex justify-center items-center flex-col gap-2 text-gray-700 mb-3 size-full cursor-pointer"
            >
              <Input
              {...register("categoryImage")}
                type="file"
                accept={"image/*"}
                className="hidden"
                id="upload_image_input"
                onChange={handleImageChange}
                required
              />
              <FaUpload className="text-xl" />
              <p>click to upload</p>
            </label>
          )}
        </div>

        <Button className="mt-5">Save</Button>
      </form>
    </div>
  );
};

export default CategoryForm;
