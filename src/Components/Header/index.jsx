import "./index.css";
import logo from '../../assets/shopify.svg';
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import SearchBox from "./SearchBox";
import { Button } from "@mui/material";
import { BsMinecartLoaded } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { IoShirtSharp } from "react-icons/io5";
import { FcTwoSmartphones } from "react-icons/fc";
import bag from '../../assets/bag.png';
import fashion from '../../assets/fashion.png';
import grocery from '../../assets/grocery.png';
import foot from '../../assets/foot.png';
import jwell from '../../assets/jwellery.png'
import well from '../../assets/well.png'
import beauty from '../../assets/beauty.png'
import { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
const Header = () => {

     const [showSlider, setShowSlider] = useState(false);

     return (
          <>
               <div className="headerWrapperFixed fixed">

                    <div className="header-wrapper">
                         <div className="header-top  ">
                              <div className="container">
                                   <p>Due to the COVID 19 epidemic, orders may be processed with a slight delay</p>
                              </div>

                         </div>
                         <div className="header">
                              <div className="container">
                                   <div className="row">
                                        <div className="logoWrapper d-flex col-sm-2 align-items-center">
                                             <Button className="mobileMenu"><IoMdMenu /></Button>
                                             <img src={logo} alt="logo" />
                                             <div className="mobileCart">
                                                  <Button> <BsMinecartLoaded style={{ fontSize: '23px', color: 'red', opacity: '0.8' }} /></Button>
                                                  <span className="count d-flex align-items-center justify-content-center">0</span>
                                             </div>
                                        </div>
                                        <div className="d-flex col-sm-10 align-items-center gap-4 part2">

                                             <div className="location p-9 d-flex align-items-center">
                                                  <CiLocationOn className="loc-icon" style={{ fontSize: "25px" }} />
                                                 

                                                   <select>
                                                    <option disabled selected style={{ opacity: '0.5', color: '#ccc' }}>
                                                       Your Location
                                                  </option>
                                                  <option>
                                                       India
                                                  </option>
                                                  <option>
                                                       USA
                                                  </option>
                                                  <option>
                                                       Germany
                                                  </option>
                                                  <option>
                                                       France
                                                  </option>
                                                  <option>
                                                       Russia
                                                  </option>
                                                  <option>
                                                       Dubai
                                                  </option>
                                             </select> 
                                             </div>
                                             <SearchBox />
                                             <div className="part3 d-flex ml-auto align-items-center">
                                                  <Link><Button className="btn-blue" >Sign In</Button></Link>
                                             </div>
                                             <div className="cart">
                                                  <Button> <BsMinecartLoaded className="svg" /></Button>
                                                  <span className="count d-flex align-items-center justify-content-center">0</span>
                                             </div>

                                        </div>


                                   </div>

                              </div>

                         </div>

                         <nav className="navBar">
                              <div className="container">
                                   <div className="row">
                                        <div className="col-sm-2 navLeft">
                                             <div className="btnWrapper">
                                                  <Button onClick={() => setShowSlider(!showSlider)} className="d-flex align-items-center gap-2 mainBtn" >
                                                       <IoMdMenu className="icon" />
                                                       ALL CATEGORIES
                                                       <FaAngleDown className="icon" />
                                                  </Button>
                                                  <div className={`navSideBar ${showSlider === true ? 'open' : ''}`}>
                                                       <ul className="ul-list">
                                                            <li style={{ width: '100%' }}>
                                                                 <Link >
                                                                      <Button>
                                                                           <img src={fashion} style={{ width: '22px', marginRight: '8px' }} />
                                                                           <span style={{ color: 'black' }}>Fashion</span>
                                                                      </Button>
                                                                 </Link>
                                                            </li>
                                                            <li style={{ width: '100%' }}>
                                                                 <Link >
                                                                      <Button>
                                                                           <FcTwoSmartphones style={{ fontSize: '22px', marginRight: '8px' }} />
                                                                           <span style={{ color: 'black' }}>Electronics</span>
                                                                      </Button>
                                                                 </Link>
                                                            </li>

                                                            <li style={{ width: '100%' }}>
                                                                 <Link >
                                                                      <Button>
                                                                           <img src={bag} style={{ width: '22px', marginRight: '8px' }} />
                                                                           <span style={{ color: 'black' }}>Bags</span>
                                                                      </Button>
                                                                 </Link>
                                                            </li>

                                                            <li style={{ width: '100%' }}>
                                                                 <Link >
                                                                      <Button>
                                                                           <img src={foot} style={{ width: '22px', marginRight: '8px' }} />
                                                                           <span style={{ color: 'black' }}>Footwear</span>
                                                                      </Button>
                                                                 </Link>
                                                            </li>

                                                            <li style={{ width: '100%' }}>
                                                                 <Link >
                                                                      <Button>
                                                                           <img src={grocery} style={{ width: '22px', marginRight: '8px' }} />
                                                                           <span style={{ color: 'black' }}>Grocery</span>
                                                                      </Button>
                                                                 </Link>
                                                            </li>

                                                            <li style={{ width: '100%' }}>
                                                                 <Link >
                                                                      <Button>
                                                                           <img src={jwell} style={{ width: '22px', marginRight: '8px' }} />
                                                                           <span style={{ color: 'black' }}>Jwellery</span>
                                                                      </Button>
                                                                 </Link>
                                                            </li>
                                                       </ul>
                                                  </div>
                                             </div>

                                        </div>
                                        <div className="col-sm-10 d-flex align-items-center navRight">
                                             <ul className="list">
                                                  <li className="list-inline-item" style={{ width: '100%' }}>
                                                       <Link >
                                                            <Button>
                                                                 <img src={fashion} style={{ width: '22px', marginRight: '8px' }} />
                                                                 <span style={{ color: 'black' }}>Fashion</span>
                                                            </Button>
                                                       </Link>
                                                  </li>
                                                  <li className="list-inline-item" style={{ width: '100%' }}>
                                                       <Link >
                                                            <Button>
                                                                 <FcTwoSmartphones style={{ fontSize: '22px', marginRight: '8px' }} />
                                                                 <span style={{ color: 'black' }}>Electronics</span>
                                                            </Button>
                                                       </Link>
                                                  </li>

                                                  <li className="list-inline-item" style={{ width: '100%' }}>
                                                       <Link >
                                                            <Button>
                                                                 <img src={bag} style={{ width: '22px', marginRight: '8px' }} />
                                                                 <span style={{ color: 'black' }}>Bags</span>
                                                            </Button>
                                                       </Link>
                                                  </li>

                                                  <li className="list-inline-item" style={{ width: '100%' }}>
                                                       <Link >
                                                            <Button>
                                                                 <img src={foot} style={{ width: '22px', marginRight: '8px' }} />
                                                                 <span style={{ color: 'black' }}>Footwear</span>
                                                            </Button>
                                                       </Link>
                                                  </li>

                                                  <li className="list-inline-item" style={{ width: '100%' }}>
                                                       <Link >
                                                            <Button>
                                                                 <img src={grocery} style={{ width: '22px', marginRight: '8px' }} />
                                                                 <span style={{ color: 'black' }}>Grocery</span>
                                                            </Button>
                                                       </Link>
                                                  </li>

                                                  <li className="list-inline-item" style={{ width: '100%' }}>
                                                       <Link >
                                                            <Button>
                                                                 <img src={jwell} style={{ width: '22px', marginRight: '8px' }} />
                                                                 <span style={{ color: 'black' }}>Jwellery</span>
                                                            </Button>
                                                       </Link>
                                                  </li>
                                                  <li className="list-inline-item" style={{ width: '100%' }}>
                                                       <Link >
                                                            <Button>
                                                                 <img src={well} style={{ width: '22px', marginRight: '8px' }} />
                                                                 <span style={{ color: 'black' }}>Wellness</span>
                                                            </Button>
                                                       </Link>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>

                              </div>
                         </nav>
                    </div>
               </div>
          </>
     )
}

export default Header;