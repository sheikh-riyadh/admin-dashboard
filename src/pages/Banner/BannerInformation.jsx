import { useState } from "react";
import Button from "../../components/Common/Button";
import Input from "../../components/Common/Input";
import TextArea from "../../components/Common/TextArea";
import { useForm } from "react-hook-form";
import ImageUpload from "../../components/Pages/Banner/ImageUpload";
import LiveVideoUpload from "../../components/Pages/Banner/LiveVideoUpload";
import { useSelector } from "react-redux";
import { checkValues } from "../../utils/checkValues";
import toast from "react-hot-toast";
import { useCreateBannerMutation } from "../../store/service/banner/bannerApi";
import SubmitButton from "../../components/Common/SubmitButton";

const BannerInformation = () => {
  const [coverType, setCoverType] = useState("image");
  const { images } = useSelector((state) => state.session.bannerReducer.value);
  const { register, handleSubmit, watch } = useForm();

  const [createBanner, { isLoading }] = useCreateBannerMutation();

  const handleOnSubmit = async (data) => {
    if (checkValues(images)) {
      let newData;

      if (coverType === "image") {
        newData = { ...data, images, image: true };
      } else {
        newData = { ...data, live: true };
      }
      const result = await createBanner(newData);
      if (!result?.error) {
        toast.success(result.data?.message, { id: "banner_success" });
      } else {
        toast.error(result?.error?.data?.message, { id: "banner_error" });
      }
    } else {
      toast.error("Banner image must filup", { id: "banner_error" });
    }
  };

  return (
    <div className="pb-8">
      <div className="h-44 w-full bg-primary flex flex-col justify-center items-center"></div>
      <div className="-mt-32">
        <span className="font-bold text-xl text-white p-5">Add Banner</span>
        <div className="bg-white border shadow-md p-5 m-5 rounded-md">
          <div className="mb-10">
            <p className=" text-xl font-semibold text-blue">
              Which one you set as a cover?
            </p>
            <div className="flex items-center justify-start mt-4 gap-x-4">
              {["image", "live"].map((option) => (
                <Button
                  onClick={() => setCoverType(option)}
                  key={option}
                  className="flex items-center gap-2 cursor-pointer bg-transparent border-none  text-black w-20"
                >
                  <div
                    className={`w-4 h-4 rounded-full border duration-300 ${
                      coverType == option && "bg-secondary"
                    }`}
                  ></div>
                  <span className="capitalize">{option}</span>
                </Button>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit(handleOnSubmit)}
            className="flex flex-col gap-3"
          >
            <Input
              label={"Title"}
              required={true}
              placeholder="Enter title"
              {...register("title")}
              className={"bg-transparent border"}
            />
            <TextArea
              label={"Description"}
              placeholder="Enter description"
              required={true}
              {...register("description")}
              className={"bg-transparent border h-36"}
            />
            {coverType == "image" ? (
              <ImageUpload />
            ) : (
              <LiveVideoUpload register={register} watch={watch} />
            )}

            <div className="flex flex-col items-end justify-end">
              <SubmitButton isLoading={isLoading} className="w-36">
                {coverType == "image" ? "Save image" : "Save live"}
              </SubmitButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BannerInformation;
