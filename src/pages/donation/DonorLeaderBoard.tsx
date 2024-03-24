/* eslint-disable @typescript-eslint/no-explicit-any */
import {useNavigate} from 'react-router-dom';
import leaderImg from '../../assets/images/donors.png'
import Button from '../../components/ui/Button';
import {useAppSelector} from '../../redux/hooks';
import {currentUser} from '../../redux/features/auth/authSlice';
import {toast} from 'sonner';
import {useGetDonationsQuery} from '../../redux/features/donations/donationApi';
import {TDonation} from '../../types';

const DonorLeaderBoard = () => {
  const user = useAppSelector(currentUser)
  const navigate = useNavigate()
  const handleDonate = () => {
    if(!user?.email){
      toast.warning('To donate you have to login first')
      navigate('/login')
    }else{
      navigate('/donate')
    }
  }

  // Getting leader board data
  const {data, isError} = useGetDonationsQuery(undefined)

  const donors : string[] = []
  data?.donations.map((item : TDonation) => donors.push(item.email))

  const countMap : any = {};
  donors.forEach(donor => {
      countMap[donor] = (countMap[donor] || 0) + 1;
  });


  const leaderBoard = []
   for (const [key, value] of Object.entries(countMap)) {
    const leader = {email: `${key}`, amount: `${value}` }
    leaderBoard.push(leader)
  }


  if (isError) {
    return <p className="p-5 font-bold text-brand text-center">Loading...</p>;
  }
  return (
    <>
      <div className='custom-container py-10'>
        <div className="grid grid-cols-12 pb-5">
          <div className='col-span-4'>
            <img src={leaderImg} className='h-[300px] w-auto rounded-xl' alt="Donor Leaders" />
          </div>
          <div className='col-span-8 space-y-4'>
            <p>Your generosity serves as a beacon of hope during these challenging times. Your contribution will not only aid in our mission to provide essential care to those in need but will also play a crucial role in saving lives and alleviating suffering.</p>
            <p>In times like these, the importance of community support cannot be overstated. Your willingness to lend a helping hand reflects the true spirit of compassion and solidarity that binds us together as a community.</p>
            <p className="my-4 font-semibold text-red-700 text-[18px]">Would you like to contribute a donation to support our cause ?</p>
            <Button onClick={handleDonate}>Donate Now</Button>
          </div>
        </div>
      </div>
      <div className="leader-board-bg pt-14 pb-20">
        <h1 className="text-center text-white text-2xl font-extrabold pb-8">Champions of Generosity: Donors Leaderboard</h1>
        <div className="max-w-[60%] mx-auto bg-white dark:bg-gray-900 rounded-2xl p-10 shadow-lg">
          <div className="overflow-x-auto relative">
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="py-3 px-6">Position</th>
                    <th scope="col" className="py-3 px-6">Email</th>
                    <th scope="col" className="py-3 px-6 text-center">Donate count</th>
                </tr>
                </thead>
                <tbody>
                  {
                    leaderBoard?.map((leader, index) => <tr key={leader.email} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">{index + 1}</td>
                    <td className="py-4 px-6">{leader?.email}</td>
                    <td className="py-4 px-6 text-center">{leader?.amount} {Number(leader?.amount) < 2 ? 'Time' : 'Times'}</td>
                </tr>)
                  }

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonorLeaderBoard;