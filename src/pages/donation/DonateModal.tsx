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
      <div className="bg-brand bg-opacity-5 rounded-lg w-full p-8 mt-2 flex justify-center">
        <div className="">
          <div className="flex">
            <div className="space-y-2">
              <p className="font-bold">Name:</p>
              <p className="font-bold">Email:</p>
              <p className="font-bold">Donation Title:</p>
              <p className="font-bold">Category:</p>
              <p className="font-bold">Quantity:</p>
            </div>
            <div className="space-y-2 pl-10">
              <p className="font-medium">{donationInfo?.name || "Not Found"}</p>
              <p className="font-medium">{donationInfo?.email || "Not Found"}</p>
              <p className="font-medium">{donationInfo?.title || "Not Found"}</p>
              <p className="font-medium">{donationInfo?.category || "Not Found"}</p>
              <p className="font-medium">{donationInfo?.quantity || "Not Found"}</p>
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
      </div>
    </Modal>
  );
};

export default DonateModal;
