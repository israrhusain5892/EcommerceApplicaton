import React from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
function BannerSection(props) {
    return (
        <div className='container bannerSection mt-5'>
              
              <Swiper
                modules={[Pagination,  Navigation]}
                spaceBetween={20}
                slidesPerView={4}
                loop={true}
                 navigation
                className='bannerswiper'
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
                    1024:{
                        slidePerView:4,
                    }
                  }}
            >
                <SwiperSlide className="swiperBox"> 
                    <Link className='box'>
                       <img src='https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729058278/1729058275936_New_Project_16.jpg' alt="imga" />
                    </Link>
                   
                </SwiperSlide>
                <SwiperSlide className="swiperBox">
                    <Link className="box">
                    <img src='https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729058177/1729058173850_New_Project_22.jpg' alt="imgb" />
                    </Link>
                   
                </SwiperSlide>
                <SwiperSlide className="swiperBox">
                    <Link className="box">
                    <img src='https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729520258/1729520257674_New_Project_19.jpg' alt="imgc" />
                    </Link>
                    
                </SwiperSlide>
                  <SwiperSlide className="swiperBox">
                    <Link className="box" >
                       <img src='https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729520258/1729520257674_New_Project_19.jpg'/>
                    </Link>
                     
                  </SwiperSlide>
            </Swiper>
                
        </div>
    );
}

export default BannerSection;