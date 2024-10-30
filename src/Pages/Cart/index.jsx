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
import emptycart from '../../assets/emptycart.png';
const Cart = () => {
     
    const{cart,setCart,updateQuantity,removeFromCart}=useContext(ProductContext);
    const[subTotal,setSubTotal]=useState(0);
    const[total,setTotal]=useState(0);
    console.log(cart);
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
     const removeCart=(id)=>{
        removeFromCart(id);
        toast.success("Item removed successfully !!")
     }
    return (
        <>
          <ToastContainer position="bottom-right"/>
            <Layout>
                <div className="container cartPage mt-4">
                    <h2 className="hd mb-1" style={{ fontSize: '18px', fontWeight: '600', textTransform: 'upperCase' }}>Your Cart</h2>
                    <p className="fs-6 mb-0">There are <b className="text-danger">{cart.length}</b> products in your cart </p>
                   {
                    cart.length>0 ? <div className="row mt-3">
                    <div className="col-md-9">
                        <div className="table-responsibe">
                            <table className="table">
                                <thead >
                                    <tr >
                                        <th width='35%'>Product</th>
                                        <th width='15%'>Unit Price</th>
                                        <th width='25%'>Quantity</th>
                                        <th width='15%'>Subtotal</th>
                                        <th width='10%'>Remove</th>
                                    </tr>

                                </thead>

                                <tbody>
                                    {
                                      cart.length>0 &&  cart?.map(prod=>{


                                       return <tr>
                                        <td width='35%'>
                                            <Link to={'/'}>
                                                  <div className="productContainer d-flex align-items-center gap-3">
                                                       <div className="cartImage">
                                                           <img src={prod?.images[0]}/>
                                                       </div>
                                                       <div className="w-100">
                                                         <h6 className="title" style={{ color:' #343434',fontWeight:'700' ,}}>{prod?.name.slice(0,20)}..</h6>
                                                          <Rating value={prod?.rating} size='small' readOnly/>
                                                       </div>
                                                       
                                                  </div>
                                             </Link>
                                        </td>
                                        <td width='15%'>Rs {prod?.price}</td>
                                        <td width='25%' className="w-40 mx-auto"><QuantityBox
                                             quantity={prod?.quantity} 
                                             onIncrease={() => updateQuantity(prod?.id, prod?.quantity + 1)} 
                                             onDecrease={() => {
                                                 if (prod?.quantity > 1) {
                                                     updateQuantity(prod?.id, prod?.quantity - 1);
                                                 }
                                             }} 
                                        
                                        /></td>
                                        <td width='15%'>Rs {prod?.quantity*prod?.price}</td>
                                        <td width='10%'><MdDelete onClick={()=>removeCart(prod?.id)} className="fs-4 text-danger cursor del" /></td>
                                        </tr>

                                        })
                                    }
                                      


                                      
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-3">
                          <div className="cartDetails p-3 border">
                               <h4>Cart Totals</h4>
                               <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <span>Subtotal</span>
                                    <span className="ml-auto text-danger font-weight-bold"><b>₹ 
                                        {totalPrice.toFixed(2)}</b></span>
                               </div>

                               <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <span>Shipping</span>
                                    <span className="ml-auto text-success font-weight-bold"><b>Free</b></span>
                               </div>

                               <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <span>Estimate For</span>
                                    <span className="ml-auto text-black font-weight-bold"><b>India</b></span>
                               </div>

                               <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <span>Total</span>
                                    <span className="ml-auto text-danger font-weight-bold"><b>₹ {totalPrice.toFixed(2)}</b></span>
                               </div>
                               <div>
                                   <Button className="px-4 d-flex checkout-btn fs-6 font-weight-bold align-items-center justify-content-center gap-2 text-capitalize py-2 border bg-danger text-white rounded-3">
                                   <IoBagCheckOutline className="fs-4 font-weight-bold" />
                                     checkout
                                   </Button>
                               </div>
                          </div>
                    </div>
                </div>:
                   <div className="d-flex empty">
                      <img className="emptyImage" src={emptycart}/>
                      <p className="text-center mt-4 fs-3">Your Cart is Currently Empty</p>
                      <Link to={'/'}>
                         <Button className="px-4 py-2 text-white rounded-5 bg-danger text-capitalize font-weight-bold">Continue Shopping</Button>
                      </Link>
                      
                   </div>

                 
                   }
                    
                </div>
            </Layout>
        </>
    )
}
export default Cart;