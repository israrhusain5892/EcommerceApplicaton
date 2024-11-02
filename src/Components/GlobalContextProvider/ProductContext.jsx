// ProductContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create the Context
const ProductContext = createContext();

// Create a provider component
export const ProductProvider = ({ children }) => {
  const [category, setCategory] = useState(""); // Initial state for category
  const [searchProduct, setSearchProduct] = useState("");
  const [productQuantity, setProductQuantity] = useState(1);
   const[login,setLogin]=useState(false);
   const[userDetail,setUserDetail]=useState();
  const[isExist,setIsExist]=useState(0)

   const user=JSON.parse(localStorage.getItem("data"));


  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem(`${user?.userDto?.userId}`);
    return storedCart ? JSON.parse(storedCart) : [];
  });

  

  const[wishList,setWishList]=useState(()=>{
   
     const storedItem=localStorage.getItem(`${user?.userDto?.userId}`);
     return storedItem ? JSON.parse(storedItem):[];
  })

 

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(`${user?.userDto?.userId}`, JSON.stringify(cart));
  }, [cart]);


  const addToCart = (item) => {
    setCart((prevCart) => {
        const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
            return prevCart.map((cartItem) =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            );
        } else {
            // Set initial quantity to 1 when adding a new item
            return [...prevCart, { ...item, quantity: productQuantity }];
        }
    });
};

// Function to update the quantity of a specific item
const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
        prevCart.map((item) =>
            item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
        )
    );
};

const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
};


useEffect(()=>{
  localStorage.setItem(`${user?.userDto?.userId}`,JSON.stringify(wishList))
},[wishList])

const addToWishList = (item) => {
  setWishList((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
          return prevCart.map((cartItem) =>
              cartItem.id === item.id
                  ? { ...cartItem, quantity: cartItem.quantity + 1 }
                  : cartItem
          );
      } else {
          // Set initial quantity to 1 when adding a new item
          return [...prevCart, { ...item, quantity: productQuantity }];
      }
  });
};

const removedFromWishList=(id)=>{
  setWishList((prevCart) => prevCart.filter((item) => item.id !== id));
}


  return (
    <ProductContext.Provider
      value={{
        category, setCategory, searchProduct,
        setSearchProduct, cart, setCart, addToCart,updateQuantity,removeFromCart,
        login,setLogin,userDetail,setUserDetail,productQuantity,setProductQuantity
        ,removedFromWishList,addToWishList,wishList,setWishList,isExist,setIsExist

      }}>

      {children}
    </ProductContext.Provider>
  );
};

// Export the context for consumption
export default ProductContext;
