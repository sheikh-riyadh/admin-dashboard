import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "../../Common/Input";
import TextArea from "../../Common/TextArea";
import SubmitButton from "../../Common/SubmitButton";
import PropTypes from "prop-types";
import {
  useCreateAdminMessageMutation,
  useUpdateAdminMessageMutation,
} from "../../../store/service/adminMessage/adminMessageApi";
import toast from "react-hot-toast";

const MessageForm = ({ updateMessage, setIsModalOpen }) => {
  const { handleSubmit, register, setValue } = useForm();

  const [updateAdminMessage, { isLoading: updateLoading }] =
    useUpdateAdminMessageMutation();
  const [createAdminMessage, { isLoading: createLoading }] =
    useCreateAdminMessageMutation();

  const handleMessage = async (data) => {
    if (updateMessage?._id) {
      try {
        const res = await updateAdminMessage({
          _id: updateMessage?._id,
          data: data,
        });
        if (!res?.error) {
          toast.success("Updated message successfully");
          setIsModalOpen(false);
        } else {
          toast.error(res?.error?.data?.message, { id: "error_message" });
        }
      } catch (error) {
        toast.error("Something went wrong 😓", { id: error });
      }
    } else {
      try {
        const res = await createAdminMessage(data);
        if (!res?.error) {
          toast.success("Created message successfully");
          setIsModalOpen(false);
        } else {
          toast.error(res?.error?.data?.message, { id: "error_message" });
        }
      } catch (error) {
        toast.error("Something went wrong 😓", { id: error });
      }
    }
  };

  useEffect(() => {
    if (updateMessage?._id) {
      for (const key in updateMessage) {
        if (Object.prototype.hasOwnProperty.call(updateMessage, key)) {
          if (key !== "_id") {
            setValue(key, updateMessage[key]);
          }
        }
      }
    }
  }, [updateMessage, setValue]);

  return (
    <div>
      <form onSubmit={handleSubmit(handleMessage)}>
        <Input
          {...register("title")}
          label={"Title"}
          placeholder={"Title"}
          required
        />

        <TextArea
          {...register("message")}
          label={"Message"}
          placeholder={"Message"}
          required
        />
        <SubmitButton
          isLoading={createLoading || updateLoading}
          className="mt-5"
        >
          Send Message
        </SubmitButton>
      </form>
    </div>
  );
};

MessageForm.propTypes = {
  updateMessage: PropTypes.object,
  setIsModalOpen: PropTypes.func,
};

export default MessageForm;
