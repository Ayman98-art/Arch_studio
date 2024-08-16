import React from 'react';

function MapContact() {
return (
<>
    <div className='container-fluid flex_direction px-50 py-75 d-flex align-items-baseline'>

        <div className='col-lg-6 col-md-12 col-sm-12'>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6633705.377610231!2d-80.68556945478417!3d35.72341589581491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s1892%20Chenoweth%20Drive%20TN!5e0!3m2!1sar!2ssa!4v1723149152991!5m2!1sar!2ssa" 
                width="480" 
                height="500"
                className='px-2'
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>

        <div className='col-lg-6 col-md-12 col-sm-12'>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3338.1322116628317!2d-97.00048457450808!3d33.21062996170238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c21333c3b9d81%3A0xd28049c692ddb47f!2sVineyard%20Wine%20Cellars!5e0!3m2!1sar!2ssa!4v1723149627943!5m2!1sar!2ssa" 
                width="585" 
                height="500"
                className='px-2'
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>

    </div>
</>
)
}

export default MapContact;