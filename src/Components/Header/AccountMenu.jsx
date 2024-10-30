import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useState,useEffect } from 'react';
// import {Tooltip} from '@mui/material/Tooltip';
import Tooltip from '@mui/material/Tooltip';
// import {PersonAdd} from '@mui/icons-material/PersonAdd';
// import {Settings} from '@mui/icons-material/Settings';
import { CiSettings } from 'react-icons/ci';
import { MdPersonPinCircle } from 'react-icons/md';
// import {Logout} from '@mui/icons-material/Logout';
import { BiLogOut } from 'react-icons/bi';
import { FaUser } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { getCurrentUserDetail } from '../../Pages/Login-Signup/Auth';
import { isLogin } from '../../Pages/Login-Signup/Auth';
import { doLogout } from '../../Pages/Login-Signup/Auth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import ProductContext from '../GlobalContextProvider/ProductContext';
import { useContext } from 'react';

export default function AccountMenu({Logout}) {

     const{userDetail,setUserDetail}=useContext(ProductContext)

     useEffect(()=>{
        setUserDetail(getCurrentUserDetail())
     },[getCurrentUserDetail])

   
     
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

                <Tooltip title="Account settings">
                    <IconButton
                     style={{width:'45px',height:'45px'}}
                        onClick={handleClick}
                        size="40"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 40, height: 40 }}>I</Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 25,
                                height: 25,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 8,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem className='menu  d-flex align-items-center gap-2 border border-bottom border-1 pb-3' onClick={handleClose}>
                    <Avatar className='fs-1 w-3 h-3'  style={{width:'35px',height:'35px'}}/> 
                    <div>
                    <h5 className='m-0 p-0 fs-6 font-weight-bold text-capitalize'>{userDetail?.userDto?.name}</h5>
                    <p style={{fontSize:'13px', opacity:'0.6'}} className='m-0 p-0 '>{userDetail?.userDto?.email}</p>
                   </div>
                  
                </MenuItem>
                <Divider />
                <MenuItem className='text-bold ' style={{fontSize:'14px',fontWeight:'500'}}onClick={handleClose}>
                     <FaUser className='mr-4' style={{marginRight:'14px'}} /> My Account
                </MenuItem>
              
                <MenuItem className='text-bold ' style={{fontSize:'14px',fontWeight:'500'}}onClick={handleClose}>
                     <MdOutlinePayment className='mr-4' style={{marginRight:'17px'}} /> Orders
                </MenuItem>
                <MenuItem className='text-bold ' style={{fontSize:'14px',fontWeight:'500'}}onClick={handleClose}>
                     <FaHeart className='mr-4' style={{marginRight:'14px'}} /> MyList
                </MenuItem>

                <MenuItem  className='text-bold ' style={{fontSize:'14px',fontWeight:'500'}} onClick={Logout}>
                     <BiLogOut  className='mr-4' style={{marginRight:'14px'}} /> Logout
                </MenuItem>
{/*                 
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <fontSize="23px" />
                    </ListItemIcon>
                    Logout
                </MenuItem> */}
            </Menu>
        </React.Fragment>
    );
}
