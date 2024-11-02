import React from 'react';
// import { Rating } from '@mui/material';
import Layout from "../../Components/Layout";
import '../../App.css';
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import { MdDelete } from "react-icons/md";
import QuantityBox from "../../Components/QuantityBox.jsx";
import {Button} from "@mui/material";
import { IoBagCheckOutline } from "react-icons/io5";
import { useContext } from "react";
import ProductContext from "../../Components/GlobalContextProvider/ProductContext.jsx";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

function WishListPage(props) {
    
    const{wishList,setwishList,updateQuantity,removeFromwishList}=useContext(ProductContext);
    return (
        <Layout>
        <div className="container wishListPage mt-4 ">
            <h2 className="hd mb-1" style={{ fontSize: '18px', fontWeight: '600', textTransform: 'upperCase' }}>My List</h2>
            <p className="fs-6 mb-0">There are <b className="text-danger">{wishList?.length}</b> products in your wishlist </p>
           {
            wishList?.length>0 ? <div className="mt-3 w-100">
            <div className="d-flex align-items-center justify-content-center w-100">
                <div className="table-responsibe w-100">
                    <table className="table w-100" >
                        <thead >
                            <tr >
                                <th width='50%'>Product</th>
                                <th width='25%'>Unit Price</th>
                                {/* <th width='25%'>Quantity</th> */}
                                {/* <th width='15%'>Subtotal</th> */}
                                <th width='25%'>Remove</th>
                            </tr>

                        </thead>

                        <tbody>
                            {
                              wishList?.length>0 &&  wishList?.map(prod=>{


                               return <tr  style={{verticalAlign:'middle'}}>
                                <td width='50%'>
                                    <Link to={'/'}>
                                          <div className="productContainer d-flex align-items-center gap-3">
                                               <div className="" style={{width:100, height:100, }}>
                                                   <img src={prod?.images[0]} className='w-100 h-100 object-cover'/>
                                               </div>
                                               <div className="w-100">
                                                 <h6 className="title" style={{ color:' #343434',fontWeight:'700' ,}}>{prod?.name.slice(0,25)}..</h6>
                                                  <Rating value={prod?.rating} size='small' readOnly/>
                                               </div>
                                               
                                          </div>
                                     </Link>
                                </td>
                                <td width='25%'>Rs {prod?.price}</td>
                                {/* <td width='25%' className="w-40 mx-auto"><QuantityBox
                                     quantity={prod?.quantity} 
                                     onIncrease={() => updateQuantity(prod?.id, prod?.quantity + 1)} 
                                     onDecrease={() => {
                                         if (prod?.quantity > 1) {
                                             updateQuantity(prod?.id, prod?.quantity - 1);
                                         }
                                     }} 
                                
                                /></td>
                                <td width='15%'>Rs {prod?.quantity*prod?.price}</td> */}
                                <td width='25%'><MdDelete onClick={()=>removewishList(prod?.id)} className="fs-4 text-danger cursor del" /></td>
                                </tr>

                                })
                            }
                              


                              
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>:
           <div className="d-flex empty">
              <img className="emptyImage" src={emptywishList}/>
              <p className="text-center mt-4 fs-3">Your wishList is Currently Empty</p>
              <Link to={'/'}>
                 <Button className="px-4 py-2 text-white rounded-5 bg-danger text-capitalize font-weight-bold">Continue Shopping</Button>
              </Link>
              
           </div>

         
           }
            
        </div>
    </Layout>
    );
}

export default WishListPage;