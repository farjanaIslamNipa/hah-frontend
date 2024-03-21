import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/dashboard-logo.svg";
import dashboardIcon from "../../assets/images/dashbaord-white.svg";
import serviceIcon from "../../assets/images/service-white.svg";
import eventIcon from "../../assets/images/event-white.svg";
import recentEventIcon from "../../assets/images/recent-event-white.svg";
import testimonialIcon from "../../assets/images/testimonial.svg";
import {useAppDispatch} from "../../redux/hooks";
import { logoutUser} from "../../redux/features/auth/authSlice";
import {toast} from "sonner";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logoutUser())
    navigate('/')
    toast.success('Successfully logged out', {duration: 2000})
  }
  
  return (
    <div className="h-screen bg-gray-800 sticky top-0 left-0 overflow-y-auto">
      <nav className="flex flex-col pt-5 px-4 gap-y-4 text-gray-100 truncate">
        <NavLink to="/" className="mb-10 mx-auto"><img src={logo} alt="logo" className="h-16" /></NavLink>
        <NavLink to="/dashboard" end>
          <div className="flex items-end gap-2 p-1">
            <img
              src={dashboardIcon}
              alt="Dashboard"
              className="h-8 sm:h-6 w-8 sm:w-6"
            />
            <p className="dashboard-nav-item">
              Dashboard
            </p>
          </div>
        </NavLink>
        <NavLink to="/dashboard/supplies" end>
          <div className="flex items-end gap-2 p-1">
            <img
              src={recentEventIcon}
              alt="All Supplies"
              className="h-8 sm:h-6 w-8 sm:w-6"
            />
            <p className="dashboard-nav-item">
              All Supplies
            </p>
          </div>
        </NavLink>
        <NavLink to="/dashboard/create-supply">
          <div className="flex items-end gap-2 p-1">
            <img
              src={eventIcon}
              alt="Create Supply"
              className="h-8 sm:h-6 w-8 sm:w-6"
            />
            <p className="dashboard-nav-item">
              Create Supply
            </p>
          </div>
        </NavLink>
        <NavLink to="/dashboard/create-testimonial">
          <div className="flex items-end gap-2 p-1">
            <img
              src={testimonialIcon}
              alt="Create Supply"
              className="h-7 sm:h-5 w-7 sm:w-5"
            />
            <p className="dashboard-nav-item">
              Create Testimonial
            </p>
          </div>
        </NavLink>
        <button onClick={handleLogout} className="pl-[6px]">
          <div className="flex items-end gap-2">
            <img
              src={serviceIcon}
              alt="Logout"
              className="h-8 sm:h-6 w-8 sm:w-6"
            />
            <p className="dashboard-nav-item">
              Logout
            </p>
          </div>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
