import React from 'react';
import './home.css';
import imga from '../../assets/img1.jpg';
import imgb from '../../assets/img2.jpg';
import imgc from '../../assets/img3.jpg';

import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";


function HomeSlider() {
    return (
        <div className='homeSlider px-24 mt-3'>
            <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                pagination={{ clickable: true }}
                navigation
                className='swiper'
            >
                <SwiperSlide>
                    <img src={imga} alt="imga" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imgb} alt="imgb" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imgc} alt="imgc" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
}

export default HomeSlider;