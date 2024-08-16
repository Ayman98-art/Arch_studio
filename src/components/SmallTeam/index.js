import React from 'react';
import biglTeam from '../../assets/home/image-small-team.jpg';
import MDbtnCarsouel from '../MDbtnCarsouel';

function SmallTeam() {
return (
<>
    <div className='container'>

    <div className='bg-image'>
        <img src={biglTeam} className='STDImg' 
            alt='small team , big ideas' 
            title='small team , big ideas.'
        />

    <div className='mask' 
    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>

    <div className='d-flex pl-50 flex-column justify-content-center align-items-start h-100'>
        <p className='text-white text-font text-start ps-0'>
            Small team, <br />big ideas.
        </p>

        <MDbtnCarsouel btnName={'About US'} btnLink={'/about'} />
    </div>

    </div>

    </div>

    </div>
</>
)
}

export default SmallTeam;