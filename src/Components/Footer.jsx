import React from 'react';
import { FaTshirt } from "react-icons/fa";
import '../App.css';
import { MdOutlineFireTruck } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

function Footer(props) {
    return (
        <div className="container footer">
            <div className='topInfo row '>
                <div className="col d-flex align-items-center">
                    <span className="icon">
                        <FaTshirt />
                    </span>
                    <span className='ml-2'>Everyday fresh products</span>
                </div>
                <div className="col d-flex align-items-center">
                    <span className="icon">
                        <TbTruckDelivery />
                    </span>
                    <span className='ml-2 '>Free delivery for order over $70</span>
                </div>

                <div className="col d-flex align-items-center">
                    <span className="icon ">
                        <CiDiscount1 />
                    </span>
                    <span className='ml-2 '>Daily Mega Discounts</span>
                </div>

                <div className="col d-flex align-items-center border-none">
                    <span className="icon">
                        <RiMoneyRupeeCircleLine />
                    </span>
                    <span className='ml-2 '>Best price on the market</span>
                </div>
            </div>
            <div className='mt-5 row links'>
                <div className='col'>
                    <h5>Fruits & Vegetables</h5>
                    <ul>
                        <li><Link to="/">Fresh Vegetables</Link></li>
                        <li><Link to="/">Herbs &amp; Seasonings</Link></li>
                        <li><Link to="/">Fresh Fruits</Link></li>
                        <li><Link to="/">Cuts &amp; Sprouts</Link></li>
                        <li><Link to="/">Exotic Fruits &amp; Veggies</Link></li>
                        <li><Link to="/">Packaged Produce</Link></li>
                        <li><Link to="/">Party Trays</Link></li>
                    </ul>
                </div>

                <div className='col'>
                    <h5>Breakfast & Diary</h5>
                    <ul>
                        <li><Link to="/">Fresh Vegetables</Link></li>
                        <li><Link to="/">Herbs &amp; Seasonings</Link></li>
                        <li><Link to="/">Fresh Fruits</Link></li>
                        <li><Link to="/">Cuts &amp; Sprouts</Link></li>
                        <li><Link to="/">Exotic Fruits &amp; Veggies</Link></li>
                        <li><Link to="/">Packaged Produce</Link></li>
                        <li><Link to="/">Party Trays</Link></li>
                    </ul>
                </div>

                <div className='col'>
                    <h5>Meat & Sea Food</h5>
                    <ul>
                        <li><Link to="/">Fresh Vegetables</Link></li>
                        <li><Link to="/">Herbs &amp; Seasonings</Link></li>
                        <li><Link to="/">Fresh Fruits</Link></li>
                        <li><Link to="/">Cuts &amp; Sprouts</Link></li>
                        <li><Link to="/">Exotic Fruits &amp; Veggies</Link></li>
                        <li><Link to="/">Packaged Produce</Link></li>
                        <li><Link to="/">Party Trays</Link></li>
                    </ul>
                </div>

                <div className='col'>
                    <h5>BEVERAGES</h5>
                    <ul>
                        <li><Link to="/">Fresh Vegetables</Link></li>
                        <li><Link to="/">Herbs &amp; Seasonings</Link></li>
                        <li><Link to="/">Fresh Fruits</Link></li>
                        <li><Link to="/">Cuts &amp; Sprouts</Link></li>
                        <li><Link to="/">Exotic Fruits &amp; Veggies</Link></li>
                        <li><Link to="/">Packaged Produce</Link></li>
                        <li><Link to="/">Party Trays</Link></li>
                    </ul>
                </div>

                <div className='col'>
                    <h5>BREADS & BAKERY</h5>
                    <ul>
                        <li><Link to="/">Fresh Vegetables</Link></li>
                        <li><Link to="/">Herbs &amp; Seasonings</Link></li>
                        <li><Link to="/">Fresh Fruits</Link></li>
                        <li><Link to="/">Cuts &amp; Sprouts</Link></li>
                        <li><Link to="/">Exotic Fruits &amp; Veggies</Link></li>
                        <li><Link to="/">Packaged Produce</Link></li>
                        <li><Link to="/">Party Trays</Link></li>
                    </ul>
                </div>
            </div>
            <div className='copyright pt-3 pb-3 mt-3 d-flex justify-content-between'>
                <p className='mb-0'>CopyRight All right reserved @2024.</p>
                <ul className='d-flex mb-0 socialsLink list list-inline ml-auto'>
                    <li className="list-inline-item"><Link>
                        <FaFacebookF />
                    </Link>
                    </li>
                    <li className="list-inline-item"><Link>
                        <FaTwitter />
                    </Link>
                    </li>
                    <li className="list-inline-item"><Link>
                        <CiInstagram />
                    </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;