import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import apiUrl from "../../Axios";
import Swal from "sweetalert2";
import '../../App.css';
import { Button, TextField, CircularProgress } from "@mui/material";
import logo from '../../assets/shopify.svg'

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        mobileNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({});
    const [otp, setOtp] = useState("");
    const [inputOtp, setInputOtp] = useState("");
    const [buttonLabel, setButtonLabel] = useState("Generate OTP");
    const [showModal, setShowModal] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleValidation = () => {
        const newErrors = {};
        if (!formData.name) {
            newErrors.name = "Name cannot be empty";
        } else if (formData.name.length < 3 || formData.name.length > 20) {
            newErrors.name = "Name must be between 3 and 20 characters long";
        }

        if (!formData.mobileNumber) {
            newErrors.mobileNumber = "Mobile number cannot be empty";
        } else if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
            newErrors.mobileNumber = "Invalid mobile number";
        }

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

    const goToHome=()=>{
        navigate("/")
    }

    const generateOtp = () => {
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        setOtp(otp);
        emailjs
            .send(
                "service_4r3dsji",
                "template_0rplt8r",
                { to_email: formData.email, otp: otp },
                "rSEiZFxLVOldQncdA"
            )
            .then(() => setShowModal(true))
            .catch((error) => console.error("Failed to send email:", error));
    };

    const verifyOtp = () => {
        if (inputOtp === otp) {
            setIsVerified(true);
            setShowModal(false);
            setError("");
        } else {
            setError("Invalid OTP. Please enter the valid OTP.");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        if (handleValidation()) {
            setLoading(true);
            try {

                const response = await fetch(`${apiUrl}/auth/register`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                });
                if (response.ok) {
                    setLoading(false);
                    Swal.fire('Registration Successful', 'Registered successfully.', 'success').then(() => navigate("/signin"));
                } else {
                    setLoading(false);
                    Swal.fire('Error', 'Registration failed.', 'error');
                }
            } catch (error) {
                setLoading(false);
                Swal.fire('Error', 'Error submitting form. Please try again later.', 'error');
            }
        } else {
            setLoading(false);
            Swal.fire('Error', 'Form has errors. Please correct them and try again.', 'error');
        }
    };

    return (
        <div style={{ backgroundImage: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)', height: '100vh' }}>
            <section className="container">
                <div className="row justify-content-center ">
                    
                    <div className="col-lg-4 mt-2  bg-white shadow rounded-3  signup">
                      <img style={{width:'120px',marginLeft:'30%'}} src={logo}/>
                        <h5 className="text-left ">Sign Up</h5>
                        <form onSubmit={handleSubmit} className="px-3 py-2">
                            <div className="mb-2 d-flex align-items-center gap-5">
                                <TextField
                                    id="name"
                                    label="Full Name"
                                    variant="standard"
                                    fullWidth
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    error={Boolean(errors.name)}
                                    helperText={errors.name}
                                />
                                <TextField
                                label="Mobile Number"
                                variant="standard"
                                fullWidth
                                // margin="normal"
                                name="mobileNumber"
                                value={formData.mobileNumber}
                                onChange={handleChange}
                                error={!!errors.mobileNumber}
                                helperText={errors.mobileNumber}
                            />
                            </div>

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
                                <Button
                                    type="button"
                                    variant="contained"
                                    color={isVerified ? "success" : "primary"}
                                    onClick={generateOtp}
                                    className="mt-2 text-capitalize"
                                >
                                    {isVerified ? "Verified" : "Verify"}
                                </Button>
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

                            <div className="mb-2">
                                <TextField
                                    id="confirmPassword"
                                    label="Confirm Password"
                                    type="password"
                                    variant="standard"
                                    fullWidth
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    error={Boolean(errors.confirmPassword)}
                                    helperText={errors.confirmPassword}
                                />
                            </div>
                            <Link style={{fontWeight:'700'}} className="text-decoration-none font-weight-bold forgotLink">Forgot Password?</Link>
                            <div className="text-center w-100 mt-2 d-flex align-items-center justify-content-center gap-5">
                                <Button
                                    style={{  fontSize:'14px' ,fontWeight:'600',width:'50%'}}
                                    type="submit"
                                    className="px-3 bg-primary py-2 text-white gap-2 d-flex align-items-center btn-block text-capitalize"
                                    disabled={loading}
                                >
                                    {loading ? <CircularProgress size="20px" style={{ color: "white" }} /> :' Sign Up'}
                                   
                                </Button>
                              <Button onClick={goToHome} style={{border:'1px solid rgba(25, 118, 210, 0.5)',width:'50%'}} className="text-blue text-capitalize px-5 py-2 btn-block">Cancel</Button>
                            </div>
                            <p className="notregister pt-3">Not registered?<Link to='/signin' className='text-decoration-none'>Sign In</Link></p>
                            <p className="not mb-4 text-center">Or continue with social account</p>
                            <Button className="google text-capitalize"> <img className="w-5 mr-2" src='data:image/png;base64,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'/>Sign with Google</Button>
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

export default Signup;
