import React, { useContext, useEffect } from 'react';
import productImage from '../../assets/product.jpg'
import './product.css';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosStar } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { LiaExpandArrowsAltSolid } from "react-icons/lia";
import { Rating } from '@mui/material';
import Dialog1 from '../Dialog1';
import { useState } from 'react';
import { productList } from '../../ProductList';
import ProductContext from '../GlobalContextProvider/ProductContext';
import { toast } from 'react-toastify';
import { IoMdHeart } from "react-icons/io";
import { ToastContainer } from 'react-toastify';

function ProductItem(props) {
   
    const navigate = useNavigate();

    const { product } = props;
    const [open, setOpen] = useState(false);
    const[filteredProduct,setFlteredProduct]=useState(null)
    const[wishItem,setWishItem]=useState(null);

    const{wishList,setWishList,removedFromWishList,addToWishList, isExist,setIsExist,login} =useContext(ProductContext);
  
    const addItemToWishList=(id)=>{

        const findItem=wishList.find(item=>item.id===id);
        if(!findItem){
           
            const products=productList.filter(prod=>prod.id==id);
        addToWishList(products[0]);
        setWishItem(products[0])
       
              toast.success("Item added in wishList");
        

        }
        else{
             removedFromWishList(id)
            
                toast.error("Item removed from wishList");
           
        }
        
    }

    const openHandle = (id) => {
        const products=productList.filter(prod=>prod.id==id);
        setFlteredProduct(products[0])
        setOpen(true)
    }


    const goToLoginPage=()=>{

        setTimeout(()=>{
            navigate("/signin")
        },2000)
       
    }

    const goToProductPage = (id) => {
        navigate(`/product/${id}`)
    }

    const oncloseHandle = () => {
        setOpen(false);
    }

    //  console.log(product)
    return (
        <>
        {/* <ToastContainer position='bottom-right'/> */}
        <div className='productItem' style={{display:props.width==='100%' &&'flex', alignItems:'center'}}>
            
            <div className='imgRapper' style={{width:props.width==='100%' && '35%'}}>



                <div className='productImageWrapper'>
                    <img onClick={() => goToProductPage(product?.id)} className='w-100 img1' src={product?.images[0]} />
                    <img onClick={() => goToProductPage(product?.id)} className='w-100 img2' src={product?.images[1]} />
                </div>




                <span className='imgWraper-label'>9%</span>

                <div onClick={()=>openHandle(product?.id)} className="expand">
                    <LiaExpandArrowsAltSolid className='s' />
                </div>
                <div onClick={login?()=>addItemToWishList(product.id) : goToLoginPage} className={`heart ${wishList?.find(item=>item.id===product?.id)  ? 'changeBgColor':''}`}>
                    
                    {wishList?.find(item=>item.id===product?.id)  ? <IoMdHeart className='text-white' /> : <CiHeart className='sv'  />}
                
                </div>


            </div>
            <div className='info w-100'>
                <Link to={`/product/${product?.id}`}><h4>{product?.name.slice(0, 10)}...</h4></Link>
                <span className='d-block text-success'>In Stock</span>
                <span className='d-block w-0 rating d-flex gap-0 rating'>
                    <Rating value={product.rating} readOnly />

                </span>
                <span className='d-block d-flex gap-2'>
                    <del>{product?.oldPrice}</del>
                    <span className='text-danger text-bold price '>{product?.price}</span>
                   
                </span>

            </div>
            <Dialog1 open1={open} product={filteredProduct} onClose={oncloseHandle} />
        </div>
        </>
    );
}

export default ProductItem;