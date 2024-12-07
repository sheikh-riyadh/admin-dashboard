import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Common/Button";
import Input from "../../components/Common/Input";
import TextArea from "../../components/Common/TextArea";
import ImageUpload from "../../components/Pages/Banner/ImageUpload";
import VideoUpload from "../../components/Pages/Banner/VideoUpload";
import SubmitButton from "../../components/Common/SubmitButton";
import {
  useCreateBannerMutation,
  useGetBannerQuery,
  useGetDefaultBannerQuery,
  useUpdateBannerMutation,
} from "../../store/service/banner/bannerApi";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { checkValues } from "../../utils/checkValues";
import { handleSetImage } from "../../store/features/banner/bannerSlice";
import { useGetAdmin } from "../../hooks/useGetAdmin";

const BannerInformation = () => {
  const [type, setType] = useState("image");

  const { register, handleSubmit, watch, setValue, reset } = useForm({
    defaultValues: {
      title: "",
      description: "",
      videoURL: "",
    },
  });

  const dispatch = useDispatch();
  const { images } = useSelector((state) => state.session.bannerReducer.value);

  const { admin } = useGetAdmin();
  const query = new URLSearchParams({
    type,
    email: admin?.email,
  }).toString();

  const { data: bannerData } = useGetBannerQuery(query);
  const { data: defaultBannerData } = useGetDefaultBannerQuery(admin?.email);
  const [createBanner, { isLoading }] = useCreateBannerMutation();
  const [updateBanner, { isLoading: updateLoading }] =
    useUpdateBannerMutation();

  const handleOnSubmit = async (data) => {
    let newData;

    if (type == "image" && !checkValues(images)) {
      toast.error("Banner image must be fillup", { id: "empty_error" });
      return;
    } else {
      if (type == "image") {
        delete data.videoURL;
        newData = { ...data, images, type, default: true };
      } else {
        newData = { ...data, type, default: true };
      }
    }

    if (!bannerData?._id) {
      const res = await createBanner({ data: newData, email: admin?.email });
      if (!res?.error) {
        toast.success("Banner created successfully", { id: "success" });
      } else {
        toast.error("Something went wrong", { id: "create_error" });
      }
    } else {
      if (type == "image") {
        delete data.videoURL;
        const res = await updateBanner({
          _id: bannerData?._id,
          data: { ...newData },
          email: admin?.email,
        });
        if (!res?.error) {
          toast.success("Updated banner successfully");
        } else {
          toast.error("Something went wrong", { id: "update_error" });
        }
      } else {
        const res = await updateBanner({
          _id: bannerData?._id,
          data: { ...newData },
        });
        if (!res?.error) {
          toast.success("Updated banner successfully");
        } else {
          toast.error("Something went wrong", { id: "update_error" });
        }
      }
    }
  };

  useEffect(() => {
    setType(defaultBannerData?.type);
  }, [defaultBannerData]);

  useEffect(() => {
    reset();
    for (const key in bannerData) {
      if (Object.prototype.hasOwnProperty.call(bannerData, key)) {
        if (key !== "_id") {
          setValue(key, bannerData[key]);
        }
      }
    }
    if (bannerData?.images) {
      dispatch(handleSetImage(bannerData?.images));
    }
  }, [bannerData, setValue, reset, dispatch]);

  return (
    <div className="py-5">
      <div>
        <span className="font-bold text-xl text-white p-5">Add Banner</span>
        <div className="bg-widget shadow-md p-5 m-5 rounded-md">
          <div className="mb-10">
            <p className=" text-xl font-semibold text-white">
              Which one you set as a cover?
            </p>
            <div className="flex items-center justify-start mt-4 gap-x-4">
              {["image", "video"].map((option) => (
                <Button
                  onClick={() => setType(option)}
                  key={option}
                  className="flex items-center gap-2 cursor-pointer bg-transparent border-none  w-24 text-white"
                >
                  <div
                    className={`w-4 h-4 rounded-full border duration-300 ${
                      type == option && "bg-accent"
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
              className={"bg-[#1C2822] text-white rounded-sm"}
            />
            <TextArea
              label={"Description"}
              placeholder="Enter description"
              required={true}
              {...register("description")}
              className={"bg-[#1C2822] text-white rounded-sm h-36"}
            />
            {type == "image" ? (
              <ImageUpload />
            ) : (
              <VideoUpload register={register} watch={watch} />
            )}

            <div className="flex flex-col items-end justify-end">
              <SubmitButton
                isLoading={isLoading || updateLoading}
                className="w-36"
              >
                {type == "image" ? "Save image" : "Save video"}
              </SubmitButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BannerInformation;
