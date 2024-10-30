import React, { useContext, useEffect } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import "../../App.css";
import Slider from 'react-slick';
import { Rating } from '@mui/material';
import Badge from '@mui/material/Badge';
import { Button } from '@mui/material';
import { useState } from 'react';
import QuantityBox from '../../Components/QuantityBox.jsx';
import { useRef } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import Layout from '../../Components/Layout/index.jsx';
import { useParams } from 'react-router-dom';
import { productList } from '../../ProductList.js';
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
// import { useContext } from 'react';
import ProductContext from '../../Components/GlobalContextProvider/ProductContext.jsx';
const ProductDetail = () => {

    const{id}=useParams();

    const{cart,setCart,addToCart,updateQuantity,removeFromCart}=useContext(ProductContext);
   

    console.log(id)
    const[productDetail,setProductDetail]=useState(null);
    const [activeButton, setActiveButton] = useState('button2'); // Track the active button
    const [slideActive, setSlideActive] = useState(0);
    const [zoomImage, setZoomImage] = useState('https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729060584/1729060581236_fortune-sunlite-refined-sunflower-oil-1-l-product-images-o490000052-p490000052-0-202203150155.webp')
    const [bg, setBg] = useState('Description');
    const slideRef = useRef();
    // console.log(productList)

    useEffect(()=>{
        const filteredProduct= productList.filter(product=>product.id==id);
        setProductDetail(filteredProduct[0])
    },[id])

    console.log(productDetail)

    const goTo = (img, index) => {
        slideRef.current.slickGoTo(index);
        setSlideActive(index);
    };

    const handleClick = (button) => {
        setActiveButton(button);
    };

    const addCart = () => {
        addToCart(productDetail)
        setTimeout(()=>{
            toast.success("cart added successfully !!")
        },3000)
       
    };
   console.log(cart)


    const settings2 = {
        dots: false, // Show dots below the slider
        infinite: false, // Allows infinite loop
        speed: 500, // Transition speed
        slidesToShow: 1, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll per action
        autoplay: false, // Auto scrolls the slides
        autoplaySpeed: 3000, // Auto scroll interval
        // arrow:true
        arrows: false
    }

    const settings = {
        dots: false, // Show dots below the slider
        infinite: false, // Allows infinite loop
        speed: 500, // Transition speed
        slidesToShow: 4, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll per action
        autoplay: false, // Auto scrolls the slides
        autoplaySpeed: 3000, // Auto scroll interval
        // arrow:true
        arrows: false,
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
               slidesToShow: 3,
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
        <>
            <ToastContainer position="bottom-right" toastStyle={{ zIndex: 9999999 }}/>
           <Layout>
           
            <div className='container productDetail mb-3  '>
                
                <div className="row productPage align-items-start justify-content-center gap-40 mt-3 pt-3 pb-3">


                    <div className="col-md-4 pl-5">
                        <Slider {...settings2} ref={slideRef} className='bigImageSlider' >
                            <div className="zoomImage">
                                <InnerImageZoom className='img' zoomType='hover' zoomScale={1} src={productDetail?.images[0]} />
                            </div>
                            <div className="zoomImage">
                                <InnerImageZoom className='img' zoomType='hover' zoomScale={1} src={productDetail?.images[1]} />
                            </div>
                        </Slider>


                        <Slider {...settings} className='zoomSlider'>
                            <div className={`item ${slideActive == 0 ? 'slick-current' : ''}`} onClick={() => goTo('https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729060584/1729060581236_fortune-sunlite-refined-sunflower-oil-1-l-product-images-o490000052-p490000052-0-202203150155.webp', 0)}>
                                <img className='w-100' src={productDetail?.images[0]} />
                            </div>

                            <div className={`item ${slideActive == 2 ? 'slick-current' : ''}`} onClick={() => goTo('https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729060587/1729060581237_fortune-sunlite-refined-sunflower-oil-1-l-product-images-o490000052-p490000052-1-202203150155.jpg', 2)}>
                                <img className='w-100' src={productDetail?.images[1]}/>
                            </div>

                          
                           


                            

                        </Slider>

                    </div>
                    <div className="col-md-6">
                        <h2 className="hd text-capitalize title-product-view">{productDetail?.name}</h2>
                        <ul className="list list-inline d-flex align-items-center">
                            <li className="list-inline-item">
                                <div className="d-flex align-items-center">
                                    <span className="text-light mr-2">Brands : </span>
                                    <span>{productDetail?.brand}</span>
                                </div>

                            </li>

                            <li class="list-inline-item">
                                <div class="d-flex align-items-center gap-2">
                                    <Rating value={productDetail && productDetail?.rating} readOnly size='small' />
                                    <span className="text-light cursor ">0 Review</span>
                                </div>
                            </li>
                        </ul>
                        <div class="d-flex info mb-3 gap-2">
                            <del className="oldPrice text-light">Rs: {productDetail?.oldPrice}</del>
                            <span className="netPrice text-danger">Rs: {productDetail?.price}</span>
                        </div>
                        <span className="badge badge-success">IN STOCK</span>

                        <p className='mt-3'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla officiis officia minima laudantium, aut magnam assumenda cumque eveniet necessitatibus voluptatem voluptatum culpa impedit ea sit hic natus. Maxime, in consectetur.

                        </p>
                        <div className="productSize gap-4 d-flex align-items-center">
                            <span>Weight:</span>
                            <ul className="list list-inline mb-0 pl-4 false ">
                                <li className="list-inline-item">
                                    <Button

                                        onClick={() => handleClick('button1')} className={`tag ${activeButton === 'button1' ? 'active' : ''}`}>500G</Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button
                                        onClick={() => handleClick('button2')}
                                        className={`tag ${activeButton === 'button2' ? 'active' : ''}`}>1KG</Button>
                                </li>
                            </ul>

                        </div>
                        <div className='d-flex flex-wrap-reverse align-items-center mt-5 gap-4 bottom-section'>
                            <QuantityBox  
                              
                              quantity={productDetail?.quantity===undefined ?1 :productDetail.quantity} 
                              onIncrease={() => updateQuantity(productDetail?.id, productDetail?.quantity + 1)} 
                              onDecrease={() => {
                                  if (productDetail?.quantity > 1) {
                                      updateQuantity(productDetail?.id, productDetail?.quantity - 1);
                                  }
                              }} 
                            
                            />
                            <Button onClick={addCart} className='bg-danger cart-btn text-white text-capitalize rounded-5 px-4 text-bold'> <FaCartShopping /> <span className='ml-2'>Add To Cart</span></Button>
                            <div className="d-flex align-items-center gap-3">
                                <div className='d-flex align-items-center justify-content-center'

                                    style={{
                                        width: '40px', height: '40px', borderRadius: '50%', background: '#f1f3ff',
                                        border: '1px solid #ccc'
                                    }}
                                >
                                    <IoIosHeartEmpty className='fs-5' />
                                </div>

                                <div className='d-flex align-items-center justify-content-center'

                                    style={{
                                        width: '40px', height: '40px', borderRadius: '50%', background: '#f1f3ff',
                                        border: '1px solid #ccc'
                                    }}
                                >
                                    <MdOutlineCompareArrows className='fs-5' />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='w-100 border py-5 mt-4 rounded-4 productDetailDes'
                    style={{ background: '#F7F2FF', border: '1px solid rgba(0,0,0,0.1)' }}
                >
                    <div className='d-flex align-items-center px-5 gap-3 reviewButtons'>
                        <Button className={`rounded-5 
                           text-capitalize text-black px-4 py-2
                           ${bg === 'Description' ? 'bg-blue' : ''}`}
                            style={{ border: '1px solid #ccc' }}
                            onClick={() => setBg('Description')}
                        >Description</Button>

                        <Button className={`rounded-5 
                           text-capitalize text-black px-4 py-2
                           ${bg === 'Additional' ? 'bg-blue' : ''}`}
                            style={{ border: '1px solid #ccc' }}
                            onClick={() => setBg('Additional')}
                        >Additional Info</Button>

                        <Button className={`rounded-5 
                           text-capitalize text-black px-4 py-2
                           ${bg === 'review' ? 'bg-blue' : ''}`}
                            style={{ border: '1px solid #ccc' }}
                            onClick={() => setBg('review')}
                        >Reviews({790})</Button>
                    </div>

                    <div className='info-container px-5 mt-4 py-5'>
                      {
                            bg==='Description' && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum repellendus magnam numquam aut ex molestias quasi. Accusamus in, repellendus voluptatem itaque necessitatibus magni possimus soluta laborum, id veniam at.</p>
                      } 

                      {
                          bg==='Additional' && <div className="table-responsive" style={{ background: '#F7F2FF'}}>
                           <table class="table table-bordered" >
                               <tbody>
                                   <tr class="stand-up">

                                       <th>Stand Up</th>
                                       <td><p>35″L x 24″W x 37-45″H(front to back wheel)</p></td>
                                   </tr>
                                   <tr class="folded-wo-wheels">
                                       <th>Folded (w/o wheels)</th>
                                       <td><p>32.5″L x 18.5″W x 16.5″H</p></td>
                                   </tr>
                                   <tr class="folded-w-wheels">
                                       <th>Folded (w/ wheels)</th>
                                       <td><p>32.5″L x 24″W x 18.5″H</p></td>
                                   </tr>
                                   <tr class="door-pass-through">
                                       <th>Door Pass Through</th>
                                       <td><p>24</p></td>
                                   </tr>
                                   <tr class="frame">
                                       <th>Frame</th>
                                       <td><p>Aluminum</p></td>
                                   </tr>
                                   <tr class="weight-wo-wheels">
                                       <th>Weight (w/o wheels)</th>
                                       <td><p>20 LBS</p></td>
                                   </tr>
                                   <tr class="weight-capacity">
                                       <th>Weight Capacity</th>
                                       <td><p>60 LBS</p></td>
                                   </tr>
                                   <tr class="width">
                                       <th>Width</th>
                                       <td><p>24″</p></td>
                                   </tr>
                                   <tr class="handle-height-ground-to-handle">
                                       <th>Handle height (ground to handle)</th>
                                       <td><p>37-45″</p></td>
                                   </tr>
                                   <tr class="wheels">
                                       <th>Wheels</th>
                                       <td><p>12″ air / wide track slick tread</p>
                                       </td>
                                   </tr>
                                   <tr class="seat-back-height">
                                       <th>Seat back height</th>
                                       <td><p>21.5″</p></td>
                                   </tr>
                                   <tr class="head-room-inside-canopy">
                                       <th>Head room (inside canopy)</th>
                                       <td><p>25″</p></td>
                                   </tr>
                                   <tr class="pa_color"><th>Color</th>
                                       <td><p>Black, Blue, Red, White</p></td>
                                   </tr>
                                   <tr class="pa_size">
                                       <th>Size</th>
                                       <td><p>M, S</p></td>
                                   </tr>
                               </tbody>
                           </table>
                       </div>
                      } 
                       
                    {
                          bg==='review' &&  <div className='review px-4 '>
                          <h3 className='fs-5'>Customer questions & answers</h3>
                          <div className='mt-4'>
                              <h4 className='mb-3 fs-4'>Add a Review</h4>
                               <textarea className='textBox px-4 py-4' type="text" placeholder='Write a Rewiew..'></textarea>
                               
                          </div>
                          <div className='mt-3'>
                            <Rating value={1}/>
                          </div>

                          <div className='mt-5'>
                               <Button className='border px-4 py-2 text-capitalize text-white bg-blue rounded-5'>Submit Review</Button>
                          </div>
                          
                    </div>
                    }
                       
                    </div>


                </div>

            </div>





            </Layout>

        </>
    )
}
export default ProductDetail;