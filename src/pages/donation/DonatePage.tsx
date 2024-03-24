/* eslint-disable @typescript-eslint/no-explicit-any */
import {FieldValues, useForm} from "react-hook-form";
import {currentUser} from "../../redux/features/auth/authSlice";
import {useAppSelector} from "../../redux/hooks";
import {useGetUsersQuery} from "../../redux/features/auth/authApi";
import {TDonation} from "../../types";
import {useState} from "react";
import DonateModal from "./DonateModal";
import {donationSchema} from "../supplies/zodDonateValidation";
import {zodResolver} from "@hookform/resolvers/zod";


const DonatePage = () => {
  const user = useAppSelector(currentUser)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(donationSchema) });

  const {data, isError} = useGetUsersQuery(undefined)

  const donor = data?.users?.find((person: any) => person.email === (user?.email as string)) 


  const [donationInfo, setDonationInfo] = useState<TDonation | null>(null)
  const [donateModal, setDonateModal] = useState(false);

  const closeDonateModal = () => {
    setDonateModal(false);
  }

  const onSubmit = async (data: FieldValues) => {
    const donateData = {
      name: donor?.name,
      email: donor?.email,
      ...data
    }
    if(donateData){
      setDonationInfo(donateData as TDonation)
      setDonateModal(true)
    }
  };
  if (isError) {
    return <p className="p-5 font-bold text-brand text-center">Loading...</p>;
  }
  return (
    <div className="bg-white dark:bg-gray-800">
      <header className="donate-page-bg flex justify-center items-center">
        <h1 className="font-extrabold text-3xl md:text-5xl text-white">Donate to Nonprofits</h1>
      </header>
      <div className="py-20 custom-container">
        <div className="max-w-[700px] mx-auto p-8 rounded-xl shadow-lg border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900">
           <p className="font-bold text-xl">Donate Now</p>
           <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-4">
            <div>
              <label className="text-sm">Name</label>
              <br />
              <input
                id="name"
                defaultValue={donor?.name}
                type="text"
                readOnly
                className="custom-input"
              />
            </div>
            <div>
              <label className="text-sm">Email</label>
              <br />
              <input
                id="email"
                defaultValue={donor?.email}
                type="text"
                readOnly
                className="custom-input"
              />
            </div>
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
            <div className="">
              <label className="text-sm">Description</label>
              <br />
              <textarea
                {...register("description")}
                id="description"
                rows={2}
                placeholder="Enter description"
                className="custom-input"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button type="submit" className="btn-solid">
                Donate
              </button>
            </div>
          </form>
        </div>
        <DonateModal donateModal={donateModal} donationInfo={donationInfo} closeDonateModal={closeDonateModal} />
      </div>
    </div>
  );
};

export default DonatePage;