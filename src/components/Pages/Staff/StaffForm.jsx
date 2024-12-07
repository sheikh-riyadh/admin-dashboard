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
import { useGetAdmin } from "../../../hooks/useGetAdmin";

const StaffForm = ({ updateData, setIsModalOpen }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { admin } = useGetAdmin();

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
    setIsLoading(true);
    if (updateData) {
      try {
        const result = await updateStaff({
          _id: updateData?._id,
          data: data,
          adminEmail: admin?.email,
        });
        if (result?.error) {
          toast.error(result?.error?.data.message, {
            id: "update_staff_error",
          });
          setIsLoading(false);
        } else {
          toast.success("Staff updated successfully", { id: "success" });
          setIsModalOpen(false);
        }
      } catch (error) {
        toast.error("Something went wrong 😓", { id: `${error}` });
        setIsLoading(false);
      }
    } else {
      try {
        const result = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        if (result?.user?.accessToken && result.user.email) {
          const res = await createStaff({ ...data, adminEmail: admin?.email });
          if (res?.error) {
            toast.error(res?.error?.data.message, {
              id: "create_staff_error",
            });
            setIsLoading(false);
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
          setIsLoading(false);
        } else {
          toast.error("Something went wrong please try again letter", {
            id: "try_again_letter",
          });
          setIsLoading(false);
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
          className="bg-[#1C2822] text-white rounded-sm"
        />
        <Input
          {...register("email")}
          label={"Email"}
          placeholder={"Staff email"}
          required
          disabled={updateData}
          value={updateData ? updateData?.email : undefined}
          className="bg-[#1C2822] text-white rounded-sm"
        />
        {updateData && admin?.role === "super_admin" ? (
          <Input
            {...register("password")}
            label={"Password"}
            placeholder={"Staff Password"}
            required
            type="password"
            className="bg-[#1C2822] text-white rounded-sm"
            value={updateData ? updateData?.password : undefined}
          />
        ) : !updateData ? (
          <Input
            {...register("password")}
            label={"Password"}
            placeholder={"Staff Password"}
            required
            type="password"
            className="bg-[#1C2822] text-white rounded-sm"
          />
        ) : null}
        <SelectInput
          defaultValue={"admin"}
          {...register("role")}
          label={"Select Staff role"}
          required
          className="bg-[#1C2822] text-white rounded-sm"
        >
          <option value="admin">Admin</option>
          <option disabled>{`Moderator (Working..)`}</option>
          <option disabled>{`Editor (Working..)`}</option>
        </SelectInput>
        <SubmitButton
          isLoading={isLoading || staffCreateLoading || updateStaffLoading}
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
