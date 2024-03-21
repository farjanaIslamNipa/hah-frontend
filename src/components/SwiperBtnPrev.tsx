import {ReactNode} from "react";
import {useSwiper} from "swiper/react";


const SwiperBtnPrev = ({className, children} : { className:string, children: ReactNode}) => {
  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slidePrev()} className={className}>{children}</button>
  );
};

export default SwiperBtnPrev;