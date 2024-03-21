import userImg from '../../assets/images/user-2.svg'
import {currentUser} from '../../redux/features/auth/authSlice';
import {useAppSelector} from '../../redux/hooks';

const DashboardNav = () => {
  const user = useAppSelector(currentUser)

  return (
    <div className="bg-white py-3 flex items-center justify-end shadow-md px-10">
    <div className="flex items-center gap-3">
      <p className='text-sm text-gray-600 font-semibold'>{user?.email}</p>
      <img src={userImg} alt="" className='h-12 w-12 rounded-full' />
    </div>
  </div>
  );
};

export default DashboardNav;