import React, { useState } from 'react';
import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import Apiauth from '../../Services/user'

const Signup=()=>{
    const [firstname,setFirstName]=useState("")
    const [secondname,setSecondName]=useState("")
    const [emailaddress,setEmailAddress]=useState("")
    const [password,setPassword]=useState("")
    const[confrimpassword,setConfrimPassword]=useState("")
    let history = useHistory();
    const signup=()=>{
        if(password==confrimpassword){
        let data={
            "firstname": firstname,
            "lastname": secondname,
            "email": emailaddress,
            "password": password
        }
        Apiauth.register(data)
        .then(res=>{
            alert("Signup Successfully")
           history.push('/')
        })
        .catch(e => {
        alert(e)
        })
    }else{
        alert("Password are not same")
    }
    }
   

    return(
<div>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="hdr col-12 ">
                    <div className="d-flex justify-content-center">
                        <span>Create An Account</span>
                    </div>
                    <div className="col-12">
                        <div>
                    <span>Use Login with PayPal to Create Your account ,easily!</span>
                    </div>
                    <div>
                    <span>Login quickly,easily and safely with Login with PayPal</span>
                    </div>
                    <ul>
                        <li>Anyone with PayPal Account can do it</li>
                        <li>Avoid the hassle of filling in yet another registration form</li>
                        <li>Just one password to remember</li>
                    </ul>
                    <div className="divider">
                    </div>
                    <span>OR</span>
                    </div>
                    <div className="divider-btm">
                    </div>
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-center">
 
                <div className="card crd">
                    Personal Information
                    <TextField
                        style={{padding:"4px 0px 4px 0px"}}
                         value={firstname}
                        label="First Name"
                        onChange={(e) => {
                        setFirstName(e.target.value);
                        }}
                    />
                    <TextField
                   style={{padding:"4px 0px 4px 0px"}}
                        value={secondname}
                        label="Second Name"
                        onChange={(e) => {
                        setSecondName(e.target.value);
                        }}
                    />
                    <TextField
                     style={{padding:"4px 0px 4px 0px"}}
                        value={emailaddress}
                        label="Email Address"
                        onChange={(e) => {
                        setEmailAddress(e.target.value);
                        }}
                    />
                    <TextField
                 style={{padding:"4px 0px 4px 0px"}}
                        value={password}
                        label="Password"
                        type="password"
                        onChange={(e) => {
                        setPassword(e.target.value);
                        }}
                    />
                    <TextField
                      style={{padding:"4px 0px 4px 0px"}}
                        value={confrimpassword}
                        label="Confrim Password"
                        type="password"
                        onChange={(e) => {
                        setConfrimPassword(e.target.value);
                        }}
                    />
                    <div className="col-12 ">
                        <div className="row">
                        <div className="col-6">
                    <button type="button" class="btn btn-light mt-3"  onClick={signup}>SignUp</button>
                    </div>
                    <div className="col-6 ">
                    <button type="button" class="btn btn-dark mt-3 ml-3" onClick={()=>history.push("/")}>Back</button>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            
            <Footer/>
            </div>
    )
};
export default Signup;