import React, { useState } from 'react';
import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';
import Form from "react-bootstrap/Form";
import { useHistory } from 'react-router';

const Forgetpwd = () => {
    const [emailAddress, setEmailAddress] = useState("")
    let history = useHistory();

    return (
        <section>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <Form >
                            <Form.Group size="lg" controlId="emailAddress">
                                <Form.Label>Email Address<em>*</em></Form.Label>
                                <Form.Control
                                    autoFocus
                                    type="text"
                                    value={emailAddress}
                                    onChange={(e) => setEmailAddress(e.target.value)} />
                            </Form.Group>
                        </Form>
                        <div className="row">
                            <div className="col-6">
                                <button type="button" class="btn btn-light ml-1">Submit</button>
                            </div>
                            <div className="col-6">
                                <button type="button" class="btn btn-dark ml-4" onClick={()=>history.push("/login")}>Back</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 d-flex justify-content-lg-end justify-content-center mt-4">
                        <div className="card card-benifit">
                            <span>Benifits of signing in...</span>
                            <ul>
                                <li>
                                    Track Order
                            </li>
                                <li>
                                    Print and Email invoice
                            </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-4"></div>
            <Footer />
        </section>
    )
};
export default Forgetpwd;