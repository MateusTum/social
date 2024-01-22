import React from "react";
import "../styles/registerPage.scss";

const RegistrationBox = () => {
  return (
    <div className="container mt-5">
      <div id="registerBox" className="card p-4">
        <h3 className="mb-4">Register your account</h3>

        <div className="form-group">
          <label htmlFor="password">First Name:</label>
          <input type="firstName" className="form-control" id="firstName" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Last Name:</label>
          <input type="lastName" className="form-control" id="lastName" />
        </div>

        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" className="form-control" id="username" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input type="email" className="form-control" id="email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" className="form-control" id="password" />
        </div>

        <div>
          <button id="registerButton" className="btn btn-success">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

const RegisterPage = () => {
  return (
    <>
      <main>
        <div className="container">
          <div className="row text-center">
            <div className="flex-column">
              <RegistrationBox />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default RegisterPage;
