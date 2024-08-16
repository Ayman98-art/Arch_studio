import React from 'react'
import { MDBCard, MDBCardImage } from 'mdb-react-ui-kit';

function AboutContactImg({src , alt, title}) {
return (
<>
    <div className='px-3'>
    <MDBCard className="bg-image STDImgNone STDImg_card--transition">
        <MDBCardImage 
            src={src}
            loading="lazy" 
            className='STDImg_card' 
            alt={alt} 
            title={title}/>
        <div className="mask "
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}></div>
        </MDBCard>
    </div>
</>
)
}

export default AboutContactImg;