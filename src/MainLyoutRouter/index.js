import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBarComponent from '../NavBarComponent';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';

function MainLyoutRouter() {
return (
    <>
    <NavBarComponent />
    <Outlet />
    <ScrollTop />
    <Footer />
    </>
)
}

export default MainLyoutRouter;