import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import Input from "../../Common/Input";
import SelectInput from "../../Common/SelectInput";
import {
  useCreateStaffMutation,
  useUpdateStaffMutation,
} from "../../../store/service/staff/staffApi";
import toast from "react-hot-toast";
import SubmitButton from "../../Common/SubmitButton";
import { auth } from "../../../firebase/firebase.config";

const StaffForm = ({ updateData, setIsModalOpen }) => {
  const [isLoading, setIsLoading] = useState(false);

  const { handleSubmit, register, setValue } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "admin",
    },
  });

  const [createStaff, { isLoading: staffCreateLoading }] =
    useCreateStaffMutation();
  const [updateStaff, { isLoading: updateStaffLoading }] =
    useUpdateStaffMutation();

  const handleStaff = async (data) => {
    if (updateData) {
      try {
        const result = await updateStaff({ _id: updateData?._id, data: data });
        if (result?.error) {
          toast.error(result?.error?.data.message, {
            id: "update_staff_error",
          });
        } else {
          toast.success("Staff updated successfully", { id: "success" });
          setIsModalOpen(false);
        }
      } catch (error) {
        toast.error("Something went wrong 😓", { id: `${error}` });
      }
    } else {
      try {
        const result = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        if (result?.user?.accessToken && result.user.email) {
          const res = await createStaff(data);
          if (res?.error) {
            toast.error(res?.error?.data.message, {
              id: "create_staff_error",
            });
          } else {
            toast.success(res.data?.message, { id: "success" });
            setIsModalOpen(false);
          }
        }
      } catch (error) {
        if (error.message == "Firebase: Error (auth/email-already-in-use).") {
          toast.error(`Email ${data?.email} already used`, {
            id: "email_error",
          });
        } else {
          toast.error("Something went wrong please try again letter", {
            id: "try_again_letter",
          });
        }
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    for (const key in updateData) {
      if (Object.prototype.hasOwnProperty.call(updateData, key)) {
        if (key !== "_id") {
          setValue(key, updateData[key]);
        }
      }
    }
  }, [updateData, setValue]);

  return (
    <div>
      <form onSubmit={handleSubmit(handleStaff)}>
        <Input
          {...register("name")}
          label={"Name"}
          placeholder={"Staff name"}
          required
        />
        <Input
          {...register("email")}
          label={"Email"}
          placeholder={"Staff email"}
          required
          disabled={updateData}
          value={updateData ? updateData?.email : undefined}
        />
        <Input
          {...register("password")}
          label={"Password"}
          placeholder={"Staff Password"}
          required
          disabled={updateData}
          value={updateData ? updateData?.password : undefined}
        />
        <SelectInput
          defaultValue={"admin"}
          {...register("role")}
          label={"Select Staff role"}
          required
        >
          <option value="admin">Admin</option>
          <option value="moderator">Moderator</option>
          <option value="editor">Editor</option>
        </SelectInput>
        <SubmitButton
          isLoading={staffCreateLoading || updateStaffLoading || isLoading}
          className="mt-5"
        >
          Save
        </SubmitButton>
      </form>
    </div>
  );
};

StaffForm.propTypes = {
  updateData: PropTypes.object,
  setIsModalOpen: PropTypes.func,
};

export default StaffForm;
