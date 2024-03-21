
import Modal from 'react-modal';
import warningIcon from '../../../assets/images/warning.svg'

type TDeleteModalPops = {
  deleteModal: boolean;
  closeDeleteModal: () => void;
  handleDeleteSupply: () => void;
}
const DeleteSupplyModal = ({deleteModal, closeDeleteModal, handleDeleteSupply} : TDeleteModalPops) => {
  return (
    <Modal
    isOpen={deleteModal}
    onRequestClose={closeDeleteModal}
    contentLabel="Example Modal"
    className="Modal"
    overlayClassName="Overlay"
  >
      <div className='px-5 py-5 m-2 lg:m-5 bg-brand bg-opacity-10 rounded-lg'> 
        <img src={warningIcon} alt="" className='h-[50px] mx-auto mb-4' />
        <p className='font-semibold text-xl text-center text-red-500'>Are your sure, <br /> you want to delete this record ?</p>
        <div className='mt-6 flex gap-4 justify-center pb-4'>
          <button onClick={closeDeleteModal} className='btn-outline'>Cancel</button>
          <button onClick={handleDeleteSupply} className='btn-solid'>Delete</button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteSupplyModal;