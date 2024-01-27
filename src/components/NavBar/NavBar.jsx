import React, { useState } from "react";
import styles from "./NavBar.module.scss";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function NavBar() {
  const [navResponsive, setNavResponsive] = useState(false);
  const [nav, setNav] = useState(false);



  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      className={nav ? styles.navOne : styles.nav}
    >
      <Container fluid>
        <Navbar.Brand className={styles.brand}>MR</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className={styles.buttonResponsive}
          onClick={() => setNavResponsive(true)}
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className={navResponsive ? styles.active : ""}
        >
          <Nav className="ms-auto">
            <Link to="home" smooth={true} duration={500} className={styles.p}>
              Home
            </Link>
            <Link
              to="proyects"
              smooth={true}
              duration={500}
              className={styles.p}
            >
              Projects
            </Link>

            <Link to="skills" smooth={true} duration={500} className={styles.p}>
              Skills
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className={styles.p}
            >
              Contact me
            </Link>
        
            <NavDropdown  title="CV"  className={styles.pCv}  id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"  className={styles.Item}>   
                <NavLink to='/pdfe' target="_blank" className={styles.p4}  >EN</NavLink>
</NavDropdown.Item>
              
              <NavDropdown.Item href="#action5"  className={styles.Item}>
              <NavLink to='/pdf'   target="_blank" className={styles.p4}>ES</NavLink>
              </NavDropdown.Item>
            </NavDropdown>

           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
