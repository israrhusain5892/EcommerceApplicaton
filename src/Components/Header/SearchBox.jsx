import React from 'react';
import { IoIosSearch } from "react-icons/io";
import './index.css';
import { Button } from '@mui/material';
function SearchBox(props) {
    return (
        <div className="headerSearchWrapper">
            <div className="d-flex align-items-center ">
                <div className="headerSearch ml-5 mr-3">
                    <input type="text" placeholder="search for product.." />
                    <Button type="sumbit">
                        <IoIosSearch style={{ fontSize: "25px"  }} />
                    </Button>
                </div>

            </div>

        </div>
    );
}

export default SearchBox;