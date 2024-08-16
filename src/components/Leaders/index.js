import React from 'react'
import LeadersImg from '../LeadersImg';

function Leaders() {
return (
<>
<div className='container-fluid px-50 d-flex flex_column justify-content-between'>

    <div className='col-lg-4 px-2'>
        <h4 className=' text-md-center text-sm-center'>The <span className='d-block d-md-inline-block'>Leaders</span> </h4>
    </div>

    <div className='col-lg-8'>
        <LeadersImg/>
    </div>

</div>
</>
)
}

export default Leaders;