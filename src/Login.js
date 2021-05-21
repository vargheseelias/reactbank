import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import bankservice from "./service/bank_service";
import { useHistory } from "react-router";
import { useState } from 'react'
function Login(props) {
    //   state = {
    //     name: "",
    //     password: "",
    //   };
    const history = useHistory();
    const [name, setName] = useState();
    const [password, setPass] = useState();
    // uname=(event)=>{
    //     this.setState({
    //         name:event.target.value
    //     })
    // }
    // pass=(event)=>{
    //     this.setState({
    //         password:event.target.value
    //     })
    // }

    const login = (event) => {
        event.preventDefault();
        // alert(name+"\n"+password)
        const data1 = {
            accn: name,
            password: password,
        };
        bankservice.login(data1).then((result) => {
            alert(result.data.message)
            history.push('/home')
        }).catch((err) => {
            alert(err.response.data.message)
        })

    };


    return (
        <div className="container">
            <div className="row">
                <div className=" text-light cntr">
                    {" "}
                    <h1> SBI</h1>
                    <div className="main">
                        <form>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    onChange={(event) => {
                                        setName(event.target.value)
                                    }}
                                    name="accn"
                                    className="form-control round"
                                    id="acn"
                                    aria-describedby="emailHelp"
                                    placeholder="Account Number"
                                ></input>
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    onChange={(event) => {
                                        setPass(event.target.value)
                                    }}
                                    name="passw"
                                    className="form-control round"
                                    id="psw"
                                    placeholder="Password"
                                ></input>
                            </div>
                            <div className="center-button">
                                <button
                                    type="button "
                                    onClick={login}
                                    className="signup bg-primary round-button"
                                >
                                    Submit
                                </button>
                            </div>
                            <div className="signup">
                                <Link
                                    to="/register"
                                    className="bg-primary signup round-button"
                                >
                                    Create an Account
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default Login;