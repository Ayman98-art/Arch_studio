import React from 'react';
import { MDBNavbarItem, MDBNavbarNav } from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';
import MDbtnCarsouel from '../MDbtnCarsouel';
import LogoImg from '../LogoImg';
import './footer.css';


function Footer() {
return (
<div className='Footer d-flex flex-row justify-content-center align-items-center'>

    <MDBNavbarNav className="bg-footer d-flex flex-lg-row justify-content-start align-items-lg-end">

    <MDBNavbarItem className='ItemLink'>
        <LogoImg />
    </MDBNavbarItem>

    <MDBNavbarItem className='ItemLink'>
        <NavLink active aria-current="page" to={'/portfolio'}>
            Portfolio
        </NavLink>
    </MDBNavbarItem>

    <MDBNavbarItem className='ItemLink'>
        <NavLink aria-current="page" to={'/about'}>
            About Us
        </NavLink>
    </MDBNavbarItem>

    <MDBNavbarItem className='ItemLink'>
        <NavLink aria-current="page" to={'/contact'}>
            Contact
        </NavLink>
    </MDBNavbarItem>

    </MDBNavbarNav>

    <div className='btnCarsouel'>
        <MDbtnCarsouel btnName={'See Our Portfolio'} />
    </div>
</div>
)
}

export default Footer;