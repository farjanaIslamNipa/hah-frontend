import { NavLink } from "react-router-dom";
import notFound from "../assets/images/not-found-page.png";
const NotFound = () => {
  return (
    <div className="h-screen flex justify-center items-center p-10 bg-sky-50">
      <div>
        <img src={notFound} alt="Page not found" className=" h-[200px]" />
        <p className="mt-5 font-semibold text-lg text-center">
          Go back to{" "}
          <NavLink to="/" className="text-brand font-extrabold underline tracking-wider">
            Home
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
