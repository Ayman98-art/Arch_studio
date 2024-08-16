import React from 'react';
import ContactOffice from '../ContactOffice';
import style from './ContactDetails.module.css';

function ContactDetails() {
return (
<>
<div className='container-fluid flex_directionConDet px-75 py-100 d-flex justify-content-center align-items-baseline'>

<div className='col-lg-4'>
    <div>
        <hr className={style.hrContact}/>
        <h3 className={style.h3Contact}>Contact
            <span className="dblockNone d-block py-2">Details</span>
        </h3>
    </div>
</div>

<div className='col-lg-4'>
    <ContactOffice 
        h5Office={'Main Office'} 
        mailToOffice={'archone@mail.com'}
        mailOffice={'archone@mail.com'}
        adressOffice={'1892 Chenoweth Drive TN'}
        phoneOfOffice={'123 - 456 - 3451'}
        phoneOffice={'123 - 456 - 3451'}
    />
</div>

<div className='col-lg-4 ml-40'>
    <ContactOffice
        h5Office={'Office II'} 
        mailToOffice={'archone@mail.com'}
        mailOffice={'archone@mail.com'}
        adressOffice={'3399 Wines Lane TX'}
        phoneOfOffice={'123 - 456 - 3451'}
        phoneOffice={'123 - 456 - 3451'}
    />
</div>

</div>
</>
)
}
export default ContactDetails;