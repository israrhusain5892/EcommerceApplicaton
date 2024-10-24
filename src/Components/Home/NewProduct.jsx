import React from 'react';
import ProductItem from '../Product/ProductItem';
import './home.css';
import { MdArrowRightAlt } from "react-icons/md";
import { MdOutlineArrowForward } from "react-icons/md";
import { productList } from '../../ProductList';
function NewProduct(props) {

    const first12Products = productList.slice(10, 20);
    return (
        <div className='container w-100 mt-3 new_product'>
            <div className='w-100'>
                <div className='w-100 d-flex align-items-center justify-content-between'>
                    <div>
                        <h3 className='mb-0'>NEW PRODUCTS</h3>
                        <p className='mb-0 text-sml text-light'>New products with updated stocks.</p>
                    </div>
                    <div className='rounded-5 border p-2 px-4'>
                            View All
                            <MdOutlineArrowForward />
                    </div>
                </div>


                <div className=' w-100  productRow mt-3'>

                    {
                          first12Products.map((product,index)=>{
                            return <div className='productItem1' key={index} >
                               <ProductItem product={product} />
                            </div>
                          })
                    }
                   
                    

                </div>
            </div>

        </div>
    );
}

export default NewProduct;