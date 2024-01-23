import React from "react";
import "../styles/loginPage.scss";
import mysocialmedialogo from "../assets/svgs/mysocialmedialogo.svg";
import { Link } from "react-router-dom";

const LoginBox = () => {
  return (
    <div className="card align-items-center col-lg-4 col-md-4 col-sm-6 col-10 p-2 mx-auto">
      <img id="mysocialogo" src={mysocialmedialogo} alt="Social logo"/>

      <div className="form-group">
        <label htmlFor="email">Email address:</label>
        <input type="email" className="form-control" id="email" />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" className="form-control" id="password" />
      </div>

      <div>
        <button id="loginButton" className="btn btn-primary mt-2">
          Login
        </button>
        <div className="row justify-content-center">
          <div className="col-12">
            <Link className="text-primary mb-2 disabled text-center m-2">
              Forgot password?
            </Link>
            <br />
            <Link
              className="btn btn-success m-2"
            >
              Create account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const LoginPage = () => {
  return (
    <>
      <main>
        <div className="container">
          <div className="row text-center">
            <div className="flex-column">
              <LoginBox />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
