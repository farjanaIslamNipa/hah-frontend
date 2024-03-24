import banner from "../../assets/images/home/header-banner.jpg";
import slide1 from "../../assets/images/home/hero-8.png";
import slide2 from "../../assets/images/home/hero-5.png";
import slide3 from "../../assets/images/home/hero-4.png";
import slide4 from "../../assets/images/home/hero-7.png";
import slide5 from "../../assets/images/home/hero-6.png";
import card1 from "../../assets/images/home/evaluating-suppliers.svg";
import card2 from "../../assets/images/home/achieving-synergy.svg";
import card3 from "../../assets/images/home/price-transparency.svg";
import card4 from "../../assets/images/home/inventory-control.svg";
import {motion} from 'framer-motion'
import { fadeIn } from "../../variants";

const HeroSection = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative">
          <img src={banner} alt="Banner" />
          <div className="absolute z-20 top-0 bg-brand px-10 rounded-2xl bg-opacity-50  h-full w-full flex items-center justify-center">
            <h1 className="text-white font-extrabold leading-8 text-[28px] sm:text-3xl lg:text-4xl xl:text-5xl">
              Building Bridges to Health in Times of Crisis
            </h1>
          </div>
        </div>
        <div className="relative bg-[#DFFCF1] dark:bg-gray-800 hidden md:block">
          <ul className="slideshow">
            <li>
              <span>
                <img src={slide1} alt="" />
              </span>
            </li>
            <li>
              <span>
                <img src={slide2} alt="" />
              </span>
            </li>
            <li>
              <span>
                <img src={slide3} alt="" />
              </span>
            </li>
            <li>
              <span>
                <img src={slide4} alt="" />
              </span>
            </li>
            <li>
              <span>
                <img src={slide5} alt="" />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <motion.div
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.7}}
       className="bottom-bar py-6 sm:py-8 bg-brand bg-opacity-40">
        <div className="custom-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
            <div className="bg-white p-3 lg:p-6 rounded-xl text-center">
              <img src={card1} alt="" className="h-6 sm:h-10 mx-auto" />
              <p className="font-bold leading-4 md:leading-5 mt-1 text-sm md:text-base">
                Evaluating Suppliers
              </p>
            </div>
            <div className="bg-white p-3 lg:p-6 rounded-xl text-center">
              <img src={card2} alt="" className="h-6 sm:h-10 mx-auto" />
              <p className="font-bold leading-4 md:leading-5 mt-1 text-sm md:text-base">
                Achieving Synergy
              </p>
            </div>
            <div className="bg-white p-3 lg:p-6 rounded-xl text-center">
              <img src={card4} alt="" className="h-6 sm:h-10 mx-auto" />
              <p className="font-bold leading-4 md:leading-5 mt-1 text-sm md:text-base">
                Centralizing Inventory Control{" "}
              </p>
            </div>
            <div className="bg-white p-3 lg:p-6 rounded-xl text-center">
              <img src={card3} alt="" className="h-6 sm:h-10 mx-auto" />
              <p className="font-bold leading-4 md:leading-5 mt-1 text-sm md:text-base">
                Price Transparency{" "}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
