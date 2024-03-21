import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const GallerySection = () => {
  return (
    <div className="custom-container container-padding">
      <h1 className="section-title">HAH Gallery</h1>
      <p className="text-center text-lg">
        Contributions to Health and Medical Supplies in Humanitarian Endeavors
      </p>
      <div className="mt-0 lg:mt-8 xl:mt-10 gallery-slider">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          autoplay={true}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://www.wfp.org/sites/default/files/2020-11/migrated-story-hero-images/1%2Ao9WCE6Dpwfnwk2boFYoM8w.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.thedialogue.org/wp-content/uploads/2020/05/800px-China_COVID19_test_kit_PH_donation_8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://projectcure.org/app/uploads/2022/02/UKRAINE-WEB-PIX.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://tribuneonlineng.com/wp-content/uploads/2021/03/foundation1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://s.abcnews.com/images/International/ukraine-humitarian-aid-01-ht-jef-220527_1653692100667_hpMain_16x9_992.jpg?w=384" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://s.abcnews.com/images/International/ukraine-humitarian-aid-03-ht-jef-220527_1653692211257_hpEmbed_4x3_992.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://english.redcross.or.th/wp-content/uploads/2021/08/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B8%AA%E0%B8%99%E0%B8%B2%E0%B8%A13-1024x682.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.redcross.ca/crc/img/Donate/cta-direct-fundraising.jpg?ext=.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.msf.or.jp/english/img/index-img-01.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn1.internationalmedicalcorps.org/wp-content/uploads/2022/02/cropped-UKR_MIH01710-e1674669974304.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i0.wp.com/www.directrelief.org/wp-content/uploads/2019/05/IMG_7330-e1605810426575.jpg?ssl=1" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default GallerySection;
