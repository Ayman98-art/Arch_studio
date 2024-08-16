import React from 'react';
import hero from '../../assets/about/image-hero.jpg';
import AboutContactImg from '../AboutContactImg';
import AboutContactText from '../AboutContactText';

function AboutContact() {
return (
<div className='container-fluid px-50 d-flex flex_column justify-content-between align-items-center'>

    <div className='col-lg-6'>
        <AboutContactImg
        src={hero}
        alt={'Your team of professionals'}
        title={'Your team of professionals'}
        />
    </div>

    <div className='col-lg-6'>
        <AboutContactText 
        h1AboutContact={'About'}
        h2AboutContact={'Your team of professionals'}
        pAboutContact={`
                Our small team of world-class professionals will 
                work with you every step of the way. Strong 
                relationships are at the core of everything we do.
                This extends to the relationship our projects have 
                with their surroundings.
            `}
        />
    </div>

</div>
)
}

export default AboutContact;