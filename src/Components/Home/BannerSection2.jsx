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
                slidesPerView={4}
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
                       <img src='https://cdn-basic-content-api.picsart.io/p/d727e561-0814-49b8-b400-ac8b0dcdcc97.png' alt="imga" />
                    </Link>
                   
                </SwiperSlide>
                <SwiperSlide className="swiperBox">
                    <Link className="box">
                    <img src='https://cdn-basic-content-api.picsart.io/p/d2e7fabe-3a34-4373-8b41-00a48f2b5302.png' alt="imgb" />
                    </Link>
                   
                </SwiperSlide>
                <SwiperSlide className="swiperBox">
                    <Link className="box">
                    <img src='https://cdn-template.picsart.com/templates-cdn/28b382e4-1575-4c77-95c6-6cb0ca395e70.png' alt="imgc" />
                    </Link>
                   
                    
                </SwiperSlide>

                <SwiperSlide className="swiperBox">
                    <Link className="box">
                    <img src=' https://cdn-basic-content-api.picsart.io/p/1bf92ee7-9ea5-4115-9572-610c6bf4d18c.png' alt="imgc" />
                    </Link>
                   
                    
                </SwiperSlide>
                  
            </Swiper>
           
        </div>
    );
}

export default BannerSection2;