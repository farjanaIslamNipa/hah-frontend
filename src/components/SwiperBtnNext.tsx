import {ReactNode} from "react";
import {useSwiper} from "swiper/react";


const SwiperBtnNext = ({className, children} : { className: string, children: ReactNode}) => {
  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slideNext()} className={className}>{children}</button>
  );
};

export default SwiperBtnNext;