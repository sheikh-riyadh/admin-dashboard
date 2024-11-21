import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../Common/Input";
import { FaUpload } from "react-icons/fa";
import toast from "react-hot-toast";
import { useUploadImageMutation } from "../../../store/service/imageUpload/imageUploadApi";
import { ImSpinner9 } from "react-icons/im";
import SubmitButton from "../../Common/SubmitButton";
import {
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
} from "../../../store/service/category/categoryApi";
import PropTypes from "prop-types";

const CategoryForm = ({ setIsModalOpen, updateData }) => {
  const [image, setImage] = useState();
  const [uploadImage, { isLoading }] = useUploadImageMutation();

  const [createCategory, { isLoading: categoryCreateLoading }] =
    useCreateCategoryMutation();
  const [updateCategory, { isLoading: updateLoading }] =
    useUpdateCategoryMutation();

  const { handleSubmit, register, setValue } = useForm();

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await uploadImage(formData).unwrap();
      if (response?.data?.display_url) {
        setImage(response.data?.display_url);
      } else {
        toast.error("Something went wrong 😓", { id: "upload_error" });
      }
    } catch (error) {
      toast.error("Something went wrong 😓", { id: error });
    }
  };

  const handleCategory = async (data) => {
    if (!image) {
      toast.error("Category image is required", { id: "category_error" });
      return;
    }
    if (!updateData?._id) {
      try {
        const res = await createCategory({ ...data, image });
        if (!res?.error) {
          toast.success("Category created successfully", { id: "success" });
          setIsModalOpen(false);
        } else {
          toast.error(res?.error?.data.message, {
            id: "create_category_error",
          });
        }
      } catch (error) {
        toast.error("Something went wrong 😓", { id: error });
      }
    } else {
      try {
        const res = await updateCategory({
          _id: updateData?._id,
          data: { ...data, image },
        });
        if (!res?.error) {
          toast.success("Updated category successfully", { id: "success" });
          setIsModalOpen(false);
        } else {
          toast.error(res?.error?.data.message, {
            id: "update_category_error",
          });
        }
      } catch (error) {
        toast.error("Something went wrong 😓", { id: error });
      }
    }
  };

  useEffect(() => {
    if (updateData?._id) {
      setValue("category", updateData?.category);
      setImage(updateData?.image);
    }
  }, [setValue, updateData]);

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleCategory)}
        className="flex flex-col gap-4"
      >
        <Input
          {...register("category")}
          label={"Name"}
          placeholder={"Category Name"}
          required
        />
        <div className={"h-44 w-full"}>
          <label
            htmlFor="location"
            className="rounded-full inline-block my-1 w-full"
          >
            <div
              className={`h-44 w-full border-2 border-stech border-dotted rounded-md relative flex flex-col items-center justify-center cursor-pointer overflow-hidden ${
                isLoading && "cursor-wait"
              }`}
            >
              {image ? (
                <img
                  src={image}
                  alt="location_image"
                  className="h-full w-full object-fill rounded-md"
                />
              ) : (
                <p className="flex flex-col gap-1 items-center justify-center font-medium text-stech w-full h-full bg-sky-100">
                  <FaUpload />
                  <span>Click to upload</span>
                </p>
              )}

              {isLoading && (
                <div className="absolute h-full w-full rounded bg-white flex items-center justify-center">
                  <ImSpinner9 className="animate-spin text-stech text-4xl" />
                </div>
              )}
            </div>
          </label>
          <Input
            {...register("image")}
            onChange={(e) => handleImageUpload(e)}
            className="hidden"
            id="location"
            type="file"
            accept="image/*"
            disabled={isLoading}
          />
        </div>

        <SubmitButton
          disabled={isLoading}
          isLoading={categoryCreateLoading || updateLoading}
        >
          Save
        </SubmitButton>
      </form>
    </div>
  );
};

CategoryForm.propTypes = {
  setIsModalOpen: PropTypes.func,
  updateData: PropTypes.object,
};

export default CategoryForm;
