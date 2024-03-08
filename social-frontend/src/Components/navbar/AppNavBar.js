import React from "react";
import { NavLink, useLocation, Link } from "react-router-dom";

// Bootstrap imports
import { Nav, NavDropdown, Row, Col } from "react-bootstrap";

// Import Icons
import Icons from "../../assets/svgs/nav_svgs/NavIcons";

// Import Logo
import Logo from "../../assets/svgs/Logo";

// Import styles
import styles from "./navbar_styles.module.scss";

function NavUserDropdown({ NotificationIcon }) {
  return (
    <>
      <NavDropdown
        title={<NotificationIcon />}
        menuVariant="dark"
        className={styles.noDropdownArrow}
      >
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </>
  );
}

function NotificationDropdown({ NotificationIcon }) {
  return (
    <>
      <NavDropdown
        title={<NotificationIcon />}
        menuVariant="dark"
        className={styles.noDropdownArrow}
      >
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </>
  );
}

const AppNavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const defaultActiveKey = currentPath === "/home" ? "/home" : currentPath;

  // Simulate loggedin
  const isAuthenticated = true;

  const { House, Houses, Search, People, Chat, Notification } = Icons;

  return (
    <Row>
      <Nav
        variant="tabs"
        defaultActiveKey="/home"
        activeKey={defaultActiveKey}
        className={`${styles.navbar}`}
      >

        {/* Logo Link */}
        <Col lg={1} className={`d-flex ${styles.logoWrapper}`}>
          <Nav.Item>
            <Nav.Link as={Link}>
              {/* Logo placeholder */}
              <Logo />
            </Nav.Link>
          </Nav.Item>
        </Col>

        {/* Menu with tabs */}
        {isAuthenticated && (
          <>
            <Col
              lg={9}
              className="d-flex justify-content-center ms-auto me-auto"
            >
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
            </Col>

            {/* Notifications and user configs */}
            <Col className={`d-flex ${styles.userTab}`} lg={1}>

              <NotificationDropdown NotificationIcon={Notification}/>

              {/* Icon is a place holder */}
              <NavUserDropdown NotificationIcon={People}/>

            </Col>
            
          </>
        )}
        {!isAuthenticated && (
          <Col lg={4} className="d-flex">
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
          </Col>
        )}
      </Nav>
    </Row>
  );
};

export default AppNavBar;
