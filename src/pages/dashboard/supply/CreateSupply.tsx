/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { useCreateSupplyMutation } from "../../../redux/features/supply/supplyApi";
import { toast } from "sonner";
import {supplySchema} from "./zodSupplyValidation";
import {TResponse, TSupply} from "../../../types";

const CreateSupply = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(supplySchema) });

  const [createSupply] = useCreateSupplyMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading('Creating supply ...')
    try {
      const res = await createSupply(data) as TResponse<TSupply>;
      console.log(res)
      if(res?.error){
        throw new Error(res?.error?.data?.message) 
      }
      reset();
      toast.success("Successfully created new supply", { id: toastId, duration: 2000 });
    } catch (err : any) {
      toast.error(err?.message ? err.message : "Something went wrong", { id: toastId, duration: 2000 });
    }
  };
  return (
    <div className="px-4 sm:px-10 py-10">
      <div className="bg-white dark:bg-gray-800 w-full max-w-[100%] lg:max-w-[80%] border border-gray-200 dark:border-gray-800 shadow-md rounded-lg py-5 sm:py-8 px-4 sm:px-14">
        <h5 className="text-lg font-medium mb-4">Create new supply</h5>
        <div className="mt-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="text-sm">Supply Title</label>
              <br />
              <input
                id="title"
                {...register("title")}
                type="text"
                className="custom-input"
                placeholder="Enter title"
              />
              {errors?.title && (
                <span className="text-xs text-red-500">
                  {errors.title.message as string}
                </span>
              )}
            </div>
            <div>
              <label className="text-sm">Category</label>
              <br />
              <select
                id="category"
                {...register("category")}
                className="custom-input"
              >
                <option>Select Category</option>
                <option value="Medical Supplies">Medical Supplies</option>
                <option value="First Aid Kit">First Aid Kit</option>
                <option value="Medications">Medications</option>
              </select>
              {errors?.category && (
                <span className="text-xs text-red-500">
                  {errors.category.message as string}
                </span>
              )}
            </div>
            <div>
              <label className="text-sm">Quantity</label>
              <br />
              <input
                id="quantity"
                {...register("quantity")}
                type="text"
                className="custom-input"
                placeholder="Enter quantity"
              />
              {errors?.quantity && (
                <span className="text-xs text-red-500">
                  {errors.quantity.message as string}
                </span>
              )}
            </div>
            <div className="relative">
              <label className="text-sm">Image URL</label>
              <br />
              <input
                id="img"
                {...register("img")}
                type="text"
                className="custom-input"
                placeholder="ex: https://i.ibb.co/T2fgj6m/event-item-1.png"
              />
            </div>
            <div className="">
              <label className="text-sm">Description</label>
              <br />
              <textarea
                {...register("description")}
                id="description"
                rows={4}
                placeholder="Enter description"
                className="custom-input"
              ></textarea>
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

export default CreateSupply;
