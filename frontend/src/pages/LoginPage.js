import React from "react";
import "../styles/loginPage.scss";
import mysocialmedialogo from "../assets/svgs/mysocialmedialogo.svg";

const LoginBox = () => {
  return (
    <div className="card align-items-center col-lg-8 col-md-10 p-2">
      <img id="mysocialogo" src={mysocialmedialogo} />

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
            <a className="text-primary mb-2 disabled text-center m-2" href="#">
              Forgot password?
            </a>
            <br />
            <a
              className="btn btn-success m-2"
              href="#"
            >
              Create account
            </a>
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
