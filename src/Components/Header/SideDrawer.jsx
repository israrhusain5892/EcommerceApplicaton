import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { CiLocationOn } from "react-icons/ci";
import logo from '../../assets/shopify.svg';
import bag from '../../assets/bag.png';
import fashion from '../../assets/fashion.png';
import grocery from '../../assets/grocery.png';
import foot from '../../assets/foot.png';
import jwell from '../../assets/jwellery.png'
import well from '../../assets/well.png'
import beauty from '../../assets/beauty.png'
import { FcTwoSmartphones } from "react-icons/fc";
import { useContext } from 'react';
import ProductContext from '../GlobalContextProvider/ProductContext';
import { useNavigate } from 'react-router-dom';

export default function SideDrawer({ open, toggleDrawer,login }) {
 const navigate=useNavigate()

      

    const categories = [
        {
            name: 'FASHION',
            image: fashion,
            color: '#ECFFEC'
        },
        {
            name: 'ELECTRONICS',
            image: fashion,
            color: '#FDF0FF'
        },
        {
            name: 'BAGS',
            image: bag,
            color: '#FDF0FF'
        },
        {
            name: 'FOOTWEAR',
            image: foot,
            color: '#DEF3FF'
        },
        {
            name: 'GROCERIES',
            image: grocery,
            color: '#FFE8F8'
        },



        {
            name: 'WELLNESS',
            image: well,
            color: '#FFF3FF'
        },

        {
            name: 'BEAUTY',
            image: beauty,
            color: '#DEF3FF'
        },


    ]

    const { setCategory ,cart} = useContext(ProductContext);

    const serachByCat=(category)=>{
          setCategory(category);
          navigate('/products');
    }

    const goToLoginPage=()=>{
        navigate('/signin')
    }


    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" >
            <List>
                <img width='140' style={{ marginLeft: '20%' }} src={logo} />
                <div className="locat p-9 d-flex align-items-center">
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
                {categories.map((category, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton onClick={()=>serachByCat(category.name)}>
                           
                                {
                                    category.name === 'ELECTRONICS' ? <FcTwoSmartphones style={{ fontSize: '22px', marginRight: '8px' }} />
                                        : <img src={category.image} style={{ width: '22px', marginRight: '15px' }} />
                                }
                           
                            <ListItemText className='text-capitalize' primary={category.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
                {
                    login ? <Button onClick={goToLoginPage} style={{background:'#6d4aae',width:'90%' ,marginLeft:'10px',marginTop:'30px'}} className='py-2 px-3 text-capitalize text-white '>Logout</Button>
                    :
                    <Button onClick={goToLoginPage} style={{background:'#6d4aae',width:'90%' ,marginLeft:'10px',marginTop:'30px'}} className='py-2 px-3 text-capitalize text-white '>Sign In</Button>
                }
                
            </List>
            <Divider />
           
        </Box>
    );

    return (
        <div>

            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
