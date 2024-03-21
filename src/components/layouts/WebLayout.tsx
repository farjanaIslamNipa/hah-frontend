import {Outlet} from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const WebLayout = () => {
  return (
    <div>
      <Navbar />
        <Outlet />
      <Footer />
    </div>
  );
};

export default WebLayout;