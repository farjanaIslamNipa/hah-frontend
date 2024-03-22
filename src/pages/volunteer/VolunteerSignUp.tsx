/* eslint-disable @typescript-eslint/no-explicit-any */
import {zodResolver} from "@hookform/resolvers/zod";
import {FieldValues, useForm} from "react-hook-form";
import {toast} from "sonner";
import {volunteerSchema} from "./volunteerZodValidation";
import {TResponse, TVolunteer} from "../../types";
import {useAddVolunteerMutation} from "../../redux/features/volunteers/volunteerApi";


const VolunteerSignUp = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(volunteerSchema) });

  const [addVolunteer] = useAddVolunteerMutation()

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading('Registering as a volunteer ...')
    try {
      const res = await addVolunteer(data) as TResponse<TVolunteer>;
      if(res?.error){
        throw new Error(res?.error?.data?.message) 
      }
      reset();
      toast.success("Successfully registered", { id: toastId, duration: 2000 });
    } catch (err : any) {
      toast.error(err?.message ? err.message : "Something went wrong", { id: toastId, duration: 2000 });
    }
  };
  return (
    <>
      <header className="volunteer-bg flex justify-center items-center">
        <div className="custom-container text-center">
          <h1 className="text-5xl font-bold text-[#ED5AB3]">Join Our Team as a Volunteer!</h1>
        </div>
      </header>
      <main className="custom-container my-14">
        <div className="max-w-[70%] mx-auto">
        <p className="text-center">Are you passionate about making a difference in your community? Do you want to contribute your time and skills to meaningful causes? Join us as a volunteer and become part of a dedicated team working towards positive change!</p>
          <div className=" border rounded-2xl p-8 mt-6 mx-20">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className="text-sm">Name</label>
                <br />
                <input
                  id="name"
                  {...register("name")}
                  type="text"
                  className="border border-gray-300 w-full py-2 px-4 rounded-md focus:outline-none focus:border-brand placeholder:text-sm" placeholder="Enter your name"
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
                  type="text"
                  className="border border-gray-300 w-full py-2 px-4 rounded-md focus:outline-none focus:border-brand placeholder:text-sm"
                  placeholder="Enter your email address"
                />
                {errors?.email && (
                  <span className="text-xs text-red-500">
                    {errors.email.message as string}
                  </span>
                )}
              </div>
              <div>
                <label className="text-sm">Phone</label>
                <br />
                <input
                  id="phone"
                  {...register("phone")}
                  type="text"
                  className="border border-gray-300 w-full py-2 px-4 rounded-md focus:outline-none focus:border-brand placeholder:text-sm capitalize"
                  placeholder="Enter your phone number"
                />
                {errors?.phone && (
                  <span className="text-xs text-red-500">
                    {errors.phone.message as string}
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
              <div className="flex justify-end">
                <button type="submit" className="btn-solid w-full">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default VolunteerSignUp;