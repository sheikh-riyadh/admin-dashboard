import { useForm } from "react-hook-form";
import Input from "../../Common/Input";
import SelectInput from "../../Common/SelectInput";
import Button from "../../Common/Button";

const StaffForm = () => {
  const { handleSubmit, register } = useForm();

  const handleStaff = () => {};

  return (
    <div>
      <form onSubmit={handleSubmit(handleStaff)}>
        <Input
          {...register("email")}
          label={"Email"}
          placeholder={"staff email"}
          required
        />
        <Input
          {...register("password")}
          label={"Password"}
          placeholder={"staff Password"}
          required
        />
        <SelectInput {...register("role")} label={"Select Staff role"} required>
          <option value="admin">Admin</option>
          <option value="moderator">Moderator</option>
          <option value="editor">Editor</option>
        </SelectInput>
        <Button className="mt-5">Save</Button>
      </form>
    </div>
  );
};

export default StaffForm;
