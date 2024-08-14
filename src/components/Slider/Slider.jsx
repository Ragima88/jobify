import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "./slider.scss";

const Slider = ({ items }) => {
  return (
    <Swiper
      className={"slider"}
      modules={[Navigation, Autoplay]}
      slidesPerView={3}
      navigation
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop={true}
      breakpoints={{
        1024: { slidesPerView: 4 },
        768: { slidesPerView: 3 },
        640: { slidesPerView: 2 },
        320: { slidesPerView: 1 },
      }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <blockquote className="slider-testimonial">
            <p className="slider-content">{item.content}</p>
            <img className="slider-image" src={item.photo} alt={item.name} />
            <h3 className="slider-name">{item.name}</h3>
          </blockquote>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
