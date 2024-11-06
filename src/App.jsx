import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Header from './Components/Header'
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import { ProductProvider } from './Components/GlobalContextProvider/ProductContext';
import ProductDetail from './Pages/ProductDetail.jsx';
import Cart from './Pages/Cart/index.jsx';
import Signup from './Pages/Login-Signup/Signup.jsx';
import LoginPage from './Pages/Login-Signup/LoginPage.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { getCurrentUserDetail } from './Pages/Login-Signup/Auth.js';
import { isLogin } from './Pages/Login-Signup/Auth.js';
import { useEffect } from 'react';
import ProductContext from './Components/GlobalContextProvider/ProductContext';
import WishListPage from './Pages/WishList/WishListPage.jsx';
import OrderDetail from './Pages/Orders/OrderDetail.jsx';
import MyOrder from './Pages/Orders/MyOrder.jsx';
function App() {

//   const { login,setLogin,userDetail, setUserDetail} = useContext(ProductContext);
//   console.log(getCurrentUserDetail())
//   useEffect(() => {
//     setUserDetail(getCurrentUserDetail());
//     setLogin(isLogin());
//  }, [login]);


  return (
    <>
      <ProductProvider>
        <Router>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<LoginPage />} />
            <Route path="/wishlist" element={<WishListPage />} />
            <Route path="/order" element={<OrderDetail />} />
            <Route path="/myorder" element={<MyOrder />} />
          </Routes>
        </Router>
        </ProductProvider>
     
    </>
  )
}

export default App
