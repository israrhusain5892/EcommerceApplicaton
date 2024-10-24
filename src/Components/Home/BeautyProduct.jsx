import React from 'react';
import { MdOutlineArrowForward } from "react-icons/md";
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import ProductItem from '../Product/ProductItem';
import { productList } from '../../ProductList';
import { useState,useEffect } from 'react';
function BeautyProduct(props) {

       
    const [originalData,setOriginalData]=useState(productList);
    const[data,setData]=useState([]);

   const filteredData=originalData.filter(prod=>prod.category==='Beauty');
   useEffect(()=>{
       setData(filteredData)
   },[originalData])


    return (
        
        <div className='container featureProduct mt-4'>
               <div>
               <div className='w-100 d-flex align-items-center justify-content-between'>
                    <div>
                        <h3 className='mb-0'>BEAUTY</h3>
                        <p className='mb-0 text-sml text-light'>Do not miss the current offers until the end of March.</p>
                    </div>
                    <div className='rounded-5 border p-2 px-4'>
                            View All
                            <MdOutlineArrowForward />
                    </div>
                </div>
                  
                <div className='productContainer w-100 mt-4'>
                    <Swiper
                        modules={[Pagination, Autoplay, Navigation]}
                        spaceBetween={20}
                        slidesPerView={5}
                        loop={true}
                        
                        pagination={{ clickable: true }}
                        navigation
                        className='productSwiper'

                        breakpoints={{
                            // When the window width is >= 320px (mobile)
                            320: {
                              slidesPerView: 2, // Show 1 slide
                            },
                            // When the window width is >= 480px (small tablets)
                            480: {
                              slidesPerView: 2, // Show 2 slides
                            },
                            // When the window width is >= 768px (tablets)
                            768: {
                              slidesPerView: 3, // Show 3 slides
                            },
                            // When the window width is >= 1024px (small desktops)
                            1024: {
                              slidesPerView: 4, // Show 4 slides
                            },
                            // When the window width is >= 1200px (large desktops)
                            1200: {
                              slidesPerView: 5, // Show 5 slides
                            },
                          }}
                    >

                      {
                          data?.map((product,index)=>{
                           return  <SwiperSlide>
                                <ProductItem product={product} />
                             </SwiperSlide>
                          })

                      }
                       
                        
                        

                    </Swiper>

                </div>
               </div>
        </div>
    

    
    );
}

export default BeautyProduct;