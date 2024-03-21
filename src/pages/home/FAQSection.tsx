import faqImg from "../../assets/images/home/faq.jpg";
import {motion} from 'framer-motion'
import {fadeIn} from "../../variants";
const FAQSection = () => {
  return (
    <div className="custom-container container-padding pb-20">
      <h1 className="section-title">Frequently asked questions</h1>
      <motion.div
      variants={fadeIn("down", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false}}
      className="grid grid-cols-12 mt-5 md:mt-14">
        <div className="col-span-12 md:col-span-8">
          <ul className="shadow-lg px-8">
            <li className="item">
              <input
                type="checkbox"
                id="faq1"
                className="peer appearance-none"
              />
              <i className="fa-solid fa-chevron-right peer-checked:hidden inline"></i>
              <i className="fa-solid fa-chevron-down peer-checked:inline hidden"></i>
              <label htmlFor="faq1" className="py-4 cursor-pointer grow">
                <p>
                  1. How does the Post-Disaster Community Health and Medical Supply
                  Chain Platform ensure the timely delivery of essential medical
                  supplies to affected areas?
                </p>
              </label>
              <div className="content">
                <p>
                  The Post-Disaster Community Health and Medical Supply Chain
                  Platform utilizes advanced logistics algorithms and real-time
                  monitoring systems to ensure swift delivery of essential
                  medical supplies to affected areas. By collaborating with
                  local authorities and trusted partners, we prioritize the most
                  critical needs and streamline distribution channels for
                  efficient response.
                </p>
              </div>
            </li>
            <li className="item">
              <input
                type="checkbox"
                id="faq2"
                className="peer appearance-none"
              />
              <i className="fa-solid fa-chevron-right peer-checked:hidden inline"></i>
              <i className="fa-solid fa-chevron-down peer-checked:inline hidden"></i>
              <label htmlFor="faq2" className="py-4 cursor-pointer grow">
                <p>
                  2. What measures are in place to guarantee the reliability and
                  safety of medical products distributed through the platform
                  after a disaster?
                </p>
              </label>
              <div className="content">
                <p>
                  Our platform strictly adheres to regulatory standards and
                  works exclusively with reputable suppliers and manufacturers.
                  All medical products undergo rigorous quality control checks
                  and are stored and transported according to industry best
                  practices to guarantee their integrity and safety.
                </p>
              </div>
            </li>
            <li className="item">
              <input
                type="checkbox"
                id="faq3"
                className="peer appearance-none"
              />
              <i className="fa-solid fa-chevron-right peer-checked:hidden inline"></i>
              <i className="fa-solid fa-chevron-down peer-checked:inline hidden"></i>
              <label htmlFor="faq3" className="py-4 cursor-pointer grow">
                <p>
                  3. Can local healthcare facilities and organizations easily
                  access and navigate the platform to request assistance and
                  supplies during post-disaster recovery efforts?
                </p>
              </label>
              <div className="content">
                <p>
                  We've designed the platform with user experience in mind,
                  offering intuitive interfaces and comprehensive support
                  resources. Local healthcare facilities and organizations can
                  easily access the platform through web or mobile interfaces,
                  enabling seamless navigation and quick request submissions
                  during post-disaster recovery efforts.
                </p>
              </div>
            </li>
            <li className="item">
              <input
                type="checkbox"
                id="faq4"
                className="peer appearance-none"
              />
              <i className="fa-solid fa-chevron-right peer-checked:hidden inline"></i>
              <i className="fa-solid fa-chevron-down peer-checked:inline hidden"></i>
              <label htmlFor="faq4" className="py-4 cursor-pointer grow">
                <p>
                  4. How does the platform handle inventory management and tracking
                  to prevent shortages or overstocking of critical medical
                  supplies?
                </p>
              </label>
              <div className="content">
                <p>
                  Our platform employs state-of-the-art inventory management
                  systems that enable real-time tracking of stock levels,
                  expiration dates, and consumption patterns. This proactive
                  approach helps prevent shortages or overstocking of critical
                  medical supplies by providing stakeholders with actionable
                  insights and automated replenishment mechanisms.
                </p>
              </div>
            </li>
            <li className="item">
              <input
                type="checkbox"
                id="faq5"
                className="peer appearance-none"
              />
              <i className="fa-solid fa-chevron-right peer-checked:hidden inline"></i>
              <i className="fa-solid fa-chevron-down peer-checked:inline hidden"></i>
              <label htmlFor="faq5" className="py-4 cursor-pointer grow">
                <p>
                  5. What contingency plans are in place to address potential
                  disruptions to the supply chain or logistical challenges in
                  delivering aid to disaster-stricken communities?
                </p>
              </label>
              <div className="content">
                <p>
                  We understand the importance of preparedness in handling
                  unexpected disruptions to the supply chain. Our platform
                  incorporates robust contingency plans that account for various
                  scenarios, including natural disasters, infrastructure
                  failures, and geopolitical challenges. By diversifying
                  sourcing strategies and maintaining strategic stockpiles, we
                  aim to mitigate risks and ensure continuity of essential
                  healthcare services in times of crisis. Additionally, ongoing
                  collaboration with local communities and stakeholders allows
                  for adaptive responses tailored to specific needs and
                  circumstances.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-span-4 hidden md:block">
          <div className="h-[365px]">
            <img src={faqImg} alt="FAQ" className="h-full w-full object-cover" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FAQSection;
