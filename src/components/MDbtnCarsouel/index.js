import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import React from 'react'
import { Link } from 'react-router-dom';
import Style from './LogoImg.module.css';

function MDbtnCarsouel({btnName}) {
return (
<>
<MDBBtn className={Style.btnHero}>
    <div className='d-flex align-items-center'>
        <Link className={Style.linkbtnHero} to={'/portfolio'}>
            {btnName} 
        </Link>
        <MDBIcon className={Style.icon} 
        fas icon="long-arrow-alt-right" />
    </div>
</MDBBtn>
</>
)
}

export default MDbtnCarsouel;