import React from 'react';
import productImage from '../../assets/product.jpg'
import './product.css';
import {Link} from 'react-router-dom';
import { IoIosStar } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import { LiaExpandArrowsAltSolid } from "react-icons/lia";
function ProductItem(props) {

    const{product}=props;

     console.log(product)
    return (
        <div className='productItem'>
            <div className='imgRapper'>
              
                <Link>
                    <div className='imgWraper-label'>9%</div>
                    
                    <img className='w-100' src={product?.images[0]}/>
                   
                </Link>

                <Link className='img2'>
                <div className='imgWraper-label2'>9%</div>
                    <div className="expand">
                    <LiaExpandArrowsAltSolid />
                    </div>
                   <div className='heart'><FaHeart className='text-danger' /></div>
                   <img src={product?.images[1]} alt="product" className='w-100 ' />
                </Link>

            </div>
            <div className='info w-100'>
                <Link to='/'><h4>{product?.name.slice(0,10)}...</h4></Link>
                <span className='d-block text-success'>In Stock</span>
                <span className='d-block w-0 rating d-flex gap-0 rating'>
                  <span className='star'>
                  <IoIosStar />
                  </span>
                  <span className='star'>
                  <IoIosStar />
                  </span>
                  <span className='star'>
                  <IoIosStar />
                  </span>
                  <span className='star'>
                  <IoIosStar />
                  </span>
                  <span className='star'>
                  <IoIosStar />
                  </span>
                </span>
                <span className='d-block d-flex gap-2'>
                      <del>{product?.oldPrice}</del>
                      <span className='text-danger text-bold price '>{product?.price}</span>
                </span>
            </div>
        </div>
    );
}

export default ProductItem;