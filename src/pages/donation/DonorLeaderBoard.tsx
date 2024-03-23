/* eslint-disable @typescript-eslint/no-explicit-any */
import {useNavigate} from 'react-router-dom';
import leaderImg from '../../assets/images/donors.png'
import Button from '../../components/ui/Button';
import {useAppSelector} from '../../redux/hooks';
import {currentUser} from '../../redux/features/auth/authSlice';
import {toast} from 'sonner';
import {useGetDonationsQuery} from '../../redux/features/donations/donationApi';
import {TDonation} from '../../types';
import {useEffect, useState} from 'react';

const DonorLeaderBoard = () => {
  const [leaderBoard, setLeaderBoard] = useState([])
  const {data, isError} = useGetDonationsQuery(undefined)

  const donors : string[] = []
  data?.donations.map((item : TDonation) => donors.push(item.email))


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


  const sortedLeaderBoard = () => {
    const countMap : any = {};
    donors.forEach(donor => {
        countMap[donor] = (countMap[donor] || 0) + 1;
    });
    console.log(countMap, 'countMap')
    const uniqueElements = [...new Set(donors)];

    uniqueElements.sort((a, b) => {
        return countMap[b] - countMap[a];
    });

    const arr = []
     for (const [key, value] of Object.entries(countMap)) {
      const leader = {name: `${key}`, amount: `${value}` }
      console.log(leader, 'arr')
      arr.push(leader)
    }

    return arr;
}

console.log( sortedLeaderBoard(), 'll')
useEffect(() => {
  // sortedLeaderBoard()
}, [])

// console.log(leaderBoard, 'll')

  if (isError) {
    return <p className="p-5 font-bold text-brand text-center">Loading...</p>;
  }
  return (
    <div className='custom-container py-10'>
      <div className="grid grid-cols-12">
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
      <div className="mt-14">
        <h1 className="text-center text-2xl font-extrabold">Champions of Generosity: Donors Leaderboard</h1>
        <div className="mt-10 donor-bg py-5">
          <div className="max-w-[60%] mx-auto bg-white rounded-2xl p-10 shadow-lg">
          <div className="overflow-x-auto relative">
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="py-3 px-6">Position</th>
                    <th scope="col" className="py-3 px-6">Name</th>
                    <th scope="col" className="py-3 px-6">Category</th>
                    <th scope="col" className="py-3 px-6">Amount</th>
                </tr>
                </thead>
                <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">Alex Johnson</td>
                    <td className="py-4 px-6">82926417</td>
                    <td className="py-4 px-6">$4,500.00</td>
                    <td className="py-4 px-6">Yes</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">Maria Garcia</td>
                    <td className="py-4 px-6">55387621</td>
                    <td className="py-4 px-6">$3,150.00</td>
                    <td className="py-4 px-6">No</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">James Smith</td>
                    <td className="py-4 px-6">90817264</td>
                    <td className="py-4 px-6">$7,820.00</td>
                    <td className="py-4 px-6">Yes</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">Patricia Brown</td>
                    <td className="py-4 px-6">26483910</td>
                    <td className="py-4 px-6">$1,230.00</td>
                    <td className="py-4 px-6">Yes</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                    <td className="py-4 px-6">Ethan Davis</td>
                    <td className="py-4 px-6">64738290</td>
                    <td className="py-4 px-6">$865.00</td>
                    <td className="py-4 px-6">No</td>
                </tr>
                </tbody>
            </table>
            </div>
          </div>
    
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorLeaderBoard;