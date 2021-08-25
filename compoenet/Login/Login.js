import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';
import { useHistory } from "react-router-dom";
import Apiauth from '../../Services/user'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let history = useHistory();
    const loginauth=()=>{
    let data={
        "email":email,
        "password":password
    }
        Apiauth.login(data)
        .then(res=>{
          var userdata=res.data.token;
          localStorage.setItem('Auth', userdata);
          var res=JSON.stringify(res.data.data)
          localStorage.setItem('User',res ); 
        history.push('/')
        })
        .catch(e => {
        alert(e)
        })
    }
    return (
        <section>
            <Header />
            <div className="breadcrums">
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="mt-3">
                            <span>
                                Login or Create an Account
                            </span>
                        </div>
                        <div className="content new-user">
                            <span >Log in Using your PayPal account</span>
                            <p style={{ display: "block" }}>Log in quickly, easily and safely with Log in with PayPal </p>
                            <ul>
                                <li>Avoid the hassle of filling in yet another registration form</li>
                                <li>Just one password to remember</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="mt-5">
                            <span>
                                New Customers
                        </span>

                            <div className="content new-user">
                                <p >By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="mt-3">
                            <span>Registered Customers</span>
                            <p style={{ display: "block" }}>If you have an account with us, please log in. </p>
                        </div>
                        <div className="mt-3">
                            <div className="Login">
                                <Form >
                                    <Form.Group size="lg" controlId="email">
                                        <Form.Label>Email<em>*</em></Form.Label>
                                        <Form.Control
                                            autoFocus
                                            type="text"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group size="lg" controlId="email">
                                        <Form.Label>Password<em>*</em></Form.Label>
                                        <Form.Control
                                            autoFocus
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)} />
                                    </Form.Group>
                                </Form>
                            </div >
                            <div className="col-12 col-lg-12 mb-3">
                                <div className="row">
                                    <div className="col-6 col-lg-6">
                                    <button type="button" class="btn btn-danger mb-2 ml-2" onClick={()=>history.push("/forgotpassword")}>Forget Password?</button>

                                </div>
                                <div className="col-6 col-lg-6 d-flex justify-content-center">
                                <button type="button" class="btn btn-light mb-2" onClick={loginauth}>Login</button>

                               </div>
                               <div className="mt-3 col-12 col-lg-12 d-flex justify-content-center">
                                  <span>or</span>
                                   </div>
                                   <div className="mt-3 col-12 col-lg-12 d-flex justify-content-center">
                                <button type="button" class="btn btn-dark mb-2 ml-2" onClick={()=>history.push("/Signup")}>Create an account</button>

                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>

    )
};
export default Login;