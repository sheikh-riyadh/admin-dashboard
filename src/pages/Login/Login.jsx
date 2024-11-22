import { useForm } from "react-hook-form";
import Input from "../../components/Common/Input";
import { FaLock } from "react-icons/fa";
import mountain from "../../assets/mountain.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../store/features/user/userSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import SubmitButton from "../../components/Common/SubmitButton";
import { useLazyGetAdminQuery } from "../../store/service/staff/staffApi";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { handleSubmit, register } = useForm();
  const [getAdmin] = useLazyGetAdminQuery();

  const handleLogin = async ({ email, password }) => {
    setIsLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      if (result?.user?.accessToken && result.user.email) {
        const res = await getAdmin(result.user.email);
        if (res?.data?.email) {
          dispatch(addUser({ ...res?.data }));
          setIsLoading(false);
          navigate("/");
        } else {
          toast.error("Something went wrong 😓", { id: "error" });
          setIsLoading(false);
        }
      }
    } catch (error) {
      if (error.message == "Firebase: Error (auth/invalid-credential).") {
        toast.error("Invalid credential", { id: "invalid" });
        setIsLoading(false);
      } else {
        toast.error("Something went wrong 😓", { id: "error" });
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="h-svh relative">
      <div className="flex flex-col  items-center justify-center h-screen w-full my_container z-30 absolute">
        <div className="flex flex-col items-center justify-center bg-white border shadow-lg rounded-xl overflow-hidden w-[340px] h-[340px]">
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="flex flex-col items-center justify-center gap-5 w-full p-7"
          >
            <div className="w-16 h-16 border p-2 rounded-full flex flex-col items-center justify-center bg-emerald-700 text-white">
              <FaLock className="text-4xl" />
            </div>
            <h1 className="font-bold text-3xl capitalize">Admin Pannel</h1>
            <div className="w-full flex flex-col gap-5">
              <Input
                {...register("email")}
                placeholder="Email *"
                type="email"
                required
                className="w-full"
              />
              <Input
                {...register("password")}
                placeholder="*******"
                type="password"
                required
              />
            </div>

            <SubmitButton isLoading={isLoading} className="bg-emerald-700">
              Sign In
            </SubmitButton>
          </form>
        </div>
      </div>
      <img
        className="absolute top-0 h-screen w-full z-0"
        src={mountain}
        alt=""
      />
    </div>
  );
};

export default Login;
