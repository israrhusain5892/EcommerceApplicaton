import React, { useEffect, useState } from 'react';
import './home.css';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductItem from '../Product/ProductItem';
import Slider from "react-slick";
import { Link ,NavLink} from 'react-router-dom';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
// import Slider from 'react-slick';
import { Button } from '@mui/material';
import bag from '../../assets/bag.png';
import fashion from '../../assets/fashion.png';
import grocery from '../../assets/grocery.png';
import foot from '../../assets/foot.png';
import jwell from '../../assets/jwellery.png'
import well from '../../assets/well.png'
import beauty from '../../assets/beauty.png';
import { productList } from '../../ProductList';

function PopularProduct(props) {

  const [data, setData] = useState([]);
  const [originalData] = useState(productList); // Store the original product list
  const [activeLink, setActiveLink] = useState('Fashion');

  useEffect(() => {
      setData(originalData); // Initialize data with original list
  }, [originalData]);

  const categories = [
      { name: 'Fashion', image: fashion, color: '#ECFFEC' },
      { name: 'Bags', image: bag, color: '#FDF0FF' },
      { name: 'Electronics', image: bag, color: '#FDF0FF' },
      { name: 'Groceries', image: grocery, color: '#FFE8F8' },
      { name: 'Footwear', image: foot, color: '#DEF3FF' },
      { name: 'Beauty', image: beauty, color: '#DEF3FF' },
      { name: 'Wellness', image: well, color: '#FFF3FF' },
      { name: 'Jwellery', image: jwell, color: '#FFF8E3' },
  ];

  const handleLinkClick = (link) => {
      setActiveLink(link);
      const filteredData = originalData.filter(prod => prod.category === link);
      console.log('Filtered Data:', filteredData); // Debug
      setData(filteredData);
  };





    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
         responsive: [
            {
              breakpoint: 1200, // Large desktops
              settings: {
                slidesToShow: 7,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1024, // Desktops
             settings: {
               slidesToShow: 6,
               slidesToScroll: 1,
             },
           },
           {
             breakpoint: 768, // Tablets
             settings: {
               slidesToShow: 4,
                slidesToScroll: 1,
             },
           },
            {
             breakpoint: 480, // Mobile devices
              settings: {
                slidesToShow: 3,
               slidesToScroll: 1,
             },
           },
         ],
      };
  
    return (
        <div className='container mt-4 popularProduct p-4'>
            <div className='w-100'>
                <div className='mb-4 d-flex align-items-center flex-wrap containerPopular '>
                    <div className='popularTitle'>
                        <h3  className="popularHeading mb-0 w-100">POPULAR PRODUCTS</h3>
                        <p className='mb-0 text-light text-sml w-100'>Do not miss the current offers until the end of March.</p>
                    </div>
                    <div className='popularHeader ml-auto d-flex align-items-center justify-content-end ' >
                      <Slider {...settings}  className='popularSlider'>
                            {
                                categories.map(category=>{
                                   return <div className=' w-4'>
                                    <Button
                                   
                                    onClick={()=>handleLinkClick(category.name)} 
                                    className={`navItem ${activeLink === category.name ? 'active' : 'inactive'}`}>{category.name}
                                    
                                    </Button>
                                    {/* <span className="d-block w-2 p-1 bg-primary underline"></span> */}
                                     </div>
                                })
                            }
                           
                           
                      </Slider>
                    </div>

                </div>

                <div className='productContainer w-100'>
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
                              slidesPerView: 5, // Show 4 slides
                            },
                            // When the window width is >= 1200px (large desktops)
                            1200: {
                              slidesPerView: 6, // Show 5 slides
                            },
                          }}
                    >
                           
                              {
                                data.map((product)=>{
                                  return<SwiperSlide>
                                     <ProductItem key={product.name} product={product} />
                                 </SwiperSlide>
                                })
                              }
                            
                           
                        
                        

                    </Swiper>

                </div>


            </div>
        </div>
    );
}

export default PopularProduct;