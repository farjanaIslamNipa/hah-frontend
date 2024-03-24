import icon1 from "../../assets/images/home/help-icon-1.svg";
import icon2 from "../../assets/images/home/help-icon-2.svg";
import icon3 from "../../assets/images/home/help-icon-3.svg";
import {motion} from 'framer-motion'
import {fadeIn} from "../../variants";

const HowCanHelpSection = () => {
  return (
    <div
    className="bg-[#012139] pt-10 md:pt-20 mt-8 md:mt-16 lg:mt-20 dark:mt-0 pb-10 md:pb-24">
      <div className="custom-container">
        <h1 className="section-title text-white">How we can help you</h1>
        <motion.div
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false}}
         className="mt-8 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white pt-4 px-6 pb-6 rounded-xl bg-opacity-5">
            <img src={icon1} alt="" className="mx-auto h-24" />
            <p className="text-secondary font-extrabold text-center text-2xl mt-3">
              CASE REVENUE
            </p>
            <p className="text-white mt-3">
              Optimize revenue with seamless charge capture at the point of
              care, ensuring complete and timely case costs. Data insights and
              revenue analysis enhance management decision-making and contribute
              to the overall financial efficiency of case management while
              improving.
            </p>
          </div>
          <div className="bg-white pt-4 px-6 pb-6 rounded-xl bg-opacity-5">
            <img src={icon2} alt="" className="mx-auto h-24" />
            <p className="text-secondary font-extrabold text-center text-2xl mt-3">
              PATIENT SAFETY
            </p>
            <p className="text-white mt-3">
              Empower clinical teams acting as the last line of defense with
              safety tools. Mitigate risk linked to expired or recalled products
              by achieving a risk-free inventory that prevents ‘never events’.
              Leverage expiry reports to inform product selection and to
              promptly eliminate unsafe items.
            </p>
          </div>
          <div className="bg-white pt-4 px-6 pb-6 rounded-xl bg-opacity-5">
            <img src={icon3} alt="" className="mx-auto h-24" />
            <p className="text-secondary font-extrabold text-center text-2xl mt-3">
              INVENTORY CONTROL
            </p>
            <p className="text-white mt-3">
              Achieve a comprehensive inventory view by documenting every
              consumed item. Replace guesswork with precision data and implement
              demand-driven procurement. Attain full inventory visibility
              through automated tracking, eliminating shortages, surpluses, and
              wastage.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowCanHelpSection;
