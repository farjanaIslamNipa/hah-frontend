import {useNavigate, useParams} from "react-router-dom";
import {useGetSingleSupplyQuery} from "../../redux/features/supply/supplyApi";
import {isValidURL} from "../../utils/validUrl";
import defaultImage from '../../assets/images/default-img.jpg'
import {useAppSelector} from "../../redux/hooks";
import {currentUser} from "../../redux/features/auth/authSlice";
import {toast} from "sonner";
import Button from "../../components/ui/Button";

const SupplyView = () => {
  const {id} = useParams()
  const user = useAppSelector(currentUser)

  const {data : supply, isError} = useGetSingleSupplyQuery(id) 
  const navigate = useNavigate()
  const handleDonate = () => {
    if(!user?.email){
      toast.warning('To donate you have to login first')
      navigate('/login')
    }else{
      navigate('/donate')
    }
  }
  if (isError) {
    return <p className="p-5 font-bold text-brand text-center">Loading...</p>;
  }
  return (
    <div className="bg-white dark:bg-gray-700">
      <div className="custom-container pt-4 md:pt-10 pb-16">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5">
            <div className="p-5 w-full flex justify-center border-none md:border border-gray-200 rounded-xl">
            {
              (supply?.data?.img && isValidURL(supply?.data?.img))? <img
              src={supply?.data?.img}
              alt={supply?.data?.title}
              className="rounded-xl"
              />
              :
              <img
              src={defaultImage}
              alt={supply?.data?.title}
              />
              }
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="pl-0 md:pl-8">
              <h3 className="text-2xl font-semibold mb-3 capitalize">{supply?.data?.title}</h3>
              <p>Category: <b className="text-gray-600 dark:text-gray-400">{supply?.data?.category || 'N/F'}</b></p>
              <p>Quantity: <b className="text-gray-600 dark:text-gray-400">{supply?.data?.quantity || 'N/F'}</b></p>
              <p className="mt-5"><b>Description:</b>{" "}{supply?.data?.description || 'No description found'}</p>
              <div className="mt-8">
                <Button onClick={handleDonate}>Donate Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplyView;