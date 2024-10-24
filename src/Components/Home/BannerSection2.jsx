import React from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
function BannerSection2(props) {
    return (
        <div className='container bannerSection2 mt-4'>
           
           <Swiper
                modules={[Pagination,  Navigation]}
                spaceBetween={10}
                slidesPerView={3}
                loop={false}

                breakpoints={{
                    200: {
                      slidesPerView: 1,  // Show 2 items for screens >= 320px
                    },
                    480: {
                      slidesPerView: 1,  // Show 3 items for screens >= 480px
                    },
                    640: {
                      slidesPerView: 1,  // Show 4 items for screens >= 640px
                    },
                    1028:{
                      slidePerView:3,
                    }
                  }}
              
                className='bannerswiper'
                style={{display:'grid' ,grap:'14px'}}
            >
                <SwiperSlide className="swiperBox">
                    <Link className="box">
                       <img src='https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729520206/1729520205930_banner-7.jpg' alt="imga" />
                    </Link>
                   
                </SwiperSlide>
                <SwiperSlide className="swiperBox">
                    <Link className="box">
                    <img src='https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729058341/1729058338771_banner-9.jpg' alt="imgb" />
                    </Link>
                   
                </SwiperSlide>
                <SwiperSlide className="swiperBox">
                    <Link className="box">
                    <img src='https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729058356/1729058354752_banner-5.jpg' alt="imgc" />
                    </Link>
                    
                </SwiperSlide>
                  
            </Swiper>
           
        </div>
    );
}

export default BannerSection2;