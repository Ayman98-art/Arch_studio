import React from 'react';
import heritage from '../../assets/about/image-heritage.jpg';
import { MDBCard, MDBCardImage } from 'mdb-react-ui-kit';

function AboutHeritageImg() {
return (
<>
<div>
    <MDBCard className="bg-image STDImgNone STDImg_card--widht STDImg_card--transtition">
        <MDBCardImage 
            src={heritage}
            loading="lazy" 
            className='STDImg' 
            alt='Our Heritage' 
            title='Our Heritage'/>
        <div className="mask "
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}></div>
        </MDBCard>
    </div>
</>
)
}

export default AboutHeritageImg;