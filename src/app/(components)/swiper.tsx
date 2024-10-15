"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards, Autoplay } from 'swiper/modules';

export default function Swipe() {
  const slideChanger = (swiper : SwiperCore) => {
    console.log('Real index:', swiper.realIndex); // Use realIndex for original slide index 
  }
  return (
    <div className="relative grid grid-cols-2">
      <div className="border"></div>
      <div className="border">
        <Swiper
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSlideChange={slideChanger}
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
