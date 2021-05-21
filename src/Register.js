import React from "react";
import "./Register.css";
import bank_service from "./service/bank_service";
import { Link } from "react-router-dom";

class Register extends React.Component {
  state = {
    accn: "",
    uname: "",
    password: "",
  };

  register = (event) => {
    event.preventDefault();
    const data = {
      accno: this.state.accn,
      name: this.state.uname,
      password: this.state.password,
    };
    bank_service
      .register(data)
      .then((result) => {
        if (result) {
          alert("registration sucesss");
        }
      })
      .catch((err) => {
        alert("erorr");
      });
  };

  render() {
    return (
      <div className="container">
        <div className="cntr">
          <h1>SBI</h1>
        </div>

        <div className="main">
          <form>
            <div className="mb-3">
              <input
                type="text"
                onChange={(event) => {
                  this.setState({ uname: event.target.value });
                }}
                className="form-control round"
                id="acn"
                aria-describedby="emailHelp"
                placeholder="Username"
              ></input>
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="accno"
                onChange={(event) => {
                  this.setState({ accn: event.target.value });
                }}
                className="form-control round "
                id="acn"
                aria-describedby="emailHelp"
                placeholder="Account Number"
              ></input>
            </div>
            <div className="mb-3">
              <input
                type="password"
                onChange={(event) => {
                  this.setState({ password: event.target.value });
                }}
                name="pssw"
                className="form-control round"
                id="psw"
                placeholder="Password"
              ></input>

              <div className="center-button p-3">
                <button
                  type="submit"
                  className="btn btn-primary round-button"
                  onClick={this.register}
                >
                  Submit
                </button>
              </div>
              <Link to="/">login</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Register;