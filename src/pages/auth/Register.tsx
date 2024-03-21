/* eslint-disable @typescript-eslint/no-explicit-any */
import AuthLayout from "../../components/layouts/AuthLayout";
import logo from "../../assets/images/dashboard-logo.svg";
import eye from "../../assets/images/eye.svg";
import eyeSlash from "../../assets/images/eye-slash.svg";
import Button from "../../components/ui/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TRegisterUser, registerSchema } from "./ZodAuthValidation";
import { useRegisterUserMutation } from "../../redux/features/auth/authApi";
import { toast } from "sonner";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterUser>({ resolver: zodResolver(registerSchema) });

  const navigate = useNavigate();

  const [registerUser] = useRegisterUserMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Registering User");
    try {
      const userInfo = {
        name: data.username,
        email: data.email,
        password: data.password,
      };

      let res : any = {}
      res = await registerUser(userInfo);

      if((res?.error?.status as number) === 400){
        throw new Error(res?.error?.data?.message)
      }
      toast.success("Successfully registered user", {
        id: toastId,
        duration: 2000,
      });
      navigate("/login");
    } catch (err: any) {
      console.log(err, 'err')
      toast.error(err ? err.message : "Something went wrong", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <AuthLayout>
      <div className="flex justify-center">
        <NavLink to="/" className="inline-block">
          <img src={logo} alt="logo" className="h-16" />
        </NavLink>
      </div>

      <p className="mt-5 text-center text-sm">
        Register to join with <b>HAH</b>
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="pt-4 pb-2 space-y-3">
        <div>
          <label className="font-semibold text-sm">Username</label>
          <br />
          <input
            type="text"
            id="username"
            className="custom-input"
            placeholder="Enter username"
            {...register("username")}
          />
          {errors?.username && (
            <p role="alert" className="text-sm text-red-500">
              {errors?.username?.message as string}
            </p>
          )}
        </div>
        <div>
          <label className="font-semibold text-sm">Email</label>
          <br />
          <input
            type="email"
            id="email"
            className="custom-input"
            placeholder="Enter email address"
            {...register("email")}
          />
          {errors?.email && (
            <p className="text-sm text-red-500">
              {errors?.email?.message as string}
            </p>
          )}
        </div>
        <div className="relative">
          <label className="font-semibold text-sm">Password</label>
          <br />
          <input
            type={!showPassword ? "password" : "text"}
            id="password"
            className="custom-input"
            placeholder="Enter password"
            {...register("password")}
          />
          {errors?.password && (
            <p className="text-sm text-red-500">
              {errors?.password?.message as string}
            </p>
          )}
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {!showPassword ? (
              <img
                src={eyeSlash}
                alt=""
                className="absolute top-9 right-4 h-5"
              />
            ) : (
              <img src={eye} alt="" className="absolute top-9 right-4 h-5" />
            )}
          </button>
        </div>
        <div className="pt-2">
          <Button type="submit" className="w-full tracking-widest">
            Register
          </Button>
        </div>
        <div className="text-sm">
          Already have an account?
          <NavLink
            to="/login"
            className="font-bold text-brand hover:text-secondary text-base pl-2"
          >
            Login
          </NavLink>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Register;
