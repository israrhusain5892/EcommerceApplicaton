import * as React from 'react';
import Header from "../../Components/Header";
import NewsLetter from "../../Components/Home/NewsLetter";
import Footer from "../../Components/Footer";
import "../../App.css";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Radio, RadioGroup } from "@mui/material";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState, useEffect } from "react";
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import { TiThSmall } from "react-icons/ti";
import { IoIosMenu } from "react-icons/io";
import { BiBorderAll } from "react-icons/bi";
import NativeSelect from '@mui/material/NativeSelect';
import { useLocation, useNavigate } from "react-router-dom";
import { productList } from '../../ProductList';
import ProductItem from '../../Components/Product/ProductItem';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductContext from '../../Components/GlobalContextProvider/ProductContext';
import Layout from '../../Components/Layout';


const ProductList = () => {

    // const [range, setRange] = useState([0, 100000000]);
    const[price,setPrice]=useState([100,100000]);
    const [rating, setRating] = useState(1);
    const location = useLocation();
    const navigate = useNavigate();
    const [width, setWidth] = useState('25%');
    const[filteredProducts,setFilteredProducts]=useState([])
    const [products, setProducts] = useState(productList);
    const [itemsToShow, setItemsToShow] = useState(5);
    const[subCategory,setSubCategory]=useState('')
    

    const { category, searchProduct ,setCategory} = useContext(ProductContext);

    const handleSubCategory=(e)=>{
          setCategory(e.target.value)
        
    }
   console.log(category)

    const handleRating=(event,newValue)=>{
        if (newValue !== null) { // Ensure newValue is not null
            setRating(newValue);
            
          }
       
        
    }

    const handleItemChange = (event) => {
        setItemsToShow(event.target.value);
    };

    const handleRange = (event, newValue) => {
        if(newValue!=null){
            setPrice(newValue);
            
        }
      
        
    };


  
   

   useEffect(() => {
    // Start with the full product list
    let results = productList;

    // Step 1: Apply search filter on the entire product list if searchProduct is provided
    if (searchProduct) {
        results = productList.filter(product =>
            product.name.toLowerCase().includes(searchProduct.toLowerCase())
        );
    }

 
    else if (category) {
     
         results = productList.filter(product =>
            product.category.toLowerCase() === category.toLowerCase() || product.subCategory.toLowerCase().includes(category.toLowerCase())
        );

    }
     if (price && price[0] > 1) {
        results = results.filter(product =>
            product.price >= price[0]  && product.price <= price[1] 
        );
    }

  
    if (rating > 1) {
        results = results.filter(product => product.rating === rating);
    }


   

    // Set the final filtered products
    setFilteredProducts(results);
}, [searchProduct, category, price, rating, productList]);


    return (
        <>
           <Layout>
            <div className="productListingPage">
                <div className="container productList ">
                    <aside className="filter-side ">
                        <div className="filterBox">
                            <h6>Product Categories</h6>
                            <div className="scroll">
                                <RadioGroup
                                   
                                   value={category}
                                   onChange={handleSubCategory}
                                
                                >
                                    <FormControlLabel value="Men" control={<Radio defaultChecked />} label="Men" />
                                    < FormControlLabel value="Women" control={<Radio defaultChecked />} label="Women" />

                                    < FormControlLabel value="Computers and Accessories" control={<Radio defaultChecked />} label="Computers and Accessories" />
                                    < FormControlLabel value="Cameras" control={<Radio defaultChecked />} label="Cameras" />
                                    < FormControlLabel value="Smart Watch Accessories" control={<Radio defaultChecked />} label="Smart Watch Accessories" />
                                    < FormControlLabel value="Men Footwear" control={<Radio defaultChecked />} label="Men Footwear" />
                                    < FormControlLabel value="Women Footwear" control={<Radio defaultChecked />} label="Women Footwear" />
                                    < FormControlLabel value="Cooking Essentials" control={<Radio defaultChecked />} label="Cooking Essentials" />
                                    < FormControlLabel value="Home Care" control={<Radio defaultChecked />} label="Home Care" />
                                </RadioGroup>
                            </div>
                        </div>
                        <div className="filterBox">
                            <h6>Filter By Price</h6>
                            <Box sx={{ width: '100% ', color: 'violet' }}>

                                <Slider

                                    value={price}
                                    onChange={handleRange}
                                    // valueLabelDisplay="auto"
                                         min={100}
                                         max={100000}
                                    disableSwap
                                    sx={{
                                        '& .MuiSlider-thumb': {
                                            color: 'rgb(109, 74, 174)', // Thumb (handle) color
                                            width: '18px',
                                            height: '18px'
                                        },
                                        '& .MuiSlider-track': {
                                            color: 'rgb(109, 74, 174)', // The selected range color
                                        },
                                        '& .MuiSlider-rail': {
                                            color: 'dark-grey', // The unselected range color
                                            padding: '3px'
                                        },
                                    }}
                                />
                            </Box>
                            <div className="d-flex pt-2 bt-2 range justify-content-between  w-100">
                                <span>From: <strong>Rs:{price[0]}</strong></span>
                                <span className="ml-auto">To: <strong>Rs:{price[1]}</strong></span>
                            </div>
                        </div>
                        <div className="filterBox">
                            <h6>Filter By Rating</h6>

                            <Box>

                              <Rating
                                    name="simple"
                                    value={rating}
                                    onChange={handleRating}>
                                </Rating>
                             </Box>


                        </div>
                        <div className='side-banner'>
                            <div className='banner mb-3'>
                                <Link to='/'>
                                    <img src="https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729058293/1729058292132_New_Project_34.jpg" className="w-100 transition" alt="banner img" />
                                </Link>
                            </div>
                        </div>
                    </aside>
                    <div className="rightContainer ">
                        <div className='topPart mt-0 mb-3 d-flex align-items-center justify-content-between'>
                            <div className='d-flex gap-4 align-items-center '>
                                <IoIosMenu onClick={() => setWidth('100%')} className='full ' />
                                <TiThSmall onClick={() => setWidth('33%')} className='some ' />
                                <BiBorderAll onClick={() => setWidth('25%')} className='all ' />
                            </div>
                            <div>
                                <span className='mr-4'>Show  </span>
                                <NativeSelect

                                    style={{ underline: 'none', textDecoration: 'none', border: 'none' }}
                                    value={itemsToShow}
                                    onChange={(e) => handleItemChange}
                                    inputProps={{
                                        name: 'number',
                                        id: 'uncontrolled-native',
                                    }}
                                >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={6}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10}>10</option>
                                </NativeSelect>

                            </div>
                        </div>
                        <div className='productListSection row '>
                            {
                                filteredProducts.length > 0 ? filteredProducts?.map(product => {


                                    return <div className={`productItem2  mt-4`}
                                       style={{width:width}}
                                    >
                                       
                                           <ProductItem width={width} product={product} />
                                       
                                       
                                    </div>

                                }) :

                                    <p className='text-center text-bold mt-30 text-xl'>Sorry No Product Found!!</p>

                            }

                        </div>
                    </div>
                </div>
            </div>

           </Layout>
        </>
    )
}
export default ProductList;