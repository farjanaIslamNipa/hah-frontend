import {Outlet} from "react-router-dom";
import Sidebar from "../shared/Sidebar";
import DashboardNav from "../shared/DashboardNav";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 sm:col-span-3 lg:col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-10 sm:col-span-9 lg:col-span-10">
        <DashboardNav />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;