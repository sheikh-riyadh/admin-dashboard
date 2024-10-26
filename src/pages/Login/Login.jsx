import { useForm } from "react-hook-form";
import Input from "../../components/Common/Input";
import Button from "../../components/Common/Button";
import { FaLock } from "react-icons/fa";
import mountain from "../../assets/mountain.png"

const Login = () => {
  const { handleSubmit, register } = useForm();

  const handleLogin = (data) => {
    console.log(data);
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
                {...register("Email")}
                placeholder="Email *"
                type="email"
                required
                className="w-full"
              />
              <Input
                {...register("Password")}
                placeholder="*******"
                type="password"
                required
              />
            </div>

            <Button className="bg-emerald-700">Sign In</Button>
          </form>
        </div>
      </div>
      <img
      className="absolute top-0 h-screen w-full z-0"
      src={mountain} alt="" />
    </div>
  );
};

export default Login;
