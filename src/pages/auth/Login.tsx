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
import { useLoginUserMutation } from "../../redux/features/auth/authApi";
import { TLoggedInUser, loginSchema } from "./ZodAuthValidation";
import { toast } from "sonner";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoggedInUser>({ resolver: zodResolver(loginSchema) });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [loginUser] = useLoginUserMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in");
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };

      const res = await loginUser(userInfo).unwrap();

      const user = verifyToken(res?.token as string);

      dispatch(
        setUser({
          user: user,
          token: res?.token,
        })
      );
      toast.success("Successfully logged in", { id: toastId, duration: 2000 });
      navigate("/");
    } catch (err: any) {
      toast.error(err ? (err.data.message as string) : "Something went wrong", {
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

      <p className="mt-5 text-center text-sm">Login to continue with <b>HAH</b></p>
      <form onSubmit={handleSubmit(onSubmit)} className="pt-4 pb-2 space-y-3">
        <div>
          <label className="font-semibold text-sm">Email</label>
          <br />
          <input
            type="email"
            className="custom-input"
            placeholder="Enter email address"
            {...register("email")}
          />
          {errors?.email && (
            <p className="text-sm text-red-500">{errors?.email?.message as string}</p>
          )}
        </div>
        <div className="relative">
          <label className="font-semibold text-sm">Password</label>
          <br />
          <input
            type={!showPassword ? "password" : "text"}
            className="custom-input"
            placeholder="Enter password"
            {...register("password")}
          />
          {errors?.password && (
            <p className="text-sm text-red-500">{errors?.password?.message as string}</p>
          )}
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {!showPassword ? (
              <img src={eyeSlash} alt="Show Password" className="absolute top-9 right-4 h-5"/>
            ) : (
              <img src={eye} alt="Hide Password" className="absolute top-9 right-4 h-5" />
            )}
          </button>
        </div>
        <div className="pt-2">
          <Button type="submit" className="w-full tracking-widest">Login</Button>
        </div>
        <div className="text-sm">
          Don’t have an account?
          <NavLink to="/register" className="font-bold text-brand hover:text-secondary text-base pl-2">
            Register
          </NavLink>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
