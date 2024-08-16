import React from 'react'
import AboutHeritageText from '../AboutHeritageText';
import AboutHeritageImg from '../AboutHeritageImg';

function AboutHeritage() {
return (
<>
<div className='container-fluid py-75 px-75 d-flex flex_column justify-content-between align-items-center'>

    <div className='col-lg-6 col-md-12'>
        <AboutHeritageText />
    </div>

    <div className='col-lg-6 col-md-12'>
        <AboutHeritageImg />
    </div>

</div>
</>
)
}

export default AboutHeritage;