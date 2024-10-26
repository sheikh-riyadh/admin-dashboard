import { useForm } from "react-hook-form";
import Input from "../../Common/Input";
import TextArea from "../../Common/TextArea";
import Button from "../../Common/Button";

const MessageForm = () => {
  const { handleSubmit, register } = useForm();

  const handleStaff = () => {};

  return (
    <div>
      <form onSubmit={handleSubmit(handleStaff)}>
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
      </form>
      <Button className="mt-5">Send Message</Button>
    </div>
  );
};

export default MessageForm;
