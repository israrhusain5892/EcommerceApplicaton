import React from 'react';
import Layout from '../../Components/Layout';
import '../../App.css';
import { Button } from '@mui/material';
import Model from './Model';

function MyOrder(props) {
  const [modalShow, setModalShow] = React.useState(false);
    return (
      <>
        
        <Model
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
        <Layout>
        <div className='container mt-3'>
      



              <h4 className='text-center mb-3 mt-3'>My Orders</h4>
              <div className='table-responsive'>

             
              <table className='table'>
                   <thead>
                          <tr className='text-white' style={{background:'#6D4AAE', color:'white'}}>
                              <th className='text-white'>Sr No.</th>
                              <th className='text-white'>Receipt No</th>
                              <th className='text-white'>Txn Id</th>
                              <th className='text-white'>Product</th>
                              <th className='text-white'>Total Price</th>
                              <th className='text-white'>Quantity</th>
                              <th className='text-white'>Payment status</th>
                              <th className='text-white'>Delivery Status</th>
                          </tr>
                   </thead>
                   <tbody>
                        <tr>
                            <td>1</td>
                            <td>serercxcdd34</td>
                            <td>232dd34xxxxx</td>
                            <td><Button className='text-capitalize' onClick={() => setModalShow(true)}>View</Button></td>
                            <td>Rs 40000</td>
                            <td>1</td>
                            <td>completed</td>
                            <td>pending</td>
                        </tr>

                       
                   </tbody>
              </table>
              </div>
        </div>
        </Layout>
        </>
    );
}

export default MyOrder;