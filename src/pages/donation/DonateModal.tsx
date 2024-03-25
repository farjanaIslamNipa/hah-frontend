/* eslint-disable @typescript-eslint/no-explicit-any */
import Modal from "react-modal";
import { TDonation, TResponse } from "../../types";
import closeIcon from "../../assets/images/close.svg";
import { useNavigate } from "react-router-dom";
import { FormEvent} from "react";
import {toast} from "sonner";
import {useAddDonatioMutation} from "../../redux/features/donations/donationApi";


type TDonateModalProps = {
  donateModal:boolean;
  donationInfo: TDonation | null;
  closeDonateModal: () => void;
};

const DonateModal = ({
  donateModal,
  donationInfo,
  closeDonateModal
}: TDonateModalProps) => {

  const [addDonation] = useAddDonatioMutation()
  const navigate = useNavigate();

  const handleSubmit = async (e : FormEvent) => {
    e.preventDefault()
    const toastId = toast.loading('Submitting donation ...')

    try {
      const res = await addDonation(donationInfo) as TResponse<TDonation>;
      console.log(res)
      if(res?.error){
        throw new Error(res?.error?.data?.message) 
      }
      toast.success("Donation added successfully", { id: toastId, duration: 2000 });
      navigate('/dashboard')
    } catch (err : any) {
      toast.error(err?.message ? err.message : "Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <Modal
      isOpen={donateModal}
      onRequestClose={closeDonateModal}
      contentLabel="Example Modal"
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="flex justify-end">
        <button onClick={closeDonateModal}>
          <img src={closeIcon} alt="Close modal" />
        </button>
      </div>
      <div className="text-gray-800 dark:text-gray-400">
        <div className="overflow-x-auto relative">
              <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-800 dark:text-gray-400">
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="py-4 px-6 w-[30%]">Name:</td>
                      <td className="py-4 px-6">{donationInfo?.name || "Not Found"}</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="py-4 px-6 w-[30%]">Email:</td>
                      <td className="py-4 px-6">{donationInfo?.email || "Not Found"}</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="py-4 px-6 w-[30%]">Donation Title:</td>
                      <td className="py-4 px-6">{donationInfo?.title || "Not Found"}</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="py-4 px-6 w-[30%]">Category:</td>
                      <td className="py-4 px-6">{donationInfo?.category || "Not Found"}</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="py-4 px-6 w-[30%]">Quantity:</td>
                      <td className="py-4 px-6">{donationInfo?.quantity || "Not Found"}</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="py-4 px-6 w-[30%]">Description:</td>
                      <td className="py-4 px-6">{donationInfo?.description || "No description added"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          <p className="my-4 font-semibold text-red-700 text-[18px] text-center">Would you like to contribute a donation to support our cause ?</p>
          <form onSubmit={handleSubmit} className="mt-3">
            <div className="flex justify-end gap-6 mt-5">
              <button onClick={closeDonateModal} className="btn-outline">Cancel</button>
              <button type="submit" className="btn-solid">Submit</button>
            </div>
          </form>
        </div>
    </Modal>
  );
};

export default DonateModal;
