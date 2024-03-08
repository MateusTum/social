import React from "react";

// import logo from "../assets/svgs/logoonly.svg";

// Bootstrap imports
import { Container, Row, Col } from "react-bootstrap";

// Import navbar
import AppNavBar from "../navbar/AppNavBar";


const AppHeader = () => {
  return (
    <header className="border-bottom fixed-top p-0">
      <Container fluid>
            <AppNavBar/>
      </Container>
    </header>
  );
};

export default AppHeader;
