import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperBtnNext from "../../components/SwiperBtnNext";
import SwiperBtnPrev from "../../components/SwiperBtnPrev";
import quoteTop from "../../assets/images/home/qoute-top.svg";
import quoteBottom from "../../assets/images/home/quote-bottom.svg";
import testimonialGif from "../../assets/images/home/testimonial.gif";
import testimonial from "../../assets/images/home/testimonial.png";
import arrowNext from "../../assets/images/home/arrow-left.svg";
import arrowPrev from "../../assets/images/home/arrow-right.svg";
import {motion} from 'framer-motion'
import {fadeIn} from "../../variants";

const TestimonialSection = () => {
  return (
    <div className="bg-brand bg-opacity-55 pt-10 lg:pt-20 mt-16 lg:mt-20 pb-12 md:pb-14 lg:pb-[70px] xl:pb-20">
      <div className="custom-container">
        <h1 className="section-title text-white">Testimonials</h1>
        <p className="text-lg font-medium text-white pr-0 lg:pr-8 text-center">
          Supplier Spotlight: Voices from Our Trusted Medical Partners
        </p>
        <div className="grid grid-cols-12 gap-x-4 mt-0 md:mt-10 lg:mt-14 items-center">
          <motion.div
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.7}}
           className="col-span-4 xl:col-span-5 hidden lg:block">
            <div className="p-0 xl:p-12">
              <img src={testimonial} alt="Testimonial" />
            </div>
          </motion.div>
          <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.7}}
          className="col-span-12 lg:col-span-8 xl:col-span-7">
            <div className="bg-white p-0 sm:p-8 relative text-gray-900">
              <Swiper spaceBetween={30} slidesPerView={1} loop={true}>
                <div className="absolute z-50 bottom-8 sm:bottom-0 right-[80px] sm:right-[88px] visible">
                  <SwiperBtnNext className="h-9 w-9 shadow-md flex justify-center items-center bg-secondary transition-all delay-100 ease-in-out">
                    <img src={arrowNext} alt="Next" />
                  </SwiperBtnNext>
                </div>
                <div className="absolute z-50 bottom-8 sm:bottom-0 right-[35px] sm:right-32 visible">
                  <SwiperBtnPrev className="h-9 w-9 shadow-md flex justify-center items-center bg-secondary transition-all delay-100 ease-in-out">
                    <img src={arrowPrev} alt="Prev" />
                  </SwiperBtnPrev>
                </div>
                <SwiperSlide>
                  <div className="slider-inner-card">
                    <img src={quoteTop} alt="" />
                    <p className="px-4 py-3">
                      In our search for a dependable medical supply provider, we
                      found <b>Health Aid Hub</b> to be a perfect fit. Their
                      attention to detail and commitment to excellence align
                      perfectly with our values. It's reassuring to know that we
                      can rely on them for our supply needs
                    </p>
                    <div className="flex justify-end">
                      <img src={quoteBottom} alt="" className="" />
                    </div>

                    <div className="flex gap-3 items-center">
                      <img src={testimonialGif} alt="" className="h-16" />
                      <div className="pl-3 border-l border-gray-400 py-1">
                        <p className="font-bold mb-0">CareLink Solutions</p>
                        <p className="text-sm">
                          123 Oak Street, Springfield, MA 01103
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-inner-card">
                    <img src={quoteTop} alt="" />
                    <p className="px-4 py-3">
                      As a pharmaceutical distributor, we rely on dependable
                      suppliers to meet the demands of our customers.{" "}
                      <b>Health Aid Hub</b> has consistently delivered top-notch
                      products, backed by excellent customer service. Their
                      dedication to our success has made them an invaluable
                    </p>
                    <div className="flex justify-end">
                      <img src={quoteBottom} alt="" className="" />
                    </div>

                    <div className="flex gap-3 items-center">
                      <img src={testimonialGif} alt="" className="h-16" />
                      <div className="pl-3 border-l border-gray-400 py-1">
                        <p className="font-bold mb-0">HealthyLiving Pharma</p>
                        <p className="text-sm">
                          789 Maple Avenue, Riverside, CA 92501
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-inner-card">
                    <img src={quoteTop} alt="" />
                    <p className="px-4 py-3">
                      We have been sourcing medical supplies from{" "}
                      <b>Health Aid Hub</b> for several years now, and the
                      experience has been nothing short of exceptional. From
                      their extensive product range to their prompt deliveries,
                      they continue to exceed our expectations. We highly
                      recommend them to any healthcare provider looking for a
                      reliable supply partner
                    </p>
                    <div className="flex justify-end">
                      <img src={quoteBottom} alt="" className="" />
                    </div>

                    <div className="flex gap-3 items-center">
                      <img src={testimonialGif} alt="" className="h-16" />
                      <div className="pl-3 border-l border-gray-400 py-1">
                        <p className="font-bold mb-0">MediCare Solutions</p>
                        <p className="text-sm">
                          456 Pine Street, Seattle, WA 98101
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-inner-card">
                    <img src={quoteTop} alt="" />
                    <p className="px-4 py-3">
                      Working with <b>Health Aid Hub</b> has been a game-changer
                      for our healthcare facility. Their extensive inventory of
                      medical supplies, coupled with their responsive customer
                      service, has helped us streamline our operations and
                      improve patient care. We're grateful for their partnership
                    </p>
                    <div className="flex justify-end">
                      <img src={quoteBottom} alt="" className="" />
                    </div>

                    <div className="flex gap-3 items-center">
                      <img src={testimonialGif} alt="" className="h-16" />
                      <div className="pl-3 border-l border-gray-400 py-1">
                        <p className="font-bold mb-0">Vitality Healthcare</p>
                        <p className="text-sm">
                          987 Elm Drive, Austin, TX 78701
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
