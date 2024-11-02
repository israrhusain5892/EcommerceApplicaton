import React, { useContext, useState } from 'react';
import bag from '../../assets/bag.png';
import fashion from '../../assets/fashion.png';
import grocery from '../../assets/grocery.png';
import foot from '../../assets/foot.png';
import jwell from '../../assets/jwellery.png'
import well from '../../assets/well.png'
import beauty from '../../assets/beauty.png'
import './home.css';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, useNavigate } from 'react-router-dom';
import { FcTwoSmartphones } from "react-icons/fc";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import ProductContext from '../GlobalContextProvider/ProductContext';

function FeatureCategorySection() {

    const {setCategory} = useContext(ProductContext);
    const navigate=useNavigate();

    const goToProduct=(category)=>{
          setCategory(category);
          navigate('/products');
    }

    const categories = [
        {
             name: 'Fashion',
             image: fashion,
             color: '#ECFFEC'
        },
        {
             name: 'Electronics',
             image: fashion,
             color: '#FDF0FF'
        },
        {
             name: 'Bags',
             image: bag,
             color: '#FDF0FF'
        },
        {
             name: 'Footwear',
             image: foot,
             color: '#DEF3FF'
        },
        {
             name: 'Groceries',
             image: grocery,
             color: '#FFE8F8'
        },



        {
             name: 'Wellness',
             image: well,
             color: '#FFF3FF'
        },

        {
             name: 'Beauty',
             image: beauty,
             color: '#DEF3FF'
        },


   ]
    return (
        <div className='container mt-5'>
            <h3 className='cat-title'>Featured Categories</h3>
            <div className='d-flex  mt-4 cat-container align-items-center gap-4 '>
                <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={100}
                    slidesPerView={12}
                    loop={false}
                    // autoplay={{
                    //     delay: 2000,
                    //     disableOnInteraction: false
                    // }}
                    pagination={{ clickable: true }}
                    // navigation
                    breakpoints={{
                        200: {
                          slidesPerView: 4,  // Show 2 items for screens >= 320px
                        },
                        480: {
                          slidesPerView: 4,  // Show 3 items for screens >= 480px
                        },
                        640: {
                          slidesPerView: 12,  // Show 4 items for screens >= 640px
                        },
                      }}
                    className='catSlider'

                >
                   
                        {

                            categories.map(category => {
                                return<SwiperSlide >
                               
                                <div  className='item-container'>
                                   
                                    <div  onClick={()=>goToProduct(category.name)} className='circle'
                                     
                                        style={{ background: `${category.color}` }}
                                    >
                                        {category.name==='Electronics' ? <FcTwoSmartphones className='fs-1'/> :
                                         <img src={category.image} alt={category.name} />
                                        
                                        }
                                       
                                    </div>
                                   
                                    <h6>{category.name}</h6>
                                </div>
                             
                               

                                </SwiperSlide>
                            })

                        }
                   


                </Swiper>



            </div>
        </div>
    );
}

export default FeatureCategorySection;