/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { useCreateSupplyMutation } from "../../../redux/features/supply/supplyApi";
import { toast } from "sonner";
import {TResponse, TSupply} from "../../../types";
import {testimonialSchema} from "./zodTestimonialValidation";
import {useAppSelector} from "../../../redux/hooks";
import {currentUser, currentUsername} from "../../../redux/features/auth/authSlice";

const CreateTestimonial = () => {
  const user = useAppSelector(currentUser)
  const username = useAppSelector(currentUsername)
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(testimonialSchema) });

  const [createSupply] = useCreateSupplyMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading('Posting testimonial ...')
    try {
      const res = await createSupply(data) as TResponse<TSupply>;
      console.log(res)
      if(res?.error){
        throw new Error(res?.error?.data?.message) 
      }
      reset();
      toast.success("Successfully created new testimonial", { id: toastId, duration: 2000 });
    } catch (err : any) {
      toast.error(err?.message ? err.message : "Something went wrong", { id: toastId, duration: 2000 });
    }
  };
  return (
    <div className="px-4 sm:px-10 mt-10">
      <div className="bg-white w-full max-w-[100%] lg:max-w-[80%] border border-gray-200 shadow-md rounded-lg py-5 sm:py-8 px-4 sm:px-14">
        <h5 className="text-lg font-medium mb-4">Add Testimonial</h5>
        <div className="mt-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="text-sm">Name/username</label>
              <br />
              <input
                id="name"
                {...register("name")}
                value={username as string}
                type="text"
                className="border border-gray-300 w-full py-2 px-4 rounded-md focus:outline-none focus:border-brand placeholder:text-sm capitalize"
                placeholder="Enter title"
              />
              {errors?.name && (
                <span className="text-xs text-red-500">
                  {errors.name.message as string}
                </span>
              )}
            </div>
            <div>
              <label className="text-sm">Email</label>
              <br />
              <input
                id="email"
                {...register("email")}
                value={user?.email}
                type="text"
                className="border border-gray-300 w-full py-2 px-4 rounded-md focus:outline-none focus:border-brand placeholder:text-sm"
              />
              {errors?.email && (
                <span className="text-xs text-red-500">
                  {errors.email.message as string}
                </span>
              )}
            </div>
            <div>
              <label className="text-sm">Address</label>
              <br />
              <input
                id="address"
                {...register("address")}
                type="text"
                className="border border-gray-300 w-full py-2 px-4 rounded-md focus:outline-none focus:border-brand placeholder:text-sm"
                placeholder="Enter Address"
              />
              {errors?.address && (
                <span className="text-xs text-red-500">
                  {errors.address.message as string}
                </span>
              )}
            </div>
            <div className="">
              <label className="text-sm">Testimonial Description</label>
              <br />
              <textarea
                {...register("testimonial")}
                id="testimonial"
                rows={4}
                placeholder="Enter description"
                className="border border-gray-300 w-full py-2 px-4 rounded-md focus:outline-none focus:border-brand placeholder:text-sm"
              ></textarea>
              {errors?.testimonial && (
                <span className="text-xs text-red-500">
                  {errors.testimonial.message as string}
                </span>
              )}
            </div>
            <div className="flex justify-end">
              <button type="submit" className="btn-solid">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTestimonial;
