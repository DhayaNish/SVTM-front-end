import React from 'react';
import {Link} from 'react-router-dom';
const Footer = () => {
    return (
        <div class="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                        <h4>CONTACT</h4>
                        <p >
                            ThinkBiG Software Solution Pvt Ltd.,
                            <br></br>
                            Temple Tower, 672/476,
                            <br></br>
                            2nd Floor, Anna Salai,
                            <br></br>
                            Nandanam, Chennai 600 035.
                            <br></br>
                            Phone - +91 99400 14627, 
                            <br></br> 
                            +91-044-48564018
                            <br></br>
                            info@ThinkBiGSoft.com
                        </p>

                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                        <h4>SVTM JEWELS
                        </h4>
                        <ul className="center text-center">
                            <li><Link to="/">
                                Home
                                </Link>
                            </li>
                            <li>
                                New Arrivals
                            </li>
                            <li><Link to="/Footerabout"> 
                                About Us
                                </Link>
                            </li>
                            <li><Link to="/Footersavings">
                                Saving Schemes
                                </Link>
                            </li>
                            <li>
                                Order Tracking
                            </li>
                            <li><Link to="/Footercontactus">
                                Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                        <h4>INFORMATION
                        </h4>
                        <ul className="center text-center">
                            <a>
                            <li>
                                Disclaimer
                            </li>
                            </a>
                            <li><Link to="/Footerprivacy">
                                Privacy Policy
                                </Link>
                            </li>
                            <li><Link to="/Footertandc">
                                Terms of Use
                                </Link>
                            </li>
                            <li>
                                Return Policy
                            </li>
                            <li><Link to="/Footertandc">
                                Shipping Policy
                                </Link>
                            </li>
                            <li><Link to="Footerfaqs">
                                FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                        <h4>NEWSLETTER
                        </h4>
                        <ul>
                            <li>
                                <p>
                                    would you like to buy
                                    <br></br>
                                    on our new arrivals?
                                    <br></br>
                                </p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <div class="mb-3">
                                    <input type="box" class="form-control" id="search" placeholder="search" />
                                </div>
                                <button type="button" class="btn btn-warning">Subscribe</button>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div class="container">
                <div className="cpyryt-txt">
                    <p>
                        Copyright © 2021 Sri Vasavi Thangamaaligai. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Footer;