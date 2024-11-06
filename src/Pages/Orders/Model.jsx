
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ProductContext from '../../Components/GlobalContextProvider/ProductContext';
import { Link } from 'react-router-dom';
import { Rating } from '@mui/material';
import QuantityBox from '../../Components/QuantityBox.jsx';
import '../../App.css';
function Model(props) {

    const { cart } = useContext(ProductContext);
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Product Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="table-responsibe w-100 d-flex justify-content-center">
                    <table className="table">
                        <thead >
                            <tr>
                                <th>Product</th>
                                <th >Unit Price</th>
                                <th >quantity</th>
                            </tr>

                        </thead>

                        <tbody>
                            {
                                cart.length > 0 && cart?.map(prod => {


                                    return <tr>
                                        <td width='50%'>
                                            <Link to={'/'}>
                                                <div className="productContainer d-flex align-items-center gap-3">
                                                    <div className="cartImage" style={{ width: 40 }}>
                                                        <img src={prod?.images[0]} className='w-100' />
                                                    </div>
                                                    <div className="w-100">
                                                        <h6 className="title" style={{ color: ' #343434', fontWeight: '700', }}>{prod?.name.slice(0, 20)}..</h6>
                                                        <Rating value={prod?.rating} size='small' readOnly />
                                                    </div>

                                                </div>
                                            </Link>
                                        </td>
                                        <td width='50%'>Rs {prod?.price}</td>
                                       <td>{prod?.quantity}</td>


                                    </tr>

                                })
                            }




                        </tbody>
                    </table>
                </div>
            </Modal.Body>
           
        </Modal>
    );
}
export default Model;



