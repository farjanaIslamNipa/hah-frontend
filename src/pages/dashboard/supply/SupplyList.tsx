import { NavLink } from "react-router-dom";
import { useDeleteSupplyMutation, useGetSuppliesQuery } from "../../../redux/features/supply/supplyApi";
import { TSupply } from "../../../types";
import defaultImg from "../../../assets/images/default-img.jpg";
import editIcon from "../../../assets/images/edit.svg";
import deleteIcon from "../../../assets/images/delete.svg";
import {isValidURL} from "../../../utils/validUrl";
import {useState} from "react";
import DeleteSupplyModal from "./DeleteSupplyModal";
import {toast} from "sonner";
import EditSupplyModal from './EditSupplyModal';

const SupplyList = () => {
  const { data: supplies, isError } = useGetSuppliesQuery(undefined);

  const [editModal, setEditModal] = useState(false);
  const [itemId, setItemId] = useState<string>('')
  const [deleteModal, setDeleteModal] = useState(false);


  // Edit modal
  const openEditModal = (id : string) => {
    setItemId(id)
    setEditModal(true);
  }

  const closeEditModal = () => {
    setEditModal(false);
  }

  // Delete Modal
  const openDeleteModal = (id : string) => {
    setItemId(id)
    setDeleteModal(true);
  }

  const closeDeleteModal = () => {
    setDeleteModal(false);
  }


  // Delete Supply
  const [deleteSupply] = useDeleteSupplyMutation()

  const handleDeleteSupply = async() => {
   try{
    await deleteSupply(itemId)
    closeDeleteModal()
   }catch(err){
    toast.error('Something went wrong')
   }
  }

  if (isError) {
    return <p className="p-5 font-bold text-brand text-center">Loading...</p>;
  }
 
  return (
    <div className="px-4 sm:px-10 pb-14">
      <div className="flex items-center justify-between mt-5">
        <h5 className="font-semibold text-xl text-gray-700">Supply List</h5>
        <NavLink to="/dashboard/create-supply" className="btn-solid text-sm">
          Create Supply
        </NavLink>
      </div>

      <div className="mt-8 overflow-auto">
        <table className="min-w-[1000px] lg:min-w-full text-sm">
          <thead className="border-b font-medium">
            <tr>
              <th scope="col" className="px-4 py-4 w-[3%] text-start">
                #
              </th>
              <th scope="col" className="px-4 py-4 w-[15%] text-start">
                Image
              </th>
              <th scope="col" className="px-4 py-4 w-[30%] text-start">
                Title
              </th>
              <th scope="col" className="px-4 py-4 w-[22%] text-start">
                Category
              </th>
              <th scope="col" className="px-4 py-4 w-[10%] text-end">
                Quantity
              </th>
              <th scope="col" className="px-4 py-4 w-[15%] text-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {supplies?.data?.length > 0 &&
              supplies?.data?.map((supply: TSupply, index: number) => (
                <tr className="border-b" key={supply._id}>
                  <td className="px-6 py-4 font-semibold text-base">
                    {index + 1}.
                  </td>
                  <td className="px-6 py-4">
                    <div className="h-14 w-14 rounded-lg">
                      {(supply?.img && isValidURL(supply?.img)) ? (
                        <img
                          src={supply?.img}
                          alt=""
                          className="h-full w-full object-cover rounded-lg"
                        />
                      ) : (
                        <img
                          src={defaultImg}
                          alt=""
                          className="h-full w-full object-cover rounded-lg"
                        />
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-4 font-medium text-base">
                    {supply?.title}
                  </td>
                  <td className="px-4 py-4 text-base text-brand font-semibold">
                    {supply?.category}
                  </td>
                  <td className="px-4 py-4 font-medium text-base text-right">
                    {supply?.quantity}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex gap-4 items-end justify-end">
                      <button onClick={() => openEditModal(supply._id)} className=" py-2">
                        <img src={editIcon} alt="" className="h-5 w-5" />
                      </button>
                      <button onClick={() => openDeleteModal(supply._id)} className=" py-2">
                        <img src={deleteIcon} alt="" className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {
          editModal && 
         <EditSupplyModal editModal={editModal}  closeEditModal={closeEditModal} itemId={itemId} /> 
        }
        <DeleteSupplyModal deleteModal={deleteModal} closeDeleteModal={closeDeleteModal} handleDeleteSupply={handleDeleteSupply} />

      </div>
    </div>
  );
};

export default SupplyList;
