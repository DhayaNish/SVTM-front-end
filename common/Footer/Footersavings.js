import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Footersavings=()=>{
    return(
        <section>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                        <h1 className="abt">SAVINGS SCHEMES</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="line-sep"></div>
                        </div>
                    </div>
                </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <p>We have made it easier for you to plan and buy your favourite piece of jewellery. Take a look at our saving schemes and pick the one you like from the four choices we offer. Save in monthly instalments and receive a tempting value-added bonus offer.</p>
                    </div>
                    <div className="col-12 col-lg-6 mt-5">
                        <span> Choose the sceme that suits you best</span>
                        <br></br>
                        <a href="">Dimond sceme</a>
                        <br></br>
                        <a href="">Long Term Saving Scheme</a>
                        <br></br>
                        <a href="">Short Term Saving Scheme</a>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
    );
}
export default Footersavings;