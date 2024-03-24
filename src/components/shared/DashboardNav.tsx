import userImg from '../../assets/images/user-2.svg'
import {currentUser} from '../../redux/features/auth/authSlice';
import {useAppSelector} from '../../redux/hooks';
import ThemeButton from '../ui/ThemeButton';

const DashboardNav = () => {
  const user = useAppSelector(currentUser)

  return (
    <div className="bg-gray-300 dark:bg-gray-800 py-3 flex items-center justify-end shadow-md px-10">
    <ThemeButton />
    <div className="flex items-center gap-3 ml-3">
      <p className='text-sm text-gray-600 dark:text-brand font-semibold'>{user?.email}</p>
      <img src={userImg} alt="" className='h-12 w-12 rounded-full' />
    </div>
  </div>
  );
};

export default DashboardNav;