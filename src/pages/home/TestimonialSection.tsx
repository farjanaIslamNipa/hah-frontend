import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
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
import {useGetTestimonialsQuery} from "../../redux/features/testimonials/testimonialApi";
import {TTestimonial} from "../../types";


const TestimonialSection = () => {

  
  const {data, isError } = useGetTestimonialsQuery(undefined)

  if (isError) {
    return <p className="p-5 font-bold text-brand text-center">Loading...</p>;
  }
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
          <div
          className="col-span-12 lg:col-span-8 xl:col-span-7">
            <div className="bg-white dark:bg-gray-800 bg-opacity-100 dark:bg-opacity-45 p-0 sm:p-8 relative">
              <Swiper 
              parallax={true}
              observer={true}
              observeParents={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              >
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
                {
                  data?.testimonials.map((testimonial : TTestimonial) => <SwiperSlide key={testimonial._id}>
                    <div className="slider-inner-card">
                      <img src={quoteTop} alt="" />
                      <p className="px-4 py-3">{testimonial?.testimonial}</p>
                      <div className="flex justify-end">
                        <img src={quoteBottom} alt="" className="" />
                      </div>
  
                      <div className="flex gap-3 items-center">
                        <img src={testimonialGif} alt="" className="h-16" />
                        <div className="pl-3 border-l border-gray-400 py-1">
                          <p className="font-bold mb-0">{testimonial?.name ? testimonial?.name : testimonial?.username}</p>
                          <p className="text-sm">{testimonial.address}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>)
                }
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
