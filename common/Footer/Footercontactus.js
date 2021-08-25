import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Footercontactus = () => {
    return (
        <section>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p>
                            Sri Vasavi Thanga Maaligai
                            <br></br>
                            Varadhraj Complex
                            <br></br>
                            #7, Main Road, Dindigul - 624 001
                            <br></br>
                            Tamil Nadu, India
                            <br></br>
                            We are open Monday - Sunday 10:00 am - 9:00 pm
                            <br></br>
                            India
                            <br></br>
                            Phone - +91-451-2422875
                            <br></br>
                            Toll Free - 1800-425-3040
                            <br></br>
                            support@svtmjewels.com
                            <br></br>
                            USA
                            <br></br>
                            Phone - (508) 344-4813
                            <br></br>
                            spathalam@svtmjewels.com
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>FOR ENQIRY</h1>
                        <div className="line-sep"></div>
                        <p>Do you have a message for us? Please fill in the details below and we will be in touch.</p>
                    </div>
                </div>
                <form className="col-lg-8">
                    <div class="form-group ">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Email Address</label>
                        <input type="Address" class="form-control" id="exampleInputPassword1" placeholder="Enter Address" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Mobile</label>
                        <input type="Mobile" class="form-control" id="exampleInputPassword1" placeholder="Enter Mobile Number" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Message</label>
                        <input type="Message" class="form-control" style={{ height: 100, width: 700 }} />
                    </div>
                </form>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 ml-3 mb-2">
                        <button type="button" class="btn btn-warning">submit</button>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
}
export default Footercontactus;