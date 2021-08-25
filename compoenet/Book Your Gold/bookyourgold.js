import React from 'react';
import svlogo from '../../Images/svlogo.png';
import svimg from '../../Images/svimg.jpg';
import { Card } from '@material-ui/core';

const bkyrgld = () => {
    return (
        <section>
            <div className="bk">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-4 mt-3">
                            <ul className="text-center">Welcome to Sri Vasavi Thangamaaligai</ul>
                        </div>
                        <div className="col-12 col-lg-4 mt-3">
                            <ul className="text-center">26-01-2021</ul>
                        </div>
                        <div className="col-12 col-lg-4  mt-3">
                            <ul className="text-center">Today’s Gold Rate – 22k – 1gm Rs.4510</ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <img src={svlogo}
                                alt=""
                                title="Sri Vasavi"
                            />
                        </div>
                        <div className="col-12 col-lg-6 mt-3 d-flex justify-content-end">
                            <button type="button" class="btn btn-warning">Book Your Gold</button>
                        </div>
                    </div>
                </div>
                <div >
                    <img className="svimg"
                        src={svimg}
                        alt=""
                        title="" />
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-3">
                        <ul className="mdtxt">Book Gold, Reap profits & prosperity</ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="col-lg-8">
                            <div class="card mb-3" >
                                <img class="card-img-top" src="https://www.svtmjewels.com/book_your_gold/assets/website/images/gold-coins.jpg" alt="Card image cap" />
                                <div class="card-body">
                                    <ul className= "crdfnt">Book your gold</ul>
                                    <button type="button" class="btn btn-warning crdbtn">Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-end">
                    <div className="col-lg-8 ">
                            <div class="card mb-3" >
                                <img class="card-img-top" src="https://www.svtmjewels.com/book_your_gold/assets/website/images/jewellery.jpg" alt="Card image cap" />
                                <div class="card-body">
                                    <ul className= "crdfnt">Book your gold</ul>
                                    <button type="button" class="btn btn-warning crdbtn">Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clr">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ul className="mdtxt">Quick Steps to lock price</ul>
                            <ul className="mdirtxt"><span> 5 Easy Steps to lock your Gold Price</span></ul>
                            <ul><b>Step 1:</b><sapn className="mdirtxt">Select "Gold Coins" or " Book gold for jewellery".</sapn></ul>
                            <br></br>
                            <ul><b>Step 2:</b><sapn className="mdirtxt"> For Gold coin purchase, Choose the desired weight(grams) and quantity and you can fix the gold coin rate. For Jewellery, you can select any amount for which you want to buy gold and the same will be converted into Gold and the rates will be booked.</sapn></ul>
                            <br></br>
                            <ul><b>Step 3:</b><sapn className="mdirtxt">Fill in the required details and also the branch you want to redeem.</sapn></ul>
                            <br></br>
                            <ul><b>Step 4:</b><sapn className="mdirtxt">You can select RTGS or payment methods like (Credit, debit, net banking, UPI) and select proceed for payment.</sapn></ul>
                            <br></br>
                            <ul><b>Step 5:</b><sapn className="mdirtxt">Select the payment methods and make the payment, You will get an E-mail for the Gold booking.</sapn></ul>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer ftrcls">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ul className="ftrtxt mb-3"><b>The Gold coins, jewellery can be purchased at :</b></ul>
                        </div>
                        <div className="col-12 col-lg-6 mt-3">
                            <ul className="ftrtxt">DINDIGUL BRANCH</ul>
                            <ul className="ftrtxt1 mt-3">SRI VASAVI THANGA MAALIGAI,</ul>
                            <br></br>
                            <span className="ftrtxt2 d-flex text-align-center">No. 7 Main road,</span>
                            <br></br>
                            <span className="ftrtxt2 d-flex text-align-center">Varadharaj complex,</span>
                            <br></br>
                            <span className="ftrtxt2 d-flex text-align-center">Dindigul- 624001.</span>
                            <br></br>
                            <span className="ftrtxt2 d-flex text-align-center">Ph- 73050 31210</span>
                        </div>
                        <div className="col-12 col-lg-6 mt-3 ">
                            <ul className="ftrtxt">MADURAI BRANCH</ul>
                            <ul className="ftrtxt1 mt-3">SRI VASAVI THANGA MAALIGAI,</ul>
                            <ul className="ftrtxt1">Rajmahal silks</ul>
                            <br></br>
                            <span className="ftrtxt2 d-flex text-align-center">1 St floor silk section,</span>
                            <br></br>
                            <span className="ftrtxt2 d-flex text-align-center">47-48, E Veli St,</span>
                            <br></br>
                            <span className="ftrtxt2 d-flex text-align-center">Madurai-625001.</span>
                            <br></br>
                            <span className="ftrtxt2 d-flex text-align-center">Ph- 73050 45822</span>
                            <img className="d-block align-center"
                            src="https://www.svtmjewels.com/book_your_gold/assets/website/images/rajmahal-logo.jpg"
                            alt=""
                            title=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer svftr">
                <div className="container">
                    <div className="row">
                    </div>
                </div>
            </div>
        </section>
    )
};
export default bkyrgld;