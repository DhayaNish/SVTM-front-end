import React, { useState } from 'react';
import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';

const Footerfaqs = () => {
    return (
        <section>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="abt">FAQ</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <div className="col-12 dble-line-sep"></div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <h1>About Us</h1>
                    <span >Where is SVTM located?</span>
                    <p>We are located at Dindigul, Tamilnadu in India.</p>
                    <span>Where is your jewellery made?</span>
                    <p>Each and every jewel is designed and crafted by our experienced team of designers and artisans. We have our own exclusive manufacturing unit.</p>
                    <span>Do you have a retail showroom of your jewellery? Can I visit you to see the jewellery?</span>
                    <p>Our jewellery showroom is located at Dindigul, Tamilnadu. You are most welcome to visit our show room. We will be delighted to receive you.</p>
                    <span>Where is your jewellery made?</span>
                    <p>Each and every jewel is designed and crafted by our experienced team of designers and artisans. We have our own exclusive manufacturing unit.</p>
                    <h1>Signing up</h1>
                    <span>How do I benefit by signing up for an account?</span>
                    <p>Signing up for an account on www.svtmjewels.com keeps you up-to-date about the happenings at Sri Vasavi Thangamaaligai. You will also be able to view your order history and the track orders.</p>
                    <span>Do I need to sign up an account here to place an order?</span>
                    <p>You can place an order as a Guest even if you do not sign up for an account.</p>
                    <span>Is my personal information kept private?</span>
                    <p>Maintaining privacy is a top priority for us. We make sure all your personal information is secured and kept private. Have a look at our privacy policy to know more</p>
                    <h1>Our Products</h1>
                    <span>How do I know that the products sold are BIS hallmarked?</span>
                    <p>All the products are 100% hallmarked in our store and the site. Once the product is delivered to you can check for the BIS Hallmark symbol in the product.</p>
                    <span>What if I do not find the piece that I wanted on the site anymore? Can I still place an order?</span>
                    <p>We might discontinue certain pieces or relocate it to some other page. However, we will try our best to make a particular piece available for you. You can contact our Customer Support Team.</p>
                    <span>Does the product colour, shape, size differ on the website compared to the actual product?</span>
                    <p>We make every effort to portray the jewel as it is. However, much depends on the configuration and colour calibration of your device, which can cause minor differences in the appearance of a product. We recommend you use a colour calibrated desktop to view our website.</p>
                    <span>Is there any difference in the price of the products that are sold on this website and in the retail stores?</span>
                    <p>Due to variations in the regional price of gold, there may be differences in the price of the product sold.</p>
                    <span>Do you offer any additional discounts?</span>
                    <p>All our prices are honest and very competitive as compared to any other online stores. Discounts are offered only on selected products during Sales and festive seasons. Do visit on our website to keep abreast of the latest discounts and offers.</p>
                    <span>Do you sell gift vouchers?</span>
                    <p>Yes, we do sell gift vouchers.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
}

export default Footerfaqs;