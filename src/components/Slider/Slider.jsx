import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Slider.css";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Slider() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/place-1.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/place-2.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/place-3.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/place.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/place-5.webp" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
