import React,{useEffect} from 'react';
import { Carousel } from 'react-bootstrap';
import firstslide from '../../Images/firstslide.jpg';
import secondslide from '../../Images/secondslide.jpg';
import thirdslide from '../../Images/thirdslide.jpg';
import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';
import fourthslide from '../../Images/fourthslide.jpg';
import fifthslide from '../../Images/fifthslide.jpg';
import sixthslide from '../../Images/sixthslide.jpg';


const Home = () => { 
  
    return (
        <div>
            <div className="row">
                <div className="col-12 col-sm-12">
                    <Header></Header>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-slider"
                                src={firstslide}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-slider"
                                src={secondslide}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-slider"
                                src={thirdslide}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-slider"
                                src={fourthslide}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-slider"
                                src={fifthslide}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-slider"
                                src={sixthslide}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="col-12 col-sm-12">
                    <div className="line-sep">
                        <img src="https://www.svtmjewels.com/skin/frontend/svtmnew/default/images/yelow-flr.jpg" alt="" title="" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row p-5">
                    <div className="col-12 col-sm-12">
                        <div className="text-center">
                            <h1> Welcome to South India's premium jewellery house</h1>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 subtitle mt-3">
                        Offering you the finest ornaments, designed with taste, crafted with love and delivered with care. Shop online or in-store from a stunning array of fascinating Indian jewellery. Be assured of the best in customer care and after-sales service. Your search for fine jewellery ends here.
                    </div>
                </div>
                </div>
                <div className="line-sep">
                    <img src="https://www.svtmjewels.com/skin/frontend/svtmnew/default/images/yelow-flr.jpg" alt="" title="" />
                </div>
                <div className="container">
                <div className="row justify-content-center ">
                    <div className="row">
                        <div className="col-6">
                            <button type="button" class="btn btn-primary btn-lg mr-4  btn-index-btn">NEW ARRAIVALS</button>
                        </div>
                        <div className="col-6">
                            <button type="button" class="btn btn-secondary btn-lg  btn-index-btn">FEATURED PRODUCTS</button>
                        </div>
                    </div>
                </div>
                </div>
                <div className="line-sep">
                    <img src="https://www.svtmjewels.com/skin/frontend/svtmnew/default/images/yelow-flr.jpg" alt="" title="" />
                </div>
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-12">
                        <div className="text-center">
                            <h1>Shop by Collection</h1>
                        </div>
                    </div>
                    <div className="col-sm col-lg-12 subtitle mt-3">
                        Offering you the finest ornaments, designed with taste, crafted with love and delivered with care.                            </div>
                </div>
                <div className="row background-index">
                    <div className="col-12 col-sm-6">
                        <img title="" className="img-poster" src="https://www.svtmjewels.com/skin/frontend/svtmnew/default/images/silver_festival.png" alt="" />
                    </div>
                    <div className="col-12s col-lg-6">
                        <div className="gold-txt">
                            <h1>
                                <span className="color">Festival</span>
                                <h2 className="color mt-3">Pooja  <strong>Collections</strong></h2>
                            </h1>
                        </div>
                    </div>
                    <div classNameName="line-sep"></div>
                    <div className="row  d-flex justify-content-end">
                        <div className="col-12 col-lg-6" style={{ background: "#faf9f9 none repeat scroll 0 0" }}>
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <div className="gold-txt">
                                        <h1>
                                            <span className="color">Diamond</span>
                                            <h2 className="color mt-3">for   <strong>FASHION</strong></h2>
                                        </h1>
                                    </div>
                                </div>
                                <div classNameName="line-sep"></div>

                                <div className="col-12 col-lg-6">
                                    <img title="" src="https://www.svtmjewels.com/skin/frontend/svtmnew/default/images/diamond-collection.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div classNameName="line-sep"></div>

                        <div className="col-12 col-lg-6">

                            <div className="row">

                                <div className="col-12 col-lg-6">

                                    <div className="gold-txt mr-3">
                                        <h1>
                                            <h2> <strong>Platinum</strong></h2>
                                        </h1>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <img title="" src="https://www.svtmjewels.com/skin/frontend/svtmnew/default/images/platinum-collection.png" alt="" />

                                </div>
                            </div>



                            <div classNameName="line-sep"></div>
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <img title="" src="https://www.svtmjewels.com/skin/frontend/svtmnew/default/images/silver-jewel.png" alt="" />

                                </div>
                                <div className="col-12 col-lg-6">

                                    <div className="gold-txt mr-3">
                                        <h1>
                                            <span className="color">SILVER</span>
                                            <h2> <strong>Jewellery</strong></h2>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div classNameName="line-sep"></div>
                    <div className="col-12 col-sm-6">
                        <div className="gold-txt mr-3">
                            <h1>
                                <h2> <strong>ODDIYANAM COLLECTION</strong></h2>
                            </h1>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <img src="https://www.svtmjewels.com/media/wysiwyg/odd_1.png" alt="" />
                    </div>
                </div>

            </div>
            <div className="line-sep">
                <img src="https://www.svtmjewels.com/skin/frontend/svtmnew/default/images/yelow-flr.jpg" alt="" title="" />
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="text-center">
                        <h1>Shop by Category</h1>
                    </div>
                </div>
                <div className="col-lg-12 subtitle mt-3">
                    Offering you the finest ornaments, designed with taste, crafted with love and delivered with care.                              </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 background-index">
                        <img title="" src="https://www.svtmjewels.com/skin/frontend/svtmnew/default/images/bangle.png" alt="" />
                    </div>
                    <div className="col-12 col-lg-6 background-index">
                        <img title="" src="https://www.svtmjewels.com/skin/frontend/svtmnew/default/images/silver_festival.png" alt="" />
                    </div>
                </div>
                <div className="row" style={{ backgroundColor: 'grey' }}>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <img title="" src="https://www.svtmjewels.com/skin/frontend/svtmnew/default/images/oddiyanam.png" alt=""></img>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <img title="" src="https://www.svtmjewels.com/skin/frontend/svtmnew/default/images/bracelet.png" alt="">
                        </img>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
                        <img title="" src="https://www.svtmjewels.com/skin/frontend/svtmnew/default/images/ring.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="line-sep">
                <img src="https://www.svtmjewels.com/skin/frontend/svtmnew/default/images/yelow-flr.jpg" alt="" title="" />
            </div>
            <div className="row">
                <div className="col-12 col-lg-12">
                    <div className="text-center">
                        <h1>Testimonials</h1>
                    </div>
                </div>
                <div className="col-12 col-lg-12 subtitle mt-3">
                    Offering you the finest ornaments, designed with taste, crafted with love and delivered with care.
                </div>
            </div>
            <div className="line-sep">
                <img src="https://www.svtmjewels.com/skin/frontend/svtmnew/default/images/yelow-flr.jpg" alt="" title="" />
            </div>
            <div className="mt-3">
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <div className="text-center">
                            <h1>Trust is Safe</h1>
                        </div>
                    </div>
                    <div className="col-12 col-lg-12 subtitle mt-3">
                        Needs to deliver the best customer experience in the field
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-6 col-lg-3 text-center">
                        <div>
                            <img src="https://www.svtmjewels.com/skin/frontend/svtmnew/default/images/customize-jewel-hv.png" alt="" title="" />
                        </div>
                        <span>customize Jewellery</span>
                    </div>
                    <div className="col-6 col-lg-3 text-center">
                        <div>
                            <img src="https://www.svtmjewels.com/skin/frontend/svtmnew/default/images/insurance-hv.png" alt="" title="" />                </div>
                        <span> Insured worldwide Shipping</span>
                    </div>
                    <div className="col-6 col-lg-3 text-center">
                        <div>
                            <img src="https://www.svtmjewels.com/skin/frontend/svtmnew/default/images/yr-trust-hv.png" alt="" title="" />                </div>
                        <span>75 Years Trust</span>
                    </div>
                    <div className="col-6 col-lg-3 text-center">
                        <div>
                            <img src="https://www.svtmjewels.com/skin/frontend/svtmnew/default/images/trans-hv.png" alt="" title="" />
                        </div>
                        <span>Transparent & Lowest Pricing</span>
                    </div>
                </div>
            </div>
            <div className="orderbg">
                <div className="row">
                    <div className="container">

                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 back-img-overflow">
                            <img src="https://www.svtmjewels.com/skin/frontend/svtmnew/default/images/order-img.png" alt="" title="" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 footer-banner ">
                            <p >Make to order (MTO) is a business production strategy that typically allows consumers to purchase products that are customized to their specifications. The make to order (MTO) strategy only manufactures the end product once the customer places the order, creating additional wait time for the consumer to receive the product but allowing for more flexible customization compared to purchasing directly from retailers' shelves.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Home;