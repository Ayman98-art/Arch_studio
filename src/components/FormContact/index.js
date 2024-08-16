import React from 'react';
import FormVaild from '../FormVaild';
import style from './FormContact.module.css';


function FormContact() {
return (
<>
<div className='container-fluid flex_direction px-75 d-flex align-items-lg-baseline'>

<div className='col-lg-4 col-md-12 col-sm-12'>
    <div>
        <h4 className={style.h4Contact}>Connect
            <span className="d-lg-block d-md-block dinline_block py-2 px_sm2">with us</span>
        </h4>
    </div>
</div>

<div className='col-lg-8 col-md-12 col-sm-12'>
    <FormVaild />
</div>

</div>
</>
)
}

export default FormContact;