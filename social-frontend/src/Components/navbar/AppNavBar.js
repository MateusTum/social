import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, NavLink as RRNavLink } from "react-router-dom";

// Bootstrap imports
import { Row, Col, Nav, NavItem, NavLink, NavDropdown } from "react-bootstrap";

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
        className={`px-1 ${styles.noDropdownArrow}`}
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
        className={`px-1 ${styles.noDropdownArrow}`}
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

  const [showSearch, setShowSearch] = useState(false);
  const searchInputRef = useRef(null);

  // Simulate loggedin
  const isAuthenticated = true;

  const { House, Houses, Search, People, Chat, Notification } = Icons;

  // Hide search on clicks outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target)
      ) {
        setShowSearch(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchInputRef]);

  return (
    <Row className={`align-items-center ${styles.navbar}`}>
      {/* Logo Link */}
      <Col
        lg={true}
        className={`d-flex justify-content-start ${styles.logoWrapper}`}
      >
        <Nav.Item>
          <Nav.Link as={Link} to="/home">
            <Logo />
          </Nav.Link>
        </Nav.Item>
      </Col>

      {/* Menu with tabs */}
      <Col lg={showSearch ? 5 : 7} className="d-flex justify-content-center">
        {isAuthenticated && !showSearch && (
          <Nav
            variant="tabs"
            defaultActiveKey="/home"
            activeKey={defaultActiveKey}
            className={`${styles.navbar}`}
          >
            <NavItem>
              <NavLink as={RRNavLink} to="/home">
                <House />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink as={RRNavLink} to="/profile">
                <Houses />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ cursor: "pointer" }}
                as="div"
                onClick={(e) => {
                  e.preventDefault();
                  setShowSearch(true);
                }}
              >
                <Search />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink as={RRNavLink} to="/">
                <People />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink as={RRNavLink} to="/">
                <Chat />
              </NavLink>
            </NavItem>
          </Nav>
        )}

        {showSearch && (
          <input
            ref={searchInputRef}
            type="text"
            className="form-control"
            placeholder="Search..."
            autoFocus
          />
        )}
      </Col>

      {/* Notifications and user configs aligned to the right */}
      <Col lg={true} className={`d-flex justify-content-end ${styles.userTab}`}>
        {isAuthenticated && (
          <>
            <NotificationDropdown NotificationIcon={Notification}/>
            <NavUserDropdown NotificationIcon={People} />
          </>
        )}
        {!isAuthenticated && (
          <Nav variant="tabs" className={`${styles.navbar}`}>
            <NavItem>
              <NavLink as={RRNavLink} to="/login">
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink as={RRNavLink} to="/signup">
                Sign Up
              </NavLink>
            </NavItem>
          </Nav>
        )}
      </Col>
    </Row>
  );
};

export default AppNavBar;
