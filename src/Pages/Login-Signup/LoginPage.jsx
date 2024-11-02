import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { doLogin } from './Auth.js';
import apiUrl from '../../Axios';
import Swal from "sweetalert2";
import { Button, TextField, CircularProgress } from "@mui/material";
import logo from '../../assets/shopify.svg'
import '../../App.css';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

const LoginPage = () => {

    const [showModal, setShowModal] = useState(false);
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [step, setStep] = useState(1);
    const [message, setMessage] = useState('');
    const [generatedOtp, setGeneratedOtp] = useState('');
    const navigate = useNavigate()
    const [errors, setErrors] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const goToHome = () => {
        navigate("/")
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleValidation = () => {
        const newErrors = {};


        if (!formData.email) {
            newErrors.email = "Email cannot be empty";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email address";
        }

        if (!formData.password) {
            newErrors.password = "Password cannot be empty";
        } else if (
            !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(formData.password)
        ) {
            newErrors.password =
                "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character";
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(formData)
        if (handleValidation) {

            setLoading(true)
            try {

                const response = await axios.post(`${apiUrl}/auth/login`, formData);
                console.log(response)
                if (response.status === 200 || response.status === 202) {
                    setLoading(false)
                    // Swal.fire({
                    //     icon: 'success',
                    //     title: 'Signed in successfully',
                    //     toast: true,
                    //     position: 'top-end',
                    //     showConfirmButton: false,
                    //     timer: 2000,
                    //     timerProgressBar: true,
                    //     didOpen: (toast) => {
                    //         toast.onmouseenter = Swal.stopTimer;
                    //         toast.onmouseleave = Swal.resumeTimer;
                    //     }

                    // });
                    toast.success("Login successfully !!");
                    doLogin(response.data, () => {
                       setTimeout(()=>{
                        navigate("/");
                       },2000)
                        

                    });
                }
            } catch (error) {
                setLoading(false)
                setMessage('An error occurred. Please try again.');
            }
        }
    };

    // const handleOtpVerification = async () => {


    //     const generateOtp = () => {
    //         const otp = Math.floor(100000 + Math.random() * 900000).toString();
    //         setGeneratedOtp(otp);
    //         return otp;
    //     };

    //     const sendOtp = async () => {
    //         const otp = generateOtp();

    //         const templateParams = {
    //             to_name: form.name,
    //             to_email: form.email,
    //             otp: otp,
    //         };

    //         try {
    //             await emailjs.send(
    //                 'service_6fba6ot',
    //                 'template_jtaowm3',
    //                 templateParams,
    //                 'kfmE6H6G0rNxfEtky'
    //             );
    //             setIsOtpSent(true);
    //             setShowBtn(false)
    //             alert('OTP sent to your email!');
    //         } catch (error) {
    //             console.error('Failed to send OTP:', error);
    //             alert('Failed to send OTP. Please try again.');
    //         }
    //     };

    //     if (otp === generatedOtp) {
    //         setIsOtpVerified(true);
    //         setOtp('');
    //         setIsOtpSent(false);
    //         alert('OTP verified successfully!');
    //     } else {
    //         alert('Invalid OTP. Please try again.');
    //     }



    // };
    return (
        <div style={{ backgroundImage: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)', height: '100vh' }}>
           <ToastContainer position='top-center' />
            <section className="container">
                <div className="row justify-content-center ">

                    <div className="col-lg-4 mt-5  bg-white shadow rounded-3  signup">
                        <img style={{ width: '120px', marginLeft: '30%' }} src={logo} />
                        <h5 className="text-left ">Sign Up</h5>
                        <form onSubmit={handleLogin} className="px-3 py-2">


                            <div className="mb-2">
                                <TextField
                                    id="email"
                                    label="Email"
                                    variant="standard"
                                    fullWidth
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    error={Boolean(errors.email)}
                                    helperText={errors.email}
                                />

                            </div>

                            <div className="mb-2">
                                <TextField
                                    id="password"
                                    label="Password"
                                    type="password"
                                    variant="standard"
                                    fullWidth
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    error={Boolean(errors.password)}
                                    helperText={errors.password}
                                />
                            </div>


                            <Link style={{ fontWeight: '700' }} className="text-decoration-none font-weight-bold forgotLink">Forgot Password?</Link>
                            <div className="text-center w-100 mt-2 d-flex align-items-center justify-content-center gap-5">
                                <Button
                                    style={{ fontSize: '14px', fontWeight: '600', width: '50%' }}
                                    type="submit"
                                    className="px-3 bg-primary py-2 text-white gap-2 d-flex align-items-center btn-block text-capitalize"
                                    disabled={loading}

                                >
                                    {loading ? <CircularProgress size="20px" style={{ color: "white" }}/> :'Sign In' }
                                    
                                </Button>
                                <Button onClick={goToHome} style={{ border: '1px solid rgba(25, 118, 210, 0.5)', width: '50%' }} className="text-blue text-capitalize px-5 py-2 btn-block">Cancel</Button>
                            </div>
                            <p className="notregister pt-3">Not registered?<Link to='/signup' className='text-decoration-none'>Sign Up</Link></p>
                            <p className="not mb-4 text-center">Or continue with social account</p>
                            <Button className="google text-capitalize"> <img className="w-5 mr-2" src='data:image/png;base64,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' />Sign with Google</Button>
                        </form>
                    </div>
                </div>

                {showModal && (
                    <div className="modal show d-block" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Enter OTP</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={() => setShowModal(false)}
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <p>We've sent an OTP to your email address. Please enter it below.</p>
                                    <TextField
                                        id="otp"
                                        label="Enter OTP"
                                        variant="standard"
                                        fullWidth
                                        value={inputOtp}
                                        onChange={(e) => setInputOtp(e.target.value)}
                                        error={Boolean(error)}
                                        helperText={error}
                                    />
                                </div>
                                <div className="modal-footer">
                                    <Button variant="contained" color="secondary" onClick={() => setOtp("")}>
                                        Resend OTP
                                    </Button>
                                    <Button variant="contained" color="primary" onClick={verifyOtp}>
                                        Verify OTP
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
};

export default LoginPage;
