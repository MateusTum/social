import React from "react";
import { NavLink, useLocation, Link } from "react-router-dom";

// Bootstrap imports
import { Nav, NavDropdown } from "react-bootstrap";

// Import Icons
import Icons from "../../assets/svgs/nav_svgs/NavIcons";

// Import Logo
import Logo from "../../assets/svgs/Logo";

// Import styles
import styles from "./navbar_styles.module.scss";

function NavUserDropdown() {
  return (
    <NavDropdown menuVariant="dark" className="ms-auto">
      <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown>
  );
}

const AppNavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const defaultActiveKey = currentPath === "/home" ? "/home" : currentPath;

  // Simulate loggedin
  const isAuthenticated = true;

  const { House, Houses, Search, People, Chat } = Icons;

  return (
    <Nav
      variant="tabs"
      defaultActiveKey="/home"
      activeKey={defaultActiveKey}
      className={`justify-content-center ${styles.navbar}`}
    >
      <Nav.Item className="me-auto">
        <Nav.Link as={Link}>
          {/* Logo placeholder */}
          <Logo />
        </Nav.Link>
      </Nav.Item>
      {isAuthenticated && (
        <>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/home">
              <House />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/profile">
              <Houses />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/">
              <Search />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/">
              <People />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/">
              <Chat />
            </Nav.Link>
          </Nav.Item>
          <NavUserDropdown />
        </>
      )}
      {!isAuthenticated && (
        <>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/signup">
              Sign Up
            </Nav.Link>
          </Nav.Item>
          </>
      )}
    </Nav>
  );
};

export default AppNavBar;
