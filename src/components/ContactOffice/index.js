import React from "react";
import { Link } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";
import style from './ContactOffice.module.css';

function ContactOffice({
  h5Office,
  mailToOffice,
  mailOffice,
  adressOffice,
  phoneOfOffice,
  phoneOffice,
}) {
return(
<>
    <div> 
        <h5 className={style.h5Office}> {h5Office} </h5>
    </div>

    <div className={style.pAOffice} >
        <p> Mail: <Link to={`mailto:${mailToOffice}`}> {mailOffice} </Link> </p>
        <p> Address: {adressOffice} </p>
        <p> Phone: <Link to={`tel:${phoneOfOffice}`}> {phoneOffice} </Link> </p>
    </div>

    <div>
        <p className={style.ViewOffice}> 
            <Link to={'/contact'}>
                View on map 
            <MDBIcon fas icon="angle-double-down" />
            </Link>
        </p>
    </div>
</>
)     
}

export default ContactOffice;
