import React from 'react';
import Arch from '../../assets/logo.svg'; 
import { Link } from 'react-router-dom';

function LogoImg() {
return (
<>
    <div className="pe-5">
        <Link to={'/'}>
            <img src={Arch}/>
        </Link>
    </div>
</>
)
}

export default LogoImg;