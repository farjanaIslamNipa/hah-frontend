import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-d-2.svg";
import menuIcon from "../../assets/images/hamburger.svg";
import close from "../../assets/images/close.svg";
import { useState } from "react";
import cn from "../../utils/cn";
import loginIcon from "../../assets/images/login-icon-1.svg";
import logoutIcon from "../../assets/images/logout.svg";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {currentToken, logoutUser} from "../../redux/features/auth/authSlice";
import {toast} from "sonner";
import sun from '../../assets/images/sun.svg'
import moon from '../../assets/images/moon.svg'
import useTheme from "../../context/theme";

const Navbar = () => {
  const [expand, setExpand] = useState(false);
  const token = useAppSelector(currentToken)
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutUser())
    toast.success('Logout successfully', {duration: 2000})
  }

  const {themeMode, lightTheme, darkTheme} = useTheme()
  const onChangeTheme = () => {
    if(themeMode === 'dark'){
      lightTheme()
    }else {
      darkTheme()
    }
  }
  return (
    <div className="bg-black md:bg-white dark:bg-gray-900 shadow relative z-50">
      <div className="bg-[#DFFCF1] dark:bg-[#96e9e4] relative py-1">
        <div className="custom-container">
          <div className=" flex justify-end items-center gap-3">
          <div>
            <input onChange={onChangeTheme} checked={themeMode === 'dark'} type="checkbox" className="checkbox absolute opacity-0 top-0" id="checkbox" />
              <label htmlFor="checkbox" className="cursor-pointer flex justify-between items-center gap-1 bg-gray-400 pl-[3px] pr-[5px] py-[2px] relative rounded-full label">
                <img src={sun} alt="Light mode" className="h-6 w-6" />
                <img src={moon} alt="dark mode" className="h-5 w-5" />
                <div className='ball w-[22px] h-[22px] bg-gray-50 shadow-sm absolute top-[3px] left-[4px] rounded-full transition-transform delay-100 duration-200 ease-out'></div>
              </label>
            </div>
            <NavLink className="nav-item" to="/volunteer" end>
              <span className="text-gray-500 hover:text-brand underline font-bold">Join as a volunteer</span>
            </NavLink>
            {
              !token && 
              <NavLink to="/login" className="nav-item flex items-center gap-1 ">
                <img src={loginIcon} alt="Login" className="h-5" />
                <span className="text-gray-600">Login</span>
              </NavLink>
            }

            {
              token && 
              <button onClick={handleLogout} className=" flex items-center gap-1 ">
                <img src={logoutIcon} alt="Logout" className="h-4" />
                <span className="text-gray-500 font-bold">Logout</span>
              </button>
            }
          </div>
        </div>
      </div>
      <div className="custom-container py-2 bg-white dark:bg-gray-900">
        <div className="">
          <nav className="flex justify-between items-center">
            <div>
              <NavLink to="/" end>
                <img src={logo} alt="Logo" className="h-16" />
              </NavLink>
            </div>
            <div
              className={cn(
                "w-0 md:w-auto small-device-collapse-nav bg-brand md:bg-white bg-opacity-50 md:bg-opacity-100",
                { "w-full": expand }
              )}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-2 pt-4 md:pt-0 w-[70%] md:w-full bg-white dark:bg-gray-900 h-screen md:h-auto">
                {expand && (
                  <div className="absolute right-6 top-5 block md:hidden">
                    <button
                      onClick={() => setExpand(!expand)}
                      className="bg-white transition-all duration-150 hover:bg-opacity-100 rounded p-[6px]"
                    >
                      <img src={close} alt="Close" className="h-4" />
                    </button>
                  </div>
                )}
                <div className="pl-5 pb-6 block md:hidden">
                  <img src={logo} alt="Logo" className="h-14" />
                </div>
                <NavLink to="/supplies" className="nav-item" end>
                  All Supplies
                </NavLink>

                  <NavLink to="/leaderboard" className="nav-item" end>
                    Leaderboard
                  </NavLink>
                  <NavLink to="/community" className="nav-item" end>
                    Community
                  </NavLink>
                  <NavLink to="/about-us" className="nav-item" end>
                    About us
                  </NavLink>
                {
                  token && 
                  <NavLink to="/dashboard" className="nav-item" end>
                    Dashboard
                  </NavLink>
                }

              </div>
            </div>
            <div className="block md:hidden">
              <button onClick={() => setExpand(!expand)}>
                <img src={menuIcon} alt="Menu" className="h-5" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
