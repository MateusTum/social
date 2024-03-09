import React from "react";

// import logo from "../assets/svgs/logoonly.svg";

// Bootstrap imports
import { Container } from "react-bootstrap";

// Import navbar
import AppNavBar from "../navbar/AppNavBar";


const AppHeader = () => {
  return (
    <header className="fixed-top p-0">
      <Container className="p-0" fluid>
            <AppNavBar/>
      </Container>
    </header>
  );
};

export default AppHeader;
