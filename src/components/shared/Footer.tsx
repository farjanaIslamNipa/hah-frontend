import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-d-2.svg";
import linkedIn from "../../assets/images/linked-in.svg";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
const Footer = () => {
  return (
    <div>
      <div className="bg-gray-200 pt-10 sm:pt-14 pb-5 sm:pb-10 lg:pb-14">
        <div className="custom-container">
          <div className="block sm:flex items-center gap-6 lg:gap-10">
            <div className="mb-5 sm:mb-0">
              <img src={logo} alt="" className="h-[50px] sm:h-[70px]" />
            </div>
            <div className="w-full">
              <div className="border-l-none sm:border-l border-gray-500 pl-0 sm:pl-6 lg:pl-10">
                <div className="border-b border-gray-500 pb-6 lg:pb-10">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex justify-start md:justify-center">
                      <NavLink
                        to="/supplies"
                        className="font-semibold px-4 py-2"
                      >
                        All <br /> Supplies
                      </NavLink>
                    </div>
                    <div className="border-x-none md:border-x border-gray-500 flex justify-start md:justify-center">
                      <NavLink
                        to="/privacy-policy"
                        className="font-semibold px-4 py-2"
                      >
                        Privacy <br /> Policy
                      </NavLink>
                    </div>
                    <div className="border-r-none md:border-r border-gray-500 flex justify-start md:justify-center">
                      <NavLink
                        to="/privacy-policy"
                        className="font-semibold px-4 py-2"
                      >
                        Terms & <br /> Conditions
                      </NavLink>
                    </div>
                    <div className="flex justify-start md:justify-center items-center gap-2">
                      <a href="">
                        <img src={linkedIn} alt="Linkedin" className="h-10" />
                      </a>
                      <a href="">
                        <img src={facebook} alt="Facebook" className="h-10" />
                      </a>
                      <a href="">
                        <img
                          src={instagram}
                          alt="Instagram"
                          className="h-8 ml-[2px]"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-center pt-5">
                  <p className="text-sm mb-0">
                    <b>Call us:</b> 01700445889
                  </p>
                  <p className="text-sm">
                    <b>Email us:</b> healthaidhub@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-brand p-5">
        <p className="text-center text-sm text-white">
          © {new Date().getFullYear()}. Health Aid Hub. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
