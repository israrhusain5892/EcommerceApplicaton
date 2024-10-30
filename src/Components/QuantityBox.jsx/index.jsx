import { CiCirclePlus } from "react-icons/ci";
import { FaMinus } from "react-icons/fa6";
import '../../App.css';
import { FaPlus } from "react-icons/fa6";
import { Button } from "@mui/material";
import { useContext, useState ,useEffect} from "react";
import ProductContext from "../GlobalContextProvider/ProductContext";

const QuantityBox=({quantity,onIncrease,onDecrease})=>{
  const [localQuantity, setLocalQuantity] = useState(quantity);
 const {productQuantity,setProductQuantity}= useContext(ProductContext);

  useEffect(() => {
    setLocalQuantity(quantity); 
    setProductQuantity(quantity)// Sync with prop value if it changes  
}, [quantity]);

const handleIncrease = () => {
    setLocalQuantity(prevQuantity => prevQuantity + 1);
    onIncrease && onIncrease();
};

const handleDecrease = () => {
    if (localQuantity > 0) {
        setLocalQuantity(prevQuantity => prevQuantity - 1);
        onDecrease && onDecrease();
    }
};
          
           
    return(
        <>
          <div className="d-flex align-items-center gap-2  quantityBox  justify-content-center ">
             
                 <div className="circle" onClick={handleDecrease}><FaMinus className='b' /></div>
                 <input type="text" className="w-5" value={localQuantity} />
                <div className="circle ml-2" onClick={handleIncrease}><FaPlus className='b' /></div>
            
          </div>
        </>
    )
}
export default QuantityBox;