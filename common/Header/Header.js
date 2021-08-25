import React, { useState, useEffect } from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import tbtlogo from '../../Images/tbtlogo.png';
import Apiauth from '../../Services/user'


const Header = () => {
    let history = useHistory();
    const [UserData,setUserData] = useState({})
    useEffect(async() => {
    var UserAuth=await localStorage.getItem('User')
    if(UserAuth){
        var res=JSON.parse(UserAuth)
            setUserData(res)
            console.log(res)
    }
    }, [])
    const signout=()=>{
        localStorage.removeItem('User')
        localStorage.removeItem('Auth')
        history.push('/')
    }
    return (
        <div className="sticky-top sticky">
            <div className="header-top-popup ">
                "Due to Lockdown in Various Parts of India -We Will take orders.
                Shipment will be done after the lockdown is lifted."
            </div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid header-content ">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <img className="logoimg"
                        src={tbtlogo}
                        alt="SVTM jewels"
                        title="SVTM jewels" />
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="row d-flex justify-content-end ">
                            <ul class="form-inline my-2 my-lg-0 float-right screen-view-display">
                                <button type="button" class="btn btn-primary mr-3 pr-btn mt-2" onClick={() => history.push("/bkyrgld")}>BOOK YOUR GOLD</button>
                                <input type="text" className="form-control mt-2" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2">
                                </input>
                                <div className="input-group-append mt-2">
                                    <button type="button" className="btn pay-btn ml-2">Search</button>
                                </div>
                            </ul>
                        </div>

                        <ul class="navbar-nav view-mobile-display ml-4">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Tags</a>
                            </li>

                        </ul>
                        <div className="screen-view-display">
                            <div className="row li-rowtag d-flex justify-content-center mt-2 ">
                                <li><a class="nav-link px-1 link-secondary ">+91-7708822875</a></li>
                                <li><a class="nav-link px-1 link-dark">(508) 344-4813(USA)</a></li>
                                <li><a class="nav-link px-1 link-dark">+91-6382147595(THE AMETHYST STORE WORLD)</a></li>
                                <li><a class="nav-link px-1 link-dark">Welcome
                                    {localStorage.getItem('Auth') ?
                                        <span> {UserData.firstname}</span>
                                        : <span> Guest</span>
                                    }
                                </a></li>
                                {!localStorage.getItem('Auth') &&
                                    <li class="nav-link px-1 link-dark"> <NavLink to="/login">LOGIN</NavLink></li>
                                }
                                {!localStorage.getItem('Auth') &&
                                    <li class="nav-link px-1 link-dark"> <NavLink to="/signup">SIGNUP</NavLink></li>
                                }
                                {localStorage.getItem('Auth') &&
                                    <li class="nav-link px-1 link-dark click-signout" onClick={signout}> SIGNOUT</li>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <ul>
                <div class="d-flex justify-content-center ">
                    <div class="dropdown mr-4 mb-3"     >
                        <li>
                            <a class=" dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><Link to="/">HOME</Link>
                            </a>
                        </li>
                    </div>
                        <li  class="dropdown">
                            <a href="#"  class=" dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                GOLD
                            </a>
                            <div class="dropdown-menu" >
                                <a class="dropdown-item" ><Link to="/Ring">Rings</Link></a>
                                <a class="dropdown-item" ><Link to="/Shortnecklace">Short Necklace</Link></a>
                                <a class="dropdown-item" ><Link to="/Pendants">Pendants</Link></a>
                                <a class="dropdown-item" ><Link to="/Chains">Chains</Link></a>
                                <a class="dropdown-item" ><Link to="/Pendants">Miscellaneous</Link></a>
                                <a class="dropdown-item" ><Link to="/Oddiyanam">Oddiyanam</Link></a>
                                <a class="dropdown-item" ><Link to="/Mangalyam">Thaali / Mangalyam</Link></a>
                            </div>
                        </li>
                 
                    <div class="dropdown ml-4 mb-3">
                        <li>
                            <a href="#" class=" dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                DIMOND
                            </a>
                            <div class="dropdown-menu" >
                                <a class="dropdown-item" ><Link to="/Dmring">Rings</Link></a>
                                <a class="dropdown-item" ><Link to="/Dmearrings">Earrings</Link></a>
                                <a class="dropdown-item" ><Link to="/Dmbangles">Bangles</Link></a>
                                <a class="dropdown-item" ><Link to="/Dmbracelets">Bracelets</Link></a>
                                <a class="dropdown-item" ><Link to="/Dmpendants">Pendants</Link></a>
                                <a class="dropdown-item" ><Link to="/Dmnecklaces">Necklaces</Link></a>
                                <a class="dropdown-item" ><Link to="/Dmwatch">Watch</Link></a>
                                <a class="dropdown-item" ><Link to="/Dmoddiyanam">Oddiyanam</Link></a>
                            </div>
                        </li>
                    </div>
                    <div class="dropdown ml-4 mb-3">
                        <li>
                            <a href="#" class=" dropdown-toggle"  data-toggle="" aria-haspopup="true" aria-expanded="false">
                                PLATINUM
                            </a>
                        </li>
                    </div>
                    <div class="dropdown ml-4">
                        <li>
                            <a href="#" class=" dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                THE AMETHYST STORE-92.5 SILVER JEWELS
                            </a>
                            <div class="dropdown-menu" >
                                <a class="dropdown-item" ><Link to="/Amsrings">Rings</Link></a>
                                <a class="dropdown-item" ><Link to="/Amsnecklace">Necklaces</Link></a>
                                <a class="dropdown-item" ><Link to="/Amsbangles">Bangles</Link></a>
                                <a class="dropdown-item" ><Link to="/Amschains">Chains</Link></a>
                                <a class="dropdown-item" ><Link to="/Amspendants">Pendants</Link></a>
                                <a class="dropdown-item" ><Link to="/Amsearrings">Earrings</Link></a>
                                <a class="dropdown-item" ><Link to="/Amsoddvad">Oddiyanam/ Vaddanam</Link></a>
                                <a class="dropdown-item" ><Link to="/Amskkb">Kum Kum Box</Link></a>
                                <a class="dropdown-item" ><Link to="/Amsmaan">Maangitikka/Maatal</Link></a>
                                <a class="dropdown-item" ><Link to="/Amsjadava">Jada/Vanki</Link></a>
                                <a class="dropdown-item" ><Link to="/Amsmeraki">Meraki Collections</Link></a>
                                <a class="dropdown-item" ><Link to="/Amsoneofkind">One of a kind dual tone</Link></a>
                            </div>
                        </li>
                    </div>
                    <div class="dropdown ml-4 mb-3">
                        <li>
                            <a href="#" class=" dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                SILVER ARTICLE
                            </a>
                            <div class="dropdown-menu" >
                                <a class="dropdown-item" ><Link to="/Silverbabyset">Silver Baby Set</Link></a>
                                <a class="dropdown-item" ><Link to="/Silverchombukudam">Silver Chombu / Kudam</Link></a>
                                <a class="dropdown-item" ><Link to="/Silverdinnersetsplates">Silver dinner sets & plates</Link></a>
                                <a class="dropdown-item" ><Link to="/Silveridols">Silver Idols</Link></a>
                                <a class="dropdown-item" ><Link to="/Silverpoojaitems">Silver Pooja Items</Link></a>
                                <a class="dropdown-item" ><Link to="/Silverbowl">Silver Bowl</Link></a>
                                <a class="dropdown-item" ><Link to="/Silvermiscellaneous">Silver Miscellaneous</Link></a>
                            </div>
                        </li>
                    </div>
                    <div class="dropdown ml-4 mb-3">
                        <li>
                            <a href="#" class=" dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                COINS
                            </a>
                            <div class="dropdown-menu" >
                                <a class="dropdown-item" ><Link to="/Goldcoins">Gold Coins</Link></a>
                                <a class="dropdown-item" ><Link to="/Silvercoins">Silver Coins</Link></a>
                            </div>
                        </li>
                    </div>
                    <div class="dropdown ml-4 mb-3">
                        <li>
                            <a href="#" class=" dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                TODAY'S RATE
                            </a>
                            <div class="dropdown-menu" >
                                <a class="dropdown-item" href="#">METALS PER GRAM("")</a>
                                <a class="dropdown-item" href="#">Gold 24k| Rs.4,942.00</a>
                                <a class="dropdown-item" href="#">Gold 22k| Rs.4,530.00</a>
                                <a class="dropdown-item" href="#">Gold 18k| Rs.3,706.00</a>
                                <a class="dropdown-item" href="#">Silver| Rs.71,50.00</a>
                                <a class="dropdown-item" href="#">Platinum | Rs.3,5672.00</a>
                            </div>
                        </li>
                    </div>
                </div>
            </ul>
        </div>
    )
}
export default Header;