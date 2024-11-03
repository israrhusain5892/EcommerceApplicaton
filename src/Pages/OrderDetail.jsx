import React, { useState } from 'react';
import { TextField, Button, Box, Container, Typography, Grid, Card, CardContent, Divider } from '@mui/material';
import { IoBagCheckOutline } from "react-icons/io5";
import Layout from '../Components/Layout';
import useRazorpay from "react-razorpay";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
const OrderDetail = () => {

    const [Razorpay] = useRazorpay();
    const location = useLocation();
    const { state } = location;
    // const [Razorpay]=useRazorpay;
    // State for form values and validation errors
    const [formValues, setFormValues] = useState({
        fullName: '',
        streetAddress: '',
        city: '',
        country: '',
        state: '',
        zipCode: '',
        phone: '',
        email: '',
    });

    const [errors, setErrors] = useState({});

    // Sample product details for the order summary
    const productDetails = {
        name: "Product A",
        price: state?.total,
        quantity: 2,
    };

    const subtotal = productDetails.price * productDetails.quantity;
    const total = subtotal + 5; // Assuming $5 for shipping or additional fees

    // Handle form value changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    // Basic validation function
    const validate = () => {
        const newErrors = {};
        if (!formValues.fullName) newErrors.fullName = 'Full name is required';
        if (!formValues.streetAddress) newErrors.streetAddress = 'Street address is required';
        if (!formValues.city) newErrors.city = 'City is required';
        if (!formValues.country) newErrors.country = 'Country is required';
        if (!formValues.state) newErrors.state = 'State is required';
        if (!formValues.zipCode) newErrors.zipCode = 'ZIP Code is required';
        if (!formValues.phone) newErrors.phone = 'Phone number is required';
        else if (!/^\d{10}$/.test(formValues.phone)) newErrors.phone = 'Enter a valid 10-digit phone number';
        if (!formValues.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formValues.email)) newErrors.email = 'Enter a valid email';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Billing Details:', formValues);
            try {
                const amt = productDetails.price;
                const result = await axios.post(`https://tourism-and-travel-management-system.onrender.com/public/create-order/${amt}`);
                const { amount, id: order_id, currency } = result.data;
    
                console.log(result);
    
                const options = {
                    key: "rzp_test_m9GtDw9SM8uFLX", // Enter the Key ID generated from the Dashboard
                    key_secret: "pvELoNMJuG107DKyjLapBhI7",
                    amount: amount,
                    currency: currency,
                    name: "Indian Tourism",
                    description: 'Booking Payment',
                    // image:'https://img.freepik.com/free-photo/traveler-accessories-cup-tea-pink-background_23-2147950767.jpg?t=st=1721291423~exp=1721295023~hmac=c3b551172e792245e2494b3a66f214635f630df0ebc46e7862b4f388dee24b2d&w=740',
                    order_id: order_id,
                    handler: async function (response) {
                        // Handle payment success
                        setLoading(true);
                        console.log(response);
                        // await UpdatePayment(result.data);
                    },
                    theme: {
                        color: '#F37254'
                    }
                };
    
                const rzp1 = new Razorpay(options);
                rzp1.open();
            } catch (error) {
                alert('Error creating Razorpay order');
                console.log(error);
            }
            // alert('Order Submitted Successfully!');
        }
    };

    return (
        <Layout>
            <Container maxWidth="lg" className='mt-4 mb-3'>
                <Box sx={{ my: 4 }}>
                    {/* <Typography variant="h4" gutterBottom>
                    Order Details
                </Typography> */}
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            {/* Left Side - Billing Details Form */}
                            <Grid item xs={12} md={7}>

                                <Typography variant="h6" gutterBottom>
                                    Billing Details
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            id="fullName"
                                            name="fullName"
                                            label="Full Name"
                                            value={formValues.fullName}
                                            onChange={handleChange}
                                            error={!!errors.fullName}
                                            helperText={errors.fullName}
                                            InputProps={{
                                                sx: {
                                                    padding: '4px', // Adjust padding here
                                                    minHeight: '40px', // Custom minimum height
                                                    height: '40px',    // Custom height
                                                },
                                            }}
                                            sx={{
                                                '& .MuiInputBase-root': {
                                                    minHeight: '40px',  // Additional height control for TextField
                                                },
                                            }}
                                            InputLabelProps={{
                                                sx: {
                                                    fontSize: '0.85rem',   // Adjust font size of the label
                                                    top: '-5px',           // Control label position
                                                    color: 'text.secondary', // Change label color if needed
                                                },
                                                // shrink: true,             // Keep label in shrunk position (if desired)
                                            }}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            id="streetAddress"
                                            name="streetAddress"
                                            label="Street Address"
                                            value={formValues.streetAddress}
                                            onChange={handleChange}
                                            error={!!errors.streetAddress}
                                            helperText={errors.streetAddress}
                                            InputProps={{
                                                sx: {
                                                    padding: '4px', // Adjust padding here
                                                    minHeight: '40px', // Custom minimum height
                                                    height: '40px',    // Custom height
                                                },
                                            }}
                                            sx={{
                                                '& .MuiInputBase-root': {
                                                    minHeight: '40px',  // Additional height control for TextField
                                                },
                                            }}
                                            InputLabelProps={{
                                                sx: {
                                                    fontSize: '0.85rem',   // Adjust font size of the label
                                                    top: '-5px',           // Control label position
                                                    color: 'text.secondary', // Change label color if needed
                                                },
                                                // shrink: true,             // Keep label in shrunk position (if desired)
                                            }}
                                        />
                                    </Grid>

                                    <Grid item xs={6} sm={6}>
                                        <TextField
                                            fullWidth
                                            id="city"
                                            name="city"
                                            label="City"
                                            value={formValues.city}
                                            onChange={handleChange}
                                            error={!!errors.city}
                                            helperText={errors.city}
                                            InputProps={{
                                                sx: {
                                                    padding: '4px', // Adjust padding here
                                                    minHeight: '40px', // Custom minimum height
                                                    height: '40px',    // Custom height
                                                },
                                            }}
                                            sx={{
                                                '& .MuiInputBase-root': {
                                                    minHeight: '40px',  // Additional height control for TextField
                                                },
                                            }}
                                            InputLabelProps={{
                                                sx: {
                                                    fontSize: '0.85rem',   // Adjust font size of the label
                                                    top: '-5px',           // Control label position
                                                    color: 'text.secondary', // Change label color if needed
                                                },
                                                // shrink: true,             // Keep label in shrunk position (if desired)
                                            }}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            id="state"
                                            name="state"
                                            label="State"
                                            value={formValues.state}
                                            onChange={handleChange}
                                            error={!!errors.state}
                                            helperText={errors.state}
                                            InputProps={{
                                                sx: {
                                                    padding: '4px', // Adjust padding here
                                                    minHeight: '40px', // Custom minimum height
                                                    height: '40px',    // Custom height
                                                },
                                            }}
                                            sx={{
                                                '& .MuiInputBase-root': {
                                                    minHeight: '40px',  // Additional height control for TextField
                                                },
                                            }}
                                            InputLabelProps={{
                                                sx: {
                                                    fontSize: '0.85rem',   // Adjust font size of the label
                                                    top: '-5px',           // Control label position
                                                    color: 'text.secondary', // Change label color if needed
                                                },
                                                // shrink: true,             // Keep label in shrunk position (if desired)
                                            }}

                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            id="country"
                                            name="country"
                                            label="Country"
                                            value={formValues.country}
                                            onChange={handleChange}
                                            error={!!errors.country}
                                            helperText={errors.country}
                                            InputProps={{
                                                sx: {
                                                    padding: '4px', // Adjust padding here
                                                    minHeight: '40px', // Custom minimum height
                                                    height: '40px',    // Custom height
                                                },
                                            }}
                                            sx={{
                                                '& .MuiInputBase-root': {
                                                    minHeight: '40px',  // Additional height control for TextField
                                                },
                                            }}
                                            InputLabelProps={{
                                                sx: {
                                                    fontSize: '0.85rem',   // Adjust font size of the label
                                                    top: '-5px',           // Control label position
                                                    color: 'text.secondary', // Change label color if needed
                                                },
                                                // shrink: true,             // Keep label in shrunk position (if desired)
                                            }}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            id="zipCode"
                                            name="zipCode"
                                            label="ZIP Code"
                                            value={formValues.zipCode}
                                            onChange={handleChange}
                                            error={!!errors.zipCode}
                                            helperText={errors.zipCode}
                                            InputProps={{
                                                sx: {
                                                    padding: '4px', // Adjust padding here
                                                    minHeight: '40px', // Custom minimum height
                                                    height: '40px',    // Custom height
                                                },
                                            }}
                                            sx={{
                                                '& .MuiInputBase-root': {
                                                    minHeight: '40px',  // Additional height control for TextField
                                                },
                                            }}
                                            InputLabelProps={{
                                                sx: {
                                                    fontSize: '0.85rem',   // Adjust font size of the label
                                                    top: '-5px',           // Control label position
                                                    color: 'text.secondary', // Change label color if needed
                                                },
                                                // shrink: true,             // Keep label in shrunk position (if desired)
                                            }}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            id="phone"
                                            name="phone"
                                            label="Phone Number"
                                            value={formValues.phone}
                                            onChange={handleChange}
                                            error={!!errors.phone}
                                            helperText={errors.phone}
                                            InputProps={{
                                                sx: {
                                                    padding: '4px', // Adjust padding here
                                                    minHeight: '40px', // Custom minimum height
                                                    height: '40px',    // Custom height
                                                },
                                            }}
                                            sx={{
                                                '& .MuiInputBase-root': {
                                                    minHeight: '40px',  // Additional height control for TextField
                                                },
                                            }}
                                            InputLabelProps={{
                                                sx: {
                                                    fontSize: '0.85rem',   // Adjust font size of the label
                                                    top: '-5px',           // Control label position
                                                    color: 'text.secondary', // Change label color if needed
                                                },
                                                // shrink: true,             // Keep label in shrunk position (if desired)
                                            }}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            id="email"
                                            name="email"
                                            label="Email"
                                            value={formValues.email}
                                            onChange={handleChange}
                                            error={!!errors.email}
                                            helperText={errors.email}
                                            InputProps={{
                                                sx: {
                                                    padding: '4px', // Adjust padding here
                                                    minHeight: '40px', // Custom minimum height
                                                    height: '40px',    // Custom height
                                                },
                                            }}
                                            sx={{
                                                '& .MuiInputBase-root': {
                                                    minHeight: '40px',  // Additional height control for TextField
                                                },
                                            }}
                                            InputLabelProps={{
                                                sx: {
                                                    fontSize: '0.85rem',   // Adjust font size of the label
                                                    top: '-5px',           // Control label position
                                                    color: 'text.secondary', // Change label color if needed
                                                },
                                                // shrink: true,             // Keep label in shrunk position (if desired)
                                            }}
                                        />
                                    </Grid>

                                    {/* <Grid item xs={12}>
                                    <Button color="primary" variant="contained" fullWidth type="submit">
                                        Submit Billing Details
                                    </Button>
                                </Grid> */}
                                </Grid>

                            </Grid>

                            {/* Right Side - Order Summary */}
                            <Grid item xs={12} md={5}>
                                <Card variant="outlined">
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            Order Summary
                                        </Typography>

                                        {/* Product Details */}
                                        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                                            <Typography variant="body1">{productDetails.name} (x{productDetails.quantity})</Typography>
                                            <Typography variant="body1">Rs{productDetails?.price}</Typography>
                                        </Box>

                                        {/* Subtotal */}
                                        <Divider sx={{ my: 1 }} />
                                        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                                            <Typography variant="body1">Subtotal</Typography>
                                            <Typography variant="body1">${subtotal.toFixed(2)}</Typography>
                                        </Box>

                                        {/* Total */}
                                        <Divider sx={{ my: 1 }} />
                                        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                                            <Typography variant="h6">Total</Typography>
                                            <Typography variant="h6">${total.toFixed(2)}</Typography>
                                        </Box>
                                    </CardContent>
                                    <div className='mt-4 mb-3 px-3'>
                                        <Button type="submit" className="px-4 d-flex w-100 fs-6 font-weight-bold align-items-center justify-content-center gap-2 text-capitalize py-1 border bg-danger text-white ">
                                            <IoBagCheckOutline className="fs-5 font-weight-bold" />
                                            checkout
                                        </Button>
                                    </div>
                                </Card>

                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Container>
        </Layout>
    );
};

export default OrderDetail;
