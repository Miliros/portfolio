import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

export default function navBar() {
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
      fixed="top"
      collapseOnSelect
      expand="lg"
      className={nav ? styles.navOne : styles.nav}
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Container fluid>
        <Navbar.Brand className={styles.brand}>MR</Navbar.Brand>
        <Nav>
          <Link to="home" smooth={true} duration={500} className={styles.p}>
            Home
          </Link>
          <Link to="proyects" smooth={true} duration={500} className={styles.p}>
            Proyects
          </Link>

          <Link to="skills" smooth={true} duration={500} className={styles.p}>
            Skills
          </Link>
          <Link to="contact" smooth={true} duration={500} className={styles.p}>
            Contact me
          </Link>
          <NavLink to="/pdf" target="_blank" className={styles.p}>
            CV
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}
