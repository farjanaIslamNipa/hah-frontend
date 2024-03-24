import aboutUsImg from "../../assets/images/home/about-us.jpeg";
import {motion} from 'framer-motion'
import {fadeIn} from "../../variants";

const AboutUsSection = () => {
  return (
    <div className="container-padding ">
      <h1 className="section-title">What we do</h1>
      <div className="about-us-bg mt-12 pt-10 md:pt-24 lg:pt-32">
        <div className="custom-container">
          <div className="w-full md:w-[80%] lg:w-[60%] mx-auto">
            <motion.div
              variants={fadeIn("down", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false}}
            ><img src={aboutUsImg} alt="" className="w-full" /></motion.div>
            <div className="bg-white dark:bg-gray-800 p-5 sm:p-8 space-y-8">
              <div>
                <p>
                  <b>About us:</b>
                </p>
                <p>
                  Welcome to our platform dedicated to supporting communities in
                  the aftermath of disasters through the efficient management
                  and distribution of health and medical supplies. At [Platform
                  Name], we understand the critical importance of timely and
                  organized responses to health crises following natural
                  disasters, conflicts, and other emergencies. Our mission is to
                  streamline the process of getting essential supplies to those
                  in need, ensuring that no community is left without vital
                  medical assistance during their most vulnerable moments.
                </p>
              </div>
              <div>
                <p>
                  <b>Our Vision:</b>
                </p>
                <p>
                  We envision a world where communities affected by disasters
                  have rapid access to life-saving health and medical supplies,
                  enabling them to recover and rebuild with resilience. Through
                  our platform, we strive to create a network of support that
                  spans across regions and borders, connecting donors,
                  volunteers, and communities in need to forge a stronger, more
                  prepared global response to health emergencies.
                </p>
              </div>
              <div>
                <p>
                  <b>What We Do:</b>
                </p>
                <p>
                  At <span className="text-brand font-bold">HAH</span>, we serve
                  as a centralized hub for coordinating the donation,
                  procurement, and distribution of health and medical supplies
                  in the aftermath of disasters. Our platform leverages
                  technology and partnerships to optimize supply chain
                  logistics, ensuring that resources reach affected areas
                  promptly and efficiently. We work closely with local
                  authorities, NGOs, healthcare providers, and volunteers to
                  assess needs, prioritize aid delivery, and facilitate
                  on-the-ground support efforts.
                </p>
              </div>
              <div>
                <p>
                  <b>Our Commitment:</b>
                </p>
                <p>
                  We are committed to transparency, accountability, and
                  inclusivity in all aspects of our operations. Every donation
                  made through our platform is tracked and accounted for,
                  ensuring that resources are allocated equitably and reach
                  those who need them most. We prioritize the needs of
                  vulnerable populations, including children, the elderly, and
                  individuals with chronic health conditions, in our
                  distribution efforts, aiming to minimize disparities in access
                  to essential healthcare services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
