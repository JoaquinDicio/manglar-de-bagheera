import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Slider.css";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const images = [
  { src: "/place-3.webp", alt: "Logo del lugar en tono neon" },
  { src: "/place-1.webp", alt: "sala de estar de Manglar" },
  { src: "/place.webp", alt: "lamparas de Manglar" },
  { src: "/place-2.webp", alt: "Sillas de Manglar" },
  { src: "/place-5.webp", alt: "Mesas del sitio" },
  { src: "/place-4.webp", alt: "show en el lugar con humo" },
];

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
        {images.map((image) => (
          <SwiperSlide>
            <img src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
