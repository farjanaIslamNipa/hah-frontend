/* eslint-disable @typescript-eslint/no-explicit-any */
import closeIcon from "../../../assets/images/close.svg";
import {useGetSingleSupplyQuery,  useUpdateSupplyMutation} from "../../../redux/features/supply/supplyApi";
import {useForm} from "react-hook-form";
import {toast} from "sonner";
import {TResponse, TSupply} from "../../../types";
import cn from "../../../utils/cn";

type TEditModalProps = {
  editModal: boolean;
  closeEditModal: () => void;
  itemId: string;
};


const CustomModal = ({editModal, closeEditModal, itemId} : TEditModalProps) => {

  const {data: supply, isLoading} = useGetSingleSupplyQuery(itemId)

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [updateSupply] = useUpdateSupplyMutation()

  const onSubmit = async (data : Partial<TSupply>) => {
    const id = supply?.data._id

    const toastId = toast.loading('Updating...')
    try{
      const updatedData = {
        id,
        data
      }

      const res = await updateSupply(updatedData) as TResponse<TSupply>

      if(res?.error){
        throw new Error(res?.error?.data?.message) 
      }
      toast.success('Successfully updated', {id: toastId, duration: 2000})
      reset(),
      closeEditModal()
    }catch(err : any){
      toast.error(err?.message ? err?.message : 'Something went wrong', {id: toastId})
    }

  };

  if (isLoading) {
    return <p className="p-5 font-bold text-brand text-center">Loading...</p>;
  }


  return (

    <div className={cn("flex justify-center items-center fixed inset-0 bg-gray-500/70 invisible z-[999]",{visible: editModal})}>
      <div className="custom-modal bg-white w-full max-w-[600px] max-h-[90vh] overflow-auto p-5 rounded-lg">
        <div className="flex justify-between relative z-50">
        <h1 className="font-semibold text-lg">Update Supply</h1>
          <button onClick={closeEditModal}>
            <img src={closeIcon} alt="Close modal" />
          </button>
        </div>
        <div className="bg-brand bg-opacity-5 rounded-lg w-full p-6 mt-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div>
              <label className="text-sm">Supply Title</label>
              <br />
              <input
                id="title"
                {...register("title")}
                defaultValue={supply?.data?.title}
                type="text"
                className="border border-gray-300 w-full py-2 px-4 rounded-md focus:outline-none focus:border-brand placeholder:text-sm capitalize"
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
                className="border border-gray-300 w-full py-2 px-4 rounded-md focus:outline-none focus:border-brand text-sm"
              >
                <option>Select Category</option>
                <option
                  selected={supply?.data?.category === "Medical Supplies"}
                  value="Medical Supplies"
                >
                  Medical Supplies
                </option>
                <option
                  selected={supply?.data?.category === "First Aid Kit"}
                  value="First Aid Kit"
                >
                  First Aid Kit
                </option>
                <option
                  selected={supply?.data?.category === "Medications"}
                  value="Medications"
                >
                  Medications
                </option>
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
                defaultValue={supply?.data?.quantity}
                id="quantity"
                {...register("quantity")}
                type="text"
                className="border border-gray-300 w-full py-2 px-4 rounded-md focus:outline-none focus:border-brand placeholder:text-sm"
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
                defaultValue={supply?.data?.img}
                id="img"
                {...register("img")}
                type="text"
                className="border border-gray-300 w-full py-2 px-4 rounded-md focus:outline-none focus:border-brand placeholder:text-sm"
                placeholder="ex: https://i.ibb.co/T2fgj6m/event-item-1.png"
              />
            </div>
            <div className="">
              <label className="text-sm">Description</label>
              <br />
              <textarea
                {...register("description")}
                id="description"
                rows={2}
                defaultValue={supply?.data?.description}
                className="border border-gray-300 w-full py-2 px-4 rounded-md focus:outline-none focus:border-brand placeholder:text-sm"
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

export default CustomModal;