import React from 'react';
import { IoIosSearch } from "react-icons/io";
import './index.css';
import { Button } from '@mui/material';
import { useContext } from 'react';
import ProductContext from '../GlobalContextProvider/ProductContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function SearchBox(props) {
    const navigate=useNavigate();
    const[productName,setProductName]=useState('');
    const{setSearchProduct}=useContext(ProductContext);

    function handleInput(e){
        setProductName(e.target.value)
    }
    function searchProduct(e){
         
          setSearchProduct(productName);
          if (productName.trim()) { // Check if searchTerm is not empty
            navigate("/products"); // Only navigate when there’s a valid search term
          }
         
    }

    
    
      const handleKeyPress = (e) => {
        if (e.key === "Enter") {
          searchProduct(); // Trigger search on Enter key press
        }
      };


    return (
        <div className="headerSearchWrapper">
            <div className="d-flex align-items-center ">
                <div className="headerSearch ml-5 mr-3">
                    <input  type="text" value={productName}
                     onChange={handleInput}
                     onKeyPress={handleKeyPress} 
                    placeholder="search for product.." />
                    <Button type="sumbit" onClick={searchProduct}>
                        <IoIosSearch style={{ fontSize: "25px"  }} />
                    </Button>
                </div>

            </div>

        </div>
    );
}

export default SearchBox;