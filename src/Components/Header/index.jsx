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

import { useEffect, useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProductContext from "../GlobalContextProvider/ProductContext";
import { useContext } from "react";
import bag from '../../assets/bag.png';
import fashion from '../../assets/fashion.png';
import grocery from '../../assets/grocery.png';
import foot from '../../assets/foot.png';
import jwell from '../../assets/jwellery.png'
import well from '../../assets/well.png'
import beauty from '../../assets/beauty.png'
import SideDrawer from "./SideDrawer";
import { FiUser } from "react-icons/fi";
import AccountMenu from "./AccountMenu";
import { isLogin } from "../../Pages/Login-Signup/Auth";
import { getCurrentUserDetail } from "../../Pages/Login-Signup/Auth";
import { doLogout } from "../../Pages/Login-Signup/Auth";

import Swal from "sweetalert2";
const Header = () => {
     

    
     const navigate = useNavigate();
     const { setCategory, cart ,login,setLogin,userDetail, setUserDetail} = useContext(ProductContext);
     const [showSlider, setShowSlider] = useState(false);
    
     useEffect(()=>{
          setUserDetail(getCurrentUserDetail())
          setLogin(isLogin())
     },[isLogin,getCurrentUserDetail])
    console.log(login)

    
   
   
  
    
    const Logout = () => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, logout!'
        }).then((result) => {
          if (result.isConfirmed) {
            doLogout(() => {
              setLogin(false);
              Swal.fire(
                'Logged out!',
                'You have been logged out.',
                'success'
              );
              navigate("/");
            });
          }
        });
      };






     function goProduct(category) {
          setCategory(category)
          console.log(category)
          navigate(`/products`);
     }

   


     const goToCartPage = () => {
          navigate("/cart");
     }

     const categories = [
          {
               name: 'Fashion',
               image: fashion,
               color: '#ECFFEC'
          },
          {
               name: 'Electronics',
               image: fashion,
               color: '#FDF0FF'
          },
          {
               name: 'Bags',
               image: bag,
               color: '#FDF0FF'
          },
          {
               name: 'Footwear',
               image: foot,
               color: '#DEF3FF'
          },
          {
               name: 'Groceries',
               image: grocery,
               color: '#FFE8F8'
          },



          {
               name: 'Wellness',
               image: well,
               color: '#FFF3FF'
          },

          {
               name: 'Beauty',
               image: beauty,
               color: '#DEF3FF'
          },


     ]
     const [isDrawerOpen, setIsDrawerOpen] = useState(false);

     // Function to open/close the drawer
     const toggleDrawer = (open) => () => {
          setIsDrawerOpen(open);
     };

     const goToLogin = () => {
          Swal.fire({
               title: 'Sorry you are not Sign In?',
               text: "First Login in your Account the you can access cart page",
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Login now!'
             }).then((result) => {
               if (result.isConfirmed) {
                    navigate('/signin')
               }
             });
         
     }

     const goToHome=()=>{
          navigate('/');
     }

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
                                             <Button onClick={toggleDrawer(true)} className="mobileMenu"><IoMdMenu /></Button>
                                             <Button onClick={goToHome}><img src={logo} alt="logo" /></Button>
                                             <div onClick={goToCartPage} className="mobileCart">
                                                  <Button> <BsMinecartLoaded style={{ fontSize: '23px', color: 'red', opacity: '0.8' }} /></Button>
                                                  <span className="count d-flex align-items-center justify-content-center">{cart.length}</span>
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

                                             {
                                                  login ? <AccountMenu className='ml-auto part3' 
                                                     user={userDetail?.userDto} Logout={Logout}
                                                  
                                                  /> :
                                                       <div className="part3 d-flex ml-auto align-items-center">
                                                            <Link to='/signin'><Button className="btn-blue" >Sign In</Button></Link>
                                                       </div>
                                             }



                                             <div

                                                  onClick={login ? goToCartPage : goToLogin} className="cart">
                                                  <Button> <BsMinecartLoaded className="svg" /></Button>
                                                  <span className="count d-flex align-items-center justify-content-center">{cart.length}</span>
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
                                                            {
                                                                 categories.map((category, index) => {
                                                                      return <li style={{ width: '100%' }} >

                                                                           <Button onClick={() => goProduct(category.name)}>
                                                                                {
                                                                                     category.name === 'Electronics' ? <FcTwoSmartphones style={{ fontSize: '22px', marginRight: '8px' }} />
                                                                                          : <img src={category.image} style={{ width: '22px', marginRight: '8px' }} />
                                                                                }

                                                                                <span style={{ color: 'black' }}>{category.name}</span>
                                                                           </Button>
                                                                           {/* </Link> */}
                                                                      </li>
                                                                 })
                                                            }


                                                       </ul>
                                                  </div>
                                             </div>

                                        </div>
                                        <div className=" align-items-center navRight">
                                             <ul className="list">
                                                  {
                                                       categories.map((category, index) => {
                                                            return <li className="list-inline-item" style={{ width: '100%' }} key={index}>

                                                                 <Button onClick={() => goProduct(category.name)}>
                                                                      {
                                                                           category.name === 'Electronics' ? <FcTwoSmartphones style={{ fontSize: '22px', marginRight: '8px' }} />
                                                                                : <img src={category.image} style={{ width: '22px', marginRight: '8px' }} />
                                                                      }

                                                                      <span style={{ color: 'black' }}>{category.name}</span>
                                                                 </Button>

                                                            </li>
                                                       })
                                                  }

                                             </ul>
                                        </div>

                                        <div className="nav-overlay"></div>

                                        <SideDrawer login={login} style={{ zIndex: '1000' }} open={isDrawerOpen} toggleDrawer={toggleDrawer} />

                                   </div>

                              </div>
                         </nav>
                    </div>
               </div>
          </>
     )
}

export default Header;