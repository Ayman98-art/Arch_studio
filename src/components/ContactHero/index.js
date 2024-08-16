import React from 'react';
import hero from '../../assets/contact/image-hero.jpg';
import AboutContactImg from '../AboutContactImg';
import AboutContactText from '../AboutContactText';


function ContactHero() {
return (
<>
<div className='container-fluid flex_column px-50 d-flex justify-content-between align-items-center'>

    <div className='col-lg-6'>
        <AboutContactImg
        src={hero}
        alt={'Tell us about your project'}
        title={'Tell us about your project'}
        />
    </div>

    <div className='col-lg-6'>
        <AboutContactText 
        h1AboutContact={'Contact'}
        h2AboutContact={'Tell us about your project'}
        pAboutContact={`
            We'd love to hear more about your project. Please, 
            leave a message below or give us a call. We have two 
            offices, one in Texas and one in Tennessee. If you find 
            yourself nearby, come say hello!`}/>
    </div>

</div>
</>
)
}

export default ContactHero;




