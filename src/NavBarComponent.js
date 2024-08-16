import React, { useState } from "react";
import {
MDBNavbar, MDBContainer, MDBIcon, MDBNavbarNav, 
MDBNavbarItem, MDBNavbarToggler, MDBCollapse,} 
from "mdb-react-ui-kit";
import LogoImg from "./components/LogoImg";
import { NavLink } from "react-router-dom";
import './NavBarComponent.css';

export default function NavBarComponent() {
  const [openNavLeft, setOpenNavLeft] = useState(false);

  return (
    <MDBNavbar expand="lg" light className="py-5 shadow-0">
      <MDBContainer>

        <LogoImg />

        <MDBNavbarToggler
          type="button"
          data-target="#navbarLeftAlignExample"
          aria-controls="navbarLeftAlignExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenNavLeft(!openNavLeft)}
        >
          <MDBIcon fas icon="bars" />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openNavLeft}>
          <MDBNavbarNav className="me-auto mb-2 mb-lg-0">

            <MDBNavbarItem>
              <NavLink active aria-current="page" to={'/portfolio'}>
                Portfolio
              </NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <NavLink aria-current="page" to={'/about'}>
                About Us
              </NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <NavLink aria-current="page" to={'/contact'}>
                Contact
              </NavLink>
            </MDBNavbarItem>

          </MDBNavbarNav>
        </MDBCollapse>

      </MDBContainer>
    </MDBNavbar>
  );
}
