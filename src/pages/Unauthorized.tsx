import { NavLink } from "react-router-dom";
import unauthorized from "../assets/images/unauthorized.png";
const Unauthorized = () => {
  return (
    <div className="h-screen flex justify-center items-center p-10 bg-sky-50">
      <div>
        <img src={unauthorized} alt="Unauthorized" />
        <p className="mt-8 font-semibold text-gray-700 text-lg text-center">
          You are not <span className="font-bold text-red-500">authorized</span>{" "}
          to visit this page
        </p>
        <div className="mt-3 text-gray-700 text-center font-medium">
          <span>Please go back to </span>
          <NavLink
            to="/"
            className="bg-secondary bg-opacity-15 rounded-md px-4 py-1 font-bold text-brand mx-2"
          >
            Home
          </NavLink>{" "}
          or
          <NavLink
            to="/login"
            className="bg-secondary bg-opacity-15 rounded-md px-4 py-1 font-bold text-brand mx-2"
          >
            Login
          </NavLink>{" "}
          to visit
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
