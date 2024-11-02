import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import '../App.css';
import Slider from 'react-slick';
import  { useContext, useEffect } from 'react';
// import Header from '../../Components/Header';
// import Footer from '../../Components/Footer';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
// import "../../App.css";
// import Slider from 'react-slick';
import { Rating } from '@mui/material';
import Badge from '@mui/material/Badge';
// import { Button } from '@mui/material';
import { useState } from 'react';
import QuantityBox from '../Components/QuantityBox.jsx';
import { useRef } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import Layout from '../Components/Layout/index.jsx';
import { useParams } from 'react-router-dom';
import { productList } from '../ProductList.js';
import { ToastContainer, toast } from 'react-toastify';
import { IoClose } from "react-icons/io5";

  import 'react-toastify/dist/ReactToastify.css';
// import { useContext } from 'react';
import ProductContext from '../Components/GlobalContextProvider/ProductContext.jsx';

export default function Dialog1({open1,onClose,product}) {
//   const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const{id}=useParams();

  const{cart,setCart,addToCart}=useContext(ProductContext);

  console.log(product)
  const productDetail=product;
  const[loading,setLoading]=useState(false);
  const [activeButton, setActiveButton] = useState('button2'); // Track the active button
  const [slideActive, setSlideActive] = useState(0);
  const [zoomImage, setZoomImage] = useState('https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729060584/1729060581236_fortune-sunlite-refined-sunflower-oil-1-l-product-images-o490000052-p490000052-0-202203150155.webp')
  const [bg, setBg] = useState('Description');
  const slideRef = useRef();
  // console.log(productList)

  // useEffect(()=>{
  //     const filteredProduct= productList.filter(product=>product.id==id);
  //     setProductDetail(filteredProduct[0])
  // },[id])

//   console.log(productDetail)

  const goTo = (img, index) => {
      slideRef.current.slickGoTo(index);
      setSlideActive(index);
  };

  const handleClick = (button) => {
      setActiveButton(button);
  };

  const addCart = () => {
      addToCart(productDetail)
      setLoading(true)
      const isExist=cart.find(product=>product.id===productDetail.id);
      if(isExist){

          setTimeout(()=>{
              setLoading(false)
              toast.error("cart already added!!",{
                 
              })
          },2000)
          
      }
      else{

          setTimeout(()=>{
              setLoading(false)
              toast.success("cart added successfully !!",{
                  className:'custom-toastify'
              })
          },3000)

      }
     
     
  };



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
      arrows: false
  };


//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

  return (
    <React.Fragment>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open responsive dialog
      </Button> */}
      <Dialog
        fullScreen={fullScreen}
        open={open1}
         maxWidth="md"
         style= {{
        
          top:'30px'   // Or set a max height based on viewport height
      }}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
      >
        {/* <DialogTitle id="responsive-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle> */}
        <DialogContent>
            {/*  */}
            <Button onClick={onClose} style={{float:'right',marginRight:0}}><IoClose className="fs-4 text-danger" /></Button>
          <DialogContentText>
           <ToastContainer position:bottom-right/>
          <div className='productDetail1'>
                
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


                        <Slider {...settings} className='zoomSlider productView w-100' style={{width:'400px'}}>
                            <div className={`item w-100 ${slideActive == 0 ? 'slick-current' : ''}`} onClick={() => goTo('https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729060584/1729060581236_fortune-sunlite-refined-sunflower-oil-1-l-product-images-o490000052-p490000052-0-202203150155.webp', 0)}>
                                <img className='w-100' src={productDetail?.images[0]} />
                            </div>

                            <div className={`item w-100 ${slideActive == 2 ? 'slick-current' : ''}`} onClick={() => goTo('https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729060587/1729060581237_fortune-sunlite-refined-sunflower-oil-1-l-product-images-o490000052-p490000052-1-202203150155.jpg', 2)}>
                                <img className='w-100' src={productDetail?.images[1]}/>
                            </div>


                        </Slider>

                    </div>
                    <div className="col-md-7">
                        <h2 className="hd fs-5 text-capitalize">{productDetail?.name}</h2>
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
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum debitis et tenetur esse quae ullam consectetur ab delectus iure fuga molestias nobis iste, magnam suscipit libero vitae illo inventore commodi!

                        </p>
                        <div className="productSize gap-4 w-100 d-flex align-items-center">
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
                        <div className='d-flex align-items-center mt-3 gap-4 bottom-section w-100'>
                            <QuantityBox 
                              
                              quantity={productDetail?.quantity===undefined ? 1 :productDetail.quantity} 
                              onIncrease={() => updateQuantity(productDetail?.id, productDetail?.quantity + 1)} 
                              onDecrease={() => {
                                  if (productDetail?.quantity > 1) {
                                      updateQuantity(productDetail?.id, productDetail?.quantity - 1);
                                  }
                              }} 
                            
                            
                            />
                            <Button onClick={addCart} className='bg-danger cart-btn  text-white text-capitalize rounded-5 px-2 text-bold'> <FaCartShopping /> 
                            <span className='ml-2'>{loading ? 'adding...':'Add Cart'}</span></Button>
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

               
            </div>
           
          </DialogContentText>
        </DialogContent>
        <DialogActions>
         
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
