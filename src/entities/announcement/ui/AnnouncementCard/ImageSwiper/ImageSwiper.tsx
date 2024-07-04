import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import styles from "./ImageSwiper.module.scss";

export const ImageSwiper = () => {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className={styles.swiper}>
      <SwiperSlide className={styles.swiperSlide}>
        <img
          src="https://i0.wp.com/zakleem.ru/wp-content/uploads/2019/06/771b496e2bd2d64.jpg?fit=1106%2C768&ssl=1"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img
          src="https://a.d-cd.net/3bbec48s-960.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img
          src="https://i0.wp.com/zakleem.ru/wp-content/uploads/2019/06/771b496e2bd2d64.jpg?fit=1106%2C768&ssl=1"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img
          src="https://a.d-cd.net/2912a88s-960.jpg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};
