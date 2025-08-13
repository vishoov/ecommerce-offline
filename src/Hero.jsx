import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './hero.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function Hero() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <img src="https://demo-milano.myshopify.com/cdn/shop/files/fs_new_4.webp?v=1748226426&width=550" width="100%" height="100%" alt="main" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://demo-milano.myshopify.com/cdn/shop/files/fs_new_4.webp?v=1748226426&width=550" width="100%" height="100%" alt="main" />

        </SwiperSlide>
        <SwiperSlide>
    <div className="slide-content">
        <p className="slide-text">MODERN EVERYDAY LOOKS</p>
        <h1 className="slide-heading">Soft Comfort nice looks</h1>
        <button className="slide-button">Shop Collection</button>
    </div>

        <img src="https://demo-milano.myshopify.com/cdn/shop/files/fs_new_4.webp?v=1748226426&width=550" width="100%" height="100%" alt="main" />

        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
