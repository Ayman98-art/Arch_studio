import React from 'react'
import MDbtnCarsouel from '../MDbtnCarsouel';
import Style from './HeadSection.module.css'

function HeadSection() {
return (
<div className='container py-75 d-flex justify-content-between align-items-center'>
    <div>
        <h4 className={Style.h4}>Featured</h4>
    </div>
    
    <div>
        <MDbtnCarsouel btnName={'See All'} btnLink={'/portfolio'}/>
    </div>
</div>
)
}

export default HeadSection;