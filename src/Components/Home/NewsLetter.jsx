import React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Button, Input } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
import { MdOutlineMail } from "react-icons/md";
function NewsLetter(props) {
    return (
        <div className='w-100 newsletter d-flex p-4 mt-5 mb-3'>
            <div className="container">
                <div className='row'>
                    <div className="col-md-6 leftPart">
                        <p className='text-white  mb-1 discount'>$20 discount for your first order</p>
                        <h3 className="text-white">Join our newsletter and get...</h3>
                        <p className="text-light">Join our email subscription now to get updates on <br /> promotions and coupons.</p>
                        <form className='mt-2' noValidate autoComplete="off">
                            <div className='w-80 px-2 emailBtn align-items-center bg-white shadow d-flex justify-content-between'>
                                <div>
                                
                                <MdOutlineMail className='emailIcon' />
                                <FormControl sx={{ width: '400px', padding:'0  15px', background: 'white', outline: 'none',color:'black' }}>
                                    <Input type="email" disableUnderline placeholder='enter your email..' />

                                </FormControl>
                            </div>

                            <Button className='bg-primary py-2 text-white text-bold text-capitalize rounded'>Subscribe</Button>
                    </div>

                </form>
            </div>

            <div className="col-md-6">
                 <img src="https://fullstack-ecommerce.netlify.app/static/media/newsletter.5931358dd220a40019fc.png"/>
            </div>
        </div>
            </div >
        </div >
    );
}

export default NewsLetter;